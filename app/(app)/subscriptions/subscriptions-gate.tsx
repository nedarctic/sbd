import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { GetSubscription, isActiveSubscription } from "@/lib/paypal/subscriptions";
import PayPalProvider from "@/components/PayPalProvider";
import SubscriptionButton from "@/components/SubscriptionButton";
import { SUBSCRIPTION_PLANS } from "@/config/paypal";

export const dynamic = "force-dynamic"

export default async function SubscriptionsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    console.log("No user found, redirecting to login");
    redirect("/auth/login");
  }

  console.log("User ID in subscription page:", user.id);

  const subscription = await GetSubscription(user.id);

  if (isActiveSubscription(subscription)) {
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
                    ${
                      isBestValue
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
