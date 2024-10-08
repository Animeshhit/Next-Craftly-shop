import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import SearchNavbar and SearchResults
const SearchNavbar = dynamic(() => import("@/components/search/SearchNavbar"), {
  loading: () => <p>Loading...</p>,
});
const SearchResults = dynamic(
  () => import("@/components/search/SearchResults"),
  {
    loading: () => <ProductSkeletons count={8} />,
  }
);

const Page = async ({ params }: { params: { Text: string } }) => {
  try {
    const req = await fetch(
      `${process.env.SERVERHOST}/api/v1/search?q=${params.Text}`,
      {
        cache: "no-store",
      }
    );

    if (!req.ok) {
      throw new Error("Network response was not ok");
    }

    const { products } = await req.json();

    return (
      <section>
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-[350px] border-r-2 h-auto py-6 px-4">
              <SearchNavbar products={products} />
            </div>
            <div className="flex-1 mt-4">
              <SearchResults products={products} />
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return <h2>Something went wrong. Please try again later.</h2>;
  }
};

// Separate ProductSkeletons component for reusability and cleaner code
const ProductSkeletons = ({ count }: { count: number }) => (
  <>
    {Array.from({ length: count }).map((_, index: number) => (
      <div
        key={index}
        className="flex items-center w-full gap-4 py-3 px-4 max-w-[350px]"
      >
        <Skeleton className="w-[100px] bg-zinc-500 h-[100px]" />
        <div className="w-full">
          <Skeleton className="w-full h-4 bg-zinc-500 mb-2 rounded-full" />
          <Skeleton className="w-full h-3 bg-zinc-500 mb-2 rounded-full" />
          <Skeleton className="w-full h-2 bg-zinc-500 rounded-full" />
        </div>
      </div>
    ))}
  </>
);

export default Page;
