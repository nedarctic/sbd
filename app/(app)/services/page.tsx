import ServicesClient from './ServicesClient';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Writing, Research Support & Publication Services | ScholarBrood",
  description: "ScholarBrood offers professional academic writing, research guidance, and publication processing services for students and researchers worldwide. High-quality, plagiarism-free work, expert mentorship, fast delivery, and journal-ready manuscript support.",
  keywords: [
    "academic writing services",
    "research support",
    "thesis writing help",
    "dissertation support",
    "journal publication assistance",
    "proofreading and editing",
    "data analysis SPSS STATA R",
    "research methodology help",
    "academic consultancy",
    "ScholarBrood services"
  ],
  authors: [{ name: "ScholarBrood", url: "https://scholarbrood.com" }],
  openGraph: {
    title: "Services | ScholarBrood – Expert Academic Writing & Research Support",
    description: "ScholarBrood offers professional academic writing, research guidance, and publication processing services for students and researchers worldwide. High-quality, plagiarism-free work, expert mentorship, fast delivery, and journal-ready manuscript support.",
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

export default function ServicesPage() {
  return <ServicesClient />;
}