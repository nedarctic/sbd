import { StoredSubscription, Subscription, Usage } from "@/types/subscription";
import { SaleResource } from "@/types/paypal";
import type { SupabaseClient } from "@supabase/supabase-js";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic"

export function isActiveSubscription(sub: StoredSubscription | null) {
	if (!sub) return false;

	if (sub.status !== "ACTIVE") return false;

	if (sub.failed_payment_status === "failed") return false;

	if (sub.next_billing_time) {
		return new Date(sub.next_billing_time) > new Date();
	}

	return true;
}


export async function GetSubscription(
	userId: string
): Promise<StoredSubscription | null> {
	const supabase = await createClient();

	const { data, error } = await supabase
		.from("tutorial_subscriptions")
		.select("*")
		.eq("user_id", userId)
		.order("created_at", { ascending: false })
		.limit(1)
		.maybeSingle();

	if (error) {
		console.error("GetSubscription error:", error);
		return null;
	}
	console.log("User ID:", userId);
	console.log("GetSubscription data:", data);
	// data will be:
	// - StoredSubscription if found
	// - null if not found
	return data;
}


export async function StoreSubscription(
	supabase: SupabaseClient,
	subscription: StoredSubscription
) {
	const { data, error } = await supabase
		.from("tutorial_subscriptions")
		.upsert(subscription, { onConflict: "paypal_subscription_id" })
		.select()
		.single();

	if (error) {
		console.error("StoreSubscription error:", error);
		return null;
	}

	return data;
}

export async function StartTrialSubscription(userId: string, trialDays = 7) {
	// Implementation for starting a trial subscription
}

export async function UpdateSubscription(subscription: Subscription): Promise<Subscription | null> {
	const supabase = await createClient();
	const { data, error } = await supabase
		.from("tutorial_subscriptions")
		.update(subscription)
		.eq("paypal_subscription_id", subscription.paypal_subscription_id)
		.select()
		.single();

	if (error) {
		console.error("UpdateSubscription error:", error);
		return null;
	}

	return data;
}

export async function UpdateSubscriptionStatus(subscription: Subscription): Promise<Subscription | null> {
	const supabase = await createClient();
	const { data, error } = await supabase
		.from("tutorial_subscriptions")
		.update({ status: subscription.status, updated_at: new Date().toISOString() })
		.eq("paypal_subscription_id", subscription.paypal_subscription_id)
		.select()
		.single();

	if (error) {
		console.error("UpdateSubscriptionStatus error:", error);
		return null;
	}

	return data;
}

// Use your SQL function RPC for safe cycle update
export async function UpdateSubscriptionCycle(payment: SaleResource): Promise<Subscription | null> {
	const paypalSubscriptionId = payment.billing_agreement_id;
	const paymentAmount = parseFloat(payment.transaction_fee.value); // from transaction_fee.value
	const paymentTime = payment.create_time; // or payment.update_time depending on your logic
	const supabase = await createClient();
	const { data, error } = await supabase.rpc("update_subscription_cycle", {
		paypal_subscription_id_param: paypalSubscriptionId,
		payment_amount: paymentAmount,
		payment_time: paymentTime,
	});

	if (error) {
		console.error("UpdateSubscriptionCycle error:", error);
		return null;
	}

	return data as Subscription;
}

export async function UpdateFailedPaymentStatus(paypalSubscriptionId: string): Promise<Subscription | null> {
	const supabase = await createClient();
	const { data, error } = await supabase
		.from("tutorial_subscriptions")
		.update({ failed_payment_status: "failed", updated_at: new Date().toISOString() })
		.eq("paypal_subscription_id", paypalSubscriptionId)
		.select()
		.single();

	if (error) {
		console.error("UpdateFailedPaymentStatus error:", error);
		return null;
	}

	return data;
}

// Usage tracking functions
export async function CreateUsage(userId: string): Promise<Usage | null> {
	// TODO: Implement usage creation
	console.log("CreateUsage called for user:", userId);
	return null; // Replace with actual implementation
}

export async function GetUserUsage(userId: string): Promise<Usage | null> {
	// TODO: Implement usage retrieval
	console.log("GetUserUsage called for user:", userId);
	return null; // Replace with actual implementation
}

export async function UpdateUser_ThreadCount(userId: string, threads_count: number): Promise<Usage | null> {
	// TODO: Implement thread count update
	console.log("UpdateUser_ThreadCount called for user:", userId, "count:", threads_count);
	return null; // Replace with actual implementation
}

export async function UpdateUser_PremiumEdits(userId: string, premium_edits: number): Promise<Usage | null> {
	// TODO: Implement premium edits update
	console.log("UpdateUser_PremiumEdits called for user:", userId, "edits:", premium_edits);
	return null; // Replace with actual implementation
}

export async function GetOrCreateUserUsage(userId: string): Promise<Usage | null> {
	// TODO: Implement get or create usage
	console.log("GetOrCreateUserUsage called for user:", userId);
	return null; // Replace with actual implementation
}

export async function IncrementUserThreadCount(userId: string, increment = 1): Promise<Usage | null> {
	// TODO: Implement thread count increment
	console.log("IncrementUserThreadCount called for user:", userId, "increment:", increment);
	return null; // Replace with actual implementation
}

export async function IncrementUserPremiumEdits(userId: string, increment = 1): Promise<Usage | null> {
	// TODO: Implement premium edits increment
	console.log("IncrementUserPremiumEdits called for user:", userId, "increment:", increment);
	return null; // Replace with actual implementation
}

export async function ResetPeriodUsage(userId: string, periodStart: string): Promise<Usage | null> {
	// TODO: Implement usage reset
	console.log("ResetPeriodUsage called for user:", userId, "period:", periodStart);
	return null; // Replace with actual implementation
}