import React from "react";
import { ThreeDCanvas } from "../components/sphere";
import Fade from "../motion/fade";

function Home() {
  return (
    <Fade>
      <h1> home </h1>
      <ThreeDCanvas />
    </Fade>
  );
}

export default Home;
