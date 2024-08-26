import ProductLoadingCard from "@/components/loading-components/ProductLoadingCard";
import dynamic from "next/dynamic";
const Featured = () => {
  const FeaturedSection = dynamic(
    () => import("../components/FeaturedSection"),
    {
      suspense: true,
      loading: () => (
        <div className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-self-center place-content-center place-items-center">
          {Array.from({ length: 8 }).map((_, index: number) => {
            return <ProductLoadingCard key={index} />;
          })}
        </div>
      ),
    }
  );
  return (
    <section id="featured">
      <h2 className="font-semibold text-2xl sm:text-3xl">
        <span className="animate-pulse">Recently</span> <span>Added</span>
      </h2>
      <p className="text-sm mt-1 text-gray-500">Packed with Love ❤️</p>
      <FeaturedSection />
    </section>
  );
};

export default Featured;
