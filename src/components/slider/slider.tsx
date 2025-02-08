"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface SliderProps {
  images: StaticImageData[];
}

const Slider = ({ images }: SliderProps) => {
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
            className="bg-center bg-cover flex items-center justify-center mb-10"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="block w-full h-full object-cover rounded-[40px]"
              priority={index === middleIndex}
            />
          </SwiperSlide>
        ))}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
          <button className="swiper-button-prev !static !w-4 !h-4 !text-gray-400 !m-0 after:content-['←'] after:!text-lg">
            <span className="sr-only">Previous slide</span>
          </button>

          <div className="swiper-pagination !static !w-auto flex gap-3"></div>

          <button className="swiper-button-next !static !w-4 !h-4 !text-gray-400 !m-0 after:content-['→'] after:!text-lg">
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 !important;
          cursor: pointer;
          padding: 0;
          border: none;
        }
        .swiper-pagination-bullet-active {
          background: #6366f1;
          opacity: 1;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-weight: normal;
        }
      `}</style>
    </div>
  );
};

export default Slider;
