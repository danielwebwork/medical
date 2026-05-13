"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageCircle } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] px-7 py-3 text-base";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-medical-900 via-medical-800 to-medical-950 text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Modern hospital corridor"
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
          className="max-w-2xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-medical-100 backdrop-blur">
            Certified medical equipment partner
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Advanced equipment for modern healthcare
          </h1>
          <p className="mt-6 max-w-xl text-lg text-blue-100/90">
            From diagnostic imaging to bedside monitoring, C U N Medical supplies
            dependable systems with installation, training, and worldwide logistics support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className={cn(
                btnBase,
                "bg-white text-medical-800 shadow-card hover:bg-medical-50 focus-visible:ring-medical-500",
              )}
            >
              Browse products
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
