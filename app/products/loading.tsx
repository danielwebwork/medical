import { ProductGridSkeleton } from "@/components/ui/LoadingSkeleton";
import { Container } from "@/components/ui/Container";

export default function ProductsLoading() {
  return (
    <Container className="py-12 lg:py-16">
      <div className="mb-10 max-w-xl space-y-3">
        <div className="h-4 w-24 animate-pulse rounded bg-slate-200" />
        <div className="h-9 w-3/4 max-w-md animate-pulse rounded-lg bg-slate-200" />
        <div className="h-4 w-full max-w-lg animate-pulse rounded bg-slate-200" />
      </div>
      <ProductGridSkeleton count={6} />
    </Container>
  );
}
