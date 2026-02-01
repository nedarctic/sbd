"use server";

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
        throw new Error("Invalid email address");
    }

    try {
        await createSubscription(email);
        revalidatePath("/contact");

        return { success: true };
    } catch (error) {
        return { error: "Failed to subscribe. Please try again." };
    }
}