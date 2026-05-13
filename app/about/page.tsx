import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.legalName}: mission, vision, and why healthcare facilities trust our equipment sourcing.`,
};

const milestones = [
  { year: "2008", text: "Founded with a focus on diagnostic accessories and consumables." },
  { year: "2013", text: "Expanded into imaging and patient monitoring turnkey projects." },
  { year: "2019", text: "Nationwide field engineering network for installation and PM." },
  { year: "2024", text: "Digital catalog and structured procurement for hospitals and PPP programs." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-medical-900 py-16 text-white lg:py-24">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-950 via-medical-900/90 to-medical-800/80" />
        <Container className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-medical-200">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.legalName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100/90">
            We are a specialized distributor of medical machines and surgical equipment,
            supporting hospitals, diagnostic centers, and government health programs with
            accountable project delivery.
          </p>
        </Container>
      </section>

      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Company"
              title="Introduction"
              subtitle={`${siteConfig.brandName} combines international OEM relationships with local regulatory awareness and field service depth.`}
              className="mb-8"
            />
            <p className="text-slate-600">
              From first site survey to warranty administration, our multidisciplinary team
              aligns biomedical engineering, clinical applications, and logistics so your
              capital equipment investments translate into reliable patient care.
            </p>
            <p className="mt-4 text-slate-600">
              We maintain long-term partnerships—not transactional quotes—because healthcare
              infrastructure deserves continuity, documentation, and transparent communication.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-medical-100 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
              alt="Clinical team reviewing equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-slate-900">Mission</h2>
            <p className="mt-3 text-slate-600">
              Equip healthcare providers with certified, well-supported medical technology that
              improves diagnostic confidence and operational efficiency for our customers worldwide.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-slate-900">Vision</h2>
            <p className="mt-3 text-slate-600">
              Become the reference partner for end-to-end medical equipment lifecycle
              services—from capital planning to decommissioning—anchored in patient safety.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            eyebrow="Trust"
            title="Why customers rely on us"
            subtitle="Procurement and clinical leaders choose C U N Medical for governance, documentation, and predictable delivery."
            align="center"
            className="mx-auto"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Installations delivered", value: "500+" },
              { label: "Service contracts active", value: "180+" },
              { label: "Average response (business hrs)", value: "< 4h" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-medical-100 bg-gradient-to-br from-medical-50 to-white p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-medical-800">{s.value}</p>
                <p className="mt-2 text-sm text-slate-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            eyebrow="Timeline"
            title="Milestones"
            subtitle="A steady trajectory focused on capability—not hype."
          />
          <ol className="mt-8 space-y-6 border-l-2 border-medical-200 pl-6">
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[calc(0.5rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-medical-600 shadow" />
                <p className="text-sm font-bold text-medical-700">{m.year}</p>
                <p className="mt-1 text-slate-600">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </>
  );
}
