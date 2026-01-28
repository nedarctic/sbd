"use client";

import { Check, NotebookPen, Edit, GraduationCap, BookOpen, MessageCircle } from "lucide-react";
import { oswald } from "@/components/ui/fonts";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      {/* Hero Header */}
      {/* <section className="relative flex flex-col text-center justify-center items-center min-h-screen sm:min-h-[600px] sm:max-h-[800px] bg-[#F7F9FC] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3B75]/5 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className={`${oswald.className} text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B3B75] mb-6`}>
            ⭐ SCHOLARBROOD PRICING ⭐
          </h1>
          <p className={`${oswald.className} text-2xl font-medium text-[#0B3B75]/90`}>
            Professional Academic & Publication Services
          </p>
          <p className={`${oswald.className} mt-6 text-lg text-gray-700 max-w-2xl mx-auto`}>
            Transparent, student-friendly pricing. All writing prices are based on <strong>250 words per page</strong>.
          </p>
        </div>
      </section> */}

      {/* Main Pricing Grid - 4 Cards */}
      <section className="py-40 px-6 lg:px-20 bg-[#F7F9FC]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B3B75]/5 to-transparent" />

        <div className="relative z-10 text-center pb-20 px-6 max-w-5xl mx-auto">
          <h1 className={`${oswald.className} text-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B3B75] mb-6`}>
            ⭐ SCHOLARBROOD PRICING ⭐
          </h1>
          <p className={`${oswald.className} text-2xl font-medium text-[#0B3B75]/90`}>
            Professional Academic & Publication Services
          </p>
          <p className={`${oswald.className} mt-6 text-lg text-gray-700 max-w-2xl mx-auto`}>
            Transparent, student-friendly pricing. All writing prices are based on <strong>250 words per page</strong>.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card 1: Academic Writing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="bg-[#0B3B75] text-white p-6 text-center">
              <NotebookPen className="w-12 h-12 mx-auto mb-3" />
              <h3 className={`${oswald.className} text-2xl font-bold`}>Academic Writing</h3>
              <p className={`${oswald.className} text-sm mt-2 opacity-90`}>Essays • Term Papers • Reports • Coursework</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className={`${oswald.className} text-4xl font-bold text-[#0B3B75] text-center`}>
                $10 <span className={`${oswald.className} text-lg font-normal text-gray-600`}>/ page</span>
              </div>
              <p className={`${oswald.className} text-center text-sm text-gray-500 mt-1 mb-8`}>(250 words per page)</p>

              <ul className="space-y-4 text-gray-700 flex-1">
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> High-quality academic writing</li>
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Fast turnaround</li>
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> 100% original work</li>
              </ul>

              <Link href={`/order?service=Academic Writing Support&amount=10&unit=page`} className={`${oswald.className} flex flex-col justify-center items-center mt-10 w-full py-4 bg-[#F9B300] text-black font-bold rounded-xl hover:bg-[#e5a800] transition-all`}>
                GET STARTED
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Editing & Proofreading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="bg-[#0B3B75] text-white p-6 text-center">
              <Edit className="w-12 h-12 mx-auto mb-3" />
              <h3 className={`${oswald.className} text-2xl font-bold`}>Editing & Proofreading</h3>
              <p className={`${oswald.className} text-sm mt-2 opacity-90`}>Improve Clarity, Grammar & Structure</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className={`${oswald.className} text-4xl font-bold text-[#0B3B75] text-center`}>
                $10 <span className={`${oswald.className} text-lg font-normal text-gray-600`}>/ page</span>
              </div>

              <ul className="space-y-4 text-gray-700 mt-10 flex-1">
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Polishing & restructuring</li>
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Academic tone refinement</li>
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Plagiarism-safe improvements</li>
              </ul>

              <Link href={`/order?service=Editing, Review & Proofreading&amount=10&unit=flat`} className={`${oswald.className} flex flex-col justify-center items-center mt-10 w-full py-4 bg-[#F9B300] text-black font-bold rounded-xl hover:bg-[#e5a800] transition-all`}>
                IMPROVE MY WORK
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Thesis & Dissertation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#E8EFF7] rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="bg-[#082C58] text-white p-6 text-center">
              <GraduationCap className="w-12 h-12 mx-auto mb-3" />
              <h3 className={`${oswald.className} text-2xl font-bold`}>Thesis & Dissertation Support</h3>
              <p className={`${oswald.className} text-sm mt-2 opacity-90`}>Proposals • Chapters • Full Projects</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className={`${oswald.className} text-4xl font-bold text-[#082C58] text-center`}>
                $12 <span className={`${oswald.className} text-lg font-normal text-gray-600`}>/ page</span>
              </div>

              <ul className="space-y-4 text-gray-700 mt-10 flex-1">
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Graduate-level writing</li>
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Research structure guidance</li>
                <li className={`${oswald.className} flex items-center gap-3`}><Check className="w-5 h-5 text-green-600" /> Formatting to university standards</li>
              </ul>

              <Link href={`/order?service=Research Assistance (Projects, Thesis, Dissertations)&amount=12&unit=page`} className={`${oswald.className} flex flex-col justify-center items-center mt-10 w-full py-4 bg-[#F9B300] text-black font-bold rounded-xl hover:bg-[#e5a800] transition-all`}>
                START MY THESIS
              </Link>
            </div>
          </motion.div>

          {/* Card 4: Research Articles + Publication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#FFF7E6] rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <div className="bg-[#0B3B75] text-white p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-3" />
              <h3 className={`${oswald.className} text-2xl font-bold`}>Research & Publication</h3>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-center">
                <p className={`${oswald.className} text-xl font-bold text-[#0B3B75]`}>Research & Review Articles</p>
                <div className={`${oswald.className} text-3xl font-bold text-[#0B3B75] mt-2`}>
                  $15 <span className={`${oswald.className} text-lg font-normal text-gray-600`}>/ page</span>
                </div>
              </div>

              <hr className="my-6 border-gray-300" />

              <div className="text-center">
                <p className={`${oswald.className} text-xl font-bold text-[#0B3B75]`}>Publication Processing</p>
                <div className={`${oswald.className} text-3xl font-bold text-[#0B3B75] mt-2`}>
                  $200 <span className={`${oswald.className} text-lg font-normal text-gray-600`}>(Flat Rate)</span>
                </div>
                <p className={`${oswald.className} text-sm text-gray-600 mt-2`}>Journal selection • Formatting • Submission & revisions</p>
              </div>

              <Link href={`/order?service=Publication & Journal Support&amount=200&unit=flat`} className={`${oswald.className} flex flex-col justify-center items-center mt-auto w-full py-4 bg-[#0B3B75] text-white font-bold rounded-xl hover:bg-[#082C58] transition-all`}>
                PUBLISH MY PAPER
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer Callout */}
      <section className="flex flex-col justify-center items-center py-20 bg-[#0B3B75] text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className={`${oswald.className} text-3xl md:text-4xl font-bold mb-6`}>
            Not sure which service you need?
          </h2>
          <p className={`${oswald.className} text-lg opacity-90 mb-10`}>
            We can recommend the best option based on your topic and academic level.
          </p>
          <Link href="/order" className={`${oswald.className} flex flex-col justify-center items-center py-5 px-12 sm:w-sm md:w-md text-xl md:text-md lg:w-lg bg-[#F9B300] text-black font-bold rounded-xl hover:bg-[#e5a800] transition-all`}>
            REQUEST A FREE QUOTE
          </Link>
        </div>
      </section>
    </>
  );
}