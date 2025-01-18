import { twMerge } from "tailwind-merge";

interface DiagonalButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const DiagonalButton = ({
  children,
  className = "",
  onClick,
}: DiagonalButtonProps) => {
  return (
    <button
      className={twMerge(
        "relative px-8 py-3 bg-[#E8927C] text-white font-semibold tracking-wider uppercase transition-transform hover:translate-y-[-2px] clip-path-custom",
        className
      )}
      style={{
        clipPath:
          "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DiagonalButton;
