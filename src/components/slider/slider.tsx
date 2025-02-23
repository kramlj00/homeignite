"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";
import SliderPaginationBullets from "./slider-pagination-bullets";

interface SliderProps {
  images: StaticImageData[];
  children?: React.ReactNode;
}

const Slider = ({ images, children }: SliderProps) => {
  const middleIndex = Math.floor(images.length / 2);

  return (
    <div className="relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        initialSlide={middleIndex}
        breakpoints={{
          480: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 1.6,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        loop={true}
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
        coverflowEffect={{
          rotate: 5,
          stretch: 120,
          depth: 400,
          modifier: 2,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full py-12 [&_.swiper-slide]:opacity-75 [&_.swiper-slide-active]:!opacity-100 [&_.swiper-slide]:scale-75 [&_.swiper-slide-active]:scale-100 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-300"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-center bg-cover flex items-center justify-center"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover rounded-[40px]"
              priority={index === middleIndex}
            />
          </SwiperSlide>
        ))}

        {children}

        <SliderPaginationBullets />
      </Swiper>
    </div>
  );
};

export default Slider;
