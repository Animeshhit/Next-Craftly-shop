import { Skeleton } from "@/components/ui/skeleton";

export default function CategoriesLoader() {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-8 w-24 bg-gray-200" /> {/* Categories text */}
        <Skeleton className="h-4 w-16 bg-gray-200" /> {/* View all text */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category Cards */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative group">
            <Skeleton className="aspect-[4/3] rounded-lg w-full bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
