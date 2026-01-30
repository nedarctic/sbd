import { createClient } from "@/lib/supabase/server";
import SuccessClient from "./success-client";
import { getPayPalPlanName } from "@/lib/paypal/paypal";

async function fetchSubscriptionDetails(subscriptionId: string, accessToken: string) {
    const API_BASE = process.env.PAYPAL_MODE === "live" ? process.env.PAYPAL_API_BASE_LIVE : process.env.PAYPAL_API_BASE_SANDBOX;

    const response = await fetch(
        `${API_BASE}/v1/billing/subscriptions/${subscriptionId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
            `Failed to fetch subscription details: ${errorData.error_description || response.statusText}`
        );
    }

    return response.json();
}

export default async function SuccessPage({
    searchParams,
}: {
    searchParams: Promise<{ subscriptionId?: string }>;
}) {
    const { subscriptionId } = await searchParams;

    if (!subscriptionId) {
        return <div>No subscription ID provided.</div>;
    }

    try {
        const supabase = await createClient();

        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            return <div>User not authenticated.</div>;
        }
        // const origin = process.env.PROD_URL || "http://localhost:3000";

        const origin = process.env.NODE_ENV === "production" ? process.env.PROD_URL : "http://localhost:3000";

        const accessToken = fetch(`${origin}/api/paypal`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        const accessTokenResponse = await accessToken;
        const accessTokenData = await accessTokenResponse.json();
        if (!accessTokenResponse.ok) {
            console.log("Error response data:", accessTokenData);
            throw new Error(accessTokenData.error);
        }

        const accessTokenValue = accessTokenData.accessToken;

        const subscriptionDetails = await fetchSubscriptionDetails(
            subscriptionId,
            accessTokenValue
        );
        console.log("Fetched subscription details:", subscriptionDetails);
        const planName = getPayPalPlanName(subscriptionDetails.plan_id);
        console.log("Plan Name:", planName);
        console.log("Cycle info:", subscriptionDetails.billing_info.cycle_executions[0].cycles_completed);

        return (
            <div>
                <SuccessClient subscriptionDetails={{...subscriptionDetails, planName}} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching subscription details:", error);
        console.error("An error occurred while fetching subscription details:", error);
        return <div>Error fetching subscription details.</div>;
    }
}