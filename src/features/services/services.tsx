"use client";

import { useState } from "react";
import { SERVICES } from "./services.const";
import { twMerge } from "tailwind-merge";
import ServicesMobile from "./services-mobile";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="content-wrapper md:px-20 flex flex-col gap-16">
      <h1
        data-aos="fade-up"
        data-aos-once="true"
        className="text-5xl md:text-6xl font-light"
      >
        Beyond Homes:{" "}
        <span className="text-orange400">
          Designing <br /> Everything
        </span>
      </h1>
      <div className="w-full max-w-[1700px] mx-auto">
        <ServicesMobile />
        <div
          data-aos="fade-down"
          data-aos-once="true"
          className="md:flex items-center justify-center w-full h-[540px] gap-2 hidden"
        >
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
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-all duration-500 ease-in-out" />
              <div
                className={twMerge(
                  "absolute left-6 right-6",
                  activeIndex === index ? "top-6 text-xl" : "bottom-6 text-md"
                )}
              >
                <h3 className="text-white font-gotham-medium">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
