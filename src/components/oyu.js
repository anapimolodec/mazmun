import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { MeshTransmissionMaterial } from "@react-three/drei";

const Oyu = (props) => {
  const svgData = useLoader(SVGLoader, "/oyu.svg");

  const shapes = useMemo(() => {
    return svgData.paths.flatMap((path) => path.toShapes(true));
  }, [svgData]);

  const geometry = useMemo(() => {
    const geometry = new THREE.ExtrudeGeometry(shapes, {
      depth: 10,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 1,
    });
    geometry.center();
    return geometry;
  }, [shapes]);

  return (
    <mesh scale={0.07} {...props}>
      <primitive object={geometry} />
      <MeshTransmissionMaterial
        thickness={2}
        distortion={0.9}
        distortionScale={0.8}
        chromaticAberration={1}
        transmission={1}
        backside={false}
        anisotropicBlur={20}
        transparent={true}
      />
    </mesh>
  );
};

export default Oyu;
