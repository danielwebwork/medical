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
  description: `${siteConfig.brandName} provides equipment sales, installation, maintenance, consultation, and international logistics.`,
};

const services = [
  {
    title: "Medical equipment sales",
    description:
      "Needs assessment, comparative quotations, demonstration units, and warranty registration for capital modalities.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    title: "Installation",
    description:
      "Mechanical anchoring, electrical validation, network integration, radiation safety checks (where applicable), and user acceptance protocols.",
    icon: <FiCpu className="h-6 w-6" />,
  },
  {
    title: "Maintenance",
    description:
      "Preventive maintenance schedules, probe and battery replacements, firmware updates, and loaner strategies for critical devices.",
    icon: <FiActivity className="h-6 w-6" />,
  },
  {
    title: "Consultation",
    description:
      "Department layout planning, modality mix advisory, financing structure guidance, and training pathway design.",
    icon: <FiHeadphones className="h-6 w-6" />,
  },
  {
    title: "International logistics",
    description:
      "Sea and air freight coordination, export documentation, insured handling, and last-mile biomedical handover where supported.",
    icon: <FiTruck className="h-6 w-6" />,
  },
];

export default function ServicesPage() {
  return (
    <Container className="py-14 lg:py-20">
      <SectionTitle
        eyebrow="Services"
        title="Lifecycle support for every modality"
        subtitle="Whether you are commissioning a new radiology suite or refreshing ward monitors, our service lines plug into your governance model."
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
