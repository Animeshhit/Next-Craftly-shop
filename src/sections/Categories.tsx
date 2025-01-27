import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/lib/client";
import { Suspense } from "react";

interface Category {
  _id: string;
  title: string;
  image: string;
  slug: string;
}

export default async function CategoriesGrid({ query }: { query: string }) {
  // Fetch categories from the query
  const categories: Category[] | [] = await client.fetch(
    query,
    {},
    { next: { revalidate: 1800 } }
  );

  return (
    <section className="w-full py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold font-display tracking-tight">
              Categories
            </h2>
            <Link
              href="/categories"
              className="text-sm font-lato text-muted-foreground hover:text-primary transition-colors"
            >
              View all
            </Link>
          </div>

          {/* Categories Grid with Loading Animation */}
          <Suspense fallback={<LoadingGrid />}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link key={category._id} href={`/categories/${category._id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-semibold font-oswald text-white mb-1">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
}

// Loading Animation Component
function LoadingGrid() {
  const placeholderArray = Array.from({ length: 8 }); // Adjust length as needed

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {placeholderArray.map((_, index) => (
        <Card key={index} className="animate-pulse bg-gray-200 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3] bg-gray-300" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
