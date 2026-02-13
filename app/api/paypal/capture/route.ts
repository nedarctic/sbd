import { NextResponse } from "next/server";
import { getPayPalAccessToken } from "@/lib/paypal/paypal";
import { PAYPAL_SERVER_CONFIG } from "@/config/paypal.server";

export async function POST(req: Request) {

  try {
    const { orderID } = await req.json();

    if (!orderID) {
      return NextResponse.json({ error: "Missing orderID" }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();

    const PAYPAL_API_BASE = PAYPAL_SERVER_CONFIG.paypal_base;

    const res = await fetch(
      `${PAYPAL_API_BASE}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("PayPal capture error:", err);
      return NextResponse.json({ error: "Failed to capture order" }, { status: 500 });
    }

    const data = await res.json();
    // console.log("PayPal capture success:", data);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error capturing PayPal order:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
