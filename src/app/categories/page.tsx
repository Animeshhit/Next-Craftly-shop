import CategoriesLoader from "@/components/Loading/CategoriesLoader";
import { GetAllCategoryQuery } from "@/query/querys";
import dynamic from "next/dynamic";

function page() {
  const Categories = dynamic(() => import("@/sections/Categories"), {
    ssr: true,
    loading: () => <CategoriesLoader />,
  });
  return (
    <>
      <div className="container mx-auto px-4">
        {" "}
        <Categories query={GetAllCategoryQuery} />
      </div>
    </>
  );
}

export default page;
