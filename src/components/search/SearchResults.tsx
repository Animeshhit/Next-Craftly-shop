import { MiniProduct } from "@/types/MinimalProductType";
import SearchProduct from "./SearchProduct";
import Image from "next/image";

export const SearchResults = async ({ query }: { query: string }) => {
  const req = await fetch(
    ` ${process.env.NEXT_PUBLIC_SERVERHOST}/api/v1/search?page=1&limit=12&q=${query}`
  );
  if (!req.ok) {
    throw new Error("Something Went wrong!!");
  }
  const { products } = await req.json();
  return (
    <div>
      {products && products.length > 0 ? (
        products.map((item: MiniProduct, index: number) => (
          <SearchProduct
            productImage={item.productImage}
            name={item.name}
            discount={item.discount}
            key={index}
            id={item._id}
          />
        ))
      ) : (
        <>
          <div className="w-full h-[500px] flex items-center justify-center flex-col">
            <Image
              src={"/notfound.svg"}
              alt="no products found"
              width={200}
              height={200}
            />
            <p className="mt-3">No Results Found</p>
          </div>
        </>
      )}
    </div>
  );
};
