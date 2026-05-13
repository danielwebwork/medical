/**
 * Curated Unsplash URLs for healthcare / clinical contexts.
 * Avoid removed IDs (e.g. photo-1559757172-57b1bb25b11a returned 404).
 */
export function medU(photoId: string): string {
  const id = photoId.startsWith("photo-") ? photoId : `photo-${photoId}`;
  // Short query string — avoids optimizer / double-encoding issues with long Unsplash params
  return `https://images.unsplash.com/${id}?w=1200&q=80`;
}

/** Shared library — hospital, OR, diagnostics, clinicians. */
const LIB = {
  hospitalCorridor: medU("photo-1576091160399-112ba8d25d1d"),
  operatingRoom: medU("photo-1519494026892-80bbd2d6fd0d"),
  surgeryLights: medU("photo-1516549655169-df83a0774514"),
  clinicalHands: medU("photo-1579684385127-1ef15d5081ec"),
  medicalDevice: medU("photo-1582719478250-c89cae4dc85b"),
  medTechClose: medU("photo-1582719471384-894fbb16e074"),
  stethoscope: medU("photo-1551190822-a9333d879b1f"),
  pharmacyHealth: medU("photo-1584982751601-97dcc096659c"),
  wardHall: medU("photo-1576091160550-2173dba999ef"),
  clinicianPortrait: medU("photo-1559839734-2b71ea197ec2"),
  healthcarePro: medU("photo-1580489944761-15a19d654956"),
  hospitalBed: medU("photo-1532938911079-1b06ac0ce001"),
  clinicTeam: medU("photo-1505751172876-fa1923c5c528"),
  labMicroscope: medU("photo-1587854692152-cbe660dbde88"),
  mriSuite: medU("photo-1631819382756-bdfd29a0b5ba"),
  healthTech: medU("photo-1631549916768-b80bde66d677"),
  labResearch: medU("photo-1551076805-e1869033b561"),
  /** Replaced photo-1586773860418 (404 on Unsplash). */
  diagnosticSession: medU("photo-1582719478250-c89cae4dc85b"),
  patientCare: medU("photo-1532938911079-1b06ac0ce001"),
} as const;

const A = LIB;
const triple = (a: string, b: string, c: string): [string, string, string] => [a, b, c];

/** Core catalog — imagery aligned with product type. */
export const coreProductImages: Record<string, [string, string, string]> = {
  "ecg-machine-12-channel": triple(
    A.clinicalHands,
    A.stethoscope,
    A.medicalDevice,
  ),
  
  "portable-ultrasound-scanner": triple(
    A.surgeryLights,
    A.operatingRoom,
    A.medTechClose,
  ),
  "multiparameter-patient-monitor": triple(
    A.wardHall,
    A.hospitalCorridor,
    A.medicalDevice,
  ),
  "aed-biphasic-defibrillator": triple(
    A.hospitalBed,
    A.clinicianPortrait,
    A.operatingRoom,
  ),
  "digital-x-ray-system": triple(A.mriSuite, A.surgeryLights, A.operatingRoom),
  "oxygen-concentrator-10l": triple(
    A.pharmacyHealth,
    A.healthcarePro,
    A.hospitalBed,
  ),
};

/** Extension rows — slugBase → three URLs (clinical / equipment context). */
export const extensionImagesBySlugBase: Record<string, [string, string, string]> = {
  "portable-spirometer": triple(A.labMicroscope, A.clinicalHands, A.diagnosticSession),
  "holter-recorder": triple(A.clinicalHands, A.stethoscope, A.medicalDevice),
  "vein-finder": triple(A.medTechClose, A.clinicalHands, A.operatingRoom),
  "colposcope-digital": triple(A.surgeryLights, A.operatingRoom, A.medTechClose),
  "fetal-monitor": triple(A.wardHall, A.hospitalBed, A.clinicianPortrait),
  "infusion-pump": triple(A.hospitalCorridor, A.medicalDevice, A.wardHall),
  "syringe-pump": triple(A.pharmacyHealth, A.medicalDevice, A.hospitalCorridor),
  "anesthesia-workstation": triple(A.operatingRoom, A.surgeryLights, A.mriSuite),
  "surgical-led-light": triple(A.surgeryLights, A.operatingRoom, A.medTechClose),
  "operating-table": triple(A.operatingRoom, A.surgeryLights, A.hospitalCorridor),
  "patient-stretcher": triple(A.hospitalBed, A.wardHall, A.hospitalCorridor),
  "pulse-oximeter-handheld": triple(A.stethoscope, A.clinicalHands, A.medicalDevice),
  "autoclave-tabletop": triple(A.labMicroscope, A.operatingRoom, A.pharmacyHealth),
  "suction-unit": triple(A.operatingRoom, A.medicalDevice, A.surgeryLights),
  "electrosurgical-unit": triple(A.surgeryLights, A.medTechClose, A.operatingRoom),
  "lcd-vision-chart": triple(A.diagnosticSession, A.clinicalHands, A.healthcarePro),
  "audiometer-booth": triple(A.healthcarePro, A.clinicTeam, A.diagnosticSession),
  "video-laryngoscope": triple(A.medTechClose, A.surgeryLights, A.operatingRoom),
  "flexible-bronchoscope": triple(A.operatingRoom, A.medTechClose, A.mriSuite),
  "coagulation-analyzer": triple(A.labMicroscope, A.labResearch, A.pharmacyHealth),
  "hematology-3part": triple(A.labResearch, A.labMicroscope, A.diagnosticSession),
  "centrifuge-clinical": triple(A.labMicroscope, A.labResearch, A.medicalDevice),
  "incubator-infant": triple(A.hospitalBed, A.wardHall, A.clinicianPortrait),
  "phototherapy-led": triple(A.hospitalBed, A.wardHall, A.patientCare),
  "cpap-hospital": triple(A.hospitalBed, A.medicalDevice, A.pharmacyHealth),
  "high-flow-nasal": triple(A.patientCare, A.hospitalBed, A.pharmacyHealth),
  "dental-chair-package": triple(A.operatingRoom, A.surgeryLights, A.healthTech),
  "slit-lamp-digital": triple(A.medTechClose, A.diagnosticSession, A.clinicalHands),
  "laser-physio": triple(A.medicalDevice, A.clinicalHands, A.labMicroscope),
  "tourniquet-system": triple(A.surgeryLights, A.operatingRoom, A.medTechClose),
  "mri-compatible-monitor": triple(A.mriSuite, A.wardHall, A.medicalDevice),
};

export function getExtensionImages(slugBase: string): [string, string, string] {
  return (
    extensionImagesBySlugBase[slugBase] ??
    triple(A.hospitalCorridor, A.clinicalHands, A.medicalDevice)
  );
}
