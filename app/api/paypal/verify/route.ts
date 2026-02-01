import { NextResponse } from "next/server";
import { verifyPaypalOrder } from "@/lib/paypal/verifyPaypalOrder"; 

export async function POST(req: Request) {
  try {
    const { orderId } = await req.json();

    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json({ error: "Invalid orderId" }, { status: 400 });
    }

    const order = await verifyPaypalOrder(orderId);

    if (!order || order.status !== "COMPLETED") {
      return NextResponse.json({ valid: false });
    }

    return NextResponse.json({
      valid: true,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error("PayPal verification failed:", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
