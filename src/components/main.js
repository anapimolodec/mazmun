import React from "react";
import ProjectList from "./list";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="main">
      <h1 className="text-9xl">{t("projects")}</h1>
      <div className="grid grid-cols-2 w-full">
        <ProjectList />
        <div className="bg-neutral-400"></div>
      </div>
    </div>
  );
}

export default Main;
