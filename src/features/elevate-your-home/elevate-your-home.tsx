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
    <div className="w-full py-12 px-4">
      <Slider images={images} />
    </div>
  );
};

export default ElevateYourHome;
