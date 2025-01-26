import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoader() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Skeleton */}
        <div className="relative">
          <Skeleton className="aspect-square w-full rounded-lg" />
        </div>

        {/* Product Details Skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <Skeleton className="h-10 w-3/4" />

          {/* Price Section */}
          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-24" /> {/* Main price */}
            <Skeleton className="h-6 w-20" /> {/* Original price */}
            <Skeleton className="h-6 w-24" /> {/* Discount */}
          </div>

          {/* WhatsApp Button */}
          <Skeleton className="h-12 w-full rounded-md" />

          {/* Description */}
          <Skeleton className="h-24 w-full" />

          {/* Available Colors */}
          <div className="space-y-2">
            <Skeleton className="h-5 w-32" /> {/* Colors text */}
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-8 rounded-full" />
              ))}
            </div>
          </div>

          {/* Customizable Badge */}
          <Skeleton className="h-8 w-28 rounded-full" />

          {/* Product Description */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-40" /> {/* Description title */}
            <Skeleton className="h-20 w-full" /> {/* Main description */}
            {/* Product Features List */}
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4" /> {/* Bullet point */}
                  <Skeleton className="h-4 flex-1" /> {/* Feature text */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
