import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | Medical consumables & equipment`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [
    "medical consumables",
    "hypodermic syringes",
    "immunization syringes",
    "face masks",
    "ISO 13485",
    "medical equipment",
    siteConfig.brandName,
    "medical equipment supplier",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.legalName,
    title: `${siteConfig.brandName} | Medical consumables & equipment`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-slate-50 font-sans antialiased">
        <JsonLd />
        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
