import React from "react";
import MagicBadge from "../magic-badge";
import SkillCard from "./skill-card";

const SkillsSection = () => {
  return (
    <div className="py-20" id="skills">
      <div className="flex items-center justify-center flex-col">
        <MagicBadge title="Skills" />
      </div>
      <div>
        <SkillCard />
      </div>
    </div>
  );
};

export default SkillsSection;
