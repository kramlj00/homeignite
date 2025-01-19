"use client";

import { useRef, useState } from "react";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as ReactSwiper, SwiperClass, SwiperSlide } from "swiper/react";
import { SWIPER_SLIDES } from "./swiper.const";
import SwiperNavigation from "./swiper-navigation";

const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperClass>(null);

  return (
    <div className="mx-auto flex w-fit items-start gap-16">
      <SwiperNavigation activeIndex={activeIndex} />

      <div className="mx-auto flex h-full max-h-[400px]">
        <div className="flex items-center justify-center">
          <ReactSwiper
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="h-full"
            slidesPerView={1}
            centeredSlides
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1500}
            // loop
            breakpoints={{
              1024: {
                height: undefined,
                direction: "vertical",
              },
              768: {
                height: 490,
                direction: "horizontal",
              },
            }}
            navigation={{
              nextEl: "#swiper-button-next",
              prevEl: "#swiper-button-prev",
            }}
            initialSlide={0}
            onActiveIndexChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
          >
            {SWIPER_SLIDES.map((slide) => {
              return (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col h-full gap-4 m-auto">
                    <h2 className="text-white text-[56px] font-bold max-w-[270px] leading-[60px]">
                      {slide.title}
                    </h2>
                    <p className="text-white text-sm max-w-[300px] text-[22px] leading-7">
                      {slide.subtitle}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </ReactSwiper>
        </div>
      </div>
    </div>
  );
};

export default Swiper;
