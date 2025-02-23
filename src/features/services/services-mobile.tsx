import Image from "next/image";
import { useState } from "react";
import { SERVICES } from "./services.const";
import { twMerge } from "tailwind-merge";

const ServicesMobile = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="flex overflow-scroll gap-4 md:hidden">
      {SERVICES.map((service) => (
        <div
          key={service.id}
          onClick={() =>
            setActiveId(activeId === service.id ? null : service.id)
          }
          className={twMerge(
            "relative group overflow-scroll rounded-lg transition-all duration-300 ease-in-out",
            activeId === service.id ? "min-w-[85vw]" : "min-w-[200px]"
          )}
        >
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className={twMerge(
              "w-full h-[400px] object-cover transition-transform duration-300",
              activeId === service.id && "w-[85vw]"
            )}
          />
          <div
            className={twMerge(
              "absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-300 ease-in-out flex items-end justify-center p-6",
              activeId === service.id && "w-[85vw]"
            )}
          >
            <h3 className="text-white text-xl font-gotham-medium">
              {service.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesMobile;
