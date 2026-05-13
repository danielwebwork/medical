import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-medical-200 bg-white px-6 py-16 text-center shadow-sm">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-medical-50 text-medical-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 max-w-md text-slate-600">{description}</p>
      {actionLabel && actionHref ? (
        <Link
          href={actionHref}
          className={cn(
            "mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-medical-600 px-7 py-3 text-base font-medium text-white shadow-soft",
            "transition-all duration-200 hover:bg-medical-700 active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2",
          )}
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
