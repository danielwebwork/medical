import type { Product, ProductCategory } from "@/types";

const u = (photoId: string) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=80`;

export const products: Product[] = [

  {
    
    id: "p-ecg-01",
    slug: "ecg-machine-12-channel",
    name: "12-Channel Digital ECG Machine",
    shortDescription:
      "Clinical-grade electrocardiograph with automatic interpretation and thermal printing.",
    description:
      "Our 12-channel digital ECG system delivers crisp waveforms, built-in arrhythmia detection, and optional Wi-Fi export for hospital information systems. Ideal for cardiology clinics, general practice, and mobile screening programs.",
    price: 4899,
    category: "Diagnostic",
    images: [
      u("photo-1559757172-57b1bb25b11a"),
      u("photo-1579684385127-1ef15d5081ec"),
      u("photo-1582719478250-c89cae4dc85b"),
    ],
    specifications: {
      Channels: "12-lead simultaneous acquisition",
      Display: "10.1\" color touchscreen",
      Sampling: "32 kHz per channel",
      Connectivity: "USB, LAN, optional Wi-Fi",
      Power: "100–240 VAC / internal battery",
      Standards: "CE marked, ISO 13485 manufacturing",
    },
    featured: true,
  },
  {
    id: "p-us-01",
    slug: "portable-ultrasound-scanner",
    name: "Portable Ultrasound Scanner",
    shortDescription:
      "High-resolution imaging for obstetrics, abdominal, and vascular applications.",
    description:
      "Compact cart-based ultrasound with phased array and convex probes, harmonic imaging, and Doppler modes. Designed for busy departments that need dependable imaging without a full fixed-room installation.",
    price: 42500,
    category: "Imaging",
    images: [
      u("photo-1516549655169-df83a0774514"),
      u("photo-1582719471384-894fbb16e074"),
      u("photo-1579684385127-1ef15d5081ec"),
    ],
    specifications: {
      Probes: "Convex + linear (optional cardiac)",
      Modes: "B, M, Color/PW/CW Doppler",
      Display: "21.5\" LED with articulating arm",
      Storage: "1 TB SSD with DICOM export",
      Applications: "OB/GYN, abdomen, small parts, vascular",
    },
    featured: true,
  },
  {
    id: "p-pm-01",
    slug: "multiparameter-patient-monitor",
    name: "Multiparameter Patient Monitor",
    shortDescription:
      "Bedside monitoring of ECG, SpO₂, NIBP, respiration, and temperature.",
    description:
      "A dependable multiparameter monitor for wards, recovery, and intermediate care. Large numerics, configurable alarms, and optional EtCO₂ module for expanded capability.",
    price: 3450,
    category: "Patient Monitoring",
    images: [
      u("photo-1551190822-a9333d879b1f"),
      u("photo-1584982751601-97dcc096659c"),
      u("photo-1576091160550-2173dba999ef"),
    ],
    specifications: {
      Parameters: "ECG, SpO₂, NIBP, RESP, TEMP",
      Display: "15\" anti-glare touchscreen",
      Battery: "Up to 4 hours on internal pack",
      Alarms: "Visual, audible, nurse call relay",
      Mounting: "Rolling stand or wall mount",
    },
    featured: true,
  },
  {
    id: "p-defib-01",
    slug: "aed-biphasic-defibrillator",
    name: "Biphasic AED / Defibrillator",
    shortDescription:
      "Semi-automatic defibrillator with clear voice prompts and adult/pediatric pads.",
    description:
      "Public-access and clinical-ready biphasic defibrillator with impedance compensation, CPR metronome, and event recording. Rugged housing suitable for ambulances, airports, and hospital corridors.",
    price: 1799,
    category: "Emergency",
    images: [
      u("photo-1582719471384-894fbb16e074"),
      u("photo-1579684385127-1ef15d5081ec"),
      u("photo-1559757172-57b1bb25b11a"),
    ],
    specifications: {
      Waveform: "Biphasic truncated exponential",
      Energy: "150–360 J (adult), pediatric attenuation",
      IPRating: "IP55 (model dependent)",
      SelfTest: "Daily automatic checks",
      Data: "USB export of incident reports",
    },
    featured: false,
  },
  {
    id: "p-xr-01",
    slug: "digital-x-ray-system",
    name: "Digital X-Ray System (DR)",
    shortDescription:
      "Ceiling or floor-mounted DR suite with high-frequency generator and flat-panel detector.",
    description:
      "Complete digital radiography room package including generator, tube stand, table, and wireless FPD. Optimized dose protocols and PACS-ready DICOM workflow for modern imaging departments.",
    price: 185000,
    category: "Imaging",
    images: [
      u("photo-1519494026892-80bbd2d6fd0d"),
      u("photo-1582719478250-c89cae4dc85b"),
      u("photo-1576091160399-112ba8d25d1d"),
    ],
    specifications: {
      Generator: "80 kW high-frequency",
      Detector: "17×17\" CsI wireless FPD",
      Resolution: "Up to 3.5 lp/mm",
      Room: "Lead shielding plan support included",
      Software: "APR, stitching, DICOM send",
    },
    featured: false,
  },
  {
    id: "p-o2-01",
    slug: "oxygen-concentrator-10l",
    name: "10L Oxygen Concentrator",
    shortDescription:
      "Continuous-flow concentrator for home care and ward oxygen therapy support.",
    description:
      "Robust 10 L/min oxygen concentrator with purity alarm, low-noise compressor, and easy filter access. Suitable for extended operation in clinics, nursing facilities, and home oxygen programs.",
    price: 1249,
    category: "Respiratory",
    images: [
      u("photo-1584982751601-97dcc096659c"),
      u("photo-1551190822-a9333d879b1f"),
      u("photo-1576091160550-2173dba999ef"),
    ],
    specifications: {
      Flow: "1–10 L/min continuous",
      Purity: "93% ±3% at 5 L/min",
      Sound: "≤ 52 dB at 1 m (typical)",
      Alarms: "Low O₂, power failure, high temp",
      Power: "230 VAC, 400 VA typical",
    },
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(
  product: Product,
  limit = 3,
): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.featured),
    )
    .slice(0, limit);
}

export const categories: ProductCategory[] = Array.from(
  new Set(products.map((p) => p.category)),
).sort() as ProductCategory[];
