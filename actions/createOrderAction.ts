"use server";

import { revalidatePath } from "next/cache";
import { sendOrderEmail } from "@/lib/email/createOrder";
import { SERVICE_PRICING } from "@/lib/pricing";
import { verifyPaypalOrder } from "@/lib/paypal/verifyPaypalOrder";

export type OrderFormState = {
  success?: boolean;
  error?: string;
};

export async function createOrderAction(
  _prev: OrderFormState,
  formData: FormData
): Promise<OrderFormState> {
  try {
    // --- Extract form fields ---
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const details = formData.get("details");
    const files = formData.getAll("files") as File[];
    const paypalOrderId = formData.get("paypalOrderId");

    // --- Validate inputs ---
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof details !== "string" ||
      typeof paypalOrderId !== "string"
    ) {
      return { error: "Invalid form submission." };
    }

    // --- Check service exists in pricing table ---
    type ServiceKey = keyof typeof SERVICE_PRICING;
    if (!(service in SERVICE_PRICING)) {
      return { error: "Unknown service selected." };
    }
    const pricing = SERVICE_PRICING[service as ServiceKey];

    // --- Verify PayPal payment ---
    const order = await verifyPaypalOrder(paypalOrderId);
    if (!order) {
      return { error: "Payment could not be verified." };
    }

    // --- Price & currency validation ---
    if (order.amount !== pricing.amount || order.currency !== "USD") {
      return { error: "Payment amount mismatch." };
    }

    // --- Payment is valid, send email ---
    await sendOrderEmail({
      name,
      email,
      service,
      details,
      files,
      paypalOrderId, // include order id in email
    });

    // --- Revalidate cache if needed ---
    revalidatePath("/order");

    return { success: true };
  } catch (err) {
    console.error("Order submission failed:", err);
    return { error: "Failed to submit order. Please try again." };
  }
}
