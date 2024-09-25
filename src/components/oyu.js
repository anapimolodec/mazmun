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
        ior={1.5} // Low index of refraction to minimize internal reflections
        thickness={2} // Control the thickness for frosted effect
        distortion={0.9} // Distort background for a frosted glass effect
        distortionScale={0.8} // Control distortion amount
        chromaticAberration={1} // Disable chromatic aberration (no color fringing)
        transmission={1}
        backside={false}
        anisotropicBlur={20}
      />
    </mesh>
  );
};

export default Oyu;
