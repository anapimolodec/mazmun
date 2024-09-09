import React, { useState, useEffect } from "react";
import ProjectList from "../components/list";
import { useTranslation } from "react-i18next";
import ImageBox from "../components/image";
import Fade from "../motion/fade";

function Main({ data }) {
  const { t } = useTranslation();
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [listHeight, setListHeight] = useState("auto");

  useEffect(() => {
    const h1Height = document.querySelector("h1").offsetHeight;
    const windowHeight = window.innerHeight;
    const projectListHeight = windowHeight - h1Height;
    setListHeight(`${projectListHeight}px`);
  }, []);
  return (
    <Fade>
      <div className="main bg-qara border-x border-kokshil">
        <div className="grid grid-cols-2 w-full">
          <div className="text-left">
            <h1 className="text-8xl py-10 text-white ">{t("projects")}</h1>
            <div style={{ height: listHeight, overflowY: "auto" }}>
              <ProjectList
                projects={data.projects || []}
                modal={modal}
                setModal={setModal}
              />
            </div>
          </div>

          <ImageBox modal={modal} projects={data.projects || []} />
        </div>
      </div>
    </Fade>
  );
}

export default Main;
