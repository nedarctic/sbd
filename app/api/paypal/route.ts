import { NextResponse } from "next/server";
import { getPayPalAccessToken } from "@/lib/paypal/paypal";

export async function GET() {
        try {
                const accessToken = await getPayPalAccessToken();
                console.log("PayPal access token obtained:", accessToken);
                return NextResponse.json({ accessToken });
        } catch (error) {
                console.error("Error in PayPal API route:", error);
                return NextResponse.json(
                        { error: "Failed to get PayPal access token" },
                        { status: 500 }
                );
        }
}