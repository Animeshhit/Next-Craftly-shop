import SearchNavbar from "@/components/search/SearchNavbar";
import { SearchResults } from "@/components/search/SearchResults";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const page = ({ params }: { params: { Text: string } }) => {
  return (
    <>
      <section>
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-[350px] border-r-2 h-auto py-6 px-4">
              <SearchNavbar />
            </div>
            <div className="flex-1 mt-4">
              <Suspense
                fallback={
                  <>
                    {Array.from({ length: 8 }).map((_, index: number) => {
                      return (
                        <div className="flex items-center w-full gap-4 py-3 px-4 max-w-[350px]">
                          <Skeleton className="w-[100px] bg-zinc-500 h-[100px]" />
                          <div className="w-full">
                            <Skeleton className="w-full h-4 bg-zinc-500 mb-2 rounded-full" />
                            <Skeleton className="w-full h-3 bg-zinc-500 mb-2 rounded-full" />
                            <Skeleton className="w-full h-2 bg-zinc-500 rounded-full" />
                          </div>
                        </div>
                      );
                    })}
                  </>
                }
              >
                <SearchResults query={params.Text} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
