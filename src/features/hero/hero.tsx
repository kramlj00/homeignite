import Image from "next/image";
import RectangleImage1 from "@/assets/images/rectangle-image-1.png";
import RectangleImage2 from "@/assets/images/rectangle-image-2.png";
import HeroImage from "@/assets/images/hero-image.png";
import RectangleCard from "@/components/card/rectangle-card";
import HeroActions from "./hero-actions";

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen bg-hero-background bg-cover bg-center w-full">
      <div className="absolute top-80 right-[500px]">
        <RectangleCard className="z-50 m-auto">
          <div className="flex flex-col gap-1">
            <Image src={RectangleImage1} alt="Hero" />
            <p className="font-semibold text-blue500 text-sm uppercase">
              Kitchen renovation
            </p>
          </div>
        </RectangleCard>
      </div>

      <div className="absolute top-96 right-[20px]">
        <RectangleCard className="z-50">
          <div className="flex flex-col gap-1">
            <Image src={RectangleImage2} alt="Hero" />
            <p className="font-semibold text-blue500 text-sm uppercase">
              Full house renovation
            </p>
          </div>
        </RectangleCard>
      </div>

      <div className="absolute top-32 right-[60px]">
        <div className="relative bg-white/5 px-28 pt-4">
          <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
            <Image src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>

      <HeroActions />
    </div>
  );
};

export default Hero;
