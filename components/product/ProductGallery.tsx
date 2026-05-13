"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

export function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const src = product.images[active] ?? product.images[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-inner">
        <Image
          key={src}
          src={src}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {product.images.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {product.images.map((url, i) => (
            <button
              key={url}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition",
                i === active
                  ? "border-medical-600 ring-2 ring-medical-200"
                  : "border-transparent opacity-70 hover:opacity-100",
              )}
            >
              <Image src={url} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
