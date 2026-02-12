import { createClient } from "@/lib/supabase/server";
import SuccessClient from "./success-client";
import { getPayPalPlanName } from "@/lib/paypal/paypal";
import { UpdateSubscription } from "@/lib/paypal/subscriptions";
import type { StoredSubscription } from "@/types/subscription";
import { GetSubscription, StoreSubscription } from "@/lib/paypal/subscriptions";
import { getPayPalAccessToken } from "@/lib/paypal/paypal"; 

export const dynamic = "force-dynamic";

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

    // console.log("Successfully fetched subscription details.", response);

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

        const accessToken = await getPayPalAccessToken();
        // console.log("access token in success page:", accessToken);

        const subscriptionDetails = await fetchSubscriptionDetails(
            subscriptionId,
            accessToken
        );

        // map details to StoredSubscription type for database storage and update
        const mapped: StoredSubscription = {
            user_id: user.id,
            paypal_subscription_id: subscriptionDetails.id,
            plan_id: subscriptionDetails.plan_id,
            status: subscriptionDetails.status,
            start_time: subscriptionDetails.start_time,
            next_billing_time: subscriptionDetails.billing_info?.next_billing_time,
            status_update_time: subscriptionDetails.status_update_time,
            quantity: parseInt(subscriptionDetails.quantity) || 1,
            payer_email: subscriptionDetails.subscriber?.email_address,
            subscriber_name: subscriptionDetails.subscriber?.name,
            tenant: subscriptionDetails.subscriber?.tenant,
            billing_cycle_count: subscriptionDetails.billing_info?.cycle_executions?.[0]?.cycles_completed,
            last_payment: subscriptionDetails.billing_info?.last_payment,
            final_payment_time: subscriptionDetails.billing_info?.final_payment_time,
            failed_payment_status: subscriptionDetails.billing_info?.failed_payments_count ? "failed" : "active",
            trial: false,
            trial_end_date: null,
            shipping_amount: subscriptionDetails.shipping_amount,
            plan_overridden: subscriptionDetails.plan_overridden,
            links: subscriptionDetails.links,
            raw: subscriptionDetails,
        };

        // console.log("Mapped subscription details for storage:", mapped);

        // console.log("Fetched subscription details:", subscriptionDetails);
        const planName = getPayPalPlanName(subscriptionDetails.plan_id);
        // console.log("Plan Name:", planName);
        // console.log("Cycle info:", subscriptionDetails.billing_info.cycle_executions[0].cycles_completed);

        // check whether user had an existing subscription
        const userId = user.id;
        const subscription: StoredSubscription | null = await GetSubscription(userId);
        // console.log("Existing subscription in success page:", subscription);

        // update subscription in database if it exists, else store new subscription
        if (subscription) {
            // console.log("A subscription existed with this user. Updating it now.");
            const updatedSubscription = await UpdateSubscription(mapped);
            // console.log("Successfully updated subscription in database:", updatedSubscription);
        } else {
            const storeSubscription = await StoreSubscription(supabase, mapped);
            // console.log("Successfully stored new subscription in database:", storeSubscription);
        }
        return (
            <div>
                <SuccessClient subscriptionDetails={{ ...subscriptionDetails, planName }} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching subscription details:", error);
        console.error("An error occurred while fetching subscription details:", error);
        return <div>Error fetching subscription details.</div>;
    }
}