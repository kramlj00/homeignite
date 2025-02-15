import AnimationOnScroll from "@/components/animation/AnimationOnScroll";
import RectangleCard from "@/components/card/rectangle-card";
import { twMerge } from "tailwind-merge";

interface IProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isFirst: boolean;
  isLast: boolean;
}

const RenovationTimelineMobile = ({
  title,
  description,
  icon,
  isFirst,
  isLast,
}: IProps) => {
  return (
    <div className="sm:hidden grid grid-cols-[4rem_1fr] mx-auto max-w-[710px] gap-4">
      <div className="flex justify-center items-center h-full relative">
        <AnimationOnScroll
          classNameInView="bg-orange500 animate-line-grow"
          className={twMerge(
            "w-0.5 bg-zinc-100 absolute",
            isFirst ? "h-1/2 bottom-0" : isLast ? "h-1/2 top-0" : "h-full"
          )}
        />
        <RectangleCard
          className="w-12 h-12 bg-orange500 flex items-center justify-center text-white relative z-10"
          clipPath="polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
        >
          {icon}
        </RectangleCard>
      </div>
      <RectangleCard className="bg-zinc-100 text-gray-900 w-full max-w-[314px] my-4">
        <div className="p-5">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-muted-foreground font-normal normal-case">
            {description}
          </p>
        </div>
      </RectangleCard>
    </div>
  );
};

export default RenovationTimelineMobile;
