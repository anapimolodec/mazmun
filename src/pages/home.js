import React from "react";
import { ThreeDCanvas } from "../components/sphere";
import Fade from "../motion/fade";
import { Tutorial } from "../components/knot";

function Home() {
  return (
    <Fade>
      <ThreeDCanvas />
      {/* <div className="top-0 z-0 absolute flex flex-col justify-center w-screen items-center text-white">
        <h1 className="text-9xl"> hello </h1> <br />
        <h1 className="text-9xl"> hello </h1>
        <h1 className="text-9xl"> hello </h1>{" "}
        <h1 className="text-9xl"> hello </h1>{" "}
        <h1 className="text-9xl"> hello </h1>{" "}
        <h1 className="text-9xl"> hello </h1>{" "}
        <h1 className="text-9xl"> hello </h1>{" "}
        <h1 className="text-9xl"> hello </h1>
        <p className="text-4xl"> welcome to the portfolio</p>
      </div> */}
      {/* <Tutorial /> */}
    </Fade>
  );
}

export default Home;
