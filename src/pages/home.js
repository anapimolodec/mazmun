import React from "react";
import Fade from "../motion/fade";
import { CustomCanvas } from "../components/custom_canvas";
import Footer from "../components/footer";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { AnchorIcon } from "../components/anchor_icon";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <Fade>
      <div className="max-w-1200 w-full mx-auto grid grid-cols-1 md:grid-cols-2 h-headless border-x border-slate-800">
        <div id="hero" className="overflow-visible bg-teal-200">
          <CustomCanvas />
        </div>
        <div className="flex flex-col justify-center border-l border-slate-800 gap-10 px-2">
          <h1 className="text-6xl px-2 text-teal-400 font-semibold">hey,</h1>
          <p className="text-xl px-4 text-white font-regular flex flex-col gap-1">
            <span>
              {t("i_am_aiaru")}
              <span className="text-slate-600 px-3">@{t("anapimolodec")}</span>
            </span>
            <span>
              <span className="font-semibold">{t("front_end_developer")}</span>
              <span className="font-regular text-slate-600 px-3">
                {t("based_in_seoul")}
              </span>
            </span>
          </p>
          <div className="flex text-slate-600 px-2 gap-4">
            <AnchorIcon
              icon={LinkedIn}
              link="https://www.linkedin.com/in/aiaru/"
            />
            <AnchorIcon icon={GitHub} link="https://github.com/anapimolodec/" />
            <AnchorIcon
              icon={Mail}
              link="mailto:aiaru.mukhamedyarova@gmail.com"
            />
          </div>
        </div>
      </div>
      <Footer />
    </Fade>
  );
}

export default Home;
