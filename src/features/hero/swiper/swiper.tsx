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
    <div className="flex w-full max-w-[250px] lg:max-w-[400px] gap-10 max-lg:flex-col lg:mt-0 lg:pr-10 m-auto">
      <SwiperNavigation activeIndex={activeIndex} />
      <div className="m-auto flex h-full max-h-[33rem] w-full p-[1.5px] lg:max-h-[33rem] lg:max-w-[800px] h-fit">
        <div className="w-full lg:p-5">
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
            {SWIPER_SLIDES.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-4 m-auto">
                    <h2 className="text-white text-center lg:text-left text-3xl lg:text-[56px] font-bold max-w-[270px] lg:leading-[60px]">
                      {slide.title}
                    </h2>
                    <p className="text-white text-center lg:text-left text-sm max-w-[300px] lg:text-[22px] lg:leading-7">
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
