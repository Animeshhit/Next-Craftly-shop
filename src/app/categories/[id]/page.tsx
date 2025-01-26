import ProductCard from "@/components/Product";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/client";
import { GetCategoryProductsQuery } from "@/query/querys";
import { Product } from "@/types/ProductType";
import { Suspense } from "react";

async function Categories({ params }: { params: { id: string } }) {
  // Fetch products data
  const targetProducts: Product[] = await client.fetch(
    GetCategoryProductsQuery(params.id),
    {},
    { cache: "no-store" }
  );

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <h2 className="my-12 md:my-8 text-2xl font-semibold">
        {targetProducts[0].categories[0]}
      </h2>

      {/* Products Grid */}
      <Suspense
        fallback={
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square w-full rounded-lg" />{" "}
                  {/* Product image */}
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-20" /> {/* Category */}
                    <Skeleton className="h-4 w-full" /> {/* Product name */}
                    <Skeleton className="h-4 w-16" /> {/* Price */}
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      >
        <div className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {targetProducts.length > 0
            ? targetProducts.map(
                (product, index) =>
                  product.isAvailable && (
                    <ProductCard
                      key={product._id || index}
                      Text={product.name}
                      product={product}
                    />
                  )
              )
            : "No Products Found"}
        </div>
      </Suspense>
    </div>
  );
}

export default Categories;
