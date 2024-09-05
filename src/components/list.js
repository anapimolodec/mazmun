import React, { useState } from "react";
import Project from "./project";
import ImageBox from "./image";

const ProjectList = ({ projects }) => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="grid grid-cols-2 w-full">
      <div className="project-list flex text-left w-full">
        <ul className="divide-y divide-blue-200 w-full">
          {projects.map((project, index) => (
            <Project
              key={index}
              i={index}
              name={project.name}
              setModal={setModal}
            />
          ))}
        </ul>
      </div>
      <ImageBox modal={modal} projects={projects} />
    </div>
  );
};

export default ProjectList;
