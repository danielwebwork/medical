import { WHOLESALE_IMAGE_POOL } from "@/lib/stock-media";

/**
 * Product imagery: cycles through `WHOLESALE_IMAGE_POOL` (your `public/site/` facility photos).
 * Each product slug maps to three different pool images (deterministic hash).
 */

const POOL = WHOLESALE_IMAGE_POOL;

function hashSlug(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Three distinct images per slug (offsets coprime with typical pool sizes). */
export function tripleForSlug(slug: string): [string, string, string] {
  const n = POOL.length;
  const base = hashSlug(slug) % n;
  const step = n >= 5 ? 4 : 1;
  const step2 = n >= 7 ? 7 : 2;
  return [POOL[base % n], POOL[(base + step) % n], POOL[(base + step2) % n]];
}

/** Core catalog — one distinct triple per product slug. */
export const coreProductImages: Record<string, [string, string, string]> = {
  "ecg-machine-12-channel": tripleForSlug("ecg-machine-12-channel"),
  "portable-ultrasound-scanner": tripleForSlug("portable-ultrasound-scanner"),
  "multiparameter-patient-monitor": tripleForSlug("multiparameter-patient-monitor"),
  "aed-biphasic-defibrillator": tripleForSlug("aed-biphasic-defibrillator"),
  "digital-x-ray-system": tripleForSlug("digital-x-ray-system"),
  "oxygen-concentrator-10l": tripleForSlug("oxygen-concentrator-10l"),
};

export function getExtensionImages(slugBase: string): [string, string, string] {
  return tripleForSlug(slugBase);
}
