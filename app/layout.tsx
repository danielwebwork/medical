import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/Toaster";
import { JsonLd } from "@/components/seo/JsonLd";
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
  metadataBase: new URL("https://cunmedical.example.com"),
  title: {
    default: "C U N Medical | Medical & Surgical Equipment",
    template: "%s | C U N Medical",
  },
  description:
    "Browse certified medical machines, diagnostic imaging, patient monitors, and surgical equipment. Installation, logistics, and after-sales support from our China and USA offices.",
  keywords: [
    "medical equipment",
    "surgical equipment",
    "ECG machine",
    "ultrasound",
    "patient monitor",
    "C U N Medical",
    "medical equipment supplier",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "C U N Medical and Surgical Equipment Co., Limited",
    title: "C U N Medical | Medical & Surgical Equipment",
    description:
      "Premium medical equipment sales, installation, and maintenance for healthcare facilities.",
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
