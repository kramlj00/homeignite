"use client";

import { useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICES_FAQS } from "./services-faqs.const";
import { twMerge } from "tailwind-merge";
import type { Swiper as SwiperType } from "swiper";

const FaqsSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(100 / SERVICES_FAQS.length);

  return (
    <div className="hidden xl:flex gap-8 col-span-3">
      <Swiper
        direction="vertical"
        slidesPerView={1.4}
        mousewheel={{
          thresholdDelta: 20,
          thresholdTime: 50,
        }}
        modules={[Mousewheel]}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          const slideProgress =
            ((swiper.activeIndex + 1) / SERVICES_FAQS.length) * 100;
          setProgress(Math.max(100 / SERVICES_FAQS.length, slideProgress));
        }}
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

      <div className="h-[270px] w-2 bg-transparent flex flex-col items-center gap-2 justify-between">
        <div className="h-full w-full flex flex-col items-center gap-2">
          <div className="h-2 w-2 bg-green800 rounded-full" />
          <div
            className="w-full bg-green800 transition-all duration-300"
            style={{ height: `${progress}%` }}
          />
        </div>
        <div className="h-2 w-2 bg-green800 rounded-full" />
      </div>
    </div>
  );
};

export default FaqsSwiper;
