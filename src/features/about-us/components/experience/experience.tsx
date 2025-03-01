import { Check, Home } from "lucide-react";
import Image from "next/image";
import { EXPERIENCE } from "./experience.const";
import Construction from "@/assets/images/construction.png";
import { twMerge } from "tailwind-merge";

export const Experience = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="flex xl:flex-row flex-col gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue500 font-gotham-medium">
              <Home className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">
                Expertise and Experience
              </span>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-once="true"
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-6xl flex flex-col gap-2"
            >
              <span>Bringing Expertise</span>
              <span>to Every Project</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              className="text-muted-foreground text-lg"
            >
              At HomeIgnite, we take pride in our deep industry knowledge and
              extensive experience, honed over years of transforming homes. Our
              team is dedicated to delivering superior craftsmanship, blending
              innovation with precision. Here&apos;s a closer look at the areas
              where we excel
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {EXPERIENCE.map((item, index) => (
              <div
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-delay="300"
                key={index}
                className={twMerge(
                  "p-6 transition-colors rounded-lg text-white",
                  item.isPrimary ? "bg-orange500" : "bg-blue500"
                )}
              >
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0" />
                  <span className="font-gotham-medium text-md text-zinc-100">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="300"
          className="relative w-full sm:min-w-[525px] w-full"
        >
          <div className="relative h-[720px] rounded-lg overflow-hidden">
            <Image
              src={Construction}
              alt="Construction professional reviewing plans"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-8 left-8 text-white">
              <div className="text-5xl font-gotham-medium mb-2">50,000 +</div>
              <div className="text-xl font-gotham-medium">
                Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
