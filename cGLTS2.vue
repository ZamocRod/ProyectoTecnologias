<template>
  <div id="container"></div>
</template>

<script>
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default {
  data() {
    /*
    let container = document.getElementById("container");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
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
    renderer.setSize(container.clientWidth, container.clientHeight);
    document.body.appendChild(renderer.domElement);

    camera.position.z = 30;
    camera.position.y = 3;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.screenSpacePanning = true;
    const animate = function() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);
    scene.background = new THREE.Color(0xd0c0df);
    scene.fog = new THREE.Fog(0xd0c0df, 200, 1000);
    const loadera = new GLTFLoader();
    loadera.load(
      "/models/Cuarto1beta.gltf",
      function(gltf) {
        scene.add(gltf);
      },
      undefined,
      function(error) {
        console.error(error);
      }
    );
    animate();
    return {
      subtitulo: "si",
    };*/
  },
  methods: {
    init: function() {
      let container = document.getElementById("container");

      this.camera = new Three.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      );
      this.camera.position.z = 30;
      this.camera.position.y = 3;

      this.scene = new Three.Scene();

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
      let material = new Three.MeshNormalMaterial();

      this.mesh = new Three.Mesh(geometry, material);
      const light = new Three.PointLight(0x2a2a2a, 5);
      light.position.set(0, 300, 500);
      this.scene.add(light);

      const light2 = new Three.PointLight(0x2a2a2a, 5);
      light2.position.set(500, 100, 0);
      this.scene.add(light2);

      const light3 = new Three.PointLight(0x2a2a2a, 5);
      light3.position.set(0, 100, -500);
      this.scene.add(light3);
      const light4 = new Three.PointLight(0x2a2a2a, 5);
      light4.position.set(-500, 300, 0);
      this.scene.add(light4);
      this.renderer = new Three.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);
      const controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.screenSpacePanning = true;
    },
    animate: function() {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.02;
      this.renderer.render(this.scene, this.camera);
    },
  },
  mounted() {
    this.init();
    const grid = new Three.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    this.scene.add(grid);
    this.scene.background = new Three.Color(0xd0c0df);
    this.scene.fog = new Three.Fog(0xd0c0df, 200, 1000);
    const loader = new GLTFLoader();
    loader.load(
      "/models/PRUEBA_CUARTO3/PRUEBA.gltf",
      (gltf) => {
        this.scene.add(gltf.scene);
      },
      undefined,
      undefined
    );
    this.animate();
  },
};
</script>
<style scoped>
#container {
  width: 61.5vw;
  height: 100vh;
  display: inline-block;
  float: left;
}
#model {
  width: 70%;
}
.modeloso {
  width: 70%;
}
</style>
