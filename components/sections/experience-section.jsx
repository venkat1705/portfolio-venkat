import React from "react";
import MagicBadge from "../magic-badge";
import { ExperienceTimeline } from "./expirience-timeline";

const Experience = () => {
  return (
    <div className="py-0" id="experience">
      <div className="flex items-center justify-center flex-col">
        <MagicBadge title="Exprience" />
      </div>

      <div className="">
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Experience;
