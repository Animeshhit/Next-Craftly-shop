import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import ImageLoader from "@/components/ImageLoader";
import { Suspense } from "react";
import type { Metadata } from "next";
import { IndianRupee } from "lucide-react";
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

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/product?id=${params.id}`,
    { cache: "no-store" }
  );
  const { product } = await req.json();

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
  params: { Text: string; id: string };
}) {
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/product?id=${params.id}`,
    { cache: "no-store" }
  );

  let { product } = await req.json();
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-4">
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
            <Suspense
              fallback={
                <>
                  <div className="w-full h-[350px] md:w-[500px] md:h-[500px] bg-zinc-600 rounded-lg animate-pulse"></div>
                </>
              }
            >
              {product && (
                <CarouselItem>
                  <ImageLoader
                    alt="product Image Image"
                    src={product.productImage}
                    width={600}
                    height={600}
                    className="aspect-square object-cover w-full"
                  />
                </CarouselItem>
              )}
              {product &&
                product.productImages.map((item: string, index: number) => {
                  return (
                    <>
                      <CarouselItem key={index}>
                        <ImageLoader
                          alt="product Image"
                          src={item}
                          width={600}
                          height={600}
                          className="aspect-square object-cover w-full"
                        />
                      </CarouselItem>
                    </>
                  );
                })}
            </Suspense>
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
          <Link
            href={`/product/buyon/${params.id}/whatsapp`}
            className="flex items-center justify-center bg-zinc-900 text-white py-2 tracking-tight rounded-md hover:bg-zinc-700 hover:text-white/75 transition gap-2"
          >
            <PhoneIcon className="w-5 h-5" />
            Buy on WhatsApp
          </Link>
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
            >
              {/* <p>
              Elevate your winter wardrobe with our Cozy Knit Sweater. Crafted
              from a premium blend of soft, breathable materials, this sweater
              offers unparalleled comfort and style.
            </p>
            <p className="mt-4">
              Featuring a classic crew neckline and a relaxed, oversized fit,
              this sweater is perfect for layering or wearing on its own. The
              intricate knit pattern adds a touch of elegance, while the ribbed
              cuffs and hem provide a flattering, tailored look.
            </p>
            <p className="mt-4">
              Available in a range of timeless colors, the Cozy Knit Sweater is
              a versatile piece that can be dressed up or down to suit any
              occasion. Whether you&aposre running errands or enjoying a cozy
              night in, this sweater is sure to keep you warm and stylish all
              season long.
            </p> */}
            </div>
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
