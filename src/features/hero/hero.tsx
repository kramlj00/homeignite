import Image from "next/image";
import HeroImage from "@/assets/images/hero-image.png";

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen bg-hero-background bg-cover bg-center w-full">
      <div className="absolute bottom-0 right-[170px]">
        <div className="relative bg-white/5 px-28 pt-4">
          <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
            <Image src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
