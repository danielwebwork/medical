import { FiAward, FiGlobe, FiHeadphones, FiTrendingUp } from "react-icons/fi";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";

const reasons = [
  {
    title: "Clinical-grade sourcing",
    body: "We prioritize devices with traceable serials, factory warranties, and documentation suitable for regulatory files.",
    icon: FiAward,
  },
  {
    title: "Transparent pricing",
    body: "Clear quotations, optional bundles, and no surprise fees for standard commissioning packages.",
    icon: FiTrendingUp,
  },
  {
    title: "Dedicated support",
    body: "Engineers and account managers who understand OR, radiology, and ward workflows—not just sales scripts.",
    icon: FiHeadphones,
  },
  {
    title: "Global reach",
    body: "China and United States offices support export documentation, logistics planning, and responsive follow-up for international buyers.",
    icon: FiGlobe,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Why C U N Medical"
          title="Built for hospitals that cannot afford downtime"
          subtitle="C U N Medical and Surgical Equipment Co., Limited partners with facilities that demand reliability, training, and accountable after-sales care."
          align="center"
          className="mx-auto"
        />
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition hover:border-medical-200"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-medical-100 text-medical-700">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
