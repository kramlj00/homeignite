"use client";

import { useState } from "react";
import { SERVICES } from "./services.const";
import { twMerge } from "tailwind-merge";
import ServicesMobile from "./services-mobile";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="px-6 md:px-20 w-full py-16 px-4 flex flex-col gap-16">
      <h1 className="text-5xl md:text-6xl font-light">
        Beyond Homes:{" "}
        <span className="text-orange400">
          Designing <br /> Everything
        </span>
      </h1>
      <div className="w-full max-w-[1700px] mx-auto">
        <ServicesMobile />
        <div className="md:flex items-center justify-center w-full h-[540px] gap-2 hidden">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={twMerge(
                "relative rounded-lg overflow-hidden h-full w-full transition-all duration-500 ease-in-out cursor-pointer",
                activeIndex === index ? "w-[300%]" : "w-full"
              )}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="absolute inset-0 hover:bg-black/30 transition-all duration-500 ease-in-out" />
              <div
                className={twMerge(
                  "absolute left-6 right-6",
                  activeIndex === index ? "top-6 text-xl" : "bottom-6 text-md"
                )}
              >
                <h3 className="text-white font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
