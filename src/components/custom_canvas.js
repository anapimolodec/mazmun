import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Lightformer,
  Image,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { easing } from "maath";
import Oyu from "./oyu";
import { Suspense, useCallback, memo, useState, useEffect } from "react";
import LoadingScreen from "./loading";

const Rig = memo(() => {
  const cameraMovement = useCallback((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 5,
        state.pointer.y * 3.5,
        15 + Math.cos(state.pointer.x) * 10,
      ],
      0.2,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  }, []);

  useFrame(cameraMovement);
  return null;
});

const Lighting = memo(() => (
  <>
    <spotLight
      position={[20, 20, 10]}
      penumbra={1}
      castShadow
      angle={0.2}
      // shadow-mapSize={[512, 512]}
    />
    <Environment files="/hdri/environment.hdr">
      <Lightformer
        intensity={8}
        position={[1, 5, 0]}
        scale={[10, 50, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
  </>
));

const Scene = memo(() => (
  <>
    <color attach="background" args={["#0f172a"]} />
    <OrbitControls
      enableZoom={true}
      enablePan={true}
      maxDistance={30}
      minDistance={10}
    />
    <Lighting />
    <Image
      url="/images/hero_text.png"
      transparent
      scale={15}
      position={[0, 0, -10]}
      raycast={() => null}
    />
    <Float floatIntensity={2}>
      <Oyu position={[0, 0, 0]} />
    </Float>
    <ContactShadows
      scale={80}
      position={[0, -7.5, 0]}
      blur={0.9}
      far={100}
      opacity={0.6}
      frames={1}
    />
    <Rig />
  </>
));

export const CustomCanvas = memo(() => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <Canvas
      eventSource={document.getElementById("hero")}
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
      performance={{ min: 0.5 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={<LoadingScreen />}>
        {!initialLoad && <Scene />}
      </Suspense>
    </Canvas>
  );
});
