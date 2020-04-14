<template>
  <div class="objbox">
    <div class="left-bar">
      <ul class="items-bar">
        <li class="item">
          <p class="title">THREE-D3</p>
          <ul class="memu">
            <li class="menu-item"><router-link to="/obj">obj</router-link></li>
            <li class="menu-item"><router-link to="/hello">obj正方体</router-link></li>
          </ul>
        </li>
        <li class="item">
          <p class="title">CSS3</p>
          <ul class="memu">
            <li class="menu-item"><router-link to="/egg">egg</router-link></li>
            <li class="menu-item"><router-link to="/cat">cat</router-link></li>
          </ul>
        </li>
        <li class="item">
          <p class="title">topology</p>
          <ul class="memu">
            <li class="menu-item"><router-link to="/topo">流程图</router-link></li>
            <li class="menu-item"><router-link to="/chart">dark布局</router-link></li>
            <li class="menu-item"><router-link to="/map">GdMap</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div id="d3obj"></div>
    <div class="right-bar">
      <ul class="items-bar">
        <li class="item">
          <p class="title">CARD一</p>
          <ul class="memu">
            <li class="menu-item">card一</li>
            <li class="menu-item">card二</li>
            <li class="menu-item">card三</li>
          </ul>
        </li>
        <li class="item">
          <p class="title">CARD二</p>
          <ul class="memu">
            <li class="menu-item">card一</li>
            <li class="menu-item">card二</li>
            <li class="menu-item">card三</li>
          </ul>
        </li>
        <li class="item">
          <p class="title">CARD三</p>
          <ul class="memu">
            <li class="menu-item">card一</li>
            <li class="menu-item">card二</li>
            <li class="menu-item">card三</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
// import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { OrbitControls } from "three-orbitcontrols-ts";
// import * as dat from "dat.gui";

export default {
  data () {
    return {
      camera: {},
      scene: {},
      renderer: {},
      geometry: {},
      material: {},
      mesh: {}
    };
  },
  mounted () {
    this.initD3();
  },
  methods: {
    initD3 () {
      var scene = new THREE.Scene(); //创建场景
      scene.background = new THREE.Color(0x0088a8);
      // scene.fog = new THREE.Fog(0xcccccc, 100, 1500);

      var ambientLight = new THREE.AmbientLight(0xacacac, 0.83); //光源-环境光
      scene.add(ambientLight);

      var hemiLight = new THREE.HemisphereLight(0x700819, 0x0888a0, 0.8); //半球光(天空光、地面光、强度),直接位于场景上方的光源，其颜色从天空色变为底色。此光不能用来投射阴影。
      hemiLight.position.set(0, 1000, 0);
      // scene.add(hemiLight);

      var dirLight = new THREE.DirectionalLight(0x700819, 0.5); //定向光,无限长的平行光
      dirLight.position.set(-3000, 1000, -1000);
      // scene.add(dirLight);

      // 光源 -聚光源
      var spotLight = new THREE.SpotLight(0xf17b36, 0.5, 2000, 85, 0.2); //红色 0x700819  、蓝色 0x042f42 \蓝黑色  0x074f6e 、暖黄色 0xf3c48e
      spotLight.position.set(-280, 100, 0);
      spotLight.shadow.mapSize.width = 2048;
      spotLight.shadow.mapSize.height = 2048;
      // scene.add(spotLight);
      spotLight.castShadow = true;

      //创建相机
      var camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      camera.position.y = 1;
      camera.position.z = 500;
      camera.target = new THREE.Vector3();
      // 添加一个跟随相机焦点的点光源
      var pointLight = new THREE.PointLight(0xacacac, 0.68); //点光源
      camera.add(pointLight);
      scene.add(camera);

      var renderer = new THREE.WebGLRenderer(); //创建渲染器
      renderer.autoClear = false;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth - 10, window.innerHeight - 10);
      // renderer.setClearColor(0xf0f0f0);

      // 在D3box中插入渲染器
      document.getElementById("d3obj").appendChild(renderer.domElement);

      //鼠标控制-旋转、缩放
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minPolarAngle = 0;
      controls.maxPolarAngle = Math.PI;
      controls.minDistance = 0;
      controls.maxDistance = Infinity;
      this.enableZoom = true;
      this.zoomSpeed = 1.0;
      controls.enablePan = true;

      // 平面---------------------
      var planeGeometry = new THREE.PlaneGeometry(100, 100, 50, 50); //创建一个平面
      var planeMaterial = new THREE.MeshLambertMaterial({ color: 0xeeb66d }); //土黄色- 0xeeb66d  \赭红色- 0x6e1b45   \墨绿色- 0x00a888
      var plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -0.5 * Math.PI;
      plane.position.x = 100;
      plane.position.y = -90;
      plane.position.z = -110;
      scene.add(plane);
      // 设置投影
      plane.receiveShadow = true;
      // renderer.render(scene, camera);

      // 添加网格
      let helper = new THREE.GridHelper(1200, 60, 0xfafafa, 0xa88800);
      helper.position.x = -40;
      helper.position.y = -100;
      helper.position.z = -100;
      scene.add(helper);

      //  // 实例化一个加载器;加载mtl、obj
      // let mtlLoader = new MTLLoader();
      let objLoader = new OBJLoader();
      // let jsonLoader = THREE.JSONLoader();]
      var manager = new THREE.LoadingManager();
      manager.addHandler(/\.dds$/i, new DDSLoader());
      // 加载obj male
      new MTLLoader(manager).load(
        "../../static/obj/male02/male02_dds.mtl",
        materials => {
          materials.preload();
          materials.shading = THREE.SmoothShading;
          new OBJLoader(manager)
            .setMaterials(materials)
            .load("../../static/obj/male02/male02.obj", object => {
              object.position.x = 100;
              object.position.y = -90;
              object.position.z = -100;
              scene.add(object);
            });
        }
      );
      // 加载obj female
      new MTLLoader(manager).load(
        "../../static/obj/female02/female02.mtl",
        materials => {
          materials.preload();
          materials.shading = THREE.SmoothShading;
          console.log(materials);
          new OBJLoader(manager)
            .setMaterials(materials)
            .load("../../static/obj/female02/female02.obj", object => {
              object.position.x = -40;
              object.position.y = -100;
              object.position.z = -100;
              scene.add(object);
            });
        }
      );

      // 加载obj vase  --花瓶（纹理材质无法贴图，原因未知，报错：Too many active WebGL contexts. Oldest context will be lost.）
      new MTLLoader(manager).load(
        "../../static/obj/Vase2/Vase2.mtl",
        materials => {
          materials.preload();
          materials.shading = THREE.SmoothShading;
          console.log(materials);
          new OBJLoader(manager)
            // .setMaterials(materials)
            .load("../../static/obj/Vase2/Vase2.obj", object => {
              object.position.x = 0;
              object.position.y = 0;
              object.position.z = 100;
              scene.add(object);
            });
        }
      );
      // 马
      objLoader.load(
        // 资源链接
        "../../static/obj/horse.obj",
        // 资源加载完成后的回调函数
        function(object) {
          object.position.x = 0;
          object.position.y = 0;
          object.position.z = 200;
          object.rotateY(1.5);
          // scene.add(object);
        }
      );

      // 物体\材质\形状
      // var geometry = new THREE.BoxGeometry(2, 1, 2); //创建一个box物体
      var geometry = new THREE.SphereGeometry(5, 8, 8); //球体
      // var geometry = new THREE.SphereBufferGeometry(5, 8, 8);
      // var material = new THREE.MeshNormalMaterial({ flatShading: true }); //创建一个普通材质

      var material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0
      });
      var cube = new THREE.Mesh(geometry, material); //创建一个形状
      cube.position.x = 20;
      cube.position.y = 10;
      cube.position.z = 1;
      // scene.add(cube);
      cube.castShadow = true;

      var onWindowResize = function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth - 10, window.innerHeight - 10);
      };
      function animate () {
        cube.rotateY(0.03);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();
      window.addEventListener("resize", onWindowResize, false);
    }
  }
};
</script>

<style scoped>
.objbox {
  width: 100%;
  height: 100vh;
}
.left-bar,
.right-bar {
  position: fixed;
  top: 0;
  width: 300px;
  height: 100vh;
  padding: 30px 50px;
  box-sizing: border-box;
  color: #00a888;
  background-color: rgba(5, 36, 51, 0.35);
}
.left-bar {
  left: 0;
}
.right-bar {
  right: 0;
}
ul,
li {
  list-style: none;
}
.items-bar {
  text-indent: 15px;
  line-height: 2em;
}
.items-bar .title {
  font-size: 15px;
  color: #abc;
  /* background-color:  rgba(5, 36, 51, 0.6); */
  border-top: 2px solid #a0a0a0;
  border-radius: 15px;
}
.items-bar .memu .menu-item {
  height: 50px;
  line-height: 50px;
  margin: 5px 0;
  border-radius: 15px;
  font-size: 14px;
  cursor: pointer;
}
.items-bar .memu .menu-item:hover {
  background-color: rgba(5, 36, 51, 0.45);
}
.items-bar .memu .menu-item::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 20px;
  background-color: #0b947d;
  color: #0597aa;
  border-radius: 50%;
}
</style>
