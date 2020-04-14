<template>
  <div class="hello">
    <div id="d3box"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three-orbitcontrols-ts";

export default {
  name: "HelloWorld",
  data() {
    return {
      camera: {},
      scene: {},
      renderer: {},
      geometry: {},
      material: {},
      mesh: {}
    };
  },
  mounted() {
    this.initD3();

    // window.addEventListener("mousemove", this.onDocumentMouseMove, false);
  },
  methods: {
    initD3() {
      var scene = new THREE.Scene(); //创建场景
      var camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        2,
        2000
      ); //创建相机
      camera.position.x = 2;
      camera.position.z = 6;
      var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4); //光源
      scene.add(ambientLight);
      var pointLight = new THREE.PointLight(0xffffff, 0.8); //点光源
      camera.add(pointLight);
      scene.add(camera);
      var renderer = new THREE.WebGLRenderer(); //创建渲染器
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth - 50, window.innerHeight - 50);
      renderer.setClearColor(0xafafaf);
      // 在D3box中插入渲染器
      document.getElementById("d3box").appendChild(renderer.domElement);
      // 物体\材质
      var geometry = new THREE.BoxGeometry(1, 1, 1); //创建一个box物体
      var material = new THREE.MeshNormalMaterial({ flatShading: true }); //创建一个普通材质
      var cube = new THREE.Mesh(geometry, material); //创建一个形状
      cube.position.x = 1;
      cube.position.y = 0;
      cube.position.z = 1;
      scene.add(cube);
      cube.castShadow = true;

      // 光源
      var spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(-40, 60, -10);
      scene.add(spotLight);

      spotLight.shadow.mapSize.width = 2048;
      spotLight.shadow.mapSize.height = 2048;

      spotLight.castShadow = true;
      // 光源 end

      //鼠标控制-旋转、缩放
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minPolarAngle = 0;
      controls.maxPolarAngle = Math.PI;
      controls.minDistance = 0;
      controls.maxDistance = Infinity;
      this.enableZoom = true; // Set to false to disable zooming
      this.zoomSpeed = 1.0;
      controls.enablePan = true;

      // 平面---------------------
      var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1); //创建一个平面
      var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xc00a888,
        opacity: 0
      });
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.x = 15;
      plane.position.y = 0;
      plane.position.z = 0;
      scene.add(plane);

      // const controls = new OrbitControls(camera, renderer.domElement)

      // 设置投影
      plane.receiveShadow = true;
      function animate() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
