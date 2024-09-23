import React, { useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

const TextSphere = () => {
  const loremIpsum = useMemo(() => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  }, []);

  const texts = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 300; i++) {
      const phi = Math.acos(-1 + (2 * i) / 300);
      const theta = Math.sqrt(300 * Math.PI) * phi;
      temp.push({
        position: [
          2.5 * Math.cos(theta) * Math.sin(phi),
          2.5 * Math.sin(theta) * Math.sin(phi),
          2.5 * Math.cos(phi),
        ],
        rotation: [0, phi, theta],
      });
    }
    return temp;
  }, []);

  return (
    <group>
      {texts.map((props, index) => (
        <Text
          key={index}
          {...props}
          color="white"
          fontSize={0.1}
          maxWidth={0.1}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="left"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptsg8zYS_SKggPNwC4Q4FqPfE.woff"
          anchorX="center"
          anchorY="middle"
        >
          {loremIpsum.substring(
            index % loremIpsum.length,
            (index % loremIpsum.length) + 5
          )}
        </Text>
      ))}
    </group>
  );
};

const RotatingSphere = () => {
  const groupRef = React.useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <TextSphere />
    </group>
  );
};

const TextSphereScene = () => {
  return (
    <div className="h-screen w-screen absolute">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingSphere />
      </Canvas>
    </div>
  );
};

export default TextSphereScene;
