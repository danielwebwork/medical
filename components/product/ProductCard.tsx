import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-medical-200 hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-medical-800 shadow-sm backdrop-blur">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-medical-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-600">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-lg font-bold text-medical-700">
            {formatCurrency(product.price)}
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 rounded-xl bg-medical-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-medical-700"
          >
            View details
            <FiArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
