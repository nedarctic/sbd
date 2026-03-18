"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Quote,
} from "lucide-react";
import { oswald } from "@/components/ui/fonts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const services = [
    {
      id: "writing",
      title: "Academic Writing Assistance",
      desc:
        "Professional support for essays, term papers, coursework, reports, and academic assignments that meet institutional standards.",
    },
    {
      id: "thesis",
      title: "Thesis & Dissertation Support",
      desc:
        "Complete guidance for proposal development, literature review, methodology, data analysis, writing, formatting, and defense preparation.",
    },
    {
      id: "editing",
      title: "Editing & Proofreading",
      desc:
        "Refine grammar, clarity, tone, structure, and logical flow while ensuring originality and academic precision.",
    },
    {
      id: "proposal",
      title: "Research Proposal & Project Help",
      desc:
        "Expert support from topic selection to methodology development, full proposal development, and data analysis (SPSS/STATA/Excel).",
    },
    {
      id: "publication",
      title: "Publication Processing & Journal Support",
      desc:
        "End-to-end assistance with article preparation, journal selection, formatting, submission, reviewer response, and manuscript revision to increase acceptance chances.",
    },
    {
      id: "cv",
      title: "CV, SOP & Academic Personal Statements",
      desc:
        "Professionally crafted academic documents for admissions, scholarships, and fellowship opportunities.",
    },
  ];

  const testimonials = [
    {
      name: "Catherine – MSc Student",
      image: "Catherine.jpg",
      text: "ScholarBrood helped me complete my thesis on time with excellent quality.",
    },
    {
      name: "Gabriel – Undergraduate Student",
      image: "Gabriel.jpg",
      text: "Very reliable academic support. Their research guidance and writing clarity exceeded my expectations.",
    },
    {
      name: "Joylander – PhD Candidate",
      image: "Joylander.jpg",
      text: "Their editing and formatting improved my dissertation significantly. The feedback was detailed and helpful.",
    },
    {
      name: "Dr. Drinkwater – Researcher",
      image: "Drinkwater.jpg",
      text: "Their publication processing service made my manuscript ready for journal submission. I highly recommend them.",
    },
  ];

  const insights = [
    {
      title: "How to Structure a Winning Research Proposal",
      desc: "A practical guide to crafting clear, persuasive, and academically sound proposals.",
      href: "/blog/how-to-structure-a-winning-research-proposal",
    },
    {
      title: "Top 10 Mistakes Students Make in Academic Writing",
      desc: "Learn the common pitfalls that weaken academic papers and how to avoid them.",
      href: "/blog/top-10-mistakes-students-make",
    },
    {
      title: "How to Analyze Data Using SPSS: A Beginner’s Guide",
      desc: "Step-by-step instructions to help you run tests and interpret statistical results confidently.",
      href: "/blog/analyze-data-spass-beginners",
    },
  ];

  return (
    <>
      <main
        className={`${oswald.className} min-h-screen overflow-x-hidden font-sans
          bg-white dark:bg-[#1C1C30]
          text-gray-900 dark:text-gray-100
          transition-colors duration-500`}
      >
        {/* HERO */}
        <section className="h-screen w-full">
          <div className="relative pt-[110px] pb-[55px] h-full flex items-center justify-center px-5 sm:px-8 overflow-hidden">
            <img
              src="/A student enjoying our consultation.jpg"
              alt="A student enjoying our consultation"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-black/60 z-0" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10 max-w-5xl text-center px-4"
            >
              <h1
                className={`${oswald.className} text-2xl sm:text-5xl font-bold text-white leading-tight`}
              >
                Expert Academic Support for Students & Researchers
              </h1>

              <p className={`${oswald.className} text-md sm:text-xl text-white/90 mt-6 leading-relaxed`}>
                Get high-quality essays, proposals, theses, journal manuscripts, data analysis, and publication support from experienced academic professionals
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  // to be changed back to contact
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${oswald.className} px-6 py-4 sm:px-10 sm:py-5 bg-[#E8B85F] text-[#1C1C30] rounded-full text-md sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3`}
                >
                  Get Expert Help
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${oswald.className} px-6 sm:px-10 py-4 sm:py-5 border-2 border-[#E8B85F] text-[#E8B85F] rounded-full text-md sm:text-lg font-semibold hover:bg-[#E8B85F] hover:text-[#1C1C30] transition-all duration-300 flex items-center justify-center`}
                >
                  View Our Services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* OUR ACADEMIC SERVICES (Card Grid) */}
        <section id="services" className="flex flex-col justify-between px-5 sm:px-8 pt-20 pb-10 sm:py-28">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-6`}>
              Helping You In Your Academic Journey
            </h2>

            <p className={`${oswald.className} py-10 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12`}>
              ScholarBrood provides professional academic writing, editing, research support, and publication processing for students and researchers worldwide. Our goal is to help you produce high-quality, original, and academically sound work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ translateY: -8, scale: 1.02 }}
                  className="relative p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-[#E8B85F]/10 flex items-center justify-center text-[#E8B85F] text-2xl font-bold">
                    {i + 1}
                  </div>

                  <h3 className={`${oswald.className} text-xl sm:text-2xl font-bold mb-3 pl-2`}>
                    {s.title}
                  </h3>

                  <p className={`${oswald.className} text-base text-gray-700 dark:text-gray-300 mb-6 pl-2`}>
                    {s.desc}
                  </p>

                  <a
                    href={`/services#${s.id}`}
                    className={`${oswald.className} inline-flex items-center gap-2 text-sm sm:text-base font-semibold underline text-[#E8B85F]`}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.article>
              ))}
            </div>
            <motion.a
              href="/pricing"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`${oswald.className} mt-24 inline-flex items-center justify-center gap-3 px-12 py-4 text-sm sm:text-base font-semibold text-white bg-[#A52A2A] rounded-full shadow-2xl`}
            >
              See Our Pricing <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </section>

        {/* IMAGE SECTION */}
        <section className="relative h-[300px] sm:min-h-[600px] sm:max-h-[800px] flex items-center justify-center px-5 sm:px-8 overflow-hidden">
          <img
            src="/Essay writing service.jpg"
            alt="Essay writing service"
            className="absolute w-11/12 sm:h-full object-contain sm:object-cover rounded-xl m-auto z-0"
          />
        </section>


        {/* WHY STUDENTS TRUST SCHOLARBROOD */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white dark:bg-[#1C1C30]/40">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-4`}>
              Why Students Trust <span className="text-[#E8B85F]">ScholarBrood</span>
            </h2>
            <p className={`${oswald.className} text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10`}>
              We prioritize quality, originality, and professionalism in every project—making us a trusted partner for learners and researchers. We take pride in:
            </p>

            <ul className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "Experienced academic professionals",
                "100% original and plagiarism-free work",
                "Accurate, well-structured, and high-quality writing",
                "Strict confidentiality and data security",
                "On-time delivery, every time",
              ].map((item, idx) => (
                <li
                  key={item}
                  className={`${oswald.className} flex items-start gap-3 bg-white dark:bg-[#1C1C30]/70 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm`}
                >
                  <span className="mt-1 text-[#E8B85F] font-bold">✔</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CLIENT TESTIMONIALS */}
        <section>
          <div className="flex flex-col items-center justify-center w-11/12 sm:w-full max-w-7xl mx-auto mt-20 min-h-screen sm:min-h-[600px] sm:max-h-[800px] bg-[#E8B85F] rounded-xl m-4 p-8">
            <h3 className={`${oswald.className} text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8`}>
              What Our Clients Say
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex flex-col justify-between gap-4 p-6 bg-white dark:bg-[#1C1C30]/70 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex align-top gap-4"><Quote className="w-8 h-8 text-[#E8B85F] mb-3" /> <img src={t.image} alt={t.name} className="rounded-full h-24 w-24 object-cover object-top border-2 border-[#E8B85F]" /></div>
                    <blockquote className={`${oswald.className} text-gray-700 dark:text-gray-300 mb-4 max-w-50`}>{t.text}</blockquote>
                  </div>
                  <figcaption className={`${oswald.className} text-sm text-[#E8B85F]`}>{t.name}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* LATEST ACADEMIC INSIGHTS */}
        {/* <section className="px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-10`}>
              Latest Academic Insights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="p-8 bg-white dark:bg-[#1C1C30]/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl"
                >
                  <h4 className={`${oswald.className} text-xl font-bold mb-3 text-[#E8B85F]`}>
                    {post.title}
                  </h4>
                  <p className={`${oswald.className} text-gray-700 dark:text-gray-300 mb-6`}>{post.desc}</p>
                  <a href={post.href} className={`${oswald.className} font-semibold underline text-[#E8B85F]`}>Read More</a>
                </motion.article>
              ))}
            </div>
          </div>
        </section> */}

        {/* IMAGE SECTION */}

        {/* <section className="relative py-[110px] min-h-screen sm:min-h-[600px] sm:max-h-[800px] flex items-center justify-center px-5 sm:px-8 pt-[110px] overflow-hidden">
          <img
            src="/Essay writing service.jpg"
            alt="Essay writing service"
            className="absolute w-11/12 h-11/12 object-cover rounded-xl m-auto z-0"
          />
        </section> */}

        {/* FINAL CTA */}
        <section className="py-20 sm:py-28 px-5 sm:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-6`}>
              Ready to Improve Your Academic Work or Publish Your Research?
            </h2>

            <p className={`${oswald.className} text-lg sm:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-8`}>
              Work with expert writers, editors, analysts, and publication specialists dedicated to your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/order"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${oswald.className} inline-flex items-center justify-center gap-3 px-12 py-4 bg-[#E8B85F] text-[#1C1C30] text-lg font-semibold rounded-full shadow-2xl w-9/12 sm:w-auto`}
              >
                Get Help Now <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@scholarbrood.com"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${oswald.className} inline-flex items-center justify-center gap-2 px-8 py-4 border-4 border-[#E8B85F] text-[#E8B85F] text-lg font-semibold rounded-full w-9/12 sm:w-auto`}
              >
                <Mail className="w-4 h-4" />
                info@scholarbrood.com
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}