'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Target, BookOpen, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export default function AboutClient() {
  return (
    <main className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>

      {/* Hero */}
      <section className="h-screen w-full">
      <div className="relative h-full flex items-center justify-center px-5 sm:px-8 overflow-hidden">
        <img
          src="/Professional Academic Team.jpg"
          alt="Professional Academic Team"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center max-w-5xl mx-auto text-white flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            About <span className="text-[#E8B85F]">Us</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-8 px-4 max-w-4xl">
            ScholarBrood is a dedicated team of experienced academics, researchers, and writing professionals committed to helping students, scholars, and researchers excel.
          </p>
          <Link
            // to be changed back to contact
            href="/contact"
            className="px-8 py-4 bg-[#E8B85F] text-[#1C1C30] font-bold text-lg rounded-full hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
      </section>

      {/* Who We Are */}
      <section className="space-y-20 py-20 flex flex-col text-center justify-center items-center min-h-screen sm:min-h-[600px] sm:max-h-[2000px] sm:py-24 px-6 lg:px-12 bg-gray-50 dark:bg-[#24243a]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Who <span className="text-[#E8B85F]">We Are</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              ScholarBrood is a dedicated team of experienced academics, researchers, and writing professionals committed to helping students, scholars, and researchers excel. We understand the challenges of academic writing, research, and publication — and we offer expert support to help you overcome them confidently.
            </p>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-screen relative h-[300px] sm:min-h-[600px] sm:max-h-[800px] flex items-center justify-center px-5 sm:px-8 overflow-hidden">
          <img
            src="/academic-writing.png"
            alt="Academic excellence"
            className="absolute w-11/12 sm:h-full object-contain sm:object-cover rounded-xl m-auto z-0"
          />
        </div>

        {/* Our Mission */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E8B85F]">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Our mission is simple: to empower learners, graduate students, and researchers worldwide by providing top-quality academic writing, research assistance, and publication support.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We strive to deliver original, well-structured, and publication-ready work that meets rigorous academic standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Services List */}
      <section className="py-8 sm:py-32 px-6 lg:px-12 bg-gray-50 dark:bg-[#24243a]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              What <span className="text-[#E8B85F]">We Do</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              At ScholarBrood, we guide you through every step of your academic journey.
            </p>
          </motion.div>

          {/* Services Grid - Equal Height Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Academic Writing & Essay Support — for coursework, assignments, reports, and essays.",
              "Thesis & Dissertation Assistance — from proposal to final submission.",
              "Editing & Proofreading — refining clarity, style, grammar, and academic tone.",
              "Research Proposal & Project Support — helping you build robust research designs and writing complete proposals.",
              "Data Analysis & Statistical Support — clean data, run analyses, interpret results, and format findings professionally.",
              "Publication Processing & Journal Submission Support — preparing manuscripts, selecting credible journals, formatting to guidelines, submitting, and handling peer-review responses.",
              "CV, SOP & Academic Documents — crafting statements, personal essays, and academic CVs to support applications, scholarships, or further studies."
            ].map((service, i) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group flex h-full min-h-[140px] items-start gap-5 rounded-2xl bg-white dark:bg-white/5 p-7 shadow-md border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-9 h-9 text-[#E8B85F] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Text - Flex grow to fill height */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed flex-1">
                  {service}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Closing Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-16 text-center text-xl sm:text-2xl italic text-gray-600 dark:text-gray-400 max-w-4xl mx-auto font-light"
          >
            Whether you are a first-year undergraduate needing essay help, a master’s student writing your dissertation, or a researcher aiming to publish your findings — <span className="text-[#E8B85F] font-medium not-italic">ScholarBrood is here to support you.</span>
          </motion.p>
        </div>
      </section>

      {/* Why Choose ScholarBrood */}
      <section className="py-24 sm:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-[#E8B85F]">ScholarBrood</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Users className="w-12 h-12" />, title: "Expertise & Experience", desc: "Our team includes advanced-degree researchers and writers who understand academic conventions across disciplines." },
              { icon: <Shield className="w-12 h-12" />, title: "Originality Guaranteed", desc: "All work is crafted from scratch to ensure authenticity and academic integrity." },
              { icon: <BookOpen className="w-12 h-12" />, title: "Publication-Ready Outcomes", desc: "With our Publication Processing service, your manuscript’s formatting and submission meet journal standards." },
              { icon: <Target className="w-12 h-12" />, title: "Confidentiality & Reliability", desc: "We respect your privacy and deadlines. Your project is handled with utmost professionalism." },
              { icon: <Star className="w-12 h-12" />, title: "Student-Centered Support", desc: "We focus on your success — helping you meet academic goals, save time, and reduce stress." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -12, scale: 1.04 }}
                className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/40 overflow-hidden transition-all duration-500"
              >
                <div className="absolute inset-0 bg-[#E8B85F] opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                <div className="relative z-10 flex flex-col items-start gap-6">
                  <div className="p-4 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] group-hover:bg-[#E8B85F]/20 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise + Final CTA */}
      <section className="py-24 sm:py-32 px-6 lg:px-12 bg-gray-50 dark:bg-[#24243a]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-10">
            Our <span className="text-[#E8B85F]">Promise</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
            At ScholarBrood, we believe in quality, integrity, and academic excellence. We are not just a writing service — we are your academic partners. We aim to deliver work that you are proud to submit, publish, or present.
          </p>

          <div className="relative p-12 sm:p-16 rounded-3xl bg-[#E8B85F] shadow-2xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-6">
                Ready to Elevate Your Academic Journey?
              </h2>
              <p className="16 text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg mb-10 max-w-3xl mx-auto px-4">
                Contact us today to start your project or learn more about how we can help.
              </p>
              <Link
                // to be changed back to contact
                href="/contact"
                className="inline-flex items-center justify-center px-10 sm:px-12 py-5 sm:py-6 bg-white text-[#1C1C30] text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 gap-3 whitespace-nowrap"
              >
                Get in Touch <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}