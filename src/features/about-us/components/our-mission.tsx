import { Home } from "lucide-react";
import Image from "next/image";
import Palette from "@/assets/images/palette.png";
import BuildingHouse from "@/assets/images/building.png";
import { twMerge } from "tailwind-merge";

const OUR_MISSIONS = [
  {
    title:
      "We aim to revitalize homes by creating spaces that reflect the unique stories of those who live in them. Through thoughtful design and practical solutions, we turn ordinary houses into warm, memorable homes",
    isActive: true,
  },
  {
    title:
      "Our mission is to combine modern design with inviting comfort, ensuring each renovation balances contemporary style with the cozy atmosphere that makes a house feel like home",
    isActive: false,
  },
  {
    title:
      "We work closely with clients to bring their dream homes to life. With care and attention to detail, we transform visions into reality",
    isActive: false,
  },
];

const OurMission = () => {
  return (
    <section className="container mx-auto px-4 pt-4 relative">
      <div className="grid gap-8 lg:grid-cols-2 lg:flex-row-reverse">
        <div className="order-2 lg:order-1 space-y-6 md:w-[486px] mx-auto">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="relative rounded-lg overflow-hidden h-[364px] m-auto"
          >
            <Image
              src={BuildingHouse}
              alt="Construction site showing houses under renovation"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-once="true"
            className="bg-muted rounded-lg relative"
          >
            <div className="flex flex-col gap-6 items-center justify-between mb-4 absolute z-10 text-white top-10 left-10">
              <h3 className="text-4xl font-gotham-medium">4.8/5</h3>
              <p className="font-gotham-medium">
                Ratings from
                <br />
                Customers
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden h-[364px]">
              <Image
                src={Palette}
                alt="Color swatches"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue500 font-gotham-medium">
              <Home className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">About Us</span>
            </div>
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="600"
              className="text-4xl tracking-wider lg:text-5xl w-[300px] !leading-[60px]"
            >
              Reigniting Homes, Revitalizing Lives
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              Turning Houses into Heartfelt Homes for Every Family
            </h2>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-gotham-medium">Our Missions :</h3>
            <div className="space-y-4">
              {OUR_MISSIONS.map((mission, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="200"
                  className={twMerge(
                    "bg-blue500 text-white rounded-lg p-6",
                    mission.isActive && "bg-orange500"
                  )}
                >
                  <p>{mission.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
