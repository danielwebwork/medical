import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/ui/Container";
import { getFeaturedProducts } from "@/data/products";
import { cn } from "@/lib/utils";

export function FeaturedProductsSection() {
  const featured = getFeaturedProducts().slice(0, 4);
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Catalog"
          title="Featured products"
          subtitle="Browse our range—including consumables and complementary medical equipment. Contact us for programmes, tenders, and volume supply."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/products"
            className={cn(
              "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-medical-200 bg-white px-7 py-3 text-base font-medium text-medical-800",
              "transition-all duration-200 hover:border-medical-400 hover:bg-medical-50 active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2",
            )}
          >
            View all products
          </Link>
        </div>
      </Container>
    </section>
  );
}
