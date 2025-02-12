import { twMerge } from "tailwind-merge";
import {
  BUTTON_VARIANT,
  BUTTON_VARIANT_CLASSNAME,
} from "./button-variants.const";
import { BUTTON_SIZE, BUTTON_SIZE_CLASSNAME } from "./button-size";
interface IProps {
  variant: BUTTON_VARIANT;
  children: React.ReactNode;
  size?: BUTTON_SIZE;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  variant,
  size = BUTTON_SIZE.BIG,
  children,
  className,
  onClick,
}: IProps) => {
  return (
    <button
      className={twMerge(
        "relative px-8 h-12 sm:px-12 sm:h-[60px] text-white font-semibold tracking-wider text-sm uppercase transition-transform hover:translate-y-[-2px] clip-path-custom",
        BUTTON_VARIANT_CLASSNAME[variant],
        BUTTON_SIZE_CLASSNAME[size],
        className
      )}
      style={
        variant === BUTTON_VARIANT.PRIMARY
          ? {
              clipPath:
                "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            }
          : {}
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
