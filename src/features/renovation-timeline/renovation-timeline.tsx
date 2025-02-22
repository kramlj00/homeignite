import RenovationTimelineStep from "./renovation-timeline-step";
import { RENOVATION_TIMELINE_STEPS } from "./renovation-timeline.const";
import RenovationTimelineMobile from "./renovation-timeline-mobile";
import { BUTTON_VARIANT } from "@/components/button/button-variants.const";
import Button from "@/components/button/button";

const RenovationTimeline = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 relative">
      <h1 className="text-5xl md:text-6xl font-light text-center">
        Why choose Homeignite?
      </h1>
      <p className="text-center text-muted-foreground my-12 max-w-[470px] mx-auto">
        No need to worry - our structured process has been designed to complete
        projects on time and on budget
      </p>
      {RENOVATION_TIMELINE_STEPS.map((step, index) => (
        <div key={step.title}>
          <RenovationTimelineStep
            {...step}
            isFirst={index === 0}
            isLast={index === RENOVATION_TIMELINE_STEPS.length - 1}
          />
          <RenovationTimelineMobile
            {...step}
            isFirst={index === 0}
            isLast={index === RENOVATION_TIMELINE_STEPS.length - 1}
          />
        </div>
      ))}
      <div className="my-24 w-full flex justify-center">
        <Button variant={BUTTON_VARIANT.PRIMARY}>Book free consultation</Button>
      </div>
    </div>
  );
};

export default RenovationTimeline;
