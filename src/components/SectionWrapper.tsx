import React from "react";
import { client } from "@/lib/client";
import { ProductsQuery } from "@/query/querys";
import Featured from "@/sections/Featured";
import BestSelling from "@/sections/BestSelling";

export const revalidate = 300; // Revalidate every 300 seconds

async function SectionWrapper() {
  const Products = await client.fetch(
    ProductsQuery,
    {},
    { next: { revalidate } }
  );

  return (
    <>
      <div className="my-4">
        {Date.now()}
        <Featured products={Products} />
      </div>
      <div className="mt-8">
        <BestSelling products={Products} />
      </div>
    </>
  );
}

export default SectionWrapper;
