import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { stockWholesale } from "@/lib/stock-media";

export const metadata: Metadata = {
  title: "About Us",
  description: `${siteConfig.legalName} — founded ${siteConfig.foundedYear}. Medical consumables manufacturing, ISO certified, serving China and Europe.`,
};

const milestones = [
  {
    year: siteConfig.foundedYear,
    text: "Company founded with a focus on safe, scalable production of medical consumables.",
  },
  {
    year: "2020",
    text: "Expanded sterile syringe lines and protective mask capacity for global health demand.",
  },
  {
    year: "2022",
    text: "Invested in E-beam sterilisation and eco-efficient processes to cut plastic use by 30%.",
  },
  {
    year: "2024",
    text: "Strengthened supply to healthcare institutions across China and Europe with local manufacturing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-medical-900 py-16 text-white lg:py-24">
        <Image
          src={stockWholesale.logisticsWide}
          alt="Medical wholesale distribution and packaged supplies"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-950 via-medical-900/90 to-medical-800/80" />
        <Container className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-medical-200">
            About us · Since {siteConfig.foundedYear}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {siteConfig.legalName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100/90">{siteConfig.description}</p>
        </Container>
      </section>

      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          {siteConfig.companyStory.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-medical-100 shadow-card">
            <Image
              src={stockWholesale.packagingCard}
              alt="Medical equipment and consumables in wholesale cartons and boxes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="Manufacturing"
              title="Scale you can rely on"
              subtitle="One of China’s largest facilities for syringe production—with modern sterilisation and sustainability built in."
              className="mb-8"
            />
            <ul className="space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-medical-500" />
                <span>
                  <strong className="text-slate-900">Annual capacity:</strong>{" "}
                  {siteConfig.highlights.annualSyringeCapacity}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-medical-500" />
                <span>
                  <strong className="text-slate-900">Sterilisation:</strong>{" "}
                  {siteConfig.highlights.sterilisation}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-medical-500" />
                <span>
                  <strong className="text-slate-900">Sustainability:</strong> up to{" "}
                  {siteConfig.highlights.plasticReduction} lower plastic usage in supported
                  product lines.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-slate-900">Mission</h2>
            <p className="mt-3 text-slate-600">
              Deliver essential medical consumables that protect clinicians and patients—with
              uncompromising quality, regulatory rigor, and reliable supply across China and
              Europe.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card">
            <h2 className="text-xl font-bold text-slate-900">Vision</h2>
            <p className="mt-3 text-slate-600">
              Be the trusted manufacturing partner for immunisation and infection-prevention
              products, recognised for innovation in sterilisation, materials, and sustainable
              production.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle
            eyebrow="Compliance"
            title="Certifications & endorsements"
            subtitle="We operate under internationally recognised quality and medical device standards."
            align="center"
            className="mx-auto"
          />
          <ul className="mx-auto mt-8 max-w-2xl space-y-3 rounded-2xl border border-medical-100 bg-medical-50/50 p-6 text-slate-800">
            {siteConfig.certifications.map((c) => (
              <li key={c} className="flex gap-2 text-sm sm:text-base">
                <span className="text-medical-600">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <SectionTitle
            eyebrow="Timeline"
            title="Milestones"
            subtitle="Growth focused on manufacturing excellence and global healthcare needs."
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
