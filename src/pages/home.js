import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Fade from "../motion/fade";
import * as THREE from "three";

function Home() {
  const { t } = useTranslation();
  const homeRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    homeRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 4;
    function animate() {
      renderer.render(scene, camera);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }

    renderer.setAnimationLoop(animate);

    return () => {
      renderer.setAnimationLoop(null); // Stop the animation loop
      scene.remove(cube); // Remove cube from the scene
      renderer.dispose(); // Clean up renderer
    };
  }, []);

  return (
    <Fade>
      <div id="home" ref={homeRef} className="  ">
        <h1 className="text-8xl py-10 text-white ">{t("home")}</h1>
      </div>
    </Fade>
  );
}

export default Home;
