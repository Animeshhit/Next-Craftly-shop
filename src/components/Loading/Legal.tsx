import { Skeleton } from "@/components/ui/skeleton";

export default function TermsLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      {/* Notice text */}
      <Skeleton className="h-6 w-full max-w-md" />

      {/* Main title */}
      <Skeleton className="h-8 w-64" />

      {/* Compliance text block */}
      <Skeleton className="h-16 w-full" />

      {/* Agreement paragraph */}
      <Skeleton className="h-24 w-full" />

      {/* General Provisions section */}
      <div className="space-y-6">
        <Skeleton className="h-7 w-48" /> {/* Section title */}
        <div className="space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-2">
              <Skeleton className="h-4 w-4 mt-1" /> {/* Bullet point */}
              <Skeleton className="h-12 w-full" /> {/* List item content */}
            </div>
          ))}
        </div>
      </div>

      {/* Usage Guidelines section */}
      <div className="space-y-6">
        <Skeleton className="h-7 w-44" /> {/* Section title */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-2">
              <Skeleton className="h-4 w-4 mt-1" /> {/* Bullet point */}
              <Skeleton className="h-8 w-full" /> {/* List item content */}
            </div>
          ))}
        </div>
      </div>

      {/* Liability section */}
      <div className="space-y-4">
        <Skeleton className="h-7 w-44" /> {/* Section title */}
        <Skeleton className="h-16 w-full" /> {/* Content */}
      </div>

      {/* Dispute Resolution section */}
      <div className="space-y-4">
        <Skeleton className="h-7 w-48" /> {/* Section title */}
        <Skeleton className="h-16 w-full" /> {/* Content */}
      </div>
    </div>
  );
}
