import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
const options = { damping: 20 };

const CustomMesh = () => {
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
  const texture_1 = useLoader(TextureLoader, "/images/cube/side1.png");
  const texture_2 = useLoader(TextureLoader, "/images/cube/side2.png");
  const texture_3 = useLoader(TextureLoader, "/images/cube/side3.png");
  const texture_4 = useLoader(TextureLoader, "/images/cube/side4.png");
  const texture_5 = useLoader(TextureLoader, "/images/cube/side5.png");
  const texture_6 = useLoader(TextureLoader, "/images/cube/side6.png");

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
};

export const ThreeDCanvas = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen w-screen absolute">
        <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[0, 1, 5]} />
          <CustomMesh />
        </Canvas>
      </div>
      <div className="flex flex-col justify-center items-center text-slate-600">
        <h1 className="text-9xl"> hello </h1>
        <p className="text-4xl"> welcome to the portfolio</p>
      </div>
    </div>
  );
};
