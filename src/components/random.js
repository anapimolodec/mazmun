import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RandomImagePlacement = ({ images = [] }) => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      const quadrants = [
        { x: [0, 0.5], y: [0, 0.5] },
        { x: [0.5, 1], y: [0, 0.5] },
        { x: [0, 0.5], y: [0.5, 1] },
        { x: [0.5, 1], y: [0.5, 1] },
      ];

      const newPositions = images.slice(0, 4).map((_, index) => {
        const quadrant = quadrants[index];
        return {
          x:
            (quadrant.x[0] + Math.random() * (quadrant.x[1] - quadrant.x[0])) *
            containerWidth,
          y:
            (quadrant.y[0] + Math.random() * (quadrant.y[1] - quadrant.y[0])) *
            containerHeight,
        };
      });

      setPositions(newPositions);
    };

    calculatePositions();

    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "600px",
      }}
    >
      <AnimatePresence>
        {images.slice(0, 4).map((image, index) => (
          <motion.img
            key={`${image}-${index}`}
            src={image}
            alt={`Random ${index}`}
            style={{
              position: "absolute",
              left: positions[index] ? `${positions[index].x}px` : "0px",
              top: positions[index] ? `${positions[index].y}px` : "0px",
              width: "300px",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: index * 0.1,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RandomImagePlacement;
