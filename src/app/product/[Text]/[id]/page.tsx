import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Suspense } from "react";
import ProductLoader from "@/components/loading-components/ProductLoader";
import { IndianRupee, Percent, ShoppingCart } from "lucide-react";
import PVImageslider from "@/components/PVImageslider";
import Image from "next/image";
import ProductDescription from "@/components/ProductDescription";

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

const ProductView = async ({
  params,
}: {
  params: { Text: string; id: string };
}) => {
  const { id, Text } = params;

  let req = await fetch(`${process.env.SERVERHOST}/api/v1/product?id=${id}`, {
    cache: "no-store",
  });

  let { product } = await req.json();

  console.log(product);

  return (
    <>
      <Suspense fallback={<ProductLoader />}>
        <section id="product__description" className="mt-4">
          <div className="container mx-auto">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>{Text}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{product.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex mt-8 gap-8 items-start justify-center">
              <PVImageslider />

              <div className="w-1/2">
                <h1 className="font-semibold">{product.name}</h1>
                <div className="flex items-center mt-1 gap-1">
                  <div className="p-1 px-3 text-xs bg-black text-white rounded-md">
                    4.5
                  </div>
                  <span className="text-xs text-gray-500">
                    {product.reviews.length} Ratings
                  </span>
                  <span className="text-xs text-gray-500">
                    {product.sold} Sold
                  </span>
                </div>

                <span className="flex text-xs text-zinc-500 gap-1 mt-3">
                  Extra
                  <div className="flex items-center">
                    <IndianRupee className="w-2.5 h-2.5" />
                    {product.price - product.discount}
                  </div>{" "}
                  off
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <IndianRupee className="w-6 h-6" />
                    <span className="font-semibold text-3xl">
                      {" "}
                      {product.discount}
                    </span>
                  </div>
                  <div className="flex items-center line-through">
                    <IndianRupee className="w-4 h-4 text-zinc-600" />
                    <span className="font-semibold text-zinc-600">
                      {" "}
                      {product.price}
                    </span>
                  </div>

                  <div className="flex items-center ml-2 gap-1">
                    <div className="flex items-center">
                      <span>
                        {calculateDiscountPercentage(
                          product.price,
                          product.discount
                        )}
                      </span>
                      <Percent className="w-4 h-4" />
                    </div>
                    <span>OFF</span>
                  </div>
                </div>
                <div className="flex items-center mt-8 gap-3">
                  <button
                    type="button"
                    className="tracking-tight text-sm py-2 px-4 bg-zinc-800 rounded-md text-white flex items-center gap-2"
                  >
                    <ShoppingCart />
                    <span>Add To Cart</span>
                  </button>
                  <button
                    type="button"
                    className="tracking-tight text-sm py-2 px-4 bg-green-600 rounded-md text-white flex items-center gap-2"
                  >
                    <Image
                      alt="whatsapp-logo"
                      width={25}
                      height={25}
                      src="/logo-whatsapp.svg"
                    />
                    Buy on Whatsapp
                  </button>
                </div>
                <p className="tracking-tighter mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint nulla reprehenderit laborum beatae eius deserunt voluptatem, cum illo, quod molestias? Animi illo quod necessitatibus, provident reiciendis consectetur. Deleniti odio temporibus ea. Hic, perferendis?</p>
                {/* <ProductDescription description={product.description} /> */}
              </div>
            </div>
            {/* section two  */}

            <div className="flex items-start">
              {/* <div className="w-[300px] h-[300px]">
                <Image
                  src="https://res.cloudinary.com/dweggareb/image/upload/f_auto,q_auto/v1/Main%20images/ub6tw20md8kzqfgzeyul"
                  className="w-[300px] h-[300px]"
                  alt="test-image"
                  fill
                />
              </div> */}
            </div>
          </div>
        </section>
      </Suspense>
    </>
  );
};

export default ProductView;
