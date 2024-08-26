import ProductLoadingCard from "@/components/loading-components/ProductLoadingCard";
import dynamic from "next/dynamic";
const BestSelling = () => {
  const BestSellingSection = dynamic(
    () => import("../components/BestSellingSection"),
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
    <section id="bestselling">
      <h2 className="font-semibold text-2xl sm:text-3xl">
        <span>Best</span> <span className="animate-pulse">Selling</span>
      </h2>
      <p className="text-sm mt-1 text-gray-500">People Gave Love ❤️</p>
      <BestSellingSection />
    </section>
  );
};

export default BestSelling;
