import SwiperBanner from "@/components/SwiperBanner"; 

const Banners = async () => {
  let req = await fetch(`${process.env.SERVERHOST}/api/v1/banners`, {
    next: { revalidate: 600 },
  });
  let data = await req.json();
  return <SwiperBanner banners={data} />;
};

export default Banners;
