import React, { useRef, useEffect, useState } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { Text } from "@react-three/drei";

const options = { damping: 20 };

export const CustomMesh = ({ position, size }) => {
  const mesh = useRef(null);
  const [hovered, setHovered] = useState(false); // Track hover state

  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const multiplier = 0.5;
    const x = (-0.5 + clientX / innerWidth) * multiplier;
    const y = (-0.5 + clientY / innerHeight) * multiplier;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
    // eslint-disable-next-line
  }, []);

  // Handle hover effects
  const handlePointerOver = () => setHovered(true);
  const handlePointerOut = () => setHovered(false);

  return (
    <>
      <motion.mesh
        ref={mesh}
        position={position}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[size, 32, 32]} attach="geometry" />
        <meshPhysicalMaterial
          color={hovered ? "hotpink" : "#2dd4bf"}
          transmission={0.3}
          opacity={0.8}
          metalness={0.2}
          roughness={0.1}
          ior={1.5}
          thickness={0.5}
          specularIntensity={1}
          envMapIntensity={1}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
          transparent
        />
      </motion.mesh>

      {hovered && (
        <Text
          position={[position[0], position[1] + size + 0.5, position[2]]} // Position above the sphere
          fontSize={0.5}
          color="white"
        >
          Hovered!
        </Text>
      )}
    </>
  );
};
