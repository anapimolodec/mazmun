import React from "react";
import { useTranslation } from "react-i18next";
import Fade from "../motion/fade";

function Home() {
  const { t } = useTranslation();
  return (
    <Fade>
      <div className="  ">
        <h1 className="text-8xl py-10 text-white ">{t("home")}</h1>
      </div>
    </Fade>
  );
}

export default Home;
