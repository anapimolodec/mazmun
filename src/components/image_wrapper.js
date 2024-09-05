import { motion, useAnimation, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";

const bounceVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: {
    opacity: 1,
    x: 20,
    transition: { type: "spring", bounce: 0.5 },
  },
};

const ImageComponent = ({ image, index, positions }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  return (
    <motion.img
      key={image.id}
      ref={ref}
      src={image}
      alt={`Random ${index}`}
      variants={bounceVariants}
      initial="hidden"
      animate={controls}
      style={{
        position: "absolute",
        left: positions[index] ? `${positions[index].x}px` : "0px",
        top: positions[index] ? `${positions[index].y}px` : "0px",
        width: "200px",
        objectFit: "cover",
      }}
    />
  );
};

export default ImageComponent;
