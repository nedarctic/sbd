import { getPayPalAccessToken } from "./paypal";
import { PAYPAL_SERVER_CONFIG } from "@/config/paypal.server";

const PAYPAL_API_BASE = PAYPAL_SERVER_CONFIG.paypal_base;

type VerifiedOrder = {
  id: string;
  status: string;
  amount: number;
  currency: string;
};

export async function verifyPaypalOrder(
  orderId: string
): Promise<VerifiedOrder | null> {
  const accessToken = await getPayPalAccessToken();

  const res = await fetch(
    `${PAYPAL_API_BASE}/v2/checkout/orders/${orderId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("PayPal order lookup failed:", await res.text());
    return null;
  }

  const data = await res.json();

  if (data.status !== "COMPLETED") {
    return null;
  }

  const unit = data.purchase_units?.[0];
  const amount = unit?.amount?.value;
  const currency = unit?.amount?.currency_code;

  if (!amount || !currency) {
    return null;
  }

  return {
    id: data.id,
    status: data.status,
    amount: Number(amount),
    currency,
  };
}
