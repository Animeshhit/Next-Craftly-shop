import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { BannerType } from "@/types/BannerType";
import ImageLoader from "./ImageLoader";

export default function SwiperBanner({
  banners,
}: {
  banners: BannerType[] | [];
}) {
  return (
    <section className="w-full mt-8">
      <Carousel className="w-full">
        <CarouselContent>
          {banners &&
            banners.map((banner: BannerType, index: number) => {
              return (
                <CarouselItem key={index}>
                  <div className="relative h-[500px] w-full overflow-hidden">
                    <ImageLoader
                      src={banner.bannerImage}
                      fill
                      alt={banner.bannerText}
                      className="aspect-[1920/500] object-cover w-full h-full rounded-md"
                    />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-primary-foreground transition-colors hover:bg-primary/75 focus:outline-none focus:ring-1 focus:ring-primary">
          <ChevronLeftIcon className="h-6 w-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-primary-foreground transition-colors hover:bg-primary/75 focus:outline-none focus:ring-1 focus:ring-primary">
          <ChevronRightIcon className="h-6 w-6" />
        </CarouselNext>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2">
          <div />
          <div />
          <div />
        </div>
      </Carousel>
    </section>
  );
}

function ChevronLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
