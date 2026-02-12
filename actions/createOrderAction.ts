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
    // --- Extract raw values ---
    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const details = formData.get("details"); // optional
    const pagesRaw = formData.get("pages");
    const paypalOrderId = formData.get("paypalOrderId");
    const files = formData.getAll("files") as File[];

    // --- Basic validation ---
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string"
    ) {
      return { error: "Invalid form submission." };
    }

    // --- Validate service ---
    type ServiceKey = keyof typeof SERVICE_PRICING;
    if (!(service in SERVICE_PRICING)) {
      return { error: "Unknown service selected." };
    }

    const pricing = SERVICE_PRICING[service as ServiceKey];

    // --- Parse pages safely ---
    let pages = 0;

    if (typeof pagesRaw === "string" && pagesRaw.trim() !== "") {
      pages = Number(pagesRaw);
      if (Number.isNaN(pages) || pages < 0) {
        return { error: "Invalid number of pages." };
      }
    }

    // --- Calculate expected amount ---
    let expectedAmount = 0;

    if (pricing.unit === "flat") {
      expectedAmount = pricing.amount;
    } else if (pricing.unit === "page") {
      if (pages <= 0) {
        return { error: "Pages must be greater than 0." };
      }
      expectedAmount = pricing.amount * pages;
    } else {
      // General consultation
      expectedAmount = 0;
    }

    // --- If payment required, verify PayPal ---
    if (expectedAmount > 0) {
      if (typeof paypalOrderId !== "string") {
        return { error: "Payment is required." };
      }

      const order = await verifyPaypalOrder(paypalOrderId);
      if (!order) {
        return { error: "Payment could not be verified." };
      }

      if (
        Number(order.amount) !== expectedAmount ||
        order.currency !== "USD"
      ) {
        return { error: "Payment amount mismatch." };
      }
    }

    // --- Send email ---
    await sendOrderEmail({
      name,
      email,
      service,
      details: typeof details === "string" ? details : "",
      pages,
      files: files ?? [],
      paypalOrderId: typeof paypalOrderId === "string" ? paypalOrderId : undefined,
    });

    revalidatePath("/order");

    return { success: true };
  } catch (err) {
    console.error("Order submission failed:", err);
    return { error: "Failed to submit order. Please try again." };
  }
}