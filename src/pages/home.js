import React from "react";
import Fade from "../motion/fade";
import { CustomCanvas } from "../components/custom_canvas";
import Footer from "../components/footer";

function Home() {
  return (
    <Fade>
      <div className="max-w-1200 w-full mx-auto grid grid-cols-1 md:grid-cols-2 h-screen border-x border-slate-800">
        <div id="hero" className="overflow-visible bg-teal-200">
          <CustomCanvas />
        </div>
        <div className="flex flex-col border-l border-slate-800">
          <h1 className="text-8xl  text-teal-400 font-semibold"> hey, </h1>
        </div>
      </div>
      <Footer />
    </Fade>
  );
}

export default Home;
