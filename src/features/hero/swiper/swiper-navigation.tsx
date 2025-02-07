import { twMerge } from "tailwind-merge";
import { SWIPER_SLIDES } from "./swiper.const";
import { SwiperClass } from "swiper/react";

interface IProps {
  activeIndex: number;
  swiperRef: React.MutableRefObject<SwiperClass | null>;
}

const SwiperNavigation = ({ activeIndex, swiperRef }: IProps) => {
  return (
    <div className="flex lg:flex-col gap-2 m-auto lg:mt-6 lg:m-0">
      {Array.from({ length: SWIPER_SLIDES.length }, (_, index) => (
        <button
          key={index}
          className={twMerge(
            "h-2 lg:h-16 w-2 lg:w-1 rounded-full lg:rounded-none",
            index === activeIndex ? "bg-orange500" : "bg-white"
          )}
          onClick={() => {
            index !== activeIndex &&
              swiperRef.current?.slideToLoop(index, 1000, false);
          }}
        />
      ))}
    </div>
  );
};

export default SwiperNavigation;
