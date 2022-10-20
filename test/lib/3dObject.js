import * as THREE from "https://cdn.skypack.dev/pin/three@v0.145.0-QB3GbCVEL6cwWpW43q6J/mode=imports/optimized/three.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const createScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
};
