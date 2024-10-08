import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Tag } from "./tag";
import { useNavigate } from "react-router-dom";

const Project = ({ id, name, i, tags, setModal }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/projects/${id.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <li
      className="flex justify-between group min-h-12"
      onMouseEnter={() => setModal({ active: true, index: i })}
      onMouseLeave={() => setModal({ active: false, index: i })}
      onClick={handleClick}
    >
      <div className="flex items-center text-white group-hover:text-teal-400">
        <div className="flex gap-4 md:gap-10 lg:gap-20 items-center">
          <p className="text-xs opacity-70 min-w-6"> / 0{i + 1} </p>
          <h2 className="text-2xl max-w-60 lg:max-w-xs">{name}</h2>
        </div>
      </div>

      <div className="relative flex items-center">
        <div className="transform transition-transform duration-700 ease-in-out group-hover:-translate-x-6">
          <Tag tags={tags} />
        </div>
        <div className="absolute right-2 transform transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
          <ArrowRightAltIcon className="text-teal-400" fontSize="small" />
        </div>
      </div>
    </li>
  );
};

export default Project;
