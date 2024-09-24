import React from "react";
import { ThreeDCanvas } from "../components/sphere";
import Fade from "../motion/fade";

function Home() {
  return (
    <Fade>
      <ThreeDCanvas />
    </Fade>
  );
}

export default Home;
