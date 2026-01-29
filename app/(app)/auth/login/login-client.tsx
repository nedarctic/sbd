"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Loader2, Zap, Brain, Sparkles } from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export default function LoginClient({loginForm}: {loginForm: React.ReactNode}) {
  
  return (
    <main
      className={`${oswald.className} w-full py-10 sm:py-20 bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 min-h-screen overflow-hidden`}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-r from-[#E8B85F]/90 to-[#E8B85F] rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-40 w-96 h-96 bg-gradient-to-r from-[#E8B85F]/90 to-yellow-400 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -80, 0], y: [0, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen pt-20 px-6 sm:px-10 md:px-16">
        {/* ── Left – Form Section ── */}
        <div className="flex-1 flex items-center justify-center lg:px-8">
          {loginForm}
        </div>

        {/* ── Right – Visual Panel (Desktop Only) ── */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-[#E8B85F]/10 to-[#E8B85F]/20 dark:from-gray-800 dark:to-gray-900 p-16 rounded-2xl relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-lg relative"
          >
            <motion.div
              whileHover={{ y: -10, rotateZ: -2 }}
              className="absolute -top-8 -left-8 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-20"
            >
              <Zap className="w-8 h-8 text-yellow-500 mb-3" />
              <h3 className="text-lg font-bold mb-2">Learn Quickly</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Concise tutorials with practical exercises
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, rotateZ: 2 }}
              className="absolute top-20 left-32 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10"
            >
              <Brain className="w-8 h-8 text-[#E8B85F] mb-3" />
              <h3 className="text-lg font-bold mb-2">Expert Techniques</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proven strategies for professional writing
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="relative w-72 p-8 bg-gradient-to-br from-[#E8B85F]/90 to-[#E8B85F] rounded-3xl shadow-2xl text-white mt-32"
            >
              <Sparkles className="w-10 h-10 mb-4" />
              <h2 className="text-2xl font-bold mb-3">Welcome Back!</h2>
              <p className="opacity-90">
                Continue your journey to master professional writing with expert-led tutorials.
              </p>

              <div className="mt-6 flex -space-x-2">
                {["/student1.jpeg", "/student2.jpeg", "/student3.jpeg"].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Learner ${i + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold border-2 border-white">
                  +2.1k
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}