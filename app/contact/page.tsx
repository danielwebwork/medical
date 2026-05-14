import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { siteConfig, primaryPhone } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.brandName} at ${siteConfig.email} for quotations and equipment support. USA ${primaryPhone}; China ${siteConfig.offices.china.phone}.`,
};

export default function ContactPage() {
  return (
    <Container className="py-14 lg:py-20">
      <SectionTitle
        eyebrow="Contact"
        title="Speak with our applications team"
        subtitle={`Request quotations, schedule demos, or escalate a service ticket. Email ${siteConfig.email} — we respond during business hours.`}
        align="center"
        className="mx-auto"
      />
      <ContactPageContent />
    </Container>
  );
}
