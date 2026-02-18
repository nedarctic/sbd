import { createClient } from "@/lib/supabase/server";
import { InfoIcon, Shield, BookOpen, FileText, CheckCircle, ArrowRight, LogIn, CreditCard } from "lucide-react";
import { GetSubscription } from "@/lib/paypal/subscriptions";
import { oswald } from "@/components/ui/fonts";
import { getPayPalPlanName } from "@/lib/paypal/paypal";
import Link from "next/link";
import DashboardHeader from "./ui/header-dashboard";
import { isActiveSubscription } from "@/lib/paypal/subscriptions";

export const dynamic = "force-dynamic";

const supabase = async () => await createClient();

async function getUserAndSubscription() {
  const { data: { user } } = await (await supabase()).auth.getUser();

  if (!user) {
    return { user: null, subscription: null };
  }

  const subscription = await GetSubscription(user.id);
  // console.log("User ID in dashboard gate:", user.id);
  // console.log("Fetched subscription in dashboard gate:", subscription);
  return { user, subscription };
}

export default async function DashboardPage() {
  const { user, subscription } = await getUserAndSubscription();

  const hasActiveSubscription = user && isActiveSubscription(subscription?.next_billing_time!);
  console.log("Subscription:", subscription);
  console.log("Has active subscription?", hasActiveSubscription)

  // sample data for last payment:
  const last_payment = {
    amount: {
      currency_code: "USD",
      value: "9.99"
    },
    time: "2026-01-30T12:17:54Z"
  }

  // sample data for next billing time
  const next_billing_time = "2026-01-31T10:00:00+00:00"

  

  // ────────────────────────────────────────────────
  //  Not logged in → show sign-in prompt
  // ────────────────────────────────────────────────
  if (!user) {
    return (
      <main className={`${oswald.className} min-h-screen font-sans bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 flex items-center justify-center py-16 px-4`}>
        <DashboardHeader title="Dashboard Access" subtitle="Sign in to access your dashboard" />
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-br from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 border border-[#E8B85F]/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/20 flex items-center justify-center">
              <LogIn className="w-10 h-10 text-[#E8B85F]" />
            </div>

            <h1 className={`${oswald.className} text-3xl sm:text-4xl font-bold mb-4`}>
              Welcome to <span className="text-[#E8B85F]">ScholarBrood</span>
            </h1>

            <p className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto`}>
              Sign in to access your dashboard, manage your subscription, and unlock premium academic tools.
            </p>

            <Link
              href="/auth/login"
              className={`${oswald.className} inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-[#d4a347] transition-all duration-300`}
            >
              Sign In Now
              <ArrowRight className="w-6 h-6" />
            </Link>

            <p className={`${oswald.className} mt-6 text-gray-600 dark:text-gray-400 text-sm`}>
              Don’t have an account?{" "}
              <Link href="/auth/signup" className="text-[#E8B85F] hover:underline">
                Create one here
              </Link>
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ────────────────────────────────────────────────
  // Logged in → but no active subscription
  // ────────────────────────────────────────────────
  if (!hasActiveSubscription) {
    // console.log("User does not have an active subscription.", hasActiveSubscription);
    return (
      <main className={`${oswald.className} min-h-screen font-sans bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 flex items-center justify-center py-16 px-4`}>
        <div className="max-w-2xl w-full">
          <div className="bg-gradient-to-br from-[#E8B85F]/5 to-[#1C1C30]/10 dark:from-[#E8B85F]/3 dark:to-[#1C1C30]/20 border-2 border-[#E8B85F]/20 rounded-3xl p-8 sm:p-12 shadow-xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/10 flex items-center justify-center">
              <CreditCard className="w-10 h-10 text-[#E8B85F]" />
            </div>

            <h1 className={`${oswald.className} text-3xl sm:text-4xl font-bold mb-4`}>
              Premium Access Required
            </h1>

            <p className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto`}>
              You need an active subscription to view and use the dashboard features. Upgrade now to unlock full access.
            </p>

            <Link
              href="/subscriptions"
              className={`${oswald.className} inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-md sm:text-xl font-semibold shadow-xl hover:shadow-2xl hover:bg-[#d4a347] transition-all duration-300`}
            >
              View Subscription Plans
              <ArrowRight className="w-6 h-6" />
            </Link>

            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-4`}>
                Already subscribed but not seeing access?
              </p>
              <Link
                href="/dashboard/billing"
                className={`${oswald.className} text-[#E8B85F] hover:underline font-medium`}
              >
                Check your billing status →
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ────────────────────────────────────────────────
  // Has active subscription → show original dashboard
  // ────────────────────────────────────────────────
  const payPalPlanName = getPayPalPlanName(subscription?.plan_id || "");

  return (
    <main className={`${oswald.className} min-h-screen font-sans bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>
      {/* Dashboard Hero */}
      <section className={`${oswald.className} relative pt-10 pb-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center md:text-left`}>
              Welcome to Your <span className="text-[#E8B85F]">Dashboard</span>
            </h1>
            <p className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300 text-center md:text-left max-w-3xl mx-auto md:mx-0`}>
              Manage your subscription, access premium features, and track your academic projects
            </p>
          </div>

          {/* Protected Page Alert */}
          <div className={`${oswald.className} w-full mb-12`}>
            <div className="bg-gradient-to-r from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 border-l-4 border-[#E8B85F] p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E8B85F]/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#E8B85F]" />
              </div>
              <div>
                <h3 className={`${oswald.className} text-xl font-bold mb-2 flex items-center gap-2`}>
                  <InfoIcon size={20} className="text-[#E8B85F]" />
                  Protected Dashboard
                </h3>
                <p className={`${oswald.className} text-gray-700 dark:text-gray-300 text-sm sm:text-base`}>
                  This is a protected page that you can only see as an authenticated user with an active subscription.
                  Your data is secured with enterprise-grade encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Status */}
          <div className={`${oswald.className} mb-12`}>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/5 border-2 border-green-500/20 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{payPalPlanName} Plan Active</h3>
                    <p className={`${oswald.className} text-gray-700 dark:text-gray-300 text-sm sm:text-base`}>
                      You have full access to all ScholarBrood features
                    </p>
                  </div>
                </div>
                <div className={`${oswald.className} px-4 py-2 sm:px-6 sm:py-3 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full font-semibold text-sm sm:text-base`}>
                  Subscription Active
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions + Current Plan */}
          <div className={`${oswald.className} flex flex-col lg:flex-row gap-6`}>
            {/* Quick Actions */}
            <div className="flex-1 p-6 sm:p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link href="/services" className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#E8B85F]/5 to-transparent hover:from-[#E8B85F]/10 transition-all duration-300 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8B85F]/20 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-[#E8B85F]" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base">Browse Services</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#E8B85F] transition-colors" />
                </Link>
                {/* ... other quick action links remain the same ... */}
              </div>
            </div>

            {/* Current Plan Status */}
            <div className={`${oswald.className} flex-1 p-6 sm:p-8 bg-gradient-to-br from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 rounded-3xl border border-[#E8B85F]/20 shadow-xl`}>
              <h3 className="text-xl font-bold mb-4">Your Plan</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Plan Name</span>
                  <span className="font-bold text-[#E8B85F]">{payPalPlanName}</span>
                </div>
                <div className="flex justify-between items-center text-sm sm:text-base">
                  <span className="text-gray-600 dark:text-gray-400">Status</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">
                    Active
                  </span>
                </div>
                <Link
                  href="/dashboard/billing"
                  className={`${oswald.className} block w-full text-center py-3 bg-[#E8B85F] text-[#1C1C30] rounded-full font-semibold hover:shadow-xl transition-all duration-300 mt-4 sm:mt-6`}
                >
                  View Billing Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 rounded-3xl p-8 sm:p-12">
            <h2 className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6`}>
              Ready to Start Your Next <span className="text-[#E8B85F]">Academic Project?</span>
            </h2>
            <p className={`${oswald.className} text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto`}>
              Take advantage of your premium subscription with our expert academic support services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="/order"
                className={`${oswald.className} inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                Start New Order
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="/services"
                className={`${oswald.className} inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#E8B85F] text-[#E8B85F] rounded-full text-lg sm:text-xl font-semibold hover:bg-[#E8B85F] hover:text-[#1C1C30] transition-all duration-300`}
              >
                Browse All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
