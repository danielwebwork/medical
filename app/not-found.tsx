import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Container className="flex min-h-[55vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-medical-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you are looking for may have been moved. Return to the catalog or contact
        our team for assistance.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className={cn(
            "inline-flex items-center justify-center rounded-xl bg-medical-600 px-5 py-2.5 text-sm font-medium text-white shadow-soft",
            "hover:bg-medical-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2",
          )}
        >
          Go home
        </Link>
        <Link
          href="/products"
          className={cn(
            "inline-flex items-center justify-center rounded-xl border-2 border-medical-200 bg-white px-5 py-2.5 text-sm font-medium text-medical-800",
            "hover:border-medical-400 hover:bg-medical-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-500 focus-visible:ring-offset-2",
          )}
        >
          View products
        </Link>
      </div>
    </Container>
  );
}
