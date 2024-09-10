import React from "react";
import Project from "./project";

const ProjectList = ({ projects, setModal }) => {
  return (
    <div className="w-full overflow-y-scroll">
      <ul className="divide-y divide-blue30 w-full">
        {projects.map((project, index) => (
          <Project
            key={index}
            i={index}
            name={project.name}
            tags={project.tags}
            setModal={setModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
