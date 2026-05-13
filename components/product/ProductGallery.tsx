"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { FiImage } from "react-icons/fi";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";
import { useValidatedImages } from "@/hooks/useValidatedImages";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export function ProductGallery({ product }: { product: Product }) {
  const { validUrls, ready } = useValidatedImages(product.images);
  const [active, setActive] = useState(0);

  const validKey = useMemo(() => validUrls.join("\u0001"), [validUrls]);

  useEffect(() => {
    setActive(0);
  }, [validKey]);

  const src = validUrls[active] ?? validUrls[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-inner">
        {!ready ? (
          <LoadingSkeleton className="absolute inset-0 h-full w-full rounded-none" />
        ) : src ? (
          <Image
            key={src}
            src={src}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200 text-slate-400">
            <FiImage className="h-16 w-16" aria-hidden />
            <span className="mt-2 text-sm font-medium">No images could be loaded</span>
          </div>
        )}
      </div>
      {ready && validUrls.length > 1 ? (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {validUrls.map((url, i) => (
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
