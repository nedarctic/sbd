'use client';

import Link from "next/link";
import { redirect } from "next/navigation";
import PayPalProvider from "@/components/PayPalProvider";
import SubscriptionButton from "@/components/SubscriptionButton";
import { SUBSCRIPTION_PLANS } from "@/config/paypal.client";
import { ArrowRight, LogIn } from "lucide-react";
import { oswald } from "@/components/ui/fonts";
import type { User } from "@supabase/supabase-js";
import type { StoredSubscription } from "@/types/subscription";

export const dynamic = "force-dynamic"

export default function SubscriptionsPage({userDetails, subscriptionDetails, isActiveSubscription}: {userDetails: User | null; subscriptionDetails: StoredSubscription | null; isActiveSubscription: boolean} ) {
  const user = userDetails;

  // ui to return if user is not found
  if (!user) {
    return (
      <div className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] flex items-center justify-center px-4 py-16`}>
        <div className="max-w-lg w-full bg-gradient-to-br from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 border border-[#E8B85F]/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/20 flex items-center justify-center">
            <LogIn className="w-10 h-10 text-[#E8B85F]" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Sign in to subscribe
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            You need to be logged in to choose and activate a subscription plan.
          </p>

          <Link
            href="/auth/login"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Sign In
            <ArrowRight className="w-6 h-6" />
          </Link>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            New here?{" "}
            <Link href="/auth/signup" className="text-[#E8B85F] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // get the user id since they are logged in at this point
  // console.log("User ID in subscription page:", user.id);

  // get the subscription details of the user
  // const subscription = subscriptionDetails;

  // log the subscription details
  // console.log("subscription details at subscription page:", subscription);

  // redirect the user to the dashboard if they are subscribed already
  const isSubscribed = isActiveSubscription;
  
  if (isSubscribed) {
    // console.log("User has an active subscription. Redirecting to dashboard.");
    redirect("/dashboard");
  }

  return (
    <PayPalProvider>
      <main className="min-h-screen bg-white px-6 py-40 text-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Choose Your Subscription
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock full access to all courses. Pick a plan that works best for you —
              upgrade or cancel anytime.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SUBSCRIPTION_PLANS.map((plan) => {
              const isBestValue = plan.interval === "YEAR";

              return (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl border p-6 z-0 shadow-sm transition
                    ${isBestValue
                      ? "border-border shadow-lg scale-[1.02]"
                      : "border-border"
                    }`}
                >
                  {/* Badge */}
                  {isBestValue && (
                    <span className="border-black border-2 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                      Best Value
                    </span>
                  )}

                  {/* Plan name */}
                  <h2 className="text-xl font-semibold mb-2">
                    {plan.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      /{plan.interval.toLowerCase()}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <SubscriptionButton plan={plan} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </PayPalProvider>
  );
}
