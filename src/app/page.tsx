import BannerLoader from "@/components/loading-components/BannerLoader";
import Featured from "@/sections/Featured";
import BestSelling from "@/sections/BestSelling";
import TestmonialSection from "@/sections/TestmonialSection";
import dynamic from "next/dynamic";

export default function Home() {
  const Banners = dynamic(() => import("@/sections/Banners"), {
    suspense: true,
    loading: () => <BannerLoader />,
  });
  return (
    <>
      <div className="container mx-auto">
        <Banners />
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
