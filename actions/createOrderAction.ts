"use server";

import { revalidatePath } from "next/cache";
import { sendOrderEmail } from "@/lib/email/createOrder";

export type OrderFormState = {
  success?: boolean;
  error?: string;
};

export async function createOrderAction(
  _prevState: OrderFormState,
  formData: FormData
): Promise<OrderFormState> {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const details = formData.get("details");
    const files = formData.getAll("files") as File[];

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof details !== "string"
    ) {
      return { error: "Invalid form data" };
    }

    await sendOrderEmail({
      name,
      email,
      service,
      details,
      files,
    });

    revalidatePath("/order");

    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: "Failed to submit order. Please try again." };
  }
}
