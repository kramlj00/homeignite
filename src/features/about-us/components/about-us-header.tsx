import Image from "next/image";

import ModernHomeImage from "@/assets/images/modern-home.jpg";
import Button from "@/components/button";
import { BUTTON_VARIANT } from "@/components/button/button-variants.const";

export const AboutUsHeader = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 w-full">
        <Image
          src={ModernHomeImage}
          alt="Modern interior living space with wooden furniture and minimalist design"
          fill
          priority
          quality={100}
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center text-white max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-[42px] mb-8 leading-tight">
          <span className="font-gotham-medium">PROFESSIONAL </span>
          <span className="font-gotham-light">SERVICE FOR </span>
          <span className="font-gotham-medium">HIGH QUALITY </span>
          <span className="font-gotham-light">HOME CONSTRUCTION TAILORED</span>
        </h1>

        <p className="text-lg sm:text-xl max-w-4xl mb-12 leading-relaxed font-gotham-medium text-zinc-200">
          At HomeIgnite, we believe your home should feel as unique and
          comforting as you are. Specializing in remodelling and renovations, we
          turn houses into cozy havens, blending style and functionality with
          care. From modern updates to timeless designs, our passion is creating
          spaces where memories are made and dreams take shape. Let us help you
          fall in love with your home all over again
        </p>

        <Button variant={BUTTON_VARIANT.PRIMARY}>BOOK A CALL</Button>
      </div>
    </section>
  );
};
