"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

interface BeforeAfterToggleProps {
  id: number;
  onToggle?: (id: number, isAfter: boolean) => void;
}

const BeforeAfterToggle = ({ id, onToggle }: BeforeAfterToggleProps) => {
  const [isAfter, setIsAfter] = React.useState(false);

  const handleClick = () => {
    setIsAfter(!isAfter);
    onToggle?.(id, !isAfter);
  };

  return (
    <button
      onClick={handleClick}
      className="hidden relative md:flex h-12 w-full max-w-[280px] cursor-pointer items-center rounded-full bg-black p-1 transition-colors"
      type="button"
      role="switch"
      aria-checked={isAfter}
    >
      <div
        className={twMerge(
          "absolute h-10 w-[136px] rounded-full bg-white transition-all duration-200",
          isAfter && "translate-x-[136px]"
        )}
      />
      <span
        className={twMerge(
          "relative z-10 flex w-[136px] justify-center text-sm font-medium transition-colors duration-200",
          isAfter ? "text-white" : "text-black"
        )}
      >
        Before
      </span>
      <span
        className={twMerge(
          "relative z-10 flex w-[136px] justify-center text-sm font-medium transition-colors duration-200",
          isAfter ? "text-black" : "text-white"
        )}
      >
        After
      </span>
    </button>
  );
};

export default BeforeAfterToggle;
