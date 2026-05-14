export const siteConfig = {
  legalName: "C U N Medical Equipments Co., Ltd",
  brandName: "C U N Medical",
  foundedYear: "2018",
  description:
    "Leading provider of high-quality medical solutions across China and Europe. We specialize in essential healthcare products including auto-disable immunization syringes, sterile hypodermic syringes, and protective face masks—engineered to safeguard medical professionals and patients.",
  /** Full company narrative (About page & SEO). */
  companyStory: [
    "Founded in 2018, C U N Medical Equipments Co., Ltd is a leading provider of high-quality medical solutions across China and Europe. We specialize in the production of essential healthcare products, including auto-disable immunization syringes, sterile hypodermic syringes, and protective face masks—engineered to safeguard medical professionals and patients from virus-related infections.",
    "Our state-of-the-art manufacturing facility is one of the largest in China, with a production capacity of 1.8 billion syringes annually. We utilize cutting-edge E-beam sterilisation technology, medical-grade materials, and eco-efficient processes that reduce plastic usage by 30%, all while maintaining the highest standards of safety and performance.",
    "C U N Medical Equipments Co., Ltd operates under strict compliance with global regulatory standards. We are certified under ISO 9001:2015 (Quality Management Systems) and ISO 13485:2016 (Medical Device Management Systems), and our products are also proudly endorsed by the Chinese Medical Association.",
    "With local manufacturing capabilities, we ensure timely and reliable access to essential medical consumables for healthcare institutions and professionals across the region.",
  ],
  certifications: [
    "ISO 9001:2015 — Quality Management Systems",
    "ISO 13485:2016 — Medical Device Management Systems",
    "Endorsed by the Chinese Medical Association",
  ],
  highlights: {
    annualSyringeCapacity: "1.8 billion syringes",
    plasticReduction: "30%",
    sterilisation: "E-beam sterilisation",
  },
  url: "https://cunmedical.example.com",
  email: "contactus@cunmedsurgeq.com",
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

export const primaryPhone = siteConfig.offices.usa.phone;
