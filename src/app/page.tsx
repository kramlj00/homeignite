import Hero from "@/features/hero";
import ElevateYourHome from "@/features/elevate-your-home";
import Blinds from "@/features/blinds";
import Services from "@/features/services";
import ProjectsShowcase from "@/features/projects-showcase";
import RenovationTimeline from "@/features/renovation-timeline/renovation-timeline";
import BookMeeting from "@/features/book-meeting";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ElevateYourHome />
      <Blinds />
      <Services />
      <ProjectsShowcase />
      <RenovationTimeline />
      <BookMeeting />
    </>
  );
};

export default HomePage;
