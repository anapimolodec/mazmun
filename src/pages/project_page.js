import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InfoCard } from "../components/info_card";
import MoveToLeft from "../motion/transitions";

const ProjectDetails = ({ data }) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const project = data.projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="text-center text-white text-2xl mt-10">
        Project not found!
      </div>
    );
  }

  return (
    <div className="max-w-1200 w-full mx-auto border-r border-slate-800 bg-[length:100px_100%] bg-[linear-gradient(to_right,_#1e293b_1px,_transparent_1px)] text-white">
      <div className="max-w-800 mx-auto pb-80">
        <MoveToLeft>
          <img
            src={project.main_image}
            alt={project.name}
            className="w-full max-h-72 object-cover rounded-lg shadow-lg mb-12"
          />
          <h1 className="text-5xl text-teal-400 mb-8">
            {project.name.toUpperCase()}
          </h1>
          <hr className="h-px bg-teal-600 border-0" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
            <div className="flex flex-col col-span-2">
              <InfoCard name={t("project.role")} value={project.role} />
              <InfoCard name={t("project.year")} value={project.year} />
              <InfoCard name={t("project.category")} value={project.tags} />
            </div>
            <div className="col-span-3">
              <p className="text-md mb-6">{project.description}</p>
            </div>
          </div>
        </MoveToLeft>
      </div>
    </div>
  );
};

export default ProjectDetails;
