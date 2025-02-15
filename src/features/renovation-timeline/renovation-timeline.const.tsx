import { FileText, Wrench, Ruler, HardHat, Building2 } from "lucide-react";

export enum RenovationTimelineStepPosition {
  LEFT = "left",
  RIGHT = "right",
}

export const RENOVATION_TIMELINE_STEPS = [
  {
    title: "Initial consultation",
    description:
      "The first thing your renovation consultant will want to know is what it is that you want to achieve through your home renovation.",
    icon: <FileText className="w-6 h-6" />,
    position: RenovationTimelineStepPosition.RIGHT,
  },
  {
    title: "Concept and feasibility",
    description:
      "The first thing your renovation consultant will want to know is what it is that you want to achieve through your home renovation.",
    icon: <Wrench className="w-6 h-6" />,
    position: RenovationTimelineStepPosition.LEFT,
  },
  {
    title: "Working drawings and costing",
    description:
      "The first thing your renovation consultant will want to know is what it is that you want to achieve through your home renovation.",
    icon: <Ruler className="w-6 h-6" />,
    position: RenovationTimelineStepPosition.RIGHT,
  },
  {
    title: "Construction stage",
    description:
      "The first thing your renovation consultant will want to know is what it is that you want to achieve through your home renovation.",
    icon: <HardHat className="w-6 h-6" />,
    position: RenovationTimelineStepPosition.LEFT,
  },
  {
    title: "Your finished renovation",
    description:
      "The first thing your renovation consultant will want to know is what it is that you want to achieve through your home renovation.",
    icon: <Building2 className="w-6 h-6" />,
    position: RenovationTimelineStepPosition.RIGHT,
  },
];
