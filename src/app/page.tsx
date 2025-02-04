import { GetCategoryQuery } from "@/query/querys";
import dynamic from "next/dynamic";
import CategoriesLoader from "@/components/Loading/CategoriesLoader";
import ProductSectionLoader from "@/components/Loading/ProductsSectionLoader";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home() {
  const Banners = dynamic(() => import("@/sections/Banners"), {
    ssr: true,
    loading: () => (
      <Skeleton className="h-[350px] md:h-[500px] bg-gray-200 animate-pulse" />
    ),
  });
  const Categories = dynamic(() => import("@/sections/Categories"), {
    ssr: true,
    loading: () => <CategoriesLoader />,
  });
  const SectionWrapper = dynamic(() => import("@/components/SectionWrapper"), {
    ssr: true,
    loading: () => <ProductSectionLoader />,
  });
  return (
    <>
      <div className="container mx-auto py-8 px-4">
        <Banners />
        <div className="max-w-[2000px] mx-auto">
          <Categories query={GetCategoryQuery} />
        </div>
        <div className="container mx-auto">
          <SectionWrapper />
          {/* <TestmonialSection products={Products} /> */}
        </div>
      </div>
    </>
  );
}
