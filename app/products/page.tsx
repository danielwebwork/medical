import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductsExplorer } from "@/components/product/ProductsExplorer";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop ECG systems, ultrasound, patient monitors, defibrillators, digital X-ray, and oxygen concentrators from C U N Medical.",
  openGraph: {
    title: "Medical equipment catalog | C U N Medical",
    description:
      "Browse certified medical machines with filters, search, and detailed specifications.",
  },
};

export default function ProductsPage() {
  return (
    <Container className="py-12 lg:py-16">
      <ProductsExplorer />
    </Container>
  );
}
