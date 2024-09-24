import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

const options = { damping: 20 };
export const CustomMesh = ({ position, size }) => {
  const mesh = useRef(null);

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

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.15;
  });

  return (
    <motion.mesh
      ref={mesh}
      rotation-x={mouse.y}
      rotation-y={mouse.x}
      position={position}
    >
      {/* <boxGeometry args={[size, size, size]} attach="geometry" /> */}
      <sphereGeometry args={[size]} attach="geometry" />
      <meshPhysicalMaterial
        color="#2dd4bf" //teal-400
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
  );
};
