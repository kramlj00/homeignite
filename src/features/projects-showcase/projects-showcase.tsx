import ShowcaseSlider from "./components/showcase-slider";

const ProjectsShowcase = () => {
  return (
    <div className="w-full pt-24 p-12 px-4">
      <h1
        data-aos="fade-up"
        data-aos-once="true"
        className="text-5xl md:text-6xl font-light text-center mb-20"
      >
        Creativity, Delivered on Demand!
      </h1>
      <ShowcaseSlider />
    </div>
  );
};

export default ProjectsShowcase;
