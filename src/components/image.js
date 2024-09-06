import React from "react";
import ImagePlacement from "./random";

const ImageBox = ({ modal, projects }) => {
  const { active, index } = modal;
  const projectImages = active && projects[index] ? projects[index].src : [];
  return <ImagePlacement images={projectImages} />;
};

export default ImageBox;
