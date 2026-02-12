import { createAdminClient } from "@/lib/supabase/admin";

export async function storeSubscription(email: string) {
  const supabase = createAdminClient();

  const { error } = await supabase
    .from("subscriptions")
    .insert([{ email }]);

  if (error) {
  // 23505 = unique_violation
  if (error.code === "23505") {
    // Already subscribed → silently succeed
    return;
  }
  throw new Error(error.message);
  }
}
