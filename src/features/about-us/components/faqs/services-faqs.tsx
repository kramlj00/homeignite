"use client";

import { Home } from "lucide-react";
import { useState } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SERVICES_FAQS } from "./services-faqs.const";
import { twMerge } from "tailwind-merge";
import SinkImage from "@/assets/images/sink.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/mousewheel";
import type { Swiper as SwiperType } from "swiper";

const ServicesFAQs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8 mb-16">
        <div className="flex items-center gap-2 text-blue500 font-gotham-medium">
          <Home className="h-5 w-5" />
          <span className="text-sm uppercase tracking-wide">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl flex flex-col gap-2">
          <span>Everything You Need to Know</span>
          <span>About Our Services and Solutions</span>
        </h2>
      </div>
      <div className="flex gap-14">
        <div className="relative w-[500px] h-[320px] overflow-hidden rounded-lg">
          <Image src={SinkImage} alt="Sink" className="w-full h-full" />
        </div>
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
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesFAQs;
