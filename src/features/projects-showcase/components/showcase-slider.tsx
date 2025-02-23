"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { PROJECTS_SHOWCASE } from "../project-showcase.const";
import BeforeAfterToggle from "./before-after-toggle";
import { useState } from "react";
import Button from "@/components/button";
import { BUTTON_VARIANT } from "@/components/button/button-variants.const";
import { BUTTON_SIZE } from "@/components/button/button-size";
import SliderPaginationBullets from "@/components/slider/slider-pagination-bullets";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const ShowcaseSlider = () => {
  const middleIndex = Math.floor(PROJECTS_SHOWCASE.length / 2);

  const [afterImages, setAfterImages] = useState<number[]>([]);

  const handleToggle = (id: number, isAfter: boolean) => {
    setAfterImages((prev) => {
      if (isAfter) {
        return [...prev, id];
      }
      return prev.filter((imageId) => imageId !== id);
    });
  };

  return (
    <div className="relative">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        initialSlide={middleIndex}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1.4,
          },
        }}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          bulletElement: "button",
          renderBullet: function (index, className) {
            return `<button class="${className}" aria-label="Go to slide ${
              index + 1
            }"></button>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full py-12 [&_.swiper-slide]:opacity-75 [&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide]:scale-75 [&_.swiper-slide-active]:scale-100 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300"
      >
        {PROJECTS_SHOWCASE.map((project, index) => {
          const isAfter = afterImages.includes(project.id);
          return (
            <SwiperSlide
              key={project.id}
              className="bg-center bg-cover flex items-center justify-center !h-[50vh] md:!h-[70vh] px-4"
            >
              <Image
                src={isAfter ? project.afterImage : project.beforeImage}
                alt={`Slide ${index + 1}`}
                className="block w-full h-full object-cover rounded-lg z-0"
                priority={index === middleIndex}
              />
              <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2">
                <BeforeAfterToggle id={project.id} onToggle={handleToggle} />
                <Button
                  variant={BUTTON_VARIANT.ROUNDED}
                  size={BUTTON_SIZE.SMALL}
                  className="w-full max-w-[280px] mx-auto md:hidden"
                  onClick={() => handleToggle(project.id, !isAfter)}
                >
                  {!isAfter ? "After" : "Before"}
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
        <SliderPaginationBullets />
      </Swiper>
    </div>
  );
};

export default ShowcaseSlider;
