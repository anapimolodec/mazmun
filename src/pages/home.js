import React from "react";
import Fade from "../motion/fade";
import { CustomCanvas } from "../components/custom_canvas";
import Footer from "../components/footer";
import { GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { AnchorIcon } from "../components/anchor_icon";

function Home() {
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
              I am Aiaru <span className="text-slate-600">@anapimolodec</span>
            </span>
            <span className="">
              <span className="font-semibold pr-2">a front-end developer</span>
              <span className="font-regular text-slate-600">
                based in Seoul
              </span>
            </span>
          </p>
          <div className="flex text-slate-800 px-2 gap-2">
            <AnchorIcon icon={LinkedIn} link="https://www.linkedin.com/feed/" />
            <AnchorIcon icon={GitHub} link="https://www.linkedin.com/feed/" />
            <AnchorIcon icon={Mail} link="https://www.linkedin.com/feed/" />
          </div>
        </div>
      </div>
      <Footer />
    </Fade>
  );
}

export default Home;
