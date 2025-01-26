import { Skeleton } from "@/components/ui/skeleton";

export default function FormLoading() {
  return (
    <div className="w-full max-w-xl mx-auto p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" /> {/* Title */}
          <Skeleton className="h-5 w-72" /> {/* Subtitle */}
        </div>

        {/* Purpose Field */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-20" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>

        {/* Date Field */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-12" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>

        {/* Thoughts Field */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-44" /> {/* Label */}
          <Skeleton className="h-32 w-full rounded-md" /> {/* Textarea */}
        </div>

        {/* Coupon Code Field */}
        <div className="space-y-2">
          <Skeleton className="h-5 w-24" /> {/* Label */}
          <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>

        {/* Submit Button */}
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  );
}
