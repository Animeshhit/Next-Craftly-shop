// import {
//   Breadcrumb,
//   BreadcrumbList,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
//   BreadcrumbPage,
// } from "@/components/ui/breadcrumb";
// import { Suspense } from "react";
// import ProductLoader from "@/components/loading-components/ProductLoader";
// import { IndianRupee, Percent, ShoppingCart } from "lucide-react";
// import PVImageslider from "@/components/PVImageslider";
// import Image from "next/image";
// import ProductDescription from "@/components/ProductDescription";

// function calculateDiscountPercentage(
//   originalPrice: number,
//   discountedPrice: number
// ) {
//   if (originalPrice <= 0) {
//     throw new Error("Original price must be greater than zero.");
//   }
//   const discount = originalPrice - discountedPrice;
//   const discountPercentage = (discount / originalPrice) * 100;
//   return Math.floor(discountPercentage);
// }

// const ProductView = async ({
//   params,
// }: {
//   params: { Text: string; id: string };
// }) => {
//   const { id, Text } = params;

//   let req = await fetch(`${process.env.SERVERHOST}/api/v1/product?id=${id}`, {
//     cache: "no-store",
//   });

//   let { product } = await req.json();

//   return (
//     <>
//       <Suspense fallback={<ProductLoader />}>
//         <section id="product__description" className="mt-4">
//           <div className="container mx-auto">
//             <Breadcrumb>
//               <BreadcrumbList>
//                 <BreadcrumbItem>
//                   <BreadcrumbLink className="tracking-tight" href="/">
//                     Home
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbLink className="tracking-tight">
//                     {Text}
//                   </BreadcrumbLink>
//                 </BreadcrumbItem>
//                 <BreadcrumbSeparator />
//                 <BreadcrumbItem>
//                   <BreadcrumbPage className="tracking-tight">
//                     {product.name}
//                   </BreadcrumbPage>
//                 </BreadcrumbItem>
//               </BreadcrumbList>
//             </Breadcrumb>
//             <div className="flex mt-8 gap-8 items-start justify-center">
//               <PVImageslider />

//               <div className="w-1/2">
//                 <h1 className="font-semibold text-xl">{product.name}</h1>
//                 <div className="flex items-center mt-1 gap-1">
//                   <div className="p-1 px-3 text-xs bg-black text-white rounded-md">
//                     4.5
//                   </div>
//                   <span className="text-xs text-gray-500">
//                     {product.reviews.length} Ratings
//                   </span>
//                   <span className="text-xs text-gray-500">
//                     {product.sold} Sold
//                   </span>
//                 </div>

//                 <span className="flex text-xs text-zinc-500 gap-1 mt-3">
//                   Extra
//                   <div className="flex items-center">
//                     <IndianRupee className="w-2.5 h-2.5" />
//                     {product.price - product.discount}
//                   </div>{" "}
//                   off
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center">
//                     <IndianRupee className="w-6 h-6" />
//                     <span className="font-semibold text-3xl">
//                       {" "}
//                       {product.discount}
//                     </span>
//                   </div>
//                   <div className="flex items-center line-through tracking-tight">
//                     <IndianRupee className="w-4 h-4 text-zinc-600" />
//                     <span className="font-semibold text-zinc-600">
//                       {" "}
//                       {product.price}
//                     </span>
//                   </div>

//                   <div className="flex items-center ml-2 gap-1">
//                     <div className="flex items-center tracking-tight">
//                       <span>
//                         {calculateDiscountPercentage(
//                           product.price,
//                           product.discount
//                         )}
//                       </span>
//                       <Percent className="w-4 h-4" />
//                     </div>
//                     <span>OFF</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center mt-8 gap-3">
//                   <button
//                     type="button"
//                     className="tracking-tight text-sm py-2 px-4 bg-zinc-800 rounded-md text-white flex items-center gap-2"
//                   >
//                     <ShoppingCart />
//                     <span>Add To Cart</span>
//                   </button>
//                   <button
//                     type="button"
//                     className="tracking-tight text-sm py-2 px-4 bg-green-600 rounded-md text-white flex items-center gap-2"
//                   >
//                     <Image
//                       alt="whatsapp-logo"
//                       width={25}
//                       height={25}
//                       src="/logo-whatsapp.svg"
//                     />
//                     Buy on Whatsapp
//                   </button>
//                 </div>
//                 <p className="tracking-tighter mt-8 w-full">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Eligendi sint nulla reprehenderit laborum beatae eius deserunt
//                   voluptatem, cum illo, quod molestias? Animi illo quod
//                   necessitatibus, provident reiciendis consectetur. Deleniti
//                   odio temporibus ea. Hic, perferendis?
//                 </p>
//                 {/* <ProductDescription description={product.description} /> */}
//               </div>
//             </div>
//             {/* section two  */}

//             <div className="flex items-start">
//               {/* <div className="w-[300px] h-[300px]">
//                 <Image
//                   src="https://res.cloudinary.com/dweggareb/image/upload/f_auto,q_auto/v1/Main%20images/ub6tw20md8kzqfgzeyul"
//                   className="w-[300px] h-[300px]"
//                   alt="test-image"
//                   fill
//                 />
//               </div> */}
//             </div>
//           </div>
//         </section>
//       </Suspense>
//     </>
//   );
// };

// export default ProductView;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageLoader from "@/components/ImageLoader";

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

export default async function ProductView({
  params,
}: {
  params: { Text: string; id: string };
}) {
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/product?id=${params.id}`,
    {
      cache: "no-store",
    }
  );

  let { product } = await req.json();
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-4">
        <Carousel className="rounded-lg overflow-hidden">
          <CarouselContent>
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
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid gap-4">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-2xl font-bold">${product.discount}</p>
            <p className="text-sm text-muted-foreground line-through">
              ${product.price}
            </p>
            <Badge variant="outline" className="px-2 py-1">
              Save{" "}
              {calculateDiscountPercentage(product.price, product.discount)}%
            </Badge>
          </div>
        </div>
        <div className="grid gap-2">
          <Button className="flex items-center justify-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            Buy on WhatsApp
          </Button>
        </div>
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold">Product Description</h2>
          <div className="text-muted-foreground leading-relaxed">
            <p>
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
              occasion. Whether you&aposre running errands or enjoying a cozy night
              in, this sweater is sure to keep you warm and stylish all season
              long.
            </p>
          </div>
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
