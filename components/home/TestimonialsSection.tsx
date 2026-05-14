import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";

import { stockWholesale } from "@/lib/stock-media";

const testimonials = [
  {
    quote:
      "Sterile syringe lots arrived with full batch documentation and consistent E-beam sterilisation records—exactly what our immunisation programme requires.",
    name: "Programme Director",
    org: "Regional public health authority, Europe",
    image: stockWholesale.thumbA,
  },
  {
    quote:
      "Their auto-disable syringes and face masks met our tender specs for traceability and CMA-backed quality; communication from production to shipment was clear.",
    name: "Head of Procurement",
    org: "University hospital network, China",
    image: stockWholesale.thumbB,
  },
  {
    quote:
      "We value the 30% plastic reduction initiative on compatible lines—without compromising sterility or packaging integrity for our warehouse chain.",
    name: "Supply Chain Lead",
    org: "Healthcare distributor, EU",
    image: stockWholesale.thumbC,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-16 text-white lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Partners who rely on our production"
          subtitle="Hospitals, programmes, and distributors across China and Europe."
          align="center"
          className="mx-auto [&_h2]:text-white [&_p]:text-slate-300"
        />
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20">
                  <Image
                    src={t.image}
                    alt="Wholesale supply and packaging"
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.org}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
