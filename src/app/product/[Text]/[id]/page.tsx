import { Suspense, useMemo } from "react";
import Link from "next/link";
import { client } from "@/lib/client";
import { GetAProductQuery } from "@/query/querys";
import ImageLoader from "@/utills/ImageLoader";
import MarkdownRenderer from "@/utills/MarkDownRenderer";
import {
  ProductDescription,
  ProductDetails,
} from "@/components/Loading/ProductLoading";
import { Badge } from "@/components/ui/badge";
import {
  CircleCheck,
  CircleOff,
  IndianRupee,
  PackageX,
  Phone,
} from "lucide-react";
import { Product } from "@/types/ProductType";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define props for ProductView
interface ProductViewProps {
  params: {
    id: string;
  };
}

// Smaller components with TypeScript typing
const ProductPrice: React.FC<{ price: number; discount: number }> = ({
  price,
  discount,
}) => {
  const discountedPrice = useMemo(
    () => Math.round(price - price * (discount / 100)),
    [price, discount]
  );

  return (
    <div className="flex font-lato items-center gap-4 mt-2">
      <p className="text-2xl font-bold">
        <IndianRupee className="inline-block" />
        {discountedPrice}
      </p>
      <p className="text-sm text-muted-foreground line-through">
        <IndianRupee className="inline-block w-4 h-4" />
        {price}
      </p>
      {discount > 0 && (
        <Badge variant="outline" className="px-2 py-1">
          Save {discount}%
        </Badge>
      )}
    </div>
  );
};

const AvailableColors: React.FC<{
  colors: { name: string; color: string }[];
}> = ({ colors }) => (
  <div className="color-options mt-6">
    <h2 className="text-sm font-bold text-zinc-700 font-inter">
      Available Colors
    </h2>
    <div className="flex items-center gap-2 mt-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className="border flex items-center justify-center rounded-full w-6 h-6"
          style={{ backgroundColor: color.color }}
        >
          <span className="text-xs sr-only">{color.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AvailableSizes: React.FC<{ sizes: { name: string; size: string }[] }> = ({
  sizes,
}) => (
  <div className="size-options mt-4">
    <h2 className="text-sm font-bold text-zinc-700 font-inter">
      Available Sizes
    </h2>
    <div className="flex items-center gap-2 mt-2">
      {sizes.map((size, index) => (
        <div
          key={index}
          className="border flex items-center justify-center border-black rounded-md w-6 h-6"
        >
          <span className="text-xs font-inter">{size.size}</span>
        </div>
      ))}
    </div>
  </div>
);

const CustomizableBadge: React.FC<{ isCustomizeable: boolean }> = ({
  isCustomizeable,
}) => (
  <Badge
    variant="outline"
    className={`py-2 mt-8 gap-2 font-inter ${isCustomizeable ? "bg-green-500 text-white" : "bg-red-500"}`}
  >
    {isCustomizeable ? (
      <>
        <CircleCheck className="w-4 h-4" />
        Customizable
      </>
    ) : (
      <>
        <CircleOff className="w-4 h-4" />
        Non-Customizable
      </>
    )}
  </Badge>
);

// Main component
const ProductView: React.FC<ProductViewProps> = async ({ params }) => {
  const product: Product | null = await client.fetch(
    GetAProductQuery(params.id),
    {},
    { next: { revalidate: 300 } }
  );

  if (!product) {
    return (
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
              We are sorry, but the product you are looking for is not available
              or do not exist.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/" className="font-lato">
                Return to Home
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4 md:px-6">
      {/* for image carousel */}
      <Suspense
        fallback={
          <div className="relative">
            <Skeleton className="aspect-square w-full rounded-lg" />
          </div>
        }
      >
        <div className="grid gap-4">
          {product.productImage && (
            <Carousel className="rounded-lg overflow-hidden">
              <CarouselContent>
                <CarouselItem>
                  <ImageLoader
                    alt="product Image"
                    src={product.productImage}
                    width={600}
                    height={600}
                    className="aspect-square object-cover w-full"
                  />
                </CarouselItem>
                {product.productImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <ImageLoader
                      alt="product Image"
                      src={image}
                      width={600}
                      height={600}
                      className="aspect-square object-cover w-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          )}
        </div>
      </Suspense>
      <Suspense fallback={<ProductDetails />}>
        <div className="grid">
          <div>
            <h1 className="text-3xl font-bold font-display">{product.name}</h1>
            <ProductPrice
              price={Number(product.price)}
              discount={Number(product.discount)}
            />
            <Link
              href={`/product/buyon/${params.id}/whatsapp`}
              className="flex mt-6 items-center justify-center bg-zinc-900 text-white py-2 tracking-tight rounded-md hover:bg-zinc-700 font-inter hover:text-white/75 transition gap-2"
            >
              <Phone className="w-5 h-5" />
              Get on WhatsApp
            </Link>
            <p className="mt-6 text-foreground font-inter">
              {product.description}
            </p>
            <div className="product__types mt-6">
              {product.colors && product.colors.length > 0 && (
                <AvailableColors colors={product.colors} />
              )}
              {product.sizes && product.sizes.length > 0 && (
                <AvailableSizes sizes={product.sizes} />
              )}
              <CustomizableBadge isCustomizeable={product.isCustomizeable} />
              <div className="mt-6">
                <h2 className="text-sm font-inter font-bold text-zinc-700">
                  Product Description
                </h2>
                <Suspense fallback={<ProductDescription />}>
                  <MarkdownRenderer markdownContent={product.fullDescription} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default ProductView;
