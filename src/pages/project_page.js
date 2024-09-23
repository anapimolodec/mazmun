import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { InfoCard } from "../components/info_card";
import MoveToLeft from "../motion/transitions";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { URLCard } from "../components/url_card";

const ProjectDetails = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const project = data.projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="text-center text-white text-2xl mt-10">
        {t("something_wrong")}
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
            className="w-full max-h-72 object-cover rounded-b-lg shadow-lg mb-12"
          />
          <a href={project.url} className="group flex items-center mb-8 gap-8">
            <h1 className="text-5xl text-teal-400 group-hover:text-teal-500">
              {project.name.toUpperCase()}
            </h1>
            <div className="transform duration-500 ease-in-out group-hover:translate-x-2 group-hover:-translate-y-2">
              <ArrowOutwardIcon
                className="text-teal-400 group-hover:text-teal-500"
                fontSize="large"
              />
            </div>
          </a>

          <hr className="h-px bg-teal-600 border-0" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
            <div className="flex flex-col col-span-2">
              <InfoCard name={t("project.role")} value={project.role} />
              <InfoCard name={t("project.company")} value={project.company} />
              <InfoCard name={t("project.year")} value={project.year} />
              <InfoCard
                name={t("project.stack")}
                value={project.technologies}
              />
              <URLCard
                name={t("project.url")}
                array={project.url}
                placeholder={project.url_text}
              />
            </div>
            <div className="col-span-3 flex-col">
              <h4 className="font-medium text-teal-400 mb-4">
                {t("project.description").toUpperCase()}
              </h4>
              <p className="text-md mb-6 whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          {project.src &&
            project.src.map((url, index) => (
              <img
                src={url}
                key={index}
                alt={`${project.name}_${index}`}
                className={
                  index === 0
                    ? "w-full object-cover shadow-lg mt-2 rounded-t-lg"
                    : index === project.src.length - 1
                    ? "w-full object-cover shadow-lg mt-2 rounded-b-lg"
                    : "w-full object-cover shadow-lg mt-2 "
                }
              />
            ))}
          <button className="mt-8" onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon />
            <span className="ml-2">{t("back")}</span>
          </button>
        </MoveToLeft>
      </div>
    </div>
  );
};

export default ProjectDetails;
