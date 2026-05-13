import Link from "next/link";
import {
  FiActivity,
  FiLayers,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";

const items = [
  {
    title: "Medical equipment sales",
    description:
      "Curated catalog of diagnostic, imaging, monitoring, and therapy devices from audited manufacturers.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    title: "Installation",
    description:
      "Site surveys, electrical checks, room layout guidance, and commissioning with acceptance testing.",
    icon: <FiActivity className="h-6 w-6" />,
  },
  {
    title: "Maintenance",
    description:
      "Preventive maintenance contracts, spare parts, and rapid technical response to minimize downtime.",
    icon: <FiShield className="h-6 w-6" />,
  },
];

export function HomeServicesPreview() {
  return (
    <section className="border-y border-medical-100 bg-gradient-to-b from-white to-medical-50/40 py-16 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title="End-to-end equipment support"
          subtitle="We do not just ship boxes—we engineer uptime for your clinical teams."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
          <FiTruck className="h-5 w-5 text-medical-600" />
          <span>International shipping available — see our full services page.</span>
          <Link href="/services" className="font-semibold text-medical-700 hover:underline">
            Explore services
          </Link>
        </div>
      </Container>
    </section>
  );
}
