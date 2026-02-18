'use client';

export const dynamic = "force-dynamic";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle as FaCheckCircle, XCircle as FaExclamationCircle, X } from "lucide-react";
import { oswald } from "@/components/ui/fonts";
import { createSubscriptionAction } from "@/actions/createSubscription";
import { useActionState } from "react";
import {
    createContactAction,
    type ContactFormState,
} from "@/actions/createContact";
import Link from 'next/link'

const initialState: ContactFormState = {};

export default function ContactPage() {
    const contactFormRef = useRef<HTMLFormElement>(null);
    const subscriptionFormRef = useRef<HTMLFormElement>(null);
    const [isModalOpen, setModalState] = useState<boolean>(false);

    type ActiveAction = "contact" | "subscription" | null;

    const [activeAction, setActiveAction] = useState<ActiveAction>(null);

    const [state, contactFormAction, isPending] = useActionState(
        createContactAction,
        initialState
    );

    const [subscriptionState, subscriptionFormAction, isSubscriptionPending] = useActionState(
        createSubscriptionAction,
        initialState
    );

    const modalState =
        isPending || isSubscriptionPending
            ? "loading"
            : activeAction === "contact" && state.success
                ? "success"
                : activeAction === "subscription" && subscriptionState.success
                    ? "success"
                    : activeAction === "contact" && state.error
                        ? "error"
                        : activeAction === "subscription" && subscriptionState.error
                            ? "error"
                            : null;


    const modalMessage =
        isPending
            ? "Sending your message..."
            : isSubscriptionPending
                ? "Subscribing you to our newsletter..."
                : activeAction === "contact" && state.success
                    ? "Your message has been sent successfully! We'll get back to you soon."
                    : activeAction === "subscription" && subscriptionState.success
                        ? "Subscription successful!"
                        : activeAction === "contact" && state.error
                            ? state.error
                            : activeAction === "subscription" && subscriptionState.error
                                ? subscriptionState.error
                                : "";


    useEffect(() => {
        if (state.success && activeAction === "contact") {
            contactFormRef.current?.reset();
            setModalState(true);
        }

        if (subscriptionState.success && activeAction === "subscription") {
            subscriptionFormRef.current?.reset();
            setModalState(true);
        }
    }, [state.success, subscriptionState.success, activeAction]);


    return (
        <>
            <section className="relative min-h-screen bg-gray-50 dark:bg-[#1C1C30] pt-40 pb-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h1 className={`${oswald.className} text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6`}>
                            Contact Us
                        </h1>
                        <p className={`${oswald.className} text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto`}>
                            Get in touch with ScholarBrood. We're here to answer your questions and help with your academic needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information & Map */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className={`${oswald.className} text-3xl font-bold text-gray-900 dark:text-white`}>
                                    Get in Touch
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-[#E8B85F]" />
                                        <Link
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
                                            target="_blank"
                                            className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300 hover:text-[#E8B85F] transition`}
                                        >
                                            info@scholarbrood.com
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-[#E8B85F]" />
                                        <span className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300`}>
                                            +1 (843) 699-6020
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="w-6 h-6 text-[#E8B85F]" />
                                        <span className={`${oswald.className} text-lg text-gray-700 dark:text-gray-300`}>
                                            Myrtle Beach, SC 29572, USA
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Pinned Map */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52988.10949910392!2d-78.917686!3d33.735928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89003a10c6f47d3d%3A0x7a2d7b2d2d7b2d7b!2sMyrtle%20Beach%2C%20SC%2029572!5e0!3m2!1sen!2sus!4v1700000000000"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="ScholarBrood Location - Myrtle Beach, SC 29572"
                                ></iframe>
                            </motion.div>
                        </div>

                        {/* Contact Form + Newsletter */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className={`${oswald.className} text-3xl font-bold text-gray-900 dark:text-white mb-8`}>
                                    Send Us a Message
                                </h2>
                                <form onSubmit={() => setActiveAction("contact")} ref={contactFormRef} action={contactFormAction} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className={`${oswald.className} block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className={`${oswald.className} w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2A2A44] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E8B85F] focus:border-transparent transition`}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className={`${oswald.className} block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className={`${oswald.className} w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2A2A44] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E8B85F] focus:border-transparent transition`}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className={`${oswald.className} block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className={`${oswald.className} w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2A2A44] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E8B85F] focus:border-transparent transition`}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className={`${oswald.className} block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2`}>
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            required
                                            className={`${oswald.className} w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2A2A44] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E8B85F] focus:border-transparent transition resize-none`}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={`${oswald.className} w-full py-5 px-8 bg-[#E8B85F] hover:bg-[#d4a44e] text-black font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3`}
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            </motion.div>

                            {/* Newsletter Subscription */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-br from-[#E8B85F]/10 to-[#d4a44e]/10 dark:from-[#E8B85F]/20 dark:to-[#d4a44e]/20 rounded-2xl p-8 border border-[#E8B85F]/30"
                            >
                                <h3 className={`${oswald.className} text-2xl font-bold text-gray-900 dark:text-white mb-4`}>
                                    Stay Updated
                                </h3>
                                <p className={`${oswald.className} text-gray-600 dark:text-gray-400 mb-6`}>
                                    Subscribe to our newsletter for academic writing tips, service updates, and exclusive offers.
                                </p>
                                <form onSubmit={() => setActiveAction("subscription")} ref={subscriptionFormRef} action={subscriptionFormAction} className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className={`${oswald.className} flex-1 px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2A2A44] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#E8B85F]`}
                                    />
                                    <button
                                        type="submit"
                                        className={`${oswald.className} px-8 py-4 bg-[#E8B85F] hover:bg-[#d4a44e] text-black font-semibold rounded-xl shadow-lg transition-all duration-300`}
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shared Modal */}
            <AnimatePresence>
                {isModalOpen && modalState && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    >
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" onClick={() => setModalState(false)} />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: -20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative bg-gradient-to-br from-white to-gray-50 dark:from-[#1C1C30] dark:to-[#2A2A44] rounded-3xl shadow-2xl max-w-md w-full p-10 text-center border border-gray-200 dark:border-gray-800"
                        >
                            <button
                                onClick={() => {
                                    setModalState(false);
                                    setActiveAction(null);
                                }}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {modalState === "loading" && (
                                <div className="mx-auto w-16 h-16 border-4 border-[#E8B85F]/30 border-t-[#E8B85F] rounded-full animate-spin mb-6" />
                            )}
                            {modalState === "success" && (
                                <FaCheckCircle className="mx-auto w-16 h-16 text-green-500 mb-6" />
                            )}
                            {modalState === "error" && (
                                <FaExclamationCircle className="mx-auto w-16 h-16 text-red-500 mb-6" />
                            )}

                            <h3 className={`${oswald.className} text-2xl font-bold text-gray-800 dark:text-white mb-3`}>
                                {modalState === "loading" ? "Processing..." : modalState === "success" ? "Success!" : "Error"}
                            </h3>
                            <p className={`${oswald.className} text-gray-600 dark:text-gray-400 leading-relaxed`}>
                                {modalMessage}
                            </p>

                            <div className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-[#E8B85F] to-[#d4a44e] rounded-full" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}