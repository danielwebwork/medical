/**
 * Product & catalog imagery: **your** `public/site/` photos first, then supplemental
 * Unsplash shots (warehouse shelves, cartons, logistics, packaging — verified HTTP 200).
 * Add more files under `public/site/` and prepend paths to `LOCAL_FACILITY`; add more ids to
 * `SUPPLEMENT_PHOTO_IDS` from https://unsplash.com (Unsplash license applies).
 */
const LOCAL_FACILITY = [
  "/site/facility-warehouse-wide.png",
  "/site/facility-monitors-rows.png",
  "/site/facility-hospital-beds.png",
  "/site/facility-forklift-aisle.png",
  "/site/facility-beds-and-cartons.png",
] as const;

/** Your `public/site/` uploads — use for featured placement on the home page, etc. */
export const LOCAL_FACILITY_IMAGES: readonly string[] = LOCAL_FACILITY;

/** Unsplash `photo-*` ids — wholesale / logistics / packaging (not your facility). */
const SUPPLEMENT_PHOTO_IDS = [
  "1586528116311-ad8dd3c8310d",
  "1605745341112-85968b19335b",
  "1553413077-190dd305871c",
  "1600880292089-90a7e086ee0c",
  "1600880292203-757bb62b4baf",
  "1578662996442-48f60103fc96",
  "1560250097-0b93528c311a",
  "1558618666-fcd25c85cd64",
  "1596462502278-27bfdc403348",
  "1582719471384-894fbb16e074",
  "1582719478250-c89cae4dc85b",
  "1587854692152-cbe660dbde88",
] as const;

function unsplash(photoId: string, w: number): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${w}&q=80`;
}

const SUPPLEMENT_CARDS: readonly string[] = SUPPLEMENT_PHOTO_IDS.map((id) =>
  unsplash(id, 1200),
);

/** Full pool for product grids — your facility first, then supplemental stock. */
export const WHOLESALE_IMAGE_POOL: readonly string[] = [
  ...LOCAL_FACILITY,
  ...SUPPLEMENT_CARDS,
];

const P = WHOLESALE_IMAGE_POOL;

/**
 * Hero & About use **your** facility shots; testimonial thumbnails use supplemental images
 * so the whole UI is not only the same five files.
 */
export const stockWholesale = {
  warehouseShelvesWide: P[0],
  warehouseShelvesCard: P[1],
  logisticsWide: P[3],
  logisticsCard: P[3],
  packagingCard: P[4],
  packagingWide: P[0],
  operationsCard: P[1],
  operationsAlt: P[2],
  thumbA: unsplash(SUPPLEMENT_PHOTO_IDS[2], 400),
  thumbB: unsplash(SUPPLEMENT_PHOTO_IDS[6], 400),
  thumbC: unsplash(SUPPLEMENT_PHOTO_IDS[9], 400),
} as const;