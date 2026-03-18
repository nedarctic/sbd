import { Suspense } from "react";
import OrderForm from "./OrderForm";
import { oswald } from '@/components/ui/fonts';
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: "Submit Academic Request – ScholarBrood Dashboard",
    description: "Easily submit your academic writing or research request, track progress, and communicate with your assigned expert through the ScholarBrood dashboard.",
    keywords: [
        "ScholarBrood",
        "academic writing",
        "research assistance",
        "thesis help",
        "dissertation support",
        "essay help",
        "data analysis",
        "journal submission",
        "publication support",
        "academic services"
    ],
    authors: [{ name: "ScholarBrood", url: "https://scholarbrood.com" }],
    openGraph: {
        title: "About Us | ScholarBrood – Expert Academic Writing & Research Support",
        description: "ScholarBrood offers expert academic writing, research assistance, and publication support for students worldwide. Original, publication-ready work handled by experienced professionals.",
        url: "https://www.scholarbrood.com/about",
        siteName: "ScholarBrood",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "https://scholarbrood.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "ScholarBrood - Academic Writing and Research"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | ScholarBrood – Expert Academic Writing & Research Support",
        description: "ScholarBrood offers expert academic writing, research assistance, and publication support for students worldwide. Original, publication-ready work handled by experienced professionals.",
        images: ["https://scholarbrood.com/og-image.png"],
        site: "@ScholarBrood"
    }
};

export default function OrderPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src="/Rest easy with us in your writing, enjoy your service.jpg"
        alt="Rest easy with us in your writing, enjoy your service"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-[160px] pb-24 flex flex-col items-center">
        {/* Hero */}
        <h1 className={`${oswald.className} text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-6`}>
          Request Professional Academic, Research & Publication Support
        </h1>

        <p className={`${oswald.className} text-white/90 text-center max-w-3xl mb-16`}>
          Tell us what you need help with — our expert team will respond quickly
          with tailored guidance.
        </p>

        {/* ONLY the form is suspended */}
        <Suspense
          fallback={
            <div className="w-full bg-white/10 backdrop-blur-xl rounded-2xl p-10 text-white text-center">
              <div className="w-12 h-12 mx-auto border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />
              <p className={`${oswald.className} opacity-80`}>Preparing your form…</p>
            </div>
          }
        >
          <OrderForm />
        </Suspense>
      </div>
    </section>
  );
}