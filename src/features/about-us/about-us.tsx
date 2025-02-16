import { AboutUsHeader } from "./components/about-us-header";
import OurMission from "./components/our-mission";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <AboutUsHeader />
      <OurMission />
    </div>
  );
};

export default AboutUs;
