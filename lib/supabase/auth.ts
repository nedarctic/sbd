import { createClient } from "@/lib/supabase/server";
import { cache } from "react";

export type UserSession = {
  user: { id: string; email?: string } | null;
  isAuthenticated: boolean;
};

/**
 * Cached helper to get current user (server-only)
 */
export const getCurrentUser = cache(async (): Promise<UserSession> => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, isAuthenticated: false };
  }

  return {
    user: {
      id: user.id,
      email: user.email ?? undefined,
    },
    isAuthenticated: true,
  };
});

/**
 * Variant that throws redirect if not logged in
 */
export async function requireUser(): Promise<UserSession["user"]> {
  const { user, isAuthenticated } = await getCurrentUser();

  if (!isAuthenticated || !user) {
    // redirect("/auth/login");   ← you can still use this where needed
    throw new Error("Not authenticated"); // or redirect
  }

  return user;
}