import { Home } from "lucide-react";
import SinkImage from "@/assets/images/sink.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/mousewheel";
import FaqsSwiper from "./faqs-swiper";

const ServicesFAQs = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-8 mb-16">
        <div className="flex items-center gap-2 text-blue500 font-gotham-medium">
          <Home className="h-5 w-5" />
          <span className="text-sm uppercase tracking-wide">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl flex flex-col gap-2">
          <span>Everything You Need to Know</span>
          <span>About Our Services and Solutions</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-14 w-full justify-center">
        <div className="relative max-w-[520px] w-full h-[320px] overflow-hidden rounded-lg">
          <Image
            src={SinkImage}
            alt="Sink"
            className="w-full h-full object-cover"
          />
        </div>
        <FaqsSwiper />
      </div>
    </section>
  );
};

export default ServicesFAQs;
