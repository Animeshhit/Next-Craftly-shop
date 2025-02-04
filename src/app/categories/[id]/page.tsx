import ProductCard from "@/components/Product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { client } from "@/lib/client";
import { GetCategoryProductsQuery } from "@/query/querys";
import { Product } from "@/types/ProductType";
import { PackageX } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

async function Categories({ params }: { params: { id: string } }) {
  // Fetch products data
  const targetProducts: Product[] = await client.fetch(
    GetCategoryProductsQuery(params.id),
    {},
    { next: { revalidate: 300 } }
  );

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <h2 className="my-12 font-display md:my-8 text-2xl font-semibold">
        {targetProducts &&
          targetProducts.length > 0 &&
          targetProducts[0].categories[0]}
      </h2>

      {/* Products Grid */}
      <Suspense
        fallback={
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square w-full rounded-lg bg-gray-200" />{" "}
                  {/* Product image */}
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-20 bg-gray-200" />{" "}
                    {/* Category */}
                    <Skeleton className="h-4 w-full bg-gray-200" />{" "}
                    {/* Product name */}
                    <Skeleton className="h-4 w-16 bg-gray-200" /> {/* Price */}
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      >
        {targetProducts && targetProducts.length > 0 ? (
          <div className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {targetProducts.map(
              (product, index) =>
                product.isAvailable && (
                  <ProductCard
                    key={product._id || index}
                    Text={product.name}
                    product={product}
                  />
                )
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center mb-56 pt-8">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <PackageX className="w-10 h-10 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-inter font-bold text-gray-800">
                  Product Not Found
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center font-inter text-gray-600">
                  We are sorry, but the product you are looking for is not
                  available or do not exist.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild>
                  <Link href="/" className="font-lato">Return to Home</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default Categories;
