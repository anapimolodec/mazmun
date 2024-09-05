import React from "react";
import ProjectList from "./list";
import { useTranslation } from "react-i18next";

function Main({ data }) {
  const { t } = useTranslation();
  return (
    <div className="main">
      <h1 className="text-9xl">{t("projects")}</h1>
      <ProjectList projects={data.projects || []} />
    </div>
  );
}

export default Main;
