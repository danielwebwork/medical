import type { Product, ProductCategory } from "@/types";
import { coreProductImages, getExtensionImages } from "@/data/medical-images";

const coreProducts: Product[] = [
  {
    id: "p-ecg-01",
    slug: "ecg-machine-12-channel",
    name: "12-Channel Digital ECG Machine",
    shortDescription:
      "Clinical-grade electrocardiograph with automatic interpretation and thermal printing.",
    description:
      "Our 12-channel digital ECG system delivers crisp waveforms, built-in arrhythmia detection, and optional Wi-Fi export for hospital information systems. Ideal for cardiology clinics, general practice, and mobile screening programs.",
    category: "Diagnostic",
    images: [...coreProductImages["ecg-machine-12-channel"]],
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
    category: "Imaging",
    images: [...coreProductImages["portable-ultrasound-scanner"]],
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
    category: "Patient Monitoring",
    images: [...coreProductImages["multiparameter-patient-monitor"]],
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
    category: "Emergency",
    images: [...coreProductImages["aed-biphasic-defibrillator"]],
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
    category: "Imaging",
    images: [...coreProductImages["digital-x-ray-system"]],
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
    category: "Respiratory",
    images: [...coreProductImages["oxygen-concentrator-10l"]],
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

type Template = {
  slugBase: string;
  name: string;
  short: string;
  long: string;
  category: ProductCategory;
  featured?: boolean;
  specs: Record<string, string>;
};

const extensionTemplates: Template[] = [
  {
    slugBase: "portable-spirometer",
    name: "Portable Diagnostic Spirometer",
    short: "Lung function testing with PC software and calibration syringe.",
    long: "Handheld spirometer suitable for occupational health, asthma clinics, and pre-operative screening with ATS/ERS traceability.",
    category: "Diagnostic",
    specs: { Sensor: "Digital turbine", Software: "Windows reporting", Standards: "ATS/ERS" },
  },
  {
    slugBase: "holter-recorder",
    name: "Digital Holter Recorder (3-channel)",
    short: "Lightweight recorder with event button and patient diary app.",
    long: "Three-channel Holter with high-resolution sampling, noise rejection, and cloud upload option for reading centers.",
    category: "Diagnostic",
    specs: { Channels: "3", Recording: "24–168 h", Storage: "SD + USB export" },
  },
  {
    slugBase: "vein-finder",
    name: "Near-Infrared Vein Visualization Device",
    short: "Hands-free cart or tabletop vein illumination for venipuncture.",
    long: "Improves first-stick success in pediatrics and bariatric care with adjustable projection color and brightness.",
    category: "Diagnostic",
    specs: { Wavelength: "850 nm class", Mount: "Cart / pole", Power: "Internal battery" },
  },
  {
    slugBase: "colposcope-digital",
    name: "Digital Video Colposcope",
    short: "HD optics with on-screen measurement and image capture.",
    long: "Integrated LED illumination, green filter, and documentation software for outpatient gynecology.",
    category: "Imaging",
    specs: { Optics: "5–40× zoom", Camera: "4K CMOS", Illumination: "LED ring" },
  },
  {
    slugBase: "fetal-monitor",
    name: "Antepartum Fetal Monitor",
    short: "NST with twins support, tocodynamometry, and central station ready.",
    long: "Bedside fetal heart rate monitoring for L&D and antepartum units with trace interpretation tools.",
    category: "Patient Monitoring",
    specs: { Ultrasound: "1.0 MHz waterproof", TOCO: "External", Display: "12\" touch" },
  },
  {
    slugBase: "infusion-pump",
    name: "Volumetric Infusion Pump",
    short: "Drug library, air-in-line detection, and bolus mode.",
    long: "General-purpose IV pump for med-surg floors with Wi-Fi dose error reduction integration.",
    category: "Patient Monitoring",
    specs: { Flow: "0.1–1200 mL/h", Battery: "8 h typical", Connectivity: "Optional Wi-Fi" },
  },
  {
    slugBase: "syringe-pump",
    name: "Syringe Infusion Pump",
    short: "Stackable design with occlusion pressure monitoring.",
    long: "High-accuracy syringe driver for ICU, NICU, and anesthesia with guardrails and lockable keypad.",
    category: "Patient Monitoring",
    specs: { Syringes: "5–60 mL", Rate: "0.1–1800 mL/h", Mount: "Pole clamp" },
  },
  {
    slugBase: "anesthesia-workstation",
    name: "Anesthesia Delivery Workstation",
    short: "Low-flow anesthesia with integrated ventilator and gas monitoring.",
    long: "Ceiling or mobile configuration with vaporizers, AGSS interface, and optional EtAA.",
    category: "Respiratory",
    specs: { Vaporizers: "2× Selectatec", Ventilator: "Integrated ICU modes", Monitors: "FiO₂, EtCO₂" },
  },
  {
    slugBase: "surgical-led-light",
    name: "LED Surgical Shadowless Light",
    short: "Single dome with adjustable color temperature and depth of field.",
    long: "Cool-light LED head for general surgery suites with suspension arm options.",
    category: "Emergency",
    specs: { Illuminance: "160,000 lx @ 1 m", CCT: "3500–5000 K", Sterilizable: "Handle" },
  },
  {
    slugBase: "operating-table",
    name: "Electro-Hydraulic Operating Table",
    short: "Carbon fiber extension, kidney bridge, and battery backup.",
    long: "General surgery table with radiolucent top segments and intuitive hand control.",
    category: "Emergency",
    specs: { Capacity: "360 kg", Movements: "8 motorized", Imaging: "C-arm compatible" },
  },
  {
    slugBase: "patient-stretcher",
    name: "Hydraulic Patient Stretcher",
    short: "Side rails, fifth wheel steering, and oxygen bottle holder.",
    long: "Emergency department stretcher with Trendelenburg and IV pole integration.",
    category: "Patient Monitoring",
    specs: { Mattress: "76 mm foam", Rails: "Aluminum collapsible", Brakes: "Central locking" },
  },
  {
    slugBase: "pulse-oximeter-handheld",
    name: "Handheld Pulse Oximeter",
    short: "Spot-check SpO₂ and pulse for triage and transport.",
    long: "Rugged handheld with plethysmograph, alarms, and long battery life for outreach programs.",
    category: "Diagnostic",
    specs: { "SpO2 range": "70–100%", Pulse: "25–250 bpm", Power: "AA alkaline" },
  },
  {
    slugBase: "autoclave-tabletop",
    name: "Tabletop Steam Sterilizer (Class B)",
    short: "18 L chamber with USB cycle logging and drying phase.",
    long: "Compact autoclave for dental and minor surgery instrument reprocessing with validated cycles.",
    category: "Respiratory",
    specs: { Chamber: "18 L", Cycles: "134 °C vacuum", Standards: "EN 13060" },
  },
  {
    slugBase: "suction-unit",
    name: "Electric Surgical Suction Pump",
    short: "High flow for OR and ward with bacterial filters.",
    long: "Oil-free piston pump with collection jars and overflow protection.",
    category: "Respiratory",
    specs: { Flow: "40 L/min", Vacuum: "-85 kPa", Jars: "2× 2 L" },
  },
  {
    slugBase: "electrosurgical-unit",
    name: "Electrosurgical Generator (400 W)",
    short: "Monopolar and bipolar modes with vessel sealing option.",
    long: "RF generator for open and laparoscopic procedures with footswitch and recall presets.",
    category: "Emergency",
    specs: { Power: "400 W", Modes: "Cut, coag, blend", Footswitch: "Included" },
  },
  {
    slugBase: "lcd-vision-chart",
    name: "Digital LCD Vision Chart",
    short: "Snellen, ETDRS, and pediatric optotypes with remote control.",
    long: "Wall-mounted refraction lane chart with calibrated luminance and mirror projection kit.",
    category: "Diagnostic",
    specs: { Screen: "23\" LED", Distance: "2.5–6 m", Standards: "ISO 8596" },
  },
  {
    slugBase: "audiometer-booth",
    name: "Clinical Diagnostic Audiometer",
    short: "AC/BC testing with insert earphones and bone oscillator.",
    long: "Two-channel audiometer for booth-based threshold testing with PC interface.",
    category: "Diagnostic",
    specs: { Frequencies: "125–8000 Hz", Masking: "Narrowband", Output: "USB / print" },
  },
  {
    slugBase: "video-laryngoscope",
    name: "Reusable Video Laryngoscope System",
    short: "Anti-fog blade set with 3.5\" display and recording.",
    long: "Difficult airway management kit with Macintosh and D-blade sizes for adult and pediatric.",
    category: "Emergency",
    specs: { Display: "3.5\" LCD", Blades: "5 sizes", Storage: "SD card" },
  },
  {
    slugBase: "flexible-bronchoscope",
    name: "Portable Flexible Bronchoscope",
    short: "USB-powered imaging for bedside and ICU bronchoscopy.",
    long: "Single-use sheath compatible scope with irrigation and biopsy channel.",
    category: "Imaging",
    specs: { Diameter: "5.2 mm", Working: "120 cm", Channel: "2.0 mm" },
  },
  {
    slugBase: "coagulation-analyzer",
    name: "Semi-Auto Coagulation Analyzer",
    short: "PT/APTT with incubation block and built-in printer.",
    long: "Compact coagulation benchtop for satellite labs and anticoagulation clinics.",
    category: "Diagnostic",
    specs: { Tests: "PT, APTT, FIB", Throughput: "60 samples/h", Printer: "Thermal" },
  },
  {
    slugBase: "hematology-3part",
    name: "3-Part Hematology Analyzer",
    short: "CBC with histograms and QC management software.",
    long: "Closed tube sampling with reagent pack tracking for small to mid-volume labs.",
    category: "Diagnostic",
    specs: { Parameters: "21 + 3 histograms", Sample: "Whole blood 20 µL", Throughput: "60/h" },
  },
  {
    slugBase: "centrifuge-clinical",
    name: "Clinical Benchtop Centrifuge",
    short: "Fixed-angle rotor for blood tubes up to 15 mL.",
    long: "PRP and routine separation with programmable cycles and lid safety interlock.",
    category: "Diagnostic",
    specs: { Speed: "4500 rpm", Capacity: "8× 15 mL", Timer: "0–99 min" },
  },
  {
    slugBase: "incubator-infant",
    name: "Infant Incubator with Servo Control",
    short: "Air and skin temperature servo, humidity, and oxygen blend.",
    long: "NICU incubator with elevating bed, X-ray tray, and alarm relay outputs.",
    category: "Patient Monitoring",
    specs: { Temp: "32–37.5 °C", Humidity: "Up to 95%", "O2 blend": "21–65%" },
  },
  {
    slugBase: "phototherapy-led",
    name: "LED Phototherapy System",
    short: "High-intensity bilirubin phototherapy with hour meter.",
    long: "Overhead unit for NICU with height-adjustable stand and eye shields pack.",
    category: "Patient Monitoring",
    specs: { Irradiance: "≥ 60 µW/cm²/nm", Peak: "460 nm", Timer: "999 h log" },
  },
  {
    slugBase: "cpap-hospital",
    name: "Hospital CPAP / BiPAP Ventilator",
    short: "Non-invasive ventilation with leak compensation and SpO₂ option.",
    long: "Adult NIV device for step-down units with integrated humidifier and trolley.",
    category: "Respiratory",
    specs: { Modes: "CPAP, S, ST", Range: "4–30 cmH₂O", Alarm: "Low minute ventilation" },
  },
  {
    slugBase: "high-flow-nasal",
    name: "High-Flow Nasal Cannula Oxygen Therapy Unit",
    short: "Heated humidification up to 60 L/min with integrated blender.",
    long: "HFNC system for adult and pediatric interfaces with weaning protocols.",
    category: "Respiratory",
    specs: { Flow: "2–60 L/min", "FiO2": "21–100%", Temp: "31–37 °C" },
  },
  {
    slugBase: "dental-chair-package",
    name: "Dental Treatment Unit Package",
    short: "Chair, delivery system, scaler, and operating light bundle.",
    long: "Complete operatory package with ceramic cuspidor and assistant instrumentation.",
    category: "Emergency",
    specs: { Chair: "Syncro articulating", Instruments: "4 hoses", Light: "LED" },
  },
  {
    slugBase: "slit-lamp-digital",
    name: "Digital Slit Lamp Microscope",
    short: "Five-magnification turret with imaging adapter.",
    long: "Ophthalmology slit lamp with optional dry eye tear film imaging module.",
    category: "Imaging",
    specs: { Magnification: "6×–40×", Illumination: "LED", Camera: "Optional 12 MP" },
  },
  {
    slugBase: "laser-physio",
    name: "Low-Level Laser Therapy Unit",
    short: "Class 3B probe for pain management and tissue repair protocols.",
    long: "Portable LLLT with preset programs and safety eyewear for physiotherapy clinics.",
    category: "Diagnostic",
    specs: { Wavelength: "808 nm", Power: "500 mW", Programs: "30 built-in" },
  },
  {
    slugBase: "tourniquet-system",
    name: "Pneumatic Surgical Tourniquet System",
    short: "Dual channel with limb occlusion pressure estimation.",
    long: "OR tourniquet with battery backup and audible leak alarm.",
    category: "Emergency",
    specs: { Channels: "2", Pressure: "50–600 mmHg", Timer: "0–240 min" },
  },
  {
    slugBase: "mri-compatible-monitor",
    name: "MRI-Conditional Patient Monitor",
    short: "Fiber-linked display for MR suite vital signs.",
    long: "Non-ferrous sensors and long fiber trunk for 1.5 T and 3 T environments.",
    category: "Patient Monitoring",
    specs: { Parameters: "NIBP, SpO₂, ECG", Cable: "40 m fiber", Conditional: "3 T" },
  },
];

function buildExtensionProducts(): Product[] {
  return extensionTemplates.map((t, i) => {
    const seq = i + 7;
    const id = `p-ext-${String(seq).padStart(3, "0")}`;
    const slug = `${t.slugBase}-cun${seq}`;
    return {
      id,
      slug,
      name: t.name,
      shortDescription: t.short,
      description: t.long,
      category: t.category,
      images: [...getExtensionImages(t.slugBase)],
      specifications: { ...t.specs, "Warranty": "12 months parts (typical)" },
      featured: t.featured ?? false,
    };
  });
}

export const products: Product[] = [...coreProducts, ...buildExtensionProducts()];

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
