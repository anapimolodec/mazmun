import React, { useEffect, useState } from "react";
import ImagePlacement from "./random";

const ImageBox = ({ modal, projects }) => {
  const { active, index } = modal;
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [index]);

  const projectImages = active && projects[index] ? projects[index].src : [];

  return <ImagePlacement key={key} images={projectImages} />;
};

export default ImageBox;
