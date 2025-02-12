import Image from "next/image";
import { SERVICES } from "./services.const";

const ServicesMobile = () => {
  return (
    <div className="flex overflow-scroll gap-4 md:hidden">
      {SERVICES.map((service) => (
        <div
          key={service.id}
          className="relative group overflow-scroll rounded-lg min-w-[200px] scrollbar-none"
        >
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={400}
            className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 hover:bg-black/0 flex items-end justify-center p-6">
            <h3 className="text-white text-xl font-semibold">
              {service.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesMobile;
