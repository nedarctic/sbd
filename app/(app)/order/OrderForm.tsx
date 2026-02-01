"use client";

import { useActionState, useEffect } from "react";
import { createOrderAction } from "@/actions/createOrderAction";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { ArrowRight, Paperclip, X } from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export const dynamic = "force-dynamic"

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const SERVICE_PRICING = {
    "Academic Writing Support": { amount: 10, unit: "page" },
    "Research Assistance (Projects, Thesis, Dissertations)": { amount: 12, unit: "page" },
    "Publication & Journal Support": { amount: 200, unit: "flat" },
    "Editing, Review & Proofreading": { amount: 10, unit: "flat" },
    "General Consultation": { amount: 0, unit: "service" },
} as const;

export default function OrderForm() {

    const [state, formAction, isPending] = useActionState(
        createOrderAction,
        {}
    );


    const searchParams = useSearchParams();
    const incomingService = searchParams.get("service") || "Custom Service";
    const isPreSelected = !!searchParams.get("service");

    const [selectedServiceType, setSelectedServiceType] = useState<string>(
        isPreSelected ? incomingService : "General Consultation"
    );
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [modalState, setModalState] = useState<"loading" | "success" | "error" | null>(null);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        if (isPending) {
            setModalState("loading");
            setModalMessage("Submitting your request...");
        }

        if (state?.success) {
            setModalState("success");
            setModalMessage("Your request has been submitted successfully!");
            setSelectedFiles([]);
            setTimeout(() => setModalState(null), 5000);
        }

        if (state?.error) {
            setModalState("error");
            setModalMessage(state.error);
            setTimeout(() => setModalState(null), 6000);
        }
    }, [state, isPending]);


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <motion.form
                action={formAction}
                className="w-full bg-white/10 backdrop-blur-xl mt-16 rounded-2xl p-8 sm:p-10 shadow-2xl"
            >
                {/* Service selection */}
                <div className="mb-8">
                    <label className={`${oswald.className} text-white block mb-3 text-lg font-semibold`}>
                        Service Type
                    </label>
                    {isPreSelected ? (
                        <>
                            <div className="w-full p-4 rounded-xl bg-gray-800/40 text-gray-300 border border-gray-500/50 cursor-not-allowed flex justify-between">
                                <span>{selectedServiceType}</span>
                            </div>

                            <input
                                type="hidden"
                                name="service"
                                value={selectedServiceType}
                            />
                        </>
                    ) : (
                        <select
                            name="service"
                            value={selectedServiceType}
                            onChange={(e) => setSelectedServiceType(e.target.value)}
                            className={`${oswald.className} text-white w-full p-4 rounded-xl bg-white/10 border border-white/30`}
                        >
                            {Object.keys(SERVICE_PRICING).map((s, i) => (
                                <option key={s} value={s} className="text-black">{s}</option>
                            ))}
                        </select>
                    )}
                </div>

                {/* Name & Email */}
                <div className="mb-6">
                    <label className={`${oswald.className} text-white block mb-2 font-semibold`}>Full Name</label>
                    <input name="name" type="text" required className="w-full p-4 rounded-xl bg-white/10 border border-white/30" />
                </div>
                <div className="mb-6">
                    <label className={`${oswald.className} text-white block mb-2 font-semibold`}>Email</label>
                    <input name="email" type="email" required className="w-full p-4 rounded-xl bg-white/10 border border-white/30" />
                </div>

                {/* Project details */}
                <div className="mb-8">
                    <label className={`${oswald.className} text-white block mb-2 font-semibold`}>Project Details</label>
                    <textarea name="details" rows={6} required className="w-full p-4 rounded-xl bg-white/10 border border-white/30" />
                </div>

                {/* File upload */}
                <div className="mb-8">
                    <label className={`${oswald.className} text-white block mb-2 font-semibold`}>Upload Documents</label>
                    <label className="flex items-center justify-center gap-3 w-full p-4 rounded-xl bg-white/10 border border-dashed border-white/40 cursor-pointer hover:bg-white/20 transition">
                        <Paperclip className="w-5 h-5 opacity-80" />
                        <span className={`${oswald.className} text-sm`}>
                            {selectedFiles.length === 0 ? "Upload documents" : "Add more files"}
                        </span>
                        <input
                            name="files"
                            type="file"
                            multiple
                            className="hidden"
                            onChange={(e) => {
                                if (!e.target.files) return;
                                const validFiles: File[] = [];
                                Array.from(e.target.files).forEach((file) => {
                                    if (file.size <= MAX_FILE_SIZE) validFiles.push(file);
                                });
                                setSelectedFiles((prev) => [...prev, ...validFiles]);
                            }}
                        />
                    </label>

                    {/* File list with remove button */}
                    {selectedFiles.length > 0 && (
                        <ul className="mt-3 space-y-2">
                            {selectedFiles.map((file, idx) => (
                                <li key={idx} className="flex justify-between items-center bg-white/10 p-2 rounded-xl">
                                    <span className="truncate">{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedFiles(prev => prev.filter((_, i) => i !== idx))}
                                        className="text-red-400 hover:text-red-600"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={modalState === "loading"}
                    className="w-full flex justify-center items-center gap-3 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg py-4 rounded-full hover:bg-[#d4a44e] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {modalState === "loading" ? "Submitting..." : "Submit Request"} <ArrowRight className="w-5 h-5" />
                </button>
            </motion.form>

            {/* Modal */}
            <AnimatePresence>
                {modalState && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-lg" onClick={() => setModalState(null)} />
                        <motion.div className="relative bg-white dark:bg-[#1C1C30] rounded-3xl shadow-2xl max-w-md w-full p-10 text-center border border-gray-200">
                            {modalState === "loading" && <div className="mx-auto w-16 h-16 border-4 border-[#E8B85F]/30 border-t-[#E8B85F] rounded-full animate-spin mb-6" />}
                            {modalState === "success" && <FaCheckCircle className="mx-auto w-16 h-16 text-green-500 mb-6" />}
                            {modalState === "error" && <FaExclamationCircle className="mx-auto w-16 h-16 text-red-500 mb-6" />}
                            <h3 className="text-2xl font-bold mb-3">
                                {modalState === "loading" ? "Processing..." : modalState === "success" ? "Success!" : "Error"}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{modalMessage}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}