import { FiAward, FiGlobe, FiShield, FiZap } from "react-icons/fi";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const reasons = [
  {
    title: "Manufacturing at scale",
    body: `Our facility is among the largest in China, with capacity for ${siteConfig.highlights.annualSyringeCapacity}—supporting national immunisation and hospital supply programmes.`,
    icon: FiAward,
  },
  {
    title: "Sterilisation & materials",
    body: `We use ${siteConfig.highlights.sterilisation} and medical-grade materials, with processes designed to reduce plastic use by up to ${siteConfig.highlights.plasticReduction} where applicable.`,
    icon: FiZap,
  },
  {
    title: "Global standards",
    body: "ISO 9001:2015 and ISO 13485:2016 certified operations, with products endorsed by the Chinese Medical Association.",
    icon: FiShield,
  },
  {
    title: "China & Europe",
    body: "Local manufacturing and disciplined logistics help healthcare institutions access essential consumables on time.",
    icon: FiGlobe,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow={`Why ${siteConfig.brandName}`}
          title="Trusted production for infection prevention"
          subtitle={`${siteConfig.legalName} focuses on syringes, masks, and related consumables—engineered for safety from design through sterilisation.`}
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
