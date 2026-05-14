export type ProductCategory =
  | "Diagnostic"
  | "Imaging"
  | "Patient Monitoring"
  | "Emergency"
  | "Respiratory";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  images: string[];
  specifications: Record<string, string>;
  featured: boolean;
};
