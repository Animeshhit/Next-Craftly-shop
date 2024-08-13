import SwiperBanner from "@/components/client-components/SwiperBanner";

const Banners = async () => {
  let req = await fetch(`${process.env.SERVERHOST}/api/v1/banners`, {
    next: { revalidate: 1800 },
  });
  let data = await req.json();
  return <SwiperBanner banners={data} />;
};

export default Banners;
