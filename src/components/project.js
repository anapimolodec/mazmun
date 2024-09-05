import React from "react";

const Project = ({ name, description, i, setModal }) => {
  return (
    <li
      className="p-6 project cursor-pointer transition-all duration-400 ease-linear hover:opacity-40 flex justify-between"
      onMouseEnter={() => setModal({ active: true, index: i })}
      onMouseLeave={() => setModal({ active: false, index: i })}
    >
      <h2 className="text-3xl transition-transform duration-400 ease-linear group-hover:-translate-x-2.5">
        {name}
      </h2>
      <p className="text-lg group-hover:translate-x-2.5">{name}</p>
    </li>
  );
};

export default Project;
