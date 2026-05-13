import { siteConfig, primaryPhone } from "@/lib/site";

function placeSchema(
  label: string,
  address: string,
  phone: string,
): Record<string, unknown> {
  return {
    "@type": "Place",
    name: `${siteConfig.legalName} — ${label}`,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
    },
  };
}

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: primaryPhone,
    ...(siteConfig.email
      ? { email: siteConfig.email }
      : {}),
    location: [
      placeSchema(
        siteConfig.offices.china.label,
        siteConfig.offices.china.address,
        siteConfig.offices.china.phone,
      ),
      placeSchema(
        siteConfig.offices.usa.label,
        siteConfig.offices.usa.address,
        siteConfig.offices.usa.phone,
      ),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
