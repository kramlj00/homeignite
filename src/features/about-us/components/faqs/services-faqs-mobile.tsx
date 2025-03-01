"use client";

import { twMerge } from "tailwind-merge";
import { SERVICES_FAQS } from "./services-faqs.const";
import { useState } from "react";

const ServicesFaqsMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col xl:hidden gap-4 w-full">
      {SERVICES_FAQS.map((faq, index) => (
        <button
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay={`${index * 100}ms`}
          key={index}
          className={twMerge(
            "w-full h-fit transition-all duration-300 rounded-lg p-8 text-left hover:scale-[1.02] active:scale-[0.98]",
            activeIndex === index
              ? "bg-green800 cursor-default hover:scale-100 active:scale-100"
              : "bg-blue1000"
          )}
          onClick={() => setActiveIndex(index)}
        >
          <p className="text-2xl text-white transition-all duration-300">
            {faq.question}
          </p>
          <div
            className={twMerge(
              "overflow-hidden transition-all duration-300 ease-in-out",
              activeIndex === index
                ? "max-h-[500px] opacity-100 mt-2"
                : "max-h-0 opacity-0"
            )}
          >
            <p className="text-white/50 text-base md:text-lg">{faq.answer}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ServicesFaqsMobile;
