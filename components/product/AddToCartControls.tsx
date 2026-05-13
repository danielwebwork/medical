"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cartStore";

export function AddToCartControls({ productId }: { productId: string }) {
  const addItem = useCartStore((s) => s.addItem);
  const [qty, setQty] = useState(1);

  function handleAdd() {
    addItem(productId, qty);
    toast.success("Added to cart", {
      description: qty > 1 ? `${qty} units added.` : "Item added to your cart.",
    });
    setQty(1);
  }

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-medium text-slate-700 transition hover:bg-white"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="min-w-[2.5rem] text-center text-base font-semibold text-slate-900">
          {qty}
        </span>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-medium text-slate-700 transition hover:bg-white"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <Button type="button" size="lg" onClick={handleAdd} className="min-w-[200px]">
        <FiShoppingCart className="h-5 w-5" />
        Add to cart
      </Button>
    </div>
  );
}
