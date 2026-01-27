'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export default function ServicesClient() {
  return (
    <main className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500`}>

      {/* Hero with Image */}

      <section className="relative min-h-screen sm:min-h-[600px] sm:max-h-[800px] flex items-center justify-center px-5 sm:px-8 pt-20 overflow-hidden">
        <img
          src="/Research is the primary tool in ScholarBrood.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-0" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto text-white flex flex-col items-center"
        >
          <h1 className={`${oswald.className} text-2xl sm:text-5xl font-bold mb-8 tracking-tight leading-tight`}>
            Achieve Academic Excellence With Expert Writing & Research Support
          </h1>
          <p className={`${oswald.className} text-md sm:text-xl max-w-4xl mx-auto leading-relaxed px-4 mb-12`}>
            From academic papers to full research projects and journal publication — ScholarBrood gives you the professional support you need to succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
            // to be changed back to contact
              href="/about"
              className={`${oswald.className} px-6 py-4 sm:px-10 sm:py-5 bg-[#E8B85F] text-[#1C1C30] font-bold text-md sm:text-lg rounded-full hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-3`}
            >
              Get Academic Help Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              // to be changed back to contact
              href="/about"
              className={`${oswald.className} px-6 py-4 sm:px-10 sm:py-5 border-2 border-[#E8B85F] text-white font-bold text-md sm:text-lg rounded-full hover:bg-[#E8B85F]/20 transition-all duration-300`}
            >
              Request Research Support
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Sections */}
      <section className="py-16 sm:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
          {[
            {
              title: "1. Academic Writing Services",
              desc: "We deliver clear, original, and well-structured academic papers for high school, undergraduate, master’s, and doctoral students.",
              items: [
                "Essays, term papers, and reports",
                "Coursework and assignments",
                "Case studies and literature reviews",
                "Thesis chapters & dissertation sections",
                "Capstone and final-year project writing"
              ],
              efficiency: [
                "Plagiarism-free content",
                "Timely delivery for urgent work",
                "Accurate referencing (APA, MLA, Chicago, Harvard, etc.)",
                "Personalized writing based on your instructions"
              ],
              image: "/Improving focus in academic journey.jpg",
              reverse: false
            },
            {
              title: "2. Research Writing & Scholarly Support",
              desc: "We offer expert guidance throughout the research process, ensuring your work is academically strong, well-designed, and professionally presented.",
              items: [
                "Topic selection & refinement",
                "Proposal development",
                "Methodology design (qualitative, quantitative, mixed methods)",
                "Data collection guidance",
                "Data analysis (SPSS, STATA, R, NVivo, Excel)",
                "Thesis & dissertation support",
                "Research coaching and concept clarification"
              ],
              efficiency: [
                "Plagiarism-free content",
                "Timely delivery for urgent work",
                "Accurate referencing (APA, MLA, Chicago, Harvard, etc.)",
                "Personalized writing based on your instructions"
              ],
              image: "/A team of analysts reviewing the statistics found from the field.jpg",
              reverse: true
            },
            {
              title: "3. Publication Processing Services",
              desc: "We help researchers, postgraduate students, and professionals prepare manuscripts for reputable journals and academic platforms.",
              items: [
                "Manuscript development & formatting",
                "Journal selection guidance",
                "Compliance with journal submission guidelines",
                "Editing for clarity, structure, and flow",
                "Response to reviewer comments",
                "Final submission preparation"
              ],
              efficiency: [
                "Professional-quality manuscripts",
                "Improved acceptance chances",
                "Correct formatting & referencing"
              ],
              image: "/A researcher working on a manuscript.jpg",
              reverse: false
            },
            {
              title: "4. Editing, Proofreading & Rewriting",
              desc: "We refine your document to meet academic standards by improving clarity, logic, structure, grammar, and academic tone.",
              items: [
                "Proofreading",
                "Substantive editing",
                "Rewriting to improve originality and coherence",
                "Reference checks and citation accuracy",
                "Turnitin-safe content improvement"
              ],
              image: "/A lady handling the writing and proofreading project.jpg",
              reverse: true
            }
          ].map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="scroll-mt-20"
            >
              <h2 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 px-4`}>
                {section.title}
              </h2>

              <div className={`${oswald.className} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${section.reverse ? "lg:flex-row-reverse" : ""}`}>
                {/* Text Content */}
                <div className="space-y-8 px-4 sm:px-0">
                  <p className={`${oswald.className} text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed`}>
                    {section.desc}
                  </p>

                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={item} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-[#E8B85F] flex-shrink-0 mt-0.5" />
                        <span className={`${oswald.className} text-gray-700 dark:text-gray-200`}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* The ScholarBrood Efficiency Box */}
                  {section.efficiency && (
                    <div className="p-6 bg-gradient-to-br from-[#E8B85F]/10 to-transparent dark:from-[#E8B85F]/5 border border-[#E8B85F]/30 rounded-2xl">
                      <h4 className="font-bold text-xl mb-4 text-[#E8B85F]">The ScholarBrood Efficiency</h4>
                      <ul className="space-y-3">
                        {section.efficiency.map((benefit, i) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#E8B85F] flex-shrink-0 mt-0.5" />
                            <span className={`${oswald.className} text-gray-700 dark:text-gray-200`}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Link
                      href="/pricing"
                      className={`${oswald.className} inline-flex items-center gap-3 px-8 py-4 bg-[#E8B85F] text-[#1C1C30] font-bold rounded-full hover:bg-[#d4a44e] hover:scale-105 transition-all duration-300 shadow-lg`}
                    >
                      Place Your Order Now <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-96 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Why Choose Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 sm:py-20 px-6 sm:px-12 bg-gradient-to-br from-[#E8B85F]/10 to-transparent dark:from-[#E8B85F]/5 rounded-3xl border border-[#E8B85F]/20"
          >
            <h2 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16`}>
              Why Choose ScholarBrood?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {[
                "Experienced academic and research experts",
                "High-quality, confidential, plagiarism-free work",
                "Affordable student-friendly pricing",
                "Fast delivery with dedicated support",
                "Humanized writing that passes AI detection"
              ].map((item, i) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#E8B85F] flex-shrink-0" />
                  <p className={`${oswald.className} text-lg sm:text-xl text-gray-700 dark:text-gray-200`}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="relative p-10 sm:p-16 rounded-3xl bg-[#E8B85F] shadow-2xl overflow-hidden text-center">
              <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className={`${oswald.className} text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight`}>
                Start Your Academic Journey With Confidence
              </h2>
              <p className={`${oswald.className} text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto px-2 sm:px-4`}>
                Whether you need academic writing, research support, or publication processing,
                ScholarBrood is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link
                  // to be changed back to contact
              href="/about"
                  className={`${oswald.className} w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 dark:bg-[#1C1C30] bg-[#1C1C30] text-[#E8B85F] text-base sm:text-lg md:text-xl font-bold rounded-full hover:bg-[#1C1C30]/90 hover:scale-105 shadow-2xl transition-all duration-300`}
                >
                  Request Expert Help Today
                </Link>
                <Link
                  // to be changed back to contact
              href="/about"
                  className={`${oswald.className} w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 border-2 md:border-4 border-[#1C1C30] text-white text-base sm:text-lg md:text-xl font-bold rounded-full dark:hover:bg-[#1C1C30] hover:bg-[#1C1C30] hover:text-[#E8B85F] transition-all duration-300`}
                >
                  Start Publication Processing
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}