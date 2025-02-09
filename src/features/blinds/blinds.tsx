import Image from "next/image";
import { BLINDS } from "./blinds.const";

const Blinds = () => {
  return (
    <div className="px-6 md:px-20 w-full py-12 px-4">
      <h1 className="text-4xl font-medium">Blind Boutique</h1>
      <p className="text-xl mb-10">
        Discover the Perfect Blinds for Every Space
      </p>
      <div className="flex overflow-scroll gap-4">
        {BLINDS.map((blind) => (
          <div
            key={blind.title}
            className="relative group overflow-scroll rounded-lg min-w-[200px] scrollbar-none"
          >
            <Image
              src={blind.imageSrc}
              alt={blind.title}
              width={600}
              height={400}
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/0 flex items-end justify-center p-6">
              <h3 className="text-white text-xl font-semibold">
                {blind.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blinds;
