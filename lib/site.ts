export const siteConfig = {
  legalName: "C U N Medical and Surgical Equipment Co., Limited",
  brandName: "C U N Medical",
  description:
    "Trusted supplier of medical machines, diagnostic systems, and surgical equipment for hospitals and clinics worldwide.",
  url: "https://cunmedical.example.com",
  /** Set when you have a public inbox; contact form + phones are primary. */
  email: null as string | null,
  offices: {
    china: {
      label: "China office",
      address:
        "China, Hebei, Taocheng District, Unit 1, Building 2, Zijin Plaza, Renmin Road, Hengshui City, 1901",
      phone: "+8618322833700",
      phoneTel: "+8618322833700",
    },
    usa: {
      label: "USA office",
      address: "565 New Brunswick Ave Suite 2, Fords, NJ 08863, United States",
      phone: "+1 332 288 3904",
      phoneTel: "+13322883904",
    },
  },
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM (local office time)",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
} as const;

/** Primary line for SEO / JSON-LD (USA office). */
export const primaryPhone = siteConfig.offices.usa.phone;
