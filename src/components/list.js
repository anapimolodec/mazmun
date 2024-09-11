import React from "react";
import Project from "./project";

const ProjectList = ({ projects, setModal }) => {
  return (
    <div className="w-full overflow-y-scroll">
      <ul className="divide-y divide-slate-700 w-full">
        {projects.map((project, index) => (
          <Project
            id={project.id}
            key={project.id}
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
