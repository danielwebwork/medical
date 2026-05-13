import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "C U N Medical delivered our patient monitor fleet on schedule and supervised bedside training for nursing staff.",
    name: "Chief Nursing Officer",
    org: "Regional hospital, North America",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&q=80",
  },
  {
    quote:
      "Their imaging team coordinated generator specs and room shielding checks before our DR go-live. Professional end-to-end.",
    name: "Head of Radiology",
    org: "Imaging center, United States",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80",
  },
  {
    quote:
      "Their team handled export paperwork and kept us informed on production and sea freight milestones from start to handover.",
    name: "Procurement Manager",
    org: "University health system",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-16 text-white lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Teams that trust our delivery"
          subtitle="Representative feedback from healthcare leaders we support worldwide."
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
                  <Image src={t.image} alt="" fill className="object-cover" sizes="44px" />
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
