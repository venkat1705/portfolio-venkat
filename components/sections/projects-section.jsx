import React from "react";
import MagicBadge from "../magic-badge";
import ProjectSteps from "./project-steps";

const ProjectSection = () => {
  return (
    <div className="py-20" id="projects">
      <div className="flex items-center justify-center flex-col">
        <MagicBadge title="Projects" />
      </div>

      <div>
        <ProjectSteps />
      </div>
    </div>
  );
};

export default ProjectSection;
