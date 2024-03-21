import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export function PaymentFormSkeleton() {
  return (
    <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <Skeleton className="h-6 w-3/4 mb-4" />
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Skeleton className="col-span-1 h-10 w-full rounded-md" />
          <Skeleton className="col-span-1 h-10 w-full rounded-md" />
          <Skeleton className="col-span-1 h-10 w-full rounded-md" />
          <Skeleton className="col-span-1 h-10 w-full rounded-md" />
        </div>
        <Skeleton className="h-6 w-1/2 mb-2" />
        <Skeleton className="h-10 w-full rounded-md mb-6" />
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Skeleton className="col-span-2 h-10 w-full rounded-md" />
          <Skeleton className="col-span-1 h-10 w-full rounded-md" />
        </div>
        <Skeleton className="h-6 w-1/3 mb-2" />
        <Skeleton className="h-10 w-full rounded-md mb-6" />
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-4 w-1/3" />
          <Button className="opacity-0">Button</Button>
        </div>
      </div>
    </div>
  );
}
