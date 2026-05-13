import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-medical-700 to-medical-500 px-8 py-12 text-center shadow-soft sm:px-12 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-medical-900/20 blur-3xl" />
          <h2 className="relative text-balance text-2xl font-bold text-white sm:text-3xl">
            Ready to upgrade your clinical capabilities?
          </h2>
          <p className="relative mx-auto mt-3 max-w-2xl text-medical-50">
            Request a quotation, schedule a demo, or speak with our clinical applications team today.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-base font-semibold text-medical-800 shadow-card",
                "transition hover:bg-medical-50 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-medical-600",
              )}
            >
              Browse products
              <FiArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 bg-transparent px-7 py-3 text-base font-semibold text-white",
                "transition hover:bg-white/10 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-medical-600",
              )}
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
