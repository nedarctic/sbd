import Resources from './Resources';
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: "Scholarly Resources – Writing Tools, Tips & Academic Guides",
  description: "Find curated academic resources, writing templates, research tips, and publication strategies designed to support students and researchers at every stage of their journey.",
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

export default async function ResourcesPage() {
  return <Resources />
}