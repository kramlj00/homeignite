"use client";

import { InView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

interface IProps {
  children?: React.ReactNode;
  classNameInView: string;
  className: string;
}

const AnimationOnScroll = ({
  children,
  classNameInView,
  className,
}: IProps) => {
  return (
    <InView triggerOnce threshold={1}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={twMerge(className, inView && classNameInView)}
        >
          {children}
        </div>
      )}
    </InView>
  );
};

export default AnimationOnScroll;
