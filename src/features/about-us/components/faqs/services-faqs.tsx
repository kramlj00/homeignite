import { Home } from "lucide-react";
import SinkImage from "@/assets/images/sink.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/mousewheel";
import FaqsSwiper from "./faqs-swiper";
import ServicesFaqsMobile from "./services-faqs-mobile";

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
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 xl:gap-14">
        <div className="relative xl:col-span-2 h-[320px] overflow-hidden rounded-lg">
          <Image
            src={SinkImage}
            alt="Sink"
            className="w-full h-full object-cover"
          />
        </div>
        <FaqsSwiper />
        <ServicesFaqsMobile />
      </div>
    </section>
  );
};

export default ServicesFAQs;
