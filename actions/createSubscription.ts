"use server"

import { storeSubscription } from "@/lib/db/storeSubscribtion";
import { createSubscription } from "@/lib/email/createSubscription";
import { revalidatePath } from "next/cache";

export type SubscriptionFormState = {
  success?: boolean;
  error?: string;
};

export async function createSubscriptionAction(
  _prevState: SubscriptionFormState,
  formData: FormData
): Promise<SubscriptionFormState> {
  const email = formData.get("email");

  if (typeof email !== "string" || !email.includes("@")) {
    return { error: "Invalid email address" };
  }

  try {
    await storeSubscription(email); // store in DB
    await createSubscription(email); // send confirmation email

    revalidatePath("/contact");

    return { success: true };
  } catch (error: any) {
    return { error: error.message ?? "Failed to subscribe." };
  }
}
