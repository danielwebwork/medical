import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { HomeServicesPreview } from "@/components/home/HomeServicesPreview";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProductsSection />
      <HomeServicesPreview />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
