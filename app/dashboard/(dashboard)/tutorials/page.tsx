import { oswald } from "@/components/ui/fonts";
import { createClient } from "@/lib/supabase/server";
import { GetSubscription } from "@/lib/paypal/subscriptions";
import { isActiveSubscription } from "@/lib/paypal/subscriptions";
import Link from "next/link";
import { LogIn, CreditCard, ArrowRight } from "lucide-react";
import DashboardHeader from "../ui/header-dashboard";
import type { StoredSubscription } from '@/types/subscription'

export const dynamic = "force-dynamic"

async function getUserAndSubscriptionStatus() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { user: null, subscription: null }
  }

  const subscription: StoredSubscription | null = await GetSubscription(user.id)

  // subscription status
  const hasActiveSubscription = isActiveSubscription(subscription?.next_billing_time!);

  return { user, hasActiveSubscription }
}

export default async function TutorialsPage() {
  const { user, hasActiveSubscription } = await getUserAndSubscriptionStatus();

  return (
    <div
      className={`
        ${oswald.className}
        min-h-screen flex items-center justify-center
        bg-white dark:bg-[#1C1C30]
        text-gray-900 dark:text-gray-100
        px-4 py-16
      `}
    >
      <div className="max-w-lg w-full text-center">
        {/* Not logged in */}
        {!user && (
          <div className="flex flex-col justify-center items-center ">
            <DashboardHeader title="Tutorials Access" subtitle="Sign in to access Tutorials" />

            <div className="bg-gradient-to-br from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 border border-[#E8B85F]/30 rounded-3xl p-8 sm:p-12 shadow-2xl">

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/20 flex items-center justify-center">
                <LogIn className="w-10 h-10 text-[#E8B85F]" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Sign in to access Tutorials
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Our tutorials and learning resources are available to logged-in users.
              </p>
              <Link
                href="/auth/login"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-[#d4a347] transition-all duration-300"
              >
                Sign In
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm">
                New here?{" "}
                <Link href="/auth/signup" className="text-[#E8B85F] hover:underline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* Logged in, but no active subscription */}
        {user && !hasActiveSubscription && (
          <div className="flex flex-col justify-center items-center ">
            <DashboardHeader title="Tutorials Access" subtitle="Subscribe to access tutorials and learning materials" />

            <div className="bg-gradient-to-br from-[#E8B85F]/8 to-[#1C1C30]/12 dark:from-[#E8B85F]/4 dark:to-[#1C1C30]/18 border-2 border-[#E8B85F]/25 rounded-3xl p-8 sm:p-12 shadow-2xl">

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/15 flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-[#E8B85F]" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Premium Access Required
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Tutorials and learning materials are part of your premium subscription features.
              </p>
              <Link
                href="/subscriptions"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-[#d4a347] transition-all duration-300"
              >
                View Subscription Plans
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="mt-8 text-gray-600 dark:text-gray-400">
                Already subscribed?{" "}
                <Link href="/dashboard/billing" className="text-[#E8B85F] hover:underline">
                  Check your plan →
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* Logged in + has active subscription → show current placeholder */}
        {user && hasActiveSubscription && (
          <div className="flex flex-col justify-center items-center ">
            <DashboardHeader title="Tutorials Access" subtitle="Premium tutorials and learning materials" />

            <div className="text-center">
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">
                Coming Soon.
              </p>
              <p className="text-base sm:text-lg max-w-md mx-auto opacity-80">
                We're preparing high-quality tutorials to help you get the most out of ScholarBrood.
                <br />
                Stay tuned — launching soon!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}