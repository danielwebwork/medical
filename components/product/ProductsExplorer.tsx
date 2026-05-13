"use client";

import { useMemo, useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { ProductCard } from "@/components/product/ProductCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ProductGridSkeleton } from "@/components/ui/LoadingSkeleton";
import { products, categories } from "@/data/products";
import type { ProductCategory } from "@/types";

const INITIAL_VISIBLE = 20;
const LOAD_MORE_STEP = 3;

function ProductsExplorerInner() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  useEffect(() => {
    setVisible(Math.min(INITIAL_VISIBLE, filtered.length));
  }, [query, category, filtered.length]);

  const slice = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="Shop"
          title="Medical machines & equipment"
          subtitle="Diagnostic, imaging, monitoring, and emergency care systems—spec-backed and ready for quotation."
          className="mb-0 lg:max-w-xl"
        />
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[320px]">
          <label className="relative flex-1">
            <FiSearch className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Search equipment..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-medical-400 focus:ring-2 focus:ring-medical-100"
            />
          </label>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => {
            setCategory("All");
          }}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
            category === "All"
              ? "bg-medical-600 text-white shadow-soft"
              : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-medical-300"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setCategory(c);
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              category === c
                ? "bg-medical-600 text-white shadow-soft"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-medical-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-dashed border-medical-200 bg-medical-50/50 py-16 text-center text-slate-600"
          >
            No products match your filters. Try a different search or category.
          </motion.p>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {slice.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {hasMore ? (
        <div className="mt-10 flex flex-col items-center gap-2">
          <p className="text-sm text-slate-500">
            Showing {slice.length} of {filtered.length} products
          </p>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() =>
              setVisible((v) => Math.min(v + LOAD_MORE_STEP, filtered.length))
            }
          >
            Load 3 more
          </Button>
        </div>
      ) : null}
    </>
  );
}

export function ProductsExplorer() {
  return (
    <Suspense fallback={<ProductGridSkeleton count={12} />}>
      <ProductsExplorerInner />
    </Suspense>
  );
}
