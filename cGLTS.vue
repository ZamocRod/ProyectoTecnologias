<template>
  <div id="componente-nuevo">
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
  </div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
//import { FBXLoader } from "./jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  data() {
    return {
      subtitulo: "si",
    };
  },
};
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//let mixer;
const light = new THREE.PointLight(0x2a2a2a, 5);
light.position.set(0, 300, 500);
scene.add(light);

const light2 = new THREE.PointLight(0x2a2a2a, 5);
light2.position.set(500, 100, 0);
scene.add(light2);

const light3 = new THREE.PointLight(0x2a2a2a, 5);
light3.position.set(0, 100, -500);
scene.add(light3);

const light4 = new THREE.PointLight(0x2a2a2a, 5);
light4.position.set(-500, 300, 0);
scene.add(light4);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

camera.position.z = 30;
camera.position.y = 3;
const controls = new OrbitControls(camera, renderer.domElement);
controls.screenSpacePanning = true;
const animate = function() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
grid.material.opacity = 0.2;
grid.material.transparent = true;
scene.add(grid);
scene.background = new THREE.Color(0xa0a0a0);
scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
//var FBXLoader = require("three-fbx-loader");
//var loader = new FBXLoader();
/*oader.load("/models/untitled.fbx", function(object) {
  mixer= new THREE.AnimationMixer(object);
  const action = mixer.clipAction(object.animations[0]);
  action.play();

  object.traverse(function(child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(object);
});*/
/*let Console;
loader.load("/models/untitled.fbx", object3d => {
  Console.log("/models/untitled.fbx");
  scene.add(object3d.scene);
});*/
const loadera = new GLTFLoader();
loadera.load(
  "/models/untitled.gltf",
  function(gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function(error) {
    console.error(error);
  }
);
animate();
</script>
