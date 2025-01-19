import { twMerge } from "tailwind-merge";
import { SWIPER_SLIDES } from "./swiper.const";

interface IProps {
  activeIndex: number;
}

const SwiperNavigation = ({ activeIndex }: IProps) => {
  return (
    <div className="hidden lg:flex flex-col gap-2 mt-6">
      {Array.from({ length: SWIPER_SLIDES.length }, (_, index) => (
        <button
          key={index}
          className={twMerge(
            "h-16 w-1",
            index === activeIndex ? "bg-orange500" : "bg-white"
          )}
        />
      ))}
    </div>
  );
};

export default SwiperNavigation;
