import React, { useMemo, useRef, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

useGLTF.preload("/oyu.svg");

const Oyu = React.memo((props) => {
  const svgData = useLoader(SVGLoader, "/oyu.svg");
  const meshRef = useRef();

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

  useEffect(() => {
    if (geometry) {
      geometry.computeBoundingSphere();
      geometry.computeBoundingBox();
    }
  }, [geometry]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.frustumCulled = true;
      meshRef.current.matrixAutoUpdate = false;
      meshRef.current.updateMatrix();
    }
  }, []);

  return (
    <mesh scale={0.07} {...props} ref={meshRef}>
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
});

export default Oyu;
