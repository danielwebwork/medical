"use client";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { CartItem } from "@/components/cart/CartItem";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { useCartStore } from "@/store/cartStore";
import { products } from "@/data/products";
import { formatCurrency, cn } from "@/lib/utils";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const lines = items
    .map((line) => {
      const product = products.find((p) => p.id === line.productId);
      return product ? { line, product } : null;
    })
    .filter(Boolean) as { line: { productId: string; quantity: number }; product: (typeof products)[number] }[];

  const subtotal = lines.reduce(
    (sum, { line, product }) => sum + product.price * line.quantity,
    0,
  );

  return (
    <Container className="py-12 lg:py-16">
      <h1 className="text-3xl font-bold text-slate-900">Your cart</h1>
      <p className="mt-2 text-slate-600">
        Use this list as a reference when you request a quotation. List prices are indicative;
        your formal quote may include shipping, installation, and applicable taxes.
      </p>

      {lines.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            icon={<FiShoppingBag className="h-7 w-7" />}
            title="Your cart is empty"
            description="Browse our catalog of monitors, imaging systems, and therapy devices to build an order."
            actionLabel="Browse products"
            actionHref="/products"
          />
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            {lines.map(({ product }) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-card lg:sticky lg:top-24">
            <h2 className="text-lg font-semibold text-slate-900">Summary</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <dt>Subtotal (list)</dt>
                <dd className="font-medium text-slate-900">{formatCurrency(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-slate-600">
                <dt>Shipping &amp; services</dt>
                <dd className="text-slate-500">Quoted on request</dd>
              </div>
            </dl>
            <div className="my-4 border-t border-slate-100" />
            <div className="flex justify-between text-base font-bold text-slate-900">
              <span>Estimated total</span>
              <span className="text-medical-700">{formatCurrency(subtotal)}</span>
            </div>
            <Link
              href="/contact"
              className={cn(
                "mt-6 flex w-full items-center justify-center rounded-xl bg-medical-600 px-7 py-3 text-base font-medium text-white shadow-soft",
                "transition hover:bg-medical-700 active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2",
              )}
            >
              Contact us for a quote
            </Link>
            <p className="mt-3 text-center text-xs text-slate-500">
              Share your facility details and timeline—we will respond with pricing and lead times.
            </p>
          </aside>
        </div>
      )}
    </Container>
  );
}
