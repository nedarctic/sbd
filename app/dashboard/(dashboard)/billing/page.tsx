import { GetSubscription } from '@/lib/paypal/subscriptions'
import type { StoredSubscription } from '@/types/subscription'
import { getPayPalPlanName } from '@/lib/paypal/paypal'
import { createClient } from '@/lib/supabase/server'
import { Suspense } from 'react'
import { oswald } from '@/components/ui/fonts'
import {
  LogIn,
  CreditCard,
  ArrowRight,
  Calendar,
  DollarSign,
  User,
  Clock,
  CheckCircle,
} from 'lucide-react'
import Link from 'next/link'
import DashboardHeader from '../ui/header-dashboard'
import { isActiveSubscription } from '@/lib/paypal/subscriptions'

export const dynamic = "force-dynamic"

async function getUserAndSubscription() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { user: null, subscription: null }
  }

  const subscription: StoredSubscription | null = await GetSubscription(user.id)

  // subscription status
  const hasActiveSubscription = isActiveSubscription(subscription?.next_billing_time!);

  return { user, subscription, hasActiveSubscription }
}

function formatDate(date?: string) {
  if (!date) return '—'
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function StatusBadge({ status }: { status: string }) {
  const normalized = status.toLowerCase()
  const styles =
    normalized === 'active'
      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      : normalized === 'cancelled'
        ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
        : normalized === 'failed'
          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
          : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'

  return (
    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${styles}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

async function BillingContent() {
  const { user, subscription, hasActiveSubscription } = await getUserAndSubscription()

  // Not logged in
  if (!user) {
    return (
      <div className="flex flex-col justify-center items-start ">
        <DashboardHeader title="Billing & Subscription" subtitle="Log in to manage your plan and payment details" />

        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1C1C30] px-4 py-16">

          <div className="max-w-lg w-full bg-gradient-to-br from-[#E8B85F]/10 to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 border border-[#E8B85F]/30 rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/20 flex items-center justify-center">
              <LogIn className="w-10 h-10 text-[#E8B85F]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5">
              Sign in to view billing
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              You need to be logged in to manage your subscription and see billing details.
            </p>
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              Sign In
              <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-[#E8B85F] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Logged in but no subscription
  if (!hasActiveSubscription) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#1C1C30] px-4 py-16">
        <DashboardHeader title="Billing & Subscription" subtitle="Subscribe to manage your plan and payment details" />
        <div className="max-w-lg w-full bg-gradient-to-br from-[#E8B85F]/8 to-[#1C1C30]/12 border-2 border-[#E8B85F]/25 rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#E8B85F]/15 flex items-center justify-center">
            <CreditCard className="w-10 h-10 text-[#E8B85F]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5">
            No Active Subscription
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Subscribe to unlock premium features and manage your billing here.
          </p>
          <Link
            href="/subscriptions"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            View Plans & Subscribe
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-gray-600 dark:text-gray-400">
            Questions?{' '}
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
              target="_blank"
              className="text-[#E8B85F] hover:underline"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>
    )
  }

  // Has active subscription → show real content
  const planName = getPayPalPlanName(subscription?.plan_id!)

  return (
    <main className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 px-6 py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Billing & Subscription
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
            Manage your plan, billing status, and payment details
          </p>
        </header>

        {/* Main Card */}
        <section className="rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl p-8 sm:p-10 md:p-12 bg-white dark:bg-[#1C1C30]/80">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{planName}</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
                Subscription ID: {subscription?.paypal_subscription_id!}
              </p>
            </div>
            <StatusBadge status={subscription?.status!} />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/40 dark:bg-[#1C1C30]/50">
              <p className="text-sm text-gray-500 dark:text-gray-400">Start Date</p>
              <p className="text-lg font-semibold mt-1">{formatDate(subscription?.start_time)}</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/40 dark:bg-[#1C1C30]/50">
              <p className="text-sm text-gray-500 dark:text-gray-400">Next Billing Date</p>
              <p className="text-lg font-semibold mt-1">{formatDate(subscription?.next_billing_time)}</p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/40 dark:bg-[#1C1C30]/50">
              <p className="text-sm text-gray-500 dark:text-gray-400">Last Payment</p>
              <p className="text-lg font-semibold mt-1">
                {subscription?.last_payment
                  ? `${subscription?.last_payment.amount.value} ${subscription?.last_payment.amount.currency_code}`
                  : '—'}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/40 dark:bg-[#1C1C30]/50">
              <p className="text-sm text-gray-500 dark:text-gray-400">Subscriber</p>
              <p className="text-lg font-semibold mt-1">
                {subscription?.subscriber_name
                  ? `${subscription?.subscriber_name.given_name} ${subscription?.subscriber_name.surname}`
                  : user.email || '—'}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
            {subscription?.links?.map(
              (link, id) =>
                link.rel === 'approve' && (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#E8B85F] text-[#1C1C30] font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
                  >
                    Manage in PayPal
                  </a>
                )
            )}

            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#E8B85F] text-[#E8B85F] font-semibold rounded-full hover:bg-[#E8B85F] hover:text-[#1C1C30] transition"
            >
              Contact Billing Support
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default function BillingPage() {
  return (
    <Suspense
      fallback={
        <div
          className={`${oswald.className} min-h-screen flex items-center justify-center bg-white dark:bg-[#1C1C30] text-xl md:text-2xl`}
        >
          Loading billing information...
        </div>
      }
    >
      <BillingContent />
    </Suspense>
  )
}