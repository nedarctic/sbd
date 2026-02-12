import type { Metadata } from "next";
import { oswald } from "@/components/ui/fonts";
import { ThemeProvider } from "next-themes";
import "@/app/globals.css";

const defaultUrl = process.env.NODE_ENV === "production" ? `https://${process.env.PROD_URL}` : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "ScholarBrood - Academic Writing, Research Support & Publication Services",
  description:
    "ScholarBrood offers professional academic writing, research guidance, and publication processing services for students and researchers worldwide. High-quality, plagiarism-free work, expert mentorship, fast delivery, and journal-ready manuscript support.",
  keywords: [
    "academic writing",
    "research mentorship",
    "AI skills training",
    "online courses",
    "writing tutorials",
    "ScholarBrood",
    "academic guides",
    "digital skills",
  ],
  authors: [{ name: "ScholarBrood", url: "https://scholarbrood.com" }],
  openGraph: {
    title: "ScholarBrood - Expert Academic Support for Students & Researchers.",
    description:
      "ScholarBrood provides professional academic writing, editing, research support, and publication processing for students and researchers worldwide.",
    url: "https://scholarbrood.com",
    siteName: "ScholarBrood",
    type: "website",
    images: [
      {
        url: "https://scholarbrood.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScholarBrood - Academic Writing and Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarBrood - Academic Writing, Research Support & Publication Services",
    description:
      "ScholarBrood offers professional academic writing, research guidance, and publication processing services for students and researchers worldwide. High-quality, plagiarism-free work, expert mentorship, fast delivery, and journal-ready manuscript support.",
    images: ["https://scholarbrood.com/og-image.png"],
    site: "@ScholarBrood",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oswald.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
