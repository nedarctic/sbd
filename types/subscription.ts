export type Subscription = {
	id?: string;
	user_id?: string;
	paypal_subscription_id?: string;
	plan_id?: string;
	status?: string;
	payer_email?: string;
	billing_cycle_count?: number;
	trial?: boolean;
	trial_end_date?: string;
	start_time?: string;
	next_billing_time?: string;
	failed_payment_status?: 'active' | 'failed';
	raw?: string;
	created_at?: string;
	updated_at?: string;
};

export type Usage = {
	id?: string;
	user_id: string;
	period_start: string;
	threads_count?: number;
	premium_edits_count?: number;
	created_at?: string;
	updated_at?: string;
};

export type StoredSubscription = {
  user_id: string;
  paypal_subscription_id: string;
  plan_id: string;
  status: string;
  start_time?: string;
  next_billing_time?: string;
  status_update_time?: string;
  quantity?: number;
  payer_email?: string;
  subscriber_name?: { given_name: string; surname: string };
  tenant?: string;
  billing_cycle_count?: number;
  last_payment?: { amount: { currency_code: string; value: string }; time: string };
  final_payment_time?: string;
  failed_payment_status?: "active" | "failed";
  trial?: boolean;
  trial_end_date?: string | null;
  shipping_amount?: { currency_code: string; value: string };
  plan_overridden?: boolean;
  links?: { href: string; rel: string; method: string }[];
  raw?: any;
  created_at?: string;
  updated_at?: string;
};