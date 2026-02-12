"use client";

import { motion } from "framer-motion";
import {
  Users,
  Video,
  FileText,
  Edit,
  BarChart,
  BookOpen,
  CheckCircle,
  Zap,
  Play,
  Star,
  Target,
  Award,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { oswald } from "@/components/ui/fonts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const subscriptionPlans = [
  {
    name: "Daily Pass",
    price: "$9.99",
    duration: "24 hours",
    description: "Perfect for a focused session",
    features: [
      "24-hour full access",
      "Join live sessions",
      "Basic access",
      "Download course materials",
    ],
    popular: false,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Weekly Plan",
    price: "$24.99",
    duration: "7 days",
    description: "Best for short-term projects",
    features: [
      "7-day full access",
      "All live sessions",
      "Advanced learning tools",
      "Priority support",
      "Download all materials",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Monthly Plan",
    price: "$79.99",
    duration: "30 days",
    description: "Most popular choice",
    features: [
      "30-day full access",
      "Unlimited live sessions",
      "Full learning suite",
      "Priority 24/7 support",
      "Personal progress tracking",
      "Weekly feedback sessions",
    ],
    popular: false,
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Yearly Access",
    price: "$599.99",
    duration: "365 days",
    description: "Ultimate learning experience",
    features: [
      "365-day full access",
      "All premium features",
      "Dedicated tutor access",
      "Publication support",
      "Certificate of completion",
      "Portfolio review",
      "Lifetime updates",
    ],
    popular: false,
    color: "from-orange-500 to-red-500",
  },
];

const trainingCategories = [
  {
    title: "Academic Writing",
    description: "Master essays, proposals, and research papers",
    icon: <Edit className="w-8 h-8" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Research Methods",
    description: "Learn qualitative and quantitative research techniques",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Data Analysis",
    description: "SPSS, R, Python, and statistical analysis",
    icon: <BarChart className="w-8 h-8" />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Article Writing & Publication",
    description: "Journal articles and publication strategies",
    icon: <FileText className="w-8 h-8" />,
    color: "bg-orange-100 text-orange-600",
  },
];

const trustFeatures = [
  {
    title: "Live Tutoring",
    description: "Real-time guidance from expert instructors",
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: "Real-time Feedback",
    description: "Instant feedback on your work",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    title: "Interactive Learning",
    description: "Engaging tools and collaborative sessions",
    icon: <Edit className="w-6 h-6" />,
  },
  {
    title: "Expert Instructors",
    description: "PhD holders and industry professionals",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Structured Learning",
    description: "Step-by-step curriculum",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Certification",
    description: "Recognized certificates of completion",
    icon: <Award className="w-6 h-6" />,
  },
];

export default function TutorialsPage() {
  const [selectedPlan, setSelectedPlan] = useState("Weekly Plan");
  const router = useRouter();

  return (
    <main
      className={`${oswald.className} min-h-screen bg-white dark:bg-[#0A0C14] text-gray-900 dark:text-gray-100 transition-colors duration-500`}
    >
      {/* HERO SECTION — high‑contrast dark background with image */}
      <section className="relative bg-gradient-to-br from-[#0B1E33] to-[#13293D] text-white overflow-hidden h-screen">
        {/* Abstract glow (subtle) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#E8B85F]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E8B85F]/20 rounded-full blur-3xl" />
        </div>

        <div className="flex flex-col items-center lg:items-start justify-center relative px-8 sm:px-20 py-10 sm:py-28 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-14">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start justify-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-center lg:text-start">
                <span className="text-[#E8B85F]">Master Your Skills</span> with
                ScholarBrood
              </h1>
              <p className="text-md md:text-xl text-gray-200 max-w-xl mb-8 text-center lg:text-start">
                Join thousands of students and researchers who have transformed
                their academic journey with our expert-led tutorials and
                real-time collaboration tools.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/dashboard")}
                className="px-6 sm:px-8 py-4 rounded-full bg-[#E8B85F] text-gray-900 sm:text-lg text-md font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning Today
              </motion.button>
            </motion.div>

            {/* Right image — crisp, relevant, high contrast */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                  alt="Students collaborating on academic projects"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[#E8B85F]/10 mix-blend-overlay" />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
                <Zap className="w-5 h-5 text-[#E8B85F] mr-2" />
                <span className="font-semibold">5,000+ students</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION CARDS — clean white cards, high‑contrast text */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Learning Plan
            </h2>
            <div className="w-24 h-1 bg-[#E8B85F] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Flexible subscriptions that grow with your academic needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg hover:shadow-2xl transition-all ${
                  plan.popular
                    ? "border-2 border-[#E8B85F] ring-4 ring-[#E8B85F]/20"
                    : "border border-gray-200 dark:border-gray-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 rounded-full bg-[#E8B85F] text-gray-900 text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /{plan.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#E8B85F] mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/dashboard")}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? "bg-[#E8B85F] text-gray-900 hover:bg-[#E8B85F]/90 shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
            <p>All plans include access to our learning platform and basic resources</p>
            <p>Cancel anytime • No long-term commitment</p>
          </div>
        </div>
      </section>

      {/* TRAINING CATEGORIES — fresh, with icon backgrounds */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0A0C14]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Expert Training Categories
            </h2>
            <div className="w-24 h-1 bg-[#E8B85F] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized courses designed for academic and research excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
              >
                <div
                  className={`${category.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {category.description}
                </p>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center text-[#E8B85F] font-medium hover:gap-2 transition-all"
                >
                  Explore courses <Zap className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE VIDEO SECTION — keeps the high‑energy feel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Master Your Skills with ScholarBrood
            </h2>
            <div className="w-24 h-1 bg-[#E8B85F] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Giving students and researchers hyped-up skills to excellent
              academic work and resources for learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/OodL9HUjdcU"
                title="Master Your Skills with ScholarBrood"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Play className="w-6 h-6" />,
                title: "Learn Anytime",
                desc: "Access video tutorials 24/7 from anywhere",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Guidance",
                desc: "Learn from experienced academic professionals",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Practical Skills",
                desc: "Get real-world academic and research skills",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-[#E8B85F]/20 rounded-full flex items-center justify-center">
                  <div className="text-[#E8B85F]">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & VALUE — dark, high‑contrast section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B1E33] dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-[#E8B85F]">ScholarBrood?</span>
            </h2>
            <div className="w-24 h-1 bg-[#E8B85F] mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine academic excellence with cutting-edge technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E8B85F]/20 flex items-center justify-center mb-4">
                  <div className="text-[#E8B85F]">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* STATS — bright, high contrast */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E8B85F] mb-2">
                5,000+
              </div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E8B85F] mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E8B85F] mb-2">
                500+
              </div>
              <div className="text-gray-300">Live Sessions Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E8B85F] mb-2">
                50+
              </div>
              <div className="text-gray-300">Expert Instructors</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA — bold & contrasting */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#E8B85F] to-[#F9D56E] text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Academic Journey?
            </h2>
            <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
              Join thousands of successful students who have mastered their
              skills with ScholarBrood's expert guidance and interactive
              platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => router.push("/about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gray-900 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                <Star className="w-5 h-5 mr-2" />
                Subscribe Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  window.open("https://youtu.be/OodL9HUjdcU", "_blank")
                }
                className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 text-lg font-bold hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Video
              </motion.button>
            </div>
            <p className="text-sm text-gray-700 mt-6">
              Free 7-day trial available • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}