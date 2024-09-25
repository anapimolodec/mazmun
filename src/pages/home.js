import React from "react";
import { ThreeDCanvas } from "../components/sphere";
import Fade from "../motion/fade";
import { Tutorial } from "../components/tutorial";

function Home() {
  return (
    <Fade>
      <div id="hero">
        {/* <ThreeDCanvas /> */}
        <Tutorial />
      </div>
    </Fade>
  );
}

export default Home;
