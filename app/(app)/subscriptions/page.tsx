import { Suspense } from "react";
import SubscriptionsGate from "./subscriptions-gate";
import SubscriptionsFallback from "./subscriptions-fallback";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { GetSubscription } from "@/lib/paypal/subscriptions";
import type { StoredSubscription } from "@/types/subscription";
import { isActiveSubscription } from "@/lib/paypal/subscriptions";

import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic"

async function UserClaims() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    console.log('User not logged in');
    redirect("/auth/login");
  }

  return JSON.stringify(data.claims, null, 2);
}

export async function UserDetails(): Promise<User | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

async function getSubscriptionDetails(): Promise<StoredSubscription | null> {
  const user = await UserDetails();
  let subscriptions: StoredSubscription | null;

  if (!user) {
    console.log('no user was found');
    return null;
  } else {
    subscriptions = await GetSubscription(user.id);
    return subscriptions;
  }
}

async function getSubscriptionStatus(): Promise<boolean>{
  const subscription = await getSubscriptionDetails();
  if(isActiveSubscription(subscription)){
    return true;
  } else {
    return false;
  }
}

export default async function Page() {
  const subscriptions = await getSubscriptionDetails();
  const user = await UserDetails();
  const isActiveSubscription = await getSubscriptionStatus();

  return (
    <Suspense fallback={<SubscriptionsFallback />}>
      <SubscriptionsGate userDetails={user} subscriptionDetails={subscriptions} isActiveSubscription={isActiveSubscription} />
    </Suspense>
  );
}
