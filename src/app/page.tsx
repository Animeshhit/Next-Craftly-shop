import { client } from "@/lib/client";
import { ProductsQuery } from "@/query/querys";
import Featured from "@/sections/Featured";
import BestSelling from "@/sections/BestSelling";
import CategoriesGrid from "@/components/Categories";
import { GetCategoryQuery } from "@/query/querys";
import Banners from "@/sections/Banners";

export default async function Home() {
  const Products = await client.fetch(ProductsQuery, {}, { cache: "no-store" });

  console.log(Products);

  return (
    <>
      <div className="container mx-auto">
        <Banners />
        <div className="max-w-[2000px] mx-auto">
          <CategoriesGrid query={GetCategoryQuery} />
        </div>
        <div className="container mx-auto">
          <div className="my-4">
            <Featured products={Products} />
          </div>
          <div className="mt-8">
            <BestSelling products={Products} />
          </div>
          {/* <TestmonialSection products={Products} /> */}
        </div>
      </div>
    </>
  );
}
