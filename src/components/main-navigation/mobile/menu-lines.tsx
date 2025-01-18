import { SetStateAction } from "react";

import { Dispatch } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

const MenuLines = ({ toggle, setToggle }: IProps) => {
  return (
    <div className="flex flex-col gap-1 w-6 z-20">
      {Array.from({ length: 3 }).map((_, index) => (
        <button
          key={index}
          className={twMerge(
            "w-full h-1 bg-white transition-all duration-[700ms] ease-out",
            toggle && index === 0 && "transform rotate-45 translate-y-[8px]",
            toggle &&
              index === 2 &&
              "transform rotate-[-45deg] translate-y-[-8px]",
            toggle && index === 1 && "opacity-0"
          )}
          onClick={() => setToggle(!toggle)}
        />
      ))}
    </div>
  );
};

export default MenuLines;
