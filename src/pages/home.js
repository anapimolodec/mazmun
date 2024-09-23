import React from "react";
import { ThreeDCanvas } from "../components/sphere";
import Fade from "../motion/fade";
import TextSphereScene from "../components/text";

function Home() {
  return (
    <Fade>
      {/* <ThreeDCanvas /> */}
      <TextSphereScene />
    </Fade>
  );
}

export default Home;
