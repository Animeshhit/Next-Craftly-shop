import BannerLoader from "@/components/loading-components/BannerLoader";
import Featured from "@/sections/Featured";
import { Suspense, lazy } from "react";
import BestSelling from "@/sections/BestSelling";
import TestmonialSection from "@/sections/TestmonialSection";

export default function Home() {
  const Banners = lazy(() => import("../sections/Banners"));
  return (
    <>
      <div className="container mx-auto">
        <Suspense fallback={<BannerLoader />}>
          <Banners />
        </Suspense>
        <div className="my-12">
          <Featured />
        </div>
        <div className="mt-8">
          <BestSelling />
        </div>
        <TestmonialSection />
      </div>
    </>
  );
}
