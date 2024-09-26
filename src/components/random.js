import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@mui/material";

const RandomImagePlacement = ({ images = [] }) => {
  const [positions, setPositions] = useState([]);
  const [loadedImages, setLoadedImages] = useState([]);
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

    const handleResize = () => {
      requestAnimationFrame(calculatePositions);
    };

    calculatePositions();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]);

  useEffect(() => {
    setLoadedImages([]);
    images.slice(0, 4).forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoadedImages((prev) => [...prev, src]);
    });
  }, [images]);

  if (!images || images.length === 0) {
    return null;
  }

  const isLoading = loadedImages.length < Math.min(images.length, 4);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[90vh] min-h-[600px] hidden lg:flex"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton />
        </div>
      )}
      <AnimatePresence>
        {!isLoading &&
          images.slice(0, 4).map((image, index) => (
            <motion.img
              key={`${image}-${index}`}
              src={image}
              alt={`Random ${index}`}
              className="absolute w-[300px] object-cover"
              style={{
                left: positions[index]?.x,
                top: positions[index]?.y,
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
