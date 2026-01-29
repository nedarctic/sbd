'use client';

import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useState } from 'react';

const PayPalButton = ({amount}: {amount: number}) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createOrder = (data: any, actions: any) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount,
                        currency_code: 'USD',
                    },
                    description: 'Your Item Description Here',
                },
            ],
        });
    };

    const onApprove = async (data: any, actions: any) => {
        try {
            const orderID = data.orderID;

            const res = await fetch("/dashboard/api/paypal/capture", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ orderID }),
            });

            if(!res || res === null || typeof res === undefined) {
                console.log("No data got captured");
            }

            console.log("Payment captured:", res);
            setSuccess(true);
            // Optional: show more info like "Transaction ID: " + result.captureID
            // Redirect, show download link, etc.

        } catch (err: any) {
            setError("Payment capture failed. Please contact support.");
            console.error(err);
        }
    };

    const onError = (err: any) => {
        setError('An error occurred. Please try again.');
        console.error(err);
    };

    return (
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX! }}>
            <div>
                {success ? (
                    <div>
                        <p>Payment successful! Thank you for your purchase.</p>
                    </div>
                ) : (
                    <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                        style={{ layout: 'horizontal', shape: "rect", disableMaxWidth: true, borderRadius: 4 }}
                    />
                )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </PayPalScriptProvider>
    );
};

export default PayPalButton;