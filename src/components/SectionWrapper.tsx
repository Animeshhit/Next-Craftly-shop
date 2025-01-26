import React from "react";
import { client } from "@/lib/client";
import { ProductsQuery } from "@/query/querys";
import Featured from "@/sections/Featured";
import BestSelling from "@/sections/BestSelling";

async function SectionWrapper() {
  const Products = await client.fetch(ProductsQuery, {}, { cache: "no-store" });
  return (
    <>
      <div className="my-4">
        <Featured products={Products} />
      </div>
      <div className="mt-8">
        <BestSelling products={Products} />
      </div>
    </>
  );
}

export default SectionWrapper;
