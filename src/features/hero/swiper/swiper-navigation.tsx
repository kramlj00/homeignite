import { twMerge } from "tailwind-merge";
import { SWIPER_SLIDES } from "./swiper.const";
import { SwiperClass } from "swiper/react";

interface IProps {
  activeIndex: number;
  swiperRef: React.MutableRefObject<SwiperClass | null>;
}

const SwiperNavigation = ({ activeIndex, swiperRef }: IProps) => {
  return (
    <div className="hidden lg:flex flex-col gap-2 mt-6">
      {Array.from({ length: SWIPER_SLIDES.length }, (_, index) => (
        <button
          key={index}
          className={twMerge(
            "h-16 w-1",
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
