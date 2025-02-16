import RectangleCard from "@/components/card/rectangle-card";
import { RenovationTimelineStepPosition } from "./renovation-timeline.const";
import { twMerge } from "tailwind-merge";
import AnimationOnScroll from "@/components/animation/AnimationOnScroll";
interface IProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: RenovationTimelineStepPosition;
  isFirst: boolean;
  isLast: boolean;
}

const RenovationTimelineStep = ({
  title,
  description,
  icon,
  position,
  isFirst,
  isLast,
}: IProps) => {
  return (
    <div className="hidden sm:grid grid-cols-[1fr_4rem_1fr] mx-auto max-w-[710px] gap-4">
      {position === RenovationTimelineStepPosition.LEFT ? (
        <>
          <RectangleCard className="bg-zinc-100 text-gray-900 w-full max-w-[314px] my-12">
            <div className="p-5">
              <h3 className="font-gotham-bold text-xl mb-2">{title}</h3>
              <p className="text-muted-foreground font-normal normal-case">
                {description}
              </p>
            </div>
          </RectangleCard>
          <div className="flex justify-center items-center h-full relative">
            <AnimationOnScroll
              classNameInView="bg-orange500 animate-line-grow"
              className={twMerge(
                "w-0.5 bg-zinc-200 absolute",
                isFirst ? "h-1/2 bottom-0" : isLast ? "h-1/2 top-0" : "h-full"
              )}
            />
            <RectangleCard
              className="w-16 h-16 bg-orange500 flex items-center justify-center text-white relative z-10"
              clipPath="polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
            >
              {icon}
            </RectangleCard>
          </div>
          <div></div>
        </>
      ) : (
        <>
          <div></div>
          <div className="flex justify-center items-center h-full relative">
            <AnimationOnScroll
              classNameInView="bg-orange500 animate-line-grow"
              className={twMerge(
                "w-0.5 bg-zinc-100 absolute",
                isFirst ? "h-1/2 bottom-0" : isLast ? "h-1/2 top-0" : "h-full"
              )}
            />
            <RectangleCard
              className="w-16 h-16 bg-orange500 flex items-center justify-center text-white relative z-10"
              clipPath="polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
            >
              {icon}
            </RectangleCard>
          </div>
          <RectangleCard className="bg-zinc-100 text-gray-900 w-full max-w-[314px]">
            <div className="p-5">
              <h3 className="!text-black font-gotham-bold text-xl mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground font-normal normal-case">
                {description}
              </p>
            </div>
          </RectangleCard>
        </>
      )}
    </div>
  );
};

export default RenovationTimelineStep;
