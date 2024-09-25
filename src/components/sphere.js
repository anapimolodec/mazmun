import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { CustomMesh } from "./mesh";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export const ThreeDCanvas = () => {
  const figures = [
    { position: [-2, 1, -2], size: 0.5 },
    { position: [2, 0, -2], size: 0.1 },
    { position: [-2, -2, 2], size: 0.6 },
    { position: [2, 0, 2], size: 0.3 },
    { position: [1.3, 0, -1], size: 0.1 },
    { position: [0.5, 0, -0.5], size: 0.2 },
    { position: [-0.6, 0, 1.4], size: 0.3 },
  ];
  return (
    <div className="min-h-screen relative">
      <div className="h-screen w-screen absolute z-20">
        <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {/* {figures.map((cube, index) => (
            <CustomMesh key={index} position={cube.position} size={cube.size} />
          ))} */}
          <CustomMesh position={[0, 0, 0]} size={1} />
          <Environment preset="city" />
          <EffectComposer multisampling={0} disableNormalPass={true}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={700}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              opacity={2}
            />
            <Noise opacity={0.035} />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
};
