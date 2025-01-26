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
      <Categories query={GetAllCategoryQuery} />
    </>
  );
}

export default page;
