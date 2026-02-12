'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { oswald } from "@/components/ui/fonts";
import { blogPosts } from "./blogData";

export default function Blog() {
    // const featuredPosts = [
    //   {
    //     title: "Mastering Academic Writing: Key Strategies",
    //     excerpt: "Proven techniques to plan, structure, edit, and polish essays, theses, and research papers with confidence.",
    //     image: "/blog1.jpeg",
    //     link: "/blog/mastering-academic-writing",
    //     category: "Writing Tips",
    //   },
    //   {
    //     title: "How to Write a Compelling Introduction",
    //     excerpt: "Hook your reader from the first sentence and set up a powerful argument — with real examples that work.",
    //     image: "/blog2.jpeg",
    //     link: "/blog/compelling-introductions",
    //     category: "Writing Craft",
    //   },
    // ];

    // const blogPosts = [
    //   { title: "Effective Citation Methods", excerpt: "Master APA, MLA, Chicago, and Harvard styles to cite flawlessly...", image: "/blog3.jpeg", link: "/blog/effective-citation-methods", category: "Writing Tips" },
    //   { title: "Organizing Your Thesis Like a Pro", excerpt: "Step-by-step framework to build a clear, logical thesis...", image: "/blog4.jpeg", link: "/blog/organizing-your-thesis", category: "Academic Writing" },
    //   { title: "Clarity & Concision: Editing Secrets", excerpt: "Learn professional editing techniques to eliminate wordiness...", image: "/blog5.jpeg", link: "/blog/clarity-and-concision", category: "Editing" },
    //   { title: "Crafting Strong Arguments", excerpt: "Build persuasive, evidence-based arguments that professors...", image: "/blog6.jpeg", link: "/blog/crafting-strong-arguments", category: "Writing Craft" },
    //   { title: "Overcoming Writer’s Block Forever", excerpt: "Practical strategies used by published academics to start writing...", image: "/blog7.jpeg", link: "/blog/overcoming-writers-block", category: "Productivity" },
    //   { title: "Writing Literature Reviews That Stand Out", excerpt: "Go beyond summary: synthesize sources critically and position...", image: "/blog8.jpeg", link: "/blog/writing-literature-reviews", category: "Academic Writing" },
    // ];

    return (
        <main className={`${oswald.className} min-h-screen bg-white dark:bg-[#1C1C30] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden`}>

            {/* Hero Section */}
            <section className="h-screen w-full">
                <section className="relative h-full py-28 sm:py-36 px-6 lg:px-12 text-center flex flex-col justify-center items-center overflow-hidden">
                    <img src="/Paper edited using a red pen.jpg" alt="Paper edited using a red pen" className="absolute inset-0 w-full h-full object-cover z-0" />
                    <div className="absolute inset-0 bg-black/50 z-0" />

                    {/* Floating background shape */}
                    <motion.div
                        className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 sm:w-[800px] sm:h-[800px] bg-[#E8B85F] rounded-full blur-3xl opacity-20"
                        animate={{ y: [0, -60, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative z-10 max-w-6xl mx-auto"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight text-white">
                            Blog & <span className="text-[#E8B85F]">Insights</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
                            Expert advice, proven techniques, and in-depth guides to help you write clearer, stronger, and more impactful academic and professional work.
                        </p>
                    </motion.div>
                </section>
            </section>

            {/* Featured Posts Section */}
            <section className="py-16 sm:py-24 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {blogPosts.slice(0, 2).map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/40 transition-all duration-500"
                        >
                            <div className="aspect-[4/3] sm:aspect-[16/10] relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
                                <span className="inline-block px-4 py-2 text-xs sm:text-sm font-bold bg-[#E8B85F]/20 text-[#E8B85F] rounded-full backdrop-blur-sm border border-[#E8B85F]/30">
                                    {post.category}
                                </span>
                                <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white leading-tight">{post.title}</h3>
                                <p className="mt-3 text-gray-200 text-base sm:text-lg line-clamp-2">{post.excerpt}</p>
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="mt-6 inline-flex items-center text-[#E8B85F] font-bold hover:gap-3 transition-all duration-300 text-sm sm:text-base"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* All Posts Grid */}
            <section className="py-20 sm:py-32 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 px-4"
                    >
                        All <span className="text-[#E8B85F]">Posts</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                        {blogPosts.slice(2, blogPosts.length).map((post, i) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-[#E8B85F]/40 transition-all duration-500 shadow-lg"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
                                </div>

                                <div className="p-6 sm:p-8 space-y-4">
                                    <span className="inline-block px-3 py-1 text-xs sm:text-sm font-bold bg-[#E8B85F]/20 text-[#E8B85F] rounded-full backdrop-blur-sm border border-[#E8B85F]/30">
                                        {post.category}
                                    </span>
                                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">{post.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
                                    <Link
                                        href={`/blogs/${post.slug}`}
                                        className="inline-flex items-center text-[#E8B85F] font-medium text-sm sm:text-base hover:gap-2 transition-all duration-300 mt-2"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 sm:py-32 px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <div className="relative p-10 sm:p-16 rounded-3xl bg-[#E8B85F] shadow-2xl overflow-hidden text-center">
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-6">
                                Never Miss a Writing Tip
                            </h2>
                            <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg mb-10 max-w-3xl mx-auto px-4">
                                Subscribe to get weekly insights, templates, and expert writing advice delivered straight to your inbox.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-10 sm:px-12 py-5 sm:py-6 bg-white text-[#1C1C30] text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                            >
                                Subscribe Now
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
