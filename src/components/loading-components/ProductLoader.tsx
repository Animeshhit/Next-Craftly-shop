const ProductLoader = () => {
  return (
    <>
      <div className="product__description mt-4">
        <div className="container mx-auto">
          <div className="main__product_view flex gap-0 lg:gap-12">
            <div className="w-1/2 product__image__container">
              <div className="animate-pulse w-2/3 max-w-[400px] h-[20px] rounded-full bg-zinc-800"></div>
              <div className="animate-pulse h-[400px] w-full mt-5 bg-zinc-800"></div>
            </div>
            <div className="w-1/2 product__description__container">
              <div className="animate-pulse bg-zinc-800 mt-12 w-full h-4"></div>
              <div className="animate-pulse bg-zinc-800 mt-2 w-2/3 h-4"></div>
              <div className="animate-pulse bg-zinc-800 mt-8 w-28 h-8"></div>

              <div className="animate-pulse bg-zinc-800 mt-12 w-full h-4"></div>
              <div className="animate-pulse bg-zinc-800 mt-2 w-full h-4"></div>
              <div className="animate-pulse bg-zinc-800 mt-2 w-2/3 h-4"></div>
              <div className="animate-pulse bg-zinc-800 mt-2 w-1/2 h-4"></div>

              <div className="flex items-center gap-4 mt-8">
                <div className="animate-pulse bg-zinc-800 mt-2 w-2/3 h-12"></div>
                <div className="animate-pulse bg-zinc-800 mt-2 w-2/3 h-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLoader;
