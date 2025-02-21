import { AboutUsHeader } from "./components/about-us-header";
import { Experience } from "./components/experience/experience";
import OurMission from "./components/our-mission";
import OurTeam from "./components/our-team";
import { ServicesFAQs } from "./components/faqs";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <AboutUsHeader />
      <OurMission />
      <OurTeam />
      <Experience />
      <ServicesFAQs />
    </div>
  );
};

export default AboutUs;
