import React from "react";

const ImageBox = ({ modal, projects }) => {
  const { active, index } = modal;
  return (
    <div className="relative w-full h-full overflow-hidden">
      {projects.map((project, i) => (
        <img
          key={i}
          src={project.src}
          alt={project.name}
          className={`absolute top-0 left-0 transition-opacity duration-300 ${
            active && index === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageBox;
