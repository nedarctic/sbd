"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { oswald } from "@/components/ui/fonts";

export default function SignUpPageClient({signUpForm}: {signUpForm: React.ReactNode}) {

  return (
    <main
      className={`${oswald.className} min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:to-gray-900 relative overflow-hidden`}
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 -left-40 w-96 h-96 bg-[#E8B85F]/30 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#E8B85F]/30 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
        />
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-screen px-6 lg:px-16 pt-40 pb-20">
        {/* LEFT — FORM */}
        <div className="flex-1 flex items-center justify-center">
          {signUpForm}
        </div>

        {/* RIGHT — VISUAL PANEL */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-[#E8B85F]/10 to-[#E8B85F]/20 dark:from-gray-800 dark:to-gray-900 p-16 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-lg relative"
          >
            {/* Floating info cards */}
            <motion.div
              whileHover={{ y: -10, rotateZ: -2 }}
              className="absolute -top-8 -left-8 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-20"
            >
              <Mail className="w-8 h-8 text-[#E8B85F] mb-3" />
              <h3 className="text-lg font-bold mb-2">Verified Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get instant access to premium tutorials
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, rotateZ: 2 }}
              className="absolute top-20 left-32 w-64 p-6 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-10"
            >
              <User className="w-8 h-8 text-[#E8B85F] mb-3" />
              <h3 className="text-lg font-bold mb-2">Personal Progress</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Track your academic growth journey
              </p>
            </motion.div>

            {/* Main welcome card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="relative w-72 p-8 bg-gradient-to-br from-[#E8B85F]/90 to-[#E8B85F] rounded-3xl shadow-2xl text-white mt-32"
            >
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Join ScholarBrood!</h2>
              <p className="opacity-90">
                Unlock expert tutorials, practical exercises, and grow your academic excellence today.
              </p>

              {/* Students avatars – you can replace with real images */}
              <div className="mt-6 flex -space-x-2">
                {["/student1.jpeg", "/student2.jpeg", "/student3.jpeg"].map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Student ${i + 1}`}
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