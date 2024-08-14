"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../../sections/Banners.css";

import { Pagination, Autoplay } from "swiper/modules";
import { BannerType } from "@/types/BannerType";
interface propType {
  banners: BannerType[] | [];
}
const SwiperBanner = ({ banners }: propType) => {
  return (
    <div className="w-full h-[350px] md:h-[400px] mt-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {banners &&
          banners.map((banner: BannerType, index: number) => (
            <SwiperSlide key={index}>
              <Image
                fill
                blurDataURL={banner.bannerImageHash}
                src={banner.bannerImage}
                placeholder="blur"
                alt="Nature 1"
                loading="lazy"
                className="object-contain md:object-cover w-full h-full object-center rounded-md"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
