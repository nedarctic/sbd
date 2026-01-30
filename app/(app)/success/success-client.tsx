"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Mail, Calendar, User, CreditCard } from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export const dynamic = "force-dynamic"

interface SubscriptionDetails {
    id: string;
    status: string;
    planId: string;
    planName: string;
    create_time: string;
    subscriber: {
        email_address: string;
        name: {
            given_name: string;
            surname: string;
        };
    };
    billing_info: {
        next_billing_time: string;
        failedPayments: number;
        cycle_executions: [{
            tenure_type: string;
            sequence: number;
            cycles_completed: number;
        }];
        failed_payments_count: number;
    };
}

export default function SuccessClient({ subscriptionDetails }: { subscriptionDetails: SubscriptionDetails }) {
    const [subscription, setSubscription] = useState<SubscriptionDetails | null>(null);

    useEffect(() => {
        setSubscription(subscriptionDetails);
    }, [subscriptionDetails]);

    return (
        <main
            className={`${oswald.className} min-h-screen overflow-x-hidden font-sans
        bg-white dark:bg-[#1C1C30]
        text-gray-900 dark:text-gray-100
        transition-colors duration-500`}
        >
            {/* HERO SECTION */}
            <section className="relative pt-[110px] pb-[55px] min-h-screen flex items-center justify-center px-5 sm:px-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8B85F]/10 via-transparent to-[#1C1C30]/10 dark:from-[#E8B85F]/5 dark:to-[#1C1C30]/20 z-0" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl w-full text-center px-4"
                >
                    {/* Success Icon */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                    >
                        <CheckCircle className="w-16 h-16 text-white" strokeWidth={1.5} />
                    </motion.div>

                    <h1 className={`${oswald.className} text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight`}>
                        Welcome to <span className="text-[#E8B85F]">ScholarBrood Pro</span>
                    </h1>

                    <p className={`${oswald.className} text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto`}>
                        Your subscription to the <span className="font-bold text-[#E8B85F]">{subscription?.planName || "Premium"}</span> plan has been successfully activated!
                    </p>

                    {/* Success Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white dark:bg-[#1C1C30]/80 backdrop-blur-sm rounded-3xl border-2 border-green-500/20 p-8 mb-12 shadow-2xl"
                    >
                        <h3 className={`${oswald.className} text-2xl font-bold text-green-600 dark:text-green-400 mb-4`}>
                            🎉 Subscription Activated Successfully!
                        </h3>
                        <p className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300`}>
                            You now have access to all premium features. Check your email for confirmation and next steps.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* SUBSCRIPTION DETAILS */}
            <section className="py-20 px-5 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`${oswald.className} text-3xl sm:text-4xl font-bold text-center mb-12`}>
                        Your <span className="text-[#E8B85F]">Subscription</span> Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Subscription Info Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ translateY: -8, scale: 1.02 }}
                            className="p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#E8B85F]/10 flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-[#E8B85F]" />
                                </div>
                                <h3 className={`${oswald.className} text-2xl font-bold`}>Subscription Info</h3>
                            </div>

                            {subscription && (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <span className={`${oswald.className} text-gray-600 dark:text-gray-400`}>Status</span>
                                        <span className={`${oswald.className} px-4 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold capitalize`}>
                                            {subscription.status}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <span className={`${oswald.className} text-gray-600 dark:text-gray-400`}>Plan</span>
                                        <span className={`${oswald.className} font-bold text-[#E8B85F]`}>{subscription.planName}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className={`${oswald.className} text-gray-600 dark:text-gray-400`}>Started</span>
                                        <span className={`${oswald.className} font-semibold`}>
                                            {new Date(subscription.create_time).toLocaleDateString('en-US', {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            )}
                        </motion.article>

                        {/* User Info Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ translateY: -8, scale: 1.02 }}
                            className="p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-[#E8B85F]/10 flex items-center justify-center">
                                    <User className="w-6 h-6 text-[#E8B85F]" />
                                </div>
                                <h3 className={`${oswald.className} text-2xl font-bold`}>Account Details</h3>
                            </div>

                            {subscription && (
                                <div className="space-y-4">
                                    <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-1`}>Name</p>
                                        <p className={`${oswald.className} text-lg font-semibold`}>
                                            {subscription.subscriber.name.given_name} {subscription.subscriber.name.surname}
                                        </p>
                                    </div>
                                    <div>
                                        <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-1`}>Email</p>
                                        <p className={`${oswald.className} text-lg font-semibold break-all`}>
                                            {subscription.subscriber.email_address}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.article>

                        {/* Billing Info Card */}
                        {subscription && (
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ translateY: -8, scale: 1.02 }}
                                className="md:col-span-2 p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-[#E8B85F]/10 flex items-center justify-center">
                                        <Calendar className="w-6 h-6 text-[#E8B85F]" />
                                    </div>
                                    <h3 className={`${oswald.className} text-2xl font-bold`}>Billing Information</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-gradient-to-br from-[#E8B85F]/5 to-transparent rounded-2xl border border-[#E8B85F]/20">
                                        <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-2`}>Next Billing Date</p>
                                        <p className={`${oswald.className} text-2xl font-bold text-[#E8B85F]`}>
                                            {new Date(subscription.billing_info.next_billing_time).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>

                                    <div className="p-6 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl border border-emerald-500/20">
                                        <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-2`}>Cycles Completed</p>
                                        <p className={`${oswald.className} text-2xl font-bold text-emerald-600 dark:text-emerald-400`}>
                                            {subscription.billing_info.cycle_executions[0].cycles_completed}
                                        </p>
                                    </div>

                                    <div className="p-6 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl border border-red-500/20">
                                        <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-2`}>Failed Payments</p>
                                        <p className={`${oswald.className} text-2xl font-bold text-red-600 dark:text-red-400`}>
                                            {subscription.billing_info.failed_payments_count}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 px-5 sm:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${oswald.className} text-3xl sm:text-4xl font-bold mb-8`}>
                        What's <span className="text-[#E8B85F]">Next?</span>
                    </h2>

                    <p className={`${oswald.className} text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto`}>
                        Your premium account is now active! You can access all features immediately.
                        Need help getting started or have questions about your subscription?
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            href="/dashboard"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`${oswald.className} inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto`}
                        >
                            Go to Dashboard
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                            href="mailto:support@scholarbrood.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`${oswald.className} inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#E8B85F] text-[#E8B85F] rounded-full font-semibold hover:bg-[#E8B85F] hover:text-[#1C1C30] transition-all duration-300 w-full sm:w-auto`}
                        >
                            <Mail className="w-5 h-5" />
                            Contact Support
                        </motion.a>

                        <motion.a
                            href="/services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`${oswald.className} inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto`}
                        >
                            Explore Services
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>

                    <p className={`${oswald.className} mt-12 text-gray-600 dark:text-gray-400`}>
                        Having issues? Reach out to our support team at{" "}
                        <a href="mailto:support@scholarbrood.com" className="text-[#E8B85F] hover:underline">
                            support@scholarbrood.com
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}