import React from "react";

const Project = ({ name, i, setModal }) => {
  return (
    <li
      key={i}
      className="p-3 project"
      onMouseEnter={() => setModal({ active: true, index: i })}
      onMouseLeave={() => setModal({ active: false, index: i })}
    >
      <p className="text-3xl">{name}</p>
    </li>
  );
};

export default Project;
