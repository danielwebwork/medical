"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { stockWholesale } from "@/lib/stock-media";

const defaultHeroImage = stockWholesale.warehouseShelvesWide;

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] px-7 py-3 text-base";

export function HeroSection({
  backgroundSrc,
}: {
  backgroundSrc?: string | null;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-medical-900 via-medical-800 to-medical-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc ?? defaultHeroImage}
          alt="Wholesale medical supplies — shelved cartons and boxed equipment"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-950/95 via-medical-900/85 to-medical-800/70" />
      </div>

      <Container className="relative z-10 flex min-h-[520px] flex-col justify-center py-20 lg:min-h-[600px] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-medical-100 backdrop-blur">
            Since {siteConfig.foundedYear} · ISO certified manufacturing
          </p>
          <h1 className="text-balance text-3xl font-black leading-[1.08] tracking-tight text-white drop-shadow-lg [text-shadow:0_2px_20px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[3.75rem]">
            {siteConfig.legalName}
          </h1>
          <p className="mt-5 max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
            Essential medical consumables for China &amp; Europe
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-blue-100/95 sm:text-lg">
            We produce auto-disable immunisation syringes, sterile hypodermic syringes, and
            protective face masks—backed by E-beam sterilisation,{" "}
            {siteConfig.highlights.annualSyringeCapacity} annual capacity, and global quality
            systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className={cn(
                btnBase,
                "bg-white text-medical-800 shadow-card hover:bg-medical-50 focus-visible:ring-medical-500",
              )}
            >
              View products
              <FiArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className={cn(
                btnBase,
                "border-2 border-white/40 bg-white/5 text-white hover:bg-white/15 focus-visible:ring-white",
              )}
            >
              <FiMessageCircle className="h-5 w-5" aria-hidden />
              Contact us
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
