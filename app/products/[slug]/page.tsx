import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductCard } from "@/components/product/ProductCard";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { products } = await import("@/data/products");
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${siteConfig.brandName}`,
      description: product.shortDescription,
      images: product.images[0] ? [{ url: product.images[0] }] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <Container className="py-10 lg:py-14">
      <nav className="mb-8 text-sm text-slate-500">
        <Link href="/" className="hover:text-medical-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-medical-700">
          Products
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ProductGallery product={product} />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-medical-600">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{product.shortDescription}</p>
          <p className="mt-4 text-slate-600">{product.description}</p>
          <div className="mt-8 rounded-2xl border border-medical-100 bg-medical-50/80 p-5">
            <p className="text-sm font-semibold text-medical-900">Request a quotation</p>
            <p className="mt-2 text-sm text-slate-600">
              Volume programmes, tenders, and export documentation—our team will respond with
              specifications and lead times tailored to your institution.
            </p>
            <Link
              href="/contact"
              className={cn(
                "mt-4 inline-flex items-center justify-center rounded-xl bg-medical-600 px-6 py-3 text-sm font-semibold text-white shadow-soft",
                "transition hover:bg-medical-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2",
              )}
            >
              Contact us
            </Link>
          </div>
          <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
            <h2 className="text-lg font-semibold text-slate-900">Specifications</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div key={k} className="border-b border-slate-200/80 pb-2">
                  <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {k}
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <section className="mt-20 border-t border-slate-100 pt-16">
        <h2 className="text-2xl font-bold text-slate-900">Related products</h2>
        <p className="mt-2 text-slate-600">
          Customers interested in this product often evaluate these alternatives.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/products"
            className={cn(
              "inline-flex items-center justify-center rounded-xl bg-medical-100 px-5 py-2.5 text-sm font-medium text-medical-900",
              "transition hover:bg-medical-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-400 focus-visible:ring-offset-2",
            )}
          >
            Back to all products
          </Link>
        </div>
      </section>
    </Container>
  );
}
