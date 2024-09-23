import React, { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";

const CustomMesh = () => {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.z += delta * 0.15;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
};
export const ThreeDCanvas = () => {
  return (
    <div className="min-h-screen">
      <div className="h-screen w-screen absolute">
        <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 1, 5]} />
          <CustomMesh />
        </Canvas>
      </div>
      <div className="flex flex-col justify-center text-slate-800">
        <h1 className="text-9xl"> hello </h1>
        <p className="text-4xl"> welcome to the portfolio</p>
      </div>
    </div>
  );
};
