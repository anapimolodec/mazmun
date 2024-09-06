import React, { useState, useEffect, useRef } from "react";

const RandomImagePlacement = ({ images }) => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      const imageSize = 200;
      const maxOverlap = imageSize * 0.1;

      const newPositions = [];

      const isOverlapping = (newPos) => {
        return newPositions.some((pos) => {
          const xOverlap = Math.max(
            0,
            Math.min(newPos.x + imageSize, pos.x + imageSize) -
              Math.max(newPos.x, pos.x)
          );
          const yOverlap = Math.max(
            0,
            Math.min(newPos.y + imageSize, pos.y + imageSize) -
              Math.max(newPos.y, pos.y)
          );
          const overlapArea = xOverlap * yOverlap;
          const maxAllowedOverlapArea = maxOverlap * maxOverlap;
          return overlapArea > maxAllowedOverlapArea;
        });
      };

      images.forEach(() => {
        let attempt = 0;
        let newPosition;

        do {
          newPosition = {
            x: Math.random() * (containerWidth - imageSize),
            y: Math.random() * (containerHeight - imageSize),
          };
          attempt++;
        } while (isOverlapping(newPosition) && attempt < 100);

        newPositions.push(newPosition);
      });

      setPositions(newPositions);
    };

    calculatePositions();

    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, [images]);

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
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Random ${index}`}
          style={{
            position: "absolute",
            left: positions[index] ? `${positions[index].x}px` : "0px",
            top: positions[index] ? `${positions[index].y}px` : "0px",
            width: "300px",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
};

export default RandomImagePlacement;
