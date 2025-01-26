import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSectionLoader() {
  return (
    <div className="w-full space-y-12 px-4 py-6">
      {/* Recently Added Section */}
      <section>
        <div className="space-y-1 mb-6">
          <Skeleton className="h-7 w-32" /> {/* Section title */}
          <Skeleton className="h-4 w-24" /> {/* Subtitle */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full rounded-lg" />{" "}
              {/* Product image */}
              <div className="space-y-2">
                <Skeleton className="h-3 w-20" /> {/* Category */}
                <Skeleton className="h-4 w-full" /> {/* Product name */}
                <Skeleton className="h-4 w-16" /> {/* Price */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Selling Section */}
      <section>
        <div className="space-y-1 mb-6">
          <Skeleton className="h-7 w-24" /> {/* Section title */}
          <Skeleton className="h-4 w-28" /> {/* Subtitle */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full rounded-lg" />{" "}
              {/* Product image */}
              <div className="space-y-2">
                <Skeleton className="h-3 w-20" /> {/* Category */}
                <Skeleton className="h-4 w-full" /> {/* Product name */}
                <Skeleton className="h-4 w-16" /> {/* Price */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
