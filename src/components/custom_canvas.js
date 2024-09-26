import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Lightformer,
  Image,
  ContactShadows,
  Environment,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { easing } from "maath";
import Oyu from "./oyu";
import { Suspense, useRef } from "react";
import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation();
  return (
    <Text fontSize={1} letterSpacing={-0.025} color="#334155">
      {t("loading")}
    </Text>
  );
};

const Scene = () => (
  <>
    <color attach="background" args={["#0f172a"]} />
    <OrbitControls enableZoom={true} enablePan={true} />
    <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
    <Image
      url="/images/hero_text.png"
      transparent
      scale={15}
      position={[0, 0, -10]}
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
    />
    <Environment preset="night">
      <Lightformer
        intensity={8}
        position={[1, 5, 0]}
        scale={[10, 50, 1]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
    <Rig />
  </>
);

export const CustomCanvas = () => (
  <Canvas
    eventSource={document.getElementById("hero")}
    eventPrefix="client"
    shadows
    camera={{ position: [0, 0, 20] }}
  >
    <Suspense fallback={<Loading />}>
      <Scene />
    </Suspense>
  </Canvas>
);

function Rig() {
  useFrame((state, delta) => {
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
  });
}

// const Knot = (props) => {
//   return (
//     <mesh receiveShadow castShadow {...props}>
//       <torusKnotGeometry args={[3, 1, 256, 32]} />
//       <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
//     </mesh>
//   );
// };

// function Status(props) {
//   const { t } = useTranslation();
//   return (
//     <Text fontSize={8} letterSpacing={-0.025} color="#2dd4bf" {...props}>
//       {t("hero_title")}
//     </Text>
//   );
// }
