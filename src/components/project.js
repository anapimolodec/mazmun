import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Tag } from "./tag";

const Project = ({ name, description, i, setModal }) => {
  return (
    <li
      className="p-6 flex justify-between group"
      onMouseEnter={() => setModal({ active: true, index: i })}
      onMouseLeave={() => setModal({ active: false, index: i })}
    >
      <div className="flex items-center gap-2">
        <h2 className="text-3xl text-sary">{name}</h2>
        <div className=" transform transition-transform duration-700 ease-in-out group-hover:translate-x-2">
          <ArrowForwardIosIcon className="text-sary" fontSize="small" />
        </div>
      </div>
      <Tag name={name} />
    </li>
  );
};

export default Project;
