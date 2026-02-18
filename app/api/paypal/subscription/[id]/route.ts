import { NextRequest, NextResponse } from "next/server";
import { getPayPalAccessToken } from "@/lib/paypal/paypal";
import { createClient } from "@/lib/supabase/server";
import { StoredSubscription } from "@/types/subscription";
import { checkifUserExisted, StoreSubscription, UpdateSubscription } from "@/lib/paypal/subscriptions";
import { getPayPalPlanName } from "@/lib/paypal/paypal";
import { PAYPAL_SERVER_CONFIG } from "@/config/paypal.server";

export async function GET(
        request: NextRequest,
        { params }: { params: Promise<{ id: string }> }
) {
        try {
                const subscriptionId = (await params).id;

                const accessToken = await getPayPalAccessToken();
                // console.log("access token in subscription route:", accessToken);

                const response = await fetch(
                        `${PAYPAL_SERVER_CONFIG.paypal_base}/v1/billing/subscriptions/${subscriptionId}`,
                        {
                                method: "GET",
                                headers: {
                                        "Content-Type": "application/json",
                                        Authorization: `Bearer ${accessToken}`,
                                },
                        }
                );

                const data = await response.json();
                // console.log("Subscription details response:", data);

                if (!response.ok) {
                        return NextResponse.json(
                                {
                                        error: "Failed to fetch subscription details",
                                        details: data,
                                },
                                { status: response.status }
                        );
                }

                const supabase = await createClient();

                const {
                        data: { user },
                        error: authError,
                } = await supabase.auth.getUser();

                if (authError || !user) {
                        return NextResponse.json(
                                { error: "Unauthorized" },
                                { status: 401 }
                        );
                }

                const mapped: StoredSubscription = {
                        user_id: user.id,
                        paypal_subscription_id: data.id,
                        plan_id: data.plan_id,
                        status: data.status,
                        start_time: data.start_time,
                        next_billing_time: data.billing_info?.next_billing_time,
                        status_update_time: data.status_update_time,
                        quantity: parseInt(data.quantity) || 1,
                        payer_email: data.subscriber?.email_address,
                        subscriber_name: data.subscriber?.name,
                        tenant: data.subscriber?.tenant,
                        billing_cycle_count: data.billing_info?.cycle_executions?.[0]?.cycles_completed,
                        last_payment: data.billing_info?.last_payment,
                        final_payment_time: data.billing_info?.final_payment_time,
                        failed_payment_status: data.billing_info?.failed_payments_count ? "failed" : "active",
                        trial: false,
                        trial_end_date: null,
                        shipping_amount: data.shipping_amount,
                        plan_overridden: data.plan_overridden,
                        links: data.links,
                        raw: data,
                };

                // check if user had subscription before
                const hadSubscriptionBefore = await checkifUserExisted(mapped.user_id);
                // console.log("Did the user have a subscription before?", hadSubscriptionBefore);

                if (!hadSubscriptionBefore) {
                        // Store subscription in Supabase
                        const newSub = await StoreSubscription(supabase, mapped);
                        // console.log("created new subscription", newSub);

                } else {
                        // update existing subscription in supabase
                        const updatedSub = await UpdateSubscription(mapped);
                        // console.log("Updated existing subscription", updatedSub)
                }




                const planName = getPayPalPlanName(data.plan_id);

                // Return a simplified payload to the client
                const subscriptionDetails = {
                        id: data.id,
                        status: data.status,
                        planId: data.plan_id,
                        planName: planName,
                        startTime: data.start_time,
                        quantity: data.quantity,
                        subscriber: data.subscriber,
                        billingInfo: {
                                outstandingBalance: data.billing_info?.outstanding_balance,
                                nextBillingTime: data.billing_info?.next_billing_time,
                                failedPayments: data.billing_info?.failed_payments_count,
                                lastPayment: data.billing_info?.last_payment,
                                cyclesCompleted: data.billing_info?.cycle_executions?.[0]?.cycles_completed,
                        },
                        shippingAddress: data.shipping_address,
                        createTime: data.create_time,
                        updateTime: data.update_time,
                };
                // console.log("Returning subscription details:", subscriptionDetails);
                return NextResponse.json(subscriptionDetails);
        } catch (error) {
                console.error("Error fetching subscription details:", error);
                return NextResponse.json(
                        { error: "Failed to fetch subscription details" },
                        { status: 500 }
                );
        }
}