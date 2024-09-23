import React, { useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { useErrorBoundary } from "use-error-boundary";

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
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  return didCatch ? (
    <div>{error.message}</div>
  ) : (
    <ErrorBoundary>
      <Canvas fallback={<div>Sorry no WebGL supported!</div>}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <CustomMesh />
      </Canvas>
    </ErrorBoundary>
  );
};
