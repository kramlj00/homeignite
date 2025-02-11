import Image from "next/image";
import RectangleImage1 from "@/assets/images/rectangle-image-1.png";
import RectangleImage2 from "@/assets/images/rectangle-image-2.png";
import HeroImage from "@/assets/images/hero-image.png";
import RectangleCard from "@/components/card/rectangle-card";
import HeroActions from "./hero-actions";
import Swiper from "./swiper";

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen bg-hero-background bg-cover bg-center">
      <div className="flex w-full justify-between gap-4 lg:flex-row flex-col-reverse">
        <div className="lg:mb-0 mb-16 relative m-auto flex h-full max-w-[1700px] flex-col justify-between p-4 pb-20 lg:h-[700px] lg:flex-row lg:items-center lg:gap-10 lg:p-0 lg:py-[12.5px] lg:pl-[90px]">
          <Swiper />
        </div>

        <div className="relative lg:h-screen w-full">
          <div className="absolute top-56 left-4 lg:left-auto lg:top-auto lg:bottom-80 lg:right-[500px]">
            <RectangleCard className="z-50 m-auto sm:w-full w-32">
              <div className="flex flex-col gap-1">
                <Image src={RectangleImage1} alt="Hero" />
                <p className="hidden md:block text-sm font-semibold text-blue500 uppercase">
                  Kitchen renovation
                </p>
              </div>
            </RectangleCard>
          </div>

          <div className="absolute top-[300px] md:top-auto md:bottom-44 right-8">
            <RectangleCard className="z-50 sm:w-full w-32">
              <div className="flex flex-col gap-1">
                <Image src={RectangleImage2} alt="Hero" />
                <p className="hidden md:block text-sm font-semibold text-blue500 uppercase">
                  Full house renovation
                </p>
              </div>
            </RectangleCard>
          </div>

          <div className="hidden lg:block absolute top-28 top-auto bottom-0 right-[60px] left-1/2 left-auto -translate-x-1/2 md:translate-x-0 w-fit">
            <div className="relative px-28 pt-4 bg-gradient-to-b from-white/5 to-transparent">
              <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
                <Image
                  src={HeroImage}
                  alt="Hero"
                  className="h-[calc(100vh-140px)] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden relative flex items-center mt-32">
            <div className="relative px-10 pt-4 bg-gradient-to-b from-white/5 to-transparent m-auto">
              <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
                <Image
                  src={HeroImage}
                  alt="Hero"
                  className="h-fit md:h-[55vh] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroActions />
    </div>
  );
};

export default Hero;
