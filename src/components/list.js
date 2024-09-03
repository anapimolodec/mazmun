import React from "react";

function ProjectList() {
  return (
    <div className="project-list">
      <ul>
        {Array.from({ length: 50 }, (_, i) => (
          <li key={i}>Project {i + 1}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
