import { twMerge } from "tailwind-merge";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const RectangleCard = ({ children, className }: IProps) => {
  return (
    <div
      className={twMerge(
        "relative p-1 bg-white text-white font-semibold tracking-wider uppercase transition-transform clip-path-custom max-w-[244px]",
        className
      )}
      style={{
        clipPath:
          "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
      }}
    >
      {children}
    </div>
  );
};

export default RectangleCard;
