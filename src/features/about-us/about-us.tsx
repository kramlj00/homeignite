import { AboutUsHeader } from "./components/about-us-header";
import OurMission from "./components/our-mission";
import OurTeam from "./components/our-team";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <AboutUsHeader />
      <OurMission />
      <OurTeam />
    </div>
  );
};

export default AboutUs;
