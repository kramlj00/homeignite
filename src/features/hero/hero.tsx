import Image from "next/image";
import RectangleImage1 from "@/assets/images/rectangle-image-1.png";
import RectangleImage2 from "@/assets/images/rectangle-image-2.png";
import HeroImage from "@/assets/images/hero-image.png";
import RectangleCard from "@/components/card/rectangle-card";
import HeroActions from "./hero-actions";

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen bg-hero-background bg-cover bg-center w-full">
      <div className="absolute bottom-80 right-[500px]">
        <RectangleCard className="z-50 m-auto">
          <div className="flex flex-col gap-1">
            <Image src={RectangleImage1} alt="Hero" />
            <p className="font-semibold text-blue500 text-sm uppercase">
              Kitchen renovation
            </p>
          </div>
        </RectangleCard>
      </div>

      <div className="absolute bottom-44 right-8">
        <RectangleCard className="z-50">
          <div className="flex flex-col gap-1">
            <Image src={RectangleImage2} alt="Hero" />
            <p className="font-semibold text-blue500 text-sm uppercase">
              Full house renovation
            </p>
          </div>
        </RectangleCard>
      </div>

      <div className="absolute top-28 md:top-auto md:bottom-0 md:right-[60px] left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 w-[70vw] md:w-fit">
        <div className="relative px-10 md:px-28 pt-4 bg-gradient-to-b from-white/5 to-transparent">
          <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
            <Image
              src={HeroImage}
              alt="Hero"
              className="h-[45vh] md:h-[calc(100vh-140px)] object-cover"
            />
          </div>
        </div>
      </div>

      <HeroActions />
    </div>
  );
};

export default Hero;
