import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductsExplorer } from "@/components/product/ProductsExplorer";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse medical consumables and equipment from C U N Medical Equipments Co., Ltd—syringes, masks, diagnostics, and more. Request a quotation.",
  openGraph: {
    title: "Product catalog | C U N Medical",
    description:
      "Filters, search, and specifications. Contact us for volume supply and export programmes.",
  },
};

export default function ProductsPage() {
  return (
    <Container className="py-12 lg:py-16">
      <ProductsExplorer />
    </Container>
  );
}
