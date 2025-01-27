import SwiperBanner from "@/components/SwiperBanner";
import { client } from "@/lib/client";
import { BannersQuery } from "@/query/querys";
import { BannerType } from "@/types/BannerType";

const Banners = async () => {
  let req: BannerType[] | [] = await client.fetch(
    BannersQuery,
    {},
    { next: { revalidate: 3600 } }
  );
  return <SwiperBanner banners={req} />;
};

export default Banners;
