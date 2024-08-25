import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import ImageLoader from "@/components/ImageLoader";
import { Suspense } from "react";
import type { Metadata } from "next";
import { IndianRupee, Package } from "lucide-react";
import Link from "next/link";

function calculateDiscountPercentage(
  originalPrice: number,
  discountedPrice: number
) {
  if (originalPrice <= 0) {
    throw new Error("Original price must be greater than zero.");
  }
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return Math.floor(discountPercentage);
}

async function fetchProductData(id: string) {
  const req = await fetch(`${process.env.SERVERHOST}/api/v1/product?id=${id}`, {
    cache: "no-store",
  });
  if (!req.ok) {
    return null;
  }
  const { product } = await req.json();
  return product;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await fetchProductData(params.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name}`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.slice(0, 160),
      images: [
        {
          url: product.productImage,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductView({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProductData(params.id);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-4">
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            {product && (
              <CarouselItem>
                <ImageLoader
                  alt="product Image"
                  src={product.productImage}
                  width={600}
                  height={600}
                  className="aspect-square object-cover w-full"
                />
              </CarouselItem>
            )}
            {product.productImages.map((item: string, index: number) => (
              <CarouselItem key={index}>
                <ImageLoader
                  alt="product Image"
                  src={item}
                  width={600}
                  height={600}
                  className="aspect-square object-cover w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="grid gap-4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-2xl font-bold">
              <IndianRupee className="inline-block" />
              {product.discount}
            </p>
            <p className="text-sm text-muted-foreground line-through">
              <IndianRupee className="inline-block w-4 h-4" />
              {product.price}
            </p>
            <Badge variant="outline" className="px-2 py-1">
              Save{" "}
              {calculateDiscountPercentage(product.price, product.discount)}%
            </Badge>
          </div>
        </div>
        <div className="grid gap-2">
          {product.isDraft ? (
            <div className="py-2 w-full px-4 bg-red-600 text-white justify-center rounded-md flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>Product Out Of Stock</span>
            </div>
          ) : product.isAvailable ? (
            <Link
              href={`/product/buyon/${params.id}/whatsapp`}
              className="flex items-center justify-center bg-zinc-900 text-white py-2 tracking-tight rounded-md hover:bg-zinc-700 hover:text-white/75 transition gap-2"
            >
              <PhoneIcon className="w-5 h-5" />
              Buy on WhatsApp
            </Link>
          ) : (
            <div className="py-2 w-full px-4 bg-yellow-600 text-white justify-center rounded-md flex items-center gap-2">
              <Package className="w-4 h-4" />
              <span>Currently Unavailable</span>
            </div>
          )}
        </div>
        <div className="grid gap-4 mt-5">
          <Suspense
            fallback={
              <>
                <div className="w-full h-8 bg-zinc-600 rounded-full animate-pulse"></div>
                <div className="w-full h-6 mt-2 bg-zinc-600 rounded-full animate-pulse"></div>
                <div className="w-full h-4 mt-2 bg-zinc-600 rounded-full animate-pulse"></div>
              </>
            }
          >
            <div
              className="text-muted-foreground leading-relaxed dsc px-4"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
