import { client } from "@/lib/client";
import { ProductsQuery } from "@/query/querys";
import Featured from "@/sections/Featured";
import BestSelling from "@/sections/BestSelling";

export default async function Home() {
  // const Banners = dynamic(() => import("@/sections/Banners"), {
  //   suspense: true,
  //   loading: () => <BannerLoader />,
  // });

  const Products = await client.fetch(ProductsQuery);

  console.log(Products);

  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-[2000px] mx-auto">{/* <Banners /> */}</div>
        <div className="container mx-auto">
          <div className="my-12">
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
