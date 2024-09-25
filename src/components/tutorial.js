import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Lightformer,
  Text,
  ContactShadows,
  Environment,
  OrbitControls,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { easing } from "maath";
import Oyu from "./oyu";

export const Tutorial = () => (
  <div className="h-screen w-screen">
    <Canvas
      eventSource={document.getElementById("hero")}
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20] }}
    >
      <OrbitControls enableZoom={false} enablePan={true} />
      <spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
      <Status position={[0, 0, -10]} />
      <ambientLight />
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
      <Environment preset="city">
        <Lightformer
          intensity={8}
          position={[1, 5, 0]}
          scale={[10, 50, 1]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
      <Rig />
    </Canvas>
  </div>
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

const Knot = (props) => {
  return (
    <mesh receiveShadow castShadow {...props}>
      <torusKnotGeometry args={[3, 1, 256, 32]} />
      <MeshTransmissionMaterial backside backsideThickness={5} thickness={2} />
    </mesh>
  );
};

function Status(props) {
  const text = "salem";
  return (
    <Text fontSize={14} letterSpacing={-0.025} color="#2dd4bf" {...props}>
      {text}
      {/* <Html style={{ color: "transparent", fontSize: "30.5em" }} transform>
        {text}
      </Html> */}
    </Text>
  );
}
