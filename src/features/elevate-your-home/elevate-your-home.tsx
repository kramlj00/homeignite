"use client";

import home1 from "@/assets/images/home/home1.jpg";
import home2 from "@/assets/images/home/home2.jpg";
import home3 from "@/assets/images/home/home3.jpg";
import home4 from "@/assets/images/home/home4.jpg";
import home5 from "@/assets/images/home/home5.jpeg";
import Slider from "../../components/slider/slider";

const images = [home1, home2, home3, home4, home5];

const ElevateYourHome = () => {
  return (
    <div className="w-full pt-24 p-12 px-4 overflow-hidden">
      <h1
        data-aos="fade-up"
        data-aos-once="true"
        className="text-center text-5xl md:text-6xl mb-2"
      >
        Elevate Your Home
      </h1>
      <p
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="300"
        className="text-center text-md mb-10"
      >
        Discover premium services that transform your living space into
        something <br />
        extraordinary
      </p>

      <div
        data-aos="fade-down-left"
        data-aos-once="true"
        data-aos-delay="400"
        className="relative !max-h-[80vh]"
      >
        <Slider images={images}>
          <p className="text-center text-xl font-medium mt-10">
            Blind Boutique
          </p>
        </Slider>
      </div>
    </div>
  );
};

export default ElevateYourHome;
