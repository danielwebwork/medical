import type { Metadata } from "next";
import {
  FiActivity,
  FiCpu,
  FiHeadphones,
  FiLayers,
  FiTruck,
} from "react-icons/fi";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `${siteConfig.brandName} — high-volume syringe & mask manufacturing, E-beam sterilisation, regulatory compliance, and supply to China and Europe.`,
};

const services = [
  {
    title: "Medical consumable manufacturing",
    description:
      "Auto-disable immunisation syringes, sterile hypodermic syringes, and protective face masks—produced with validated processes and batch traceability.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    title: "E-beam sterilisation",
    description:
      "Cutting-edge electron-beam sterilisation integrated into production flow for consistent microbiological safety.",
    icon: <FiCpu className="h-6 w-6" />,
  },
  {
    title: "Quality & regulatory support",
    description:
      "Operations aligned with ISO 9001:2015 and ISO 13485:2016, plus documentation support for tenders and hospital onboarding.",
    icon: <FiActivity className="h-6 w-6" />,
  },
  {
    title: "Programme & tender consultation",
    description:
      "Guidance on volume planning, specification alignment, and sustainable packaging options—including plastic-reduction initiatives.",
    icon: <FiHeadphones className="h-6 w-6" />,
  },
  {
    title: "Export & logistics",
    description:
      "Coordinated supply from our China facility to healthcare institutions and distributors across Europe and the wider region.",
    icon: <FiTruck className="h-6 w-6" />,
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-14 lg:py-20">
      <SectionTitle
        eyebrow="Services"
        title="From sterile production to your supply chain"
        subtitle={`${siteConfig.legalName} combines large-scale manufacturing with the certifications and endorsements healthcare buyers expect.`}
        align="center"
        className="mx-auto"
      />
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Container>
  );
}
