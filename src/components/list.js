import React from "react";

function ProjectList() {
  return (
    <div className="project-list flex text-left w-full">
      <ul className="divide-y divide-blue-200 w-full">
        {Array.from({ length: 20 }, (_, i) => (
          <li key={i} className="p-3">
            <p className="text-3xl">Project {i + 1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
