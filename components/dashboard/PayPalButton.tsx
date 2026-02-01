'use client';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';

type Props = {
    amount: number;
    onSuccess: (orderId: string) => void;
};

const PayPalButton = ({ amount, onSuccess }: Props) => {
    const [error, setError] = useState<string | null>(null);

    const createOrder = (data: any, actions: any) => {
        console.log("Creating order for:", amount); // DEBUG
        return actions.order.create({
            purchase_units: [
                {
                    amount: { value: amount, currency_code: "USD" },
                    description: "Your Item Description Here",
                },
            ],
        });
    };

    const onApprove = async (data: any) => {
        try {
            const orderID = data.orderID;

            const res = await fetch("/api/paypal/capture", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderID }),
            });
            console.log("Capture response:", await res.json());
            if (!res.ok) throw new Error("Capture failed");

            onSuccess(orderID);
        } catch (err) {
            console.error(err);
            setError("Payment failed. Please try again.");
        }
    };

    return (
        <PayPalScriptProvider
            options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX! }}
        >
            <div className="mt-6">
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={() => setError("PayPal error occurred")}
                />
                {error && <p className="text-red-400 mt-2">{error}</p>}
            </div>
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
