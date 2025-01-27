import { Product } from "@/types/ProductType";
import FeaturedSection from "@/components/Home/FeaturedSection";
const Featured = ({ products }: { products: Product[] }) => {
  return (
    <section id="featured">
      <h2 className="font-semibold font-display text-2xl">
        <span className="animate-pulse">Recently</span> <span>Added</span>
      </h2>
      <p className="text-sm mt-1 font-inter text-pink-700">Packed with Love ❤️</p>
      <FeaturedSection products={products} />
    </section>
  );
};

export default Featured;
