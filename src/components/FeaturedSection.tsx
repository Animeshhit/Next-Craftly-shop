import Product from "@/components/Product";
import { MiniProduct } from "@/types/MinimalProductType";

const FeaturedSection = async () => {
  let req = await fetch(
    `${process.env.SERVERHOST}/api/v1/products/by?query=featured&page=1&limit=12`,
    {
      next: { revalidate: 120 },
    }
  );
  if (!req.ok) {
    return <h2>Something Went Wrong Please Try again later after sometime</h2>;
  }
  let res = await req.json();
  return (
    <>
      <div className="my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-self-center place-content-center place-items-center">
        {/* <h2>hello world</h2> */}
        {res.products &&
          res.products.map((item: MiniProduct, index: number) => (
            <Product key={index} Text="Newly Added" product={item} />
          ))}
      </div>
    </>
  );
};

export default FeaturedSection;
