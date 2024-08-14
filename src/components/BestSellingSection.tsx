import Product from "@/components/Product";
import { MiniProduct } from "@/types/MinimalProductType";

const BestSellingSection = async () => {
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/products/by?query=bestseller&page=1&limit=16`,
    {
      next: { revalidate: 1800 },
    }
  );
  let res = await req.json();
  return (
    <>
      <div className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-self-center place-content-center place-items-center">
        {/* <h2>hello world</h2> */}
        {res.products &&
          res.products.map((item: MiniProduct, index: number) => (
            <Product key={index} Text="Best Selling" product={item} />
          ))}
      </div>
    </>
  );
};

export default BestSellingSection;
