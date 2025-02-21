"use client";

import { useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICES_FAQS } from "./services-faqs.const";
import { twMerge } from "tailwind-merge";
import type { Swiper as SwiperType } from "swiper";

const FaqsSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1.4}
      mousewheel={{
        thresholdDelta: 20,
        thresholdTime: 50,
      }}
      modules={[Mousewheel]}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="h-[450px] w-[580px] overflow-hidden"
    >
      {SERVICES_FAQS.map((faq, index) => (
        <SwiperSlide
          key={index}
          className={twMerge(activeIndex === index && "!h-[290px]")}
        >
          <button
            className={twMerge(
              "w-[580px] transition-all duration-500 rounded-lg p-8 text-left",
              activeIndex === index
                ? "bg-green800 h-[270px] cursor-default"
                : "bg-blue1000 h-fit"
            )}
            onClick={(e) => {
              e.preventDefault();
              const swiperElement = e.currentTarget.closest(
                ".swiper"
              ) as HTMLElement & { swiper: SwiperType };
              swiperElement?.swiper?.slideTo(index);
            }}
          >
            <p className="text-2xl text-white">{faq.question}</p>
            {activeIndex === index && (
              <p className="text-white/50 text-base md:text-lg mt-2">
                {faq.answer}
              </p>
            )}
          </button>
        </SwiperSlide>
      ))}
      {activeIndex === 3 && <SwiperSlide />}
    </Swiper>
  );
};

export default FaqsSwiper;
