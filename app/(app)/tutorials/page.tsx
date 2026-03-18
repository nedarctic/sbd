import Tutorials from "./Tutorials";
import { type Metadata } from 'next'

export const metadata: Metadata = {
    title: "Academic Tutorials & Guides – ScholarBrood",
    description: "Access expert tutorials and step-by-step guides on academic writing, research methods, literature review, and more to elevate your scholarly work efficiently.",
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

export default async function TutorialsPage () {
  return <Tutorials />
}