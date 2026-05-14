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
    title: "Sterile consumable production",
    description:
      "Immunisation and hypodermic syringes plus protective masks—manufactured with validated processes and batch release controls.",
    icon: <FiLayers className="h-6 w-6" />,
  },
  {
    title: "Sterilisation & quality systems",
    description:
      "E-beam sterilisation and ISO 9001 / ISO 13485 frameworks so every shipment meets documented safety expectations.",
    icon: <FiActivity className="h-6 w-6" />,
  },
  {
    title: "Sustainable, medical-grade materials",
    description:
      "Eco-efficient steps to reduce plastic use where compatible with sterility—without compromising clinical performance.",
    icon: <FiShield className="h-6 w-6" />,
  },
];

export function HomeServicesPreview() {
  return (
    <section className="border-y border-medical-100 bg-gradient-to-b from-white to-medical-50/40 py-16 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="What we do"
          title="Manufacturing that protects patients &amp; staff"
          subtitle="Large-scale capacity in China with reliable export programmes to Europe and the wider region."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
          <FiTruck className="h-5 w-5 text-medical-600" />
          <span>Export &amp; supply chain coordination — see our full services page.</span>
          <Link href="/services" className="font-semibold text-medical-700 hover:underline">
            Explore services
          </Link>
        </div>
      </Container>
    </section>
  );
}
