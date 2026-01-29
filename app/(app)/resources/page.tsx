'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  ClipboardList,
  PenTool,
  Download,
  FileCheck,
  BookOpenText,
  ArrowRight
} from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export default function Resources() {
  const resources = [
    {
      title: "Academic Essay & Thesis Templates",
      desc: "Ready-to-use Word & LaTeX templates for essays, dissertations, research papers, and journal articles — perfectly formatted and citation-ready.",
      icon: <FileText className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/academic-essay-templates.zip",
    },
    {
      title: "Ultimate Writing Checklists",
      desc: "Pro-level editing, structure, and style checklists used by published academics to polish drafts into A-grade work.",
      icon: <ClipboardList className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/writing-checklists.pdf",
    },
    {
      title: "Argument & Structure Blueprint",
      desc: "Visual frameworks and sentence starters to build rock-solid arguments, compelling intros, and logical flow.",
      icon: <PenTool className="w-12 h-12" />,
      type: "Guide",
      link: "/resources/argument-blueprint.pdf",
    },
    {
      title: "Citation Style Quick-Reference Pack",
      desc: "One-page cheat sheets for APA 7, MLA 9, Chicago, Harvard, and IEEE — with examples and tricky cases solved.",
      icon: <FileCheck className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/citation-cheat-sheets.pdf",
    },
    {
      title: "Literature Review Template Kit",
      desc: "Synthesis matrix, thematic outlines, and phrasing banks to write reviews that impress supervisors and reviewers.",
      icon: <BookOpenText className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/literature-review-kit.zip",
    },
    {
      title: "Professional Email & Proposal Templates",
      desc: "Polished templates for grant applications, supervisor emails, conference submissions, and cover letters.",
      icon: <Download className="w-12 h-12" />,
      type: "Downloadable",
      link: "/resources/professional-templates.zip",
    },
  ];

  return (
    <main className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden`}>

      {/* HERO — Now visually aligned with Services page */}
      <section className="relative min-h-screen sm:min-h-[600px] sm:max-h-[800px] flex flex-col items-center justify-center px-6 py-32 sm:px-10 overflow-hidden">
        <img
          src="/Excellent academic writing services at ScholarBrood.jpg"
          alt="Excellent academic writing services at ScholarBrood"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight text-white">
            Free <span className="text-[#E8B85F]">Writing Resources</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Expert-crafted templates, guides, and checklists used by thousands of students to write smarter, faster, and better — at no cost.
          </p>
        </motion.div>
      </section>

      {/* RESOURCES GRID — upgraded visuals */}
      <section className="py-20 sm:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {resources.map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group relative p-10 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-gray-800 hover:border-[#E8B85F]/50 transition-all duration-500 shadow-xl"
            >
              {/* Gold glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8B85F]/0 to-[#E8B85F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-start gap-6">

                <div className="p-5 rounded-2xl bg-[#E8B85F]/10 text-[#E8B85F] group-hover:bg-[#E8B85F]/20 transition-all duration-300">
                  {resource.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <span className="inline-block px-4 py-2 text-xs sm:text-sm font-bold bg-[#E8B85F]/20 text-[#E8B85F] rounded-full border border-[#E8B85F]/40">
                    {resource.type}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  {resource.desc}
                </p>

                <Link
                  href={resource.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center text-[#E8B85F] text-lg font-bold hover:gap-4 transition-all duration-300"
                >
                  {resource.type === "Downloadable" ? "Download Free" : "View Guide"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 sm:py-28 lg:py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-10 sm:p-16 rounded-3xl bg-[#E8B85F] shadow-2xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 flex flex-col items-center gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Want Custom Templates?
              </h2>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
                Need a specific template or guide? Tell us — we’ll create it for you.
              </p>

              <Link
                // to be changed back to contact
                href="/about"
                className="px-12 py-5 bg-white text-[#1C1C30] text-lg md:text-xl font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
              >
                Request Custom Resource
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}