import Image from "next/image";
import RectangleImage1 from "@/assets/images/rectangle-image-1.png";
import RectangleImage2 from "@/assets/images/rectangle-image-2.png";
import RectangleCard from "@/components/card/rectangle-card";
import HeroActions from "./hero-actions";
import Swiper from "./swiper";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 w-full">
        <Image
          src="/images/hero-bg.png"
          alt="Modern interior living space with wooden furniture and minimalist design"
          fill
          priority
          className="object-cover w-full"
        />
      </div>
      <div className="flex w-full justify-between gap-4 lg:flex-row flex-col-reverse">
        <div className="lg:mb-0 mb-16 relative m-auto flex h-full max-w-[1700px] flex-col justify-between p-4 pb-20 lg:h-[700px] lg:flex-row lg:items-center lg:gap-10 lg:p-0 lg:py-[12.5px] lg:pl-[90px]">
          <Swiper />
        </div>

        <div className="relative lg:h-screen w-full">
          <div className="absolute top-56 left-4 lg:left-auto lg:top-auto lg:bottom-[40vh] lg:right-[35vw]">
            <RectangleCard className="z-50 m-auto sm:w-full w-32">
              <div
                className="flex flex-col gap-1"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <Image src={RectangleImage1} alt="Hero" />
                <p className="hidden md:block text-sm text-blue500 uppercase">
                  Kitchen renovation
                </p>
              </div>
            </RectangleCard>
          </div>

          <div className="absolute top-[300px] md:top-auto md:bottom-44 right-8">
            <RectangleCard className="z-50 sm:w-full w-32">
              <div
                data-aos="fade-left"
                data-aos-once="true"
                className="flex flex-col gap-1"
              >
                <Image src={RectangleImage2} alt="Hero" />
                <p className="hidden md:block text-sm text-blue500 uppercase">
                  Full house renovation
                </p>
              </div>
            </RectangleCard>
          </div>

          <div className="hidden lg:block absolute top-28 top-auto bottom-0 right-[60px] left-1/2 left-auto -translate-x-1/2 md:translate-x-0 w-fit">
            <div className="relative px-28 pt-4 bg-gradient-to-b from-white/5 to-transparent">
              <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
                <Image
                  src="/images/hero-image.png"
                  alt="Hero"
                  width={600}
                  height={900}
                  className="h-[calc(100vh-140px)] w-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:hidden relative flex items-center mt-32">
            <div className="relative px-10 pt-4 bg-gradient-to-b from-white/5 to-transparent m-auto">
              <div className="relative [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)]">
                <Image
                  src="/images/hero-image.png"
                  alt="Hero"
                  width={300}
                  height={550}
                  className="h-[55vh] w-auto object-cover"
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
