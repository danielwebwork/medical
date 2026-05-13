"use client";

import Image from "next/image";
import { FiImage, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import type { Product } from "@/types";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useValidatedImages } from "@/hooks/useValidatedImages";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export function CartItem({ product }: { product: Product }) {
  const line = useCartStore((s) =>
    s.items.find((i) => i.productId === product.id),
  );
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const { validUrls, ready } = useValidatedImages(product.images);
  const thumb = validUrls[0];

  if (!line) return null;

  return (
    <div className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm transition hover:border-medical-100">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-28 sm:w-32"
      >
        {!ready ? (
          <LoadingSkeleton className="absolute inset-0 h-full w-full rounded-xl" />
        ) : thumb ? (
          <Image
            src={thumb}
            alt={product.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200 text-slate-400">
            <FiImage className="h-8 w-8" aria-hidden />
          </div>
        )}
      </Link>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <Link
              href={`/products/${product.slug}`}
              className="font-semibold text-slate-900 hover:text-medical-700"
            >
              {product.name}
            </Link>
            <p className="text-xs font-medium text-medical-600">{product.category}</p>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
            aria-label={`Remove ${product.name}`}
          >
            <FiTrash2 className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-700 transition hover:bg-white hover:shadow-sm"
              onClick={() => setQuantity(product.id, line.quantity - 1)}
              aria-label="Decrease quantity"
            >
              <FiMinus className="h-4 w-4" />
            </button>
            <span className="min-w-[2rem] text-center text-sm font-semibold text-slate-900">
              {line.quantity}
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-700 transition hover:bg-white hover:shadow-sm"
              onClick={() => setQuantity(product.id, line.quantity + 1)}
              aria-label="Increase quantity"
            >
              <FiPlus className="h-4 w-4" />
            </button>
          </div>
          <p className="text-base font-bold text-medical-700">
            {formatCurrency(product.price * line.quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}
