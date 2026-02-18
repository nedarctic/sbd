'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Tag, BookOpen, Share2, Bookmark, Eye, User, ChevronRight, Quote, CheckCircle, Lightbulb, Target, Zap, Brain } from 'lucide-react';
import { oswald } from '@/components/ui/fonts';
import { useEffect, useState } from 'react';

import type { BlogPost } from '@/types/blog';

export default function BlogPostClient({ post }: { post: BlogPost }) {

  const [mounted, setMounted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main
      className={`
        ${oswald.className}
        min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50/50
        dark:from-[#0A0A1A] dark:via-[#141428] dark:to-[#1C1C30]
        text-gray-900 dark:text-gray-100
        transition-colors duration-700 relative overflow-x-hidden
      `}
    >
      {/* Sophisticated Background Patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E8B85F]/3 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] bg-gradient-to-b from-transparent via-[#E8B85F]/[0.015] to-transparent" />
      </div>

      {/* Hero Section with Enhanced Design */}
      <div className="h-screen w-full">
        <div className="relative h-full w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20 z-10" />

          {/* Dynamic Image */}
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover scale-[1.02] brightness-[0.85] contrast-[1.1] saturate-[1.05] transition-all duration-1000"
            priority
            quality={100}
            sizes="100vw"
          />

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-20" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-20" />

          {/* Premium Content Overlay */}
          <div className="absolute inset-0 z-30 flex items-end pb-20 px-6 lg:px-20">
            <div className="max-w-6xl w-full mx-auto">
              {/* Category Badge with Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <Tag size={16} className="text-[#E8B85F]" />
                  <span className="text-sm font-medium tracking-wider text-white/90 uppercase">
                    {post.category}
                  </span>
                </div>
              </motion.div>

              {/* Main Title with Enhanced Typography */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <h1
                  className={`
                  ${oswald.className}
                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold
                  leading-[0.92] tracking-[-0.02em]
                  text-white mb-8
                  drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]
                `}
                >
                  {post.title}
                </h1>
              </motion.div>

              {/* Metadata & Action Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/20"
              >
                <div className="flex flex-wrap items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-[#E8B85F]" />
                    <span className="text-sm tracking-wide">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-[#E8B85F]" />
                    <span className="text-sm tracking-wide">{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={18} className="text-[#E8B85F]" />
                    <span className="text-sm tracking-wide">Premium Content</span>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 ${isBookmarked
                      ? 'bg-[#E8B85F]/20 border-[#E8B85F]/40 text-[#E8B85F]'
                      : 'bg-white/10 border-white/20 text-white/70 hover:text-[#E8B85F] hover:border-[#E8B85F]/40'
                      } border`}
                  >
                    <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                  </button>
                  <button
                    onClick={() => setShowShare(!showShare)}
                    className="p-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white/70 hover:text-[#E8B85F] hover:border-[#E8B85F]/40 transition-all duration-300"
                  >
                    <Share2 size={20} />
                  </button>
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 pb-40">
        {/* Back Navigation - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16 pt-12"
        >
          <Link
            href="/blogs"
            className={`
              ${oswald.className}
              group inline-flex items-center gap-4 px-6 py-4
              bg-white/90 dark:bg-[#1F1F38]/90 backdrop-blur-xl
              rounded-2xl border border-gray-200/50 dark:border-gray-700/50
              text-gray-700 dark:text-gray-300 hover:text-[#E8B85F]
              transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
              tracking-wide uppercase font-medium
            `}
          >
            <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-[#E8B85F]/10 transition-colors">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 dark:text-gray-400">Back to</span>
              <span className="text-lg font-bold">All Insights</span>
            </div>
          </Link>
        </motion.div>

        {/* Content Container with Premium Styling */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative"
        >
          {/* Floating Decorative Elements */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#E8B85F]/[0.03] rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/[0.02] rounded-full blur-3xl" />

          {/* Main Article Card */}
          <article className={`
            relative
            prose prose-lg md:prose-xl dark:prose-invert
            prose-headings:font-bold prose-headings:tracking-tight 
            prose-headings:text-gray-900 dark:prose-headings:text-white
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
            prose-a:text-[#E8B85F] hover:prose-a:underline prose-a:no-underline prose-a:font-medium
            prose-blockquote:border-l-4 prose-blockquote:border-[#E8B85F] 
            prose-blockquote:bg-gradient-to-r prose-blockquote:from-[#E8B85F]/5 prose-blockquote:via-transparent prose-blockquote:to-transparent
            prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
            prose-blockquote:text-gray-800 dark:prose-blockquote:text-gray-200
            prose-li:marker:text-[#E8B85F] prose-li:text-gray-700 dark:prose-li:text-gray-300
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
            prose-img:rounded-2xl prose-img:shadow-2xl
            bg-white/95 dark:bg-[#1A1A2E]/95 backdrop-blur-xl
            p-8 md:p-12 lg:p-16
            rounded-3xl shadow-2xl
            border border-gray-200/30 dark:border-gray-700/30
            ring-1 ring-white/10
          `}>
            {/* Special First Paragraph Treatment */}
            <div className="relative mb-12">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E8B85F] to-transparent rounded-full" />
              <div className="pl-8">
                <div className="text-5xl font-bold text-[#E8B85F] mb-4 leading-none">"</div>
                <div
                  className="text-2xl md:text-3xl leading-relaxed text-gray-800 dark:text-gray-200 font-light italic pl-4"
                  dangerouslySetInnerHTML={{
                    __html: post.content.match(/<div class="blog-intro">(.*?)<\/div>/)?.[1] ||
                      post.content.substring(0, post.content.indexOf('</p>') + 4)
                  }}
                />
              </div>
            </div>

            {/* Enhanced Content Styling */}
            <div className="relative">
              {/* Custom styles for blog content elements */}
              <style jsx global>{`
                .blog-content {
                  position: relative;
                }

                .blog-content h2 {
                  position: relative;
                  padding-left: 1rem;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                }

                .blog-content h2:before {
                  content: '';
                  position: absolute;
                  left: 0;
                  top: 0.5rem;
                  bottom: 0.5rem;
                  width: 4px;
                  background: linear-gradient(to bottom, #E8B85F, transparent);
                  border-radius: 2px;
                }

                .blog-content h3 {
                  background: linear-gradient(135deg, #E8B85F15, transparent);
                  padding: 1rem 1.5rem;
                  border-radius: 1rem;
                  margin: 2rem 0;
                  border-left: 3px solid #E8B85F;
                }

                .blog-content .insight-box {
                  background: linear-gradient(135deg, #E8B85F08, #ffffff);
                  border: 1px solid #E8B85F20;
                  padding: 2rem;
                  border-radius: 1.5rem;
                  margin: 2rem 0;
                  position: relative;
                  overflow: hidden;
                }

                .blog-content .insight-box:before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  height: 3px;
                  background: linear-gradient(to right, #E8B85F, transparent);
                }

                .blog-content .method-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                  gap: 1.5rem;
                  margin: 2.5rem 0;
                }

                .blog-content .method-step {
                  background: white;
                  padding: 2rem;
                  border-radius: 1rem;
                  border: 1px solid #e5e7eb;
                  position: relative;
                  transition: transform 0.3s ease;
                }

                .blog-content .method-step:hover {
                  transform: translateY(-4px);
                  box-shadow: 0 20px 40px rgba(232, 184, 95, 0.1);
                }

                .blog-content .method-step:before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  height: 4px;
                  background: linear-gradient(to right, #E8B85F, #F5D088);
                  border-radius: 1rem 1rem 0 0;
                }

                .blog-content .checklist {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                  gap: 2rem;
                  margin: 2.5rem 0;
                  padding: 2rem;
                  background: linear-gradient(135deg, #f8fafc, #ffffff);
                  border-radius: 1.5rem;
                  border: 1px solid #e5e7eb;
                }

                .blog-content .checklist-column ul {
                  list-style: none;
                  padding: 0;
                }

                .blog-content .checklist-column li {
                  display: flex;
                  align-items: flex-start;
                  gap: 0.75rem;
                  padding: 0.75rem 0;
                  border-bottom: 1px solid #e5e7eb;
                }

                .blog-content .checklist-column li:before {
                  content: '✓';
                  color: #10b981;
                  font-weight: bold;
                  flex-shrink: 0;
                  margin-top: 0.125rem;
                }

                .blog-content .key-insight {
                  background: linear-gradient(135deg, #E8B85F10, #ffffff);
                  border: 2px solid #E8B85F30;
                  padding: 2.5rem;
                  border-radius: 1.5rem;
                  margin: 3rem 0;
                  position: relative;
                  font-size: 1.25rem;
                  line-height: 1.8;
                }

                .blog-content .key-insight:before {
                  content: '💡';
                  position: absolute;
                  top: -1rem;
                  left: 2rem;
                  font-size: 2rem;
                  background: white;
                  padding: 0.5rem;
                  border-radius: 50%;
                  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                }

                /* Dark mode adjustments */
                .dark .blog-content .insight-box,
                .dark .blog-content .method-step,
                .dark .blog-content .checklist,
                .dark .blog-content .key-insight {
                  background: linear-gradient(135deg, #1F2937, #111827);
                  border-color: #374151;
                }

                .dark .blog-content .checklist-column li {
                  border-color: #374151;
                }
              `}</style>

              {/* Render Content */}
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Author Signature */}
            <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8B85F] to-[#F5D088] flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Academic Insights Team</h4>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Publishing expert academic guidance since 2020
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Interactive Stats & Share */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#E8B85F]/10 to-transparent border border-[#E8B85F]/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-[#E8B85F]/20">
                  <Brain size={20} className="text-[#E8B85F]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Academic Value</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">Premium</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-blue-500/20">
                  <Target size={20} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Actionable Steps</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">12+ Included</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-purple-500/20">
                  <Zap size={20} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Read Time</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{post.readTime}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E8B85F]/20 via-transparent to-[#E8B85F]/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-50 to-white dark:from-[#1A1A2E] dark:to-[#141428] p-12 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Elevate Your Academic Writing?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Put these strategies into practice with our curated writing exercises and templates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/blogs"
                    className={`
                      ${oswald.className}
                      group inline-flex items-center justify-center gap-4 px-10 py-5
                      bg-gradient-to-r from-[#E8B85F] via-[#F0C875] to-[#E8B85F]
                      text-[#1A1A2E] font-bold text-lg
                      rounded-full shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(232,184,95,0.4)]
                      hover:scale-[1.02] active:scale-[0.98]
                      transition-all duration-400 tracking-wider uppercase
                      border-2 border-[#E8B85F]/30
                      relative overflow-hidden
                    `}
                  >
                    <span className="relative z-10">Explore More Insights</span>
                    <ArrowLeft className="w-6 h-6 rotate-180 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </Link>
                  {/* <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full border-2 transition-all duration-400 ${isBookmarked
                      ? 'bg-[#E8B85F]/10 border-[#E8B85F] text-[#E8B85F]'
                      : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-[#E8B85F] hover:text-[#E8B85F]'
                      }`}
                  >
                    <Bookmark size={20} fill={isBookmarked ? "currentColor" : "none"} />
                    {isBookmarked ? 'Bookmarked' : 'Save for Later'}
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 rounded-full bg-gradient-to-br from-[#E8B85F] to-[#F5D088] text-white shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(232,184,95,0.5)] hover:scale-110 transition-all duration-300"
          >
            <ArrowLeft size={24} className="rotate-90" />
          </button>
        </motion.div>
      )}
    </main>
  );
}