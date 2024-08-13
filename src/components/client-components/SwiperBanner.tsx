// components/SwiperBanner.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../sections/Banners.css";

import { Pagination } from "swiper/modules";
import { BannerType } from "@/types/BannerType";
interface propType {
  banners: BannerType[] | [];
}
const SwiperBanner = ({ banners }: propType) => {
  return (
    <div className="w-full h-[400px] mt-8">
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {banners &&
          banners.map((banner: BannerType, index: number) => (
            <SwiperSlide key={index}>
              <Image
                fill
                src={banner.bannerImage}
                alt="Nature 1"
                loading="lazy"
                className="object-cover w-full h-full object-bottom rounded-md"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
