<template>
  <div class="page">
    <div class="my-eggs">
      <div class="box1">
        <div class="egg">
          <span class="shadow shadow1"></span>
          <span class="shadow shadow2"></span>
          <span class="shadow shadow3"></span>
          <span class="shadow shadow4"></span>
        </div>
      </div>
      <div class="box1">
        <div class="egg">
          <span class="shadow shadow1"></span>
          <span class="shadow shadow2"></span>
          <span class="shadow shadow3"></span>
          <span class="shadow shadow4"></span>
        </div>
      </div>
    </div>
    <div class="egg-box">
      <!-- 一个鸡蛋 B -->
      <div class="egg-wrapper">
        <div class="shadow">
          <div class="main"></div>
          <div class="secondary"></div>
        </div>
        <div class="egg">
          <div class="fill"></div>
          <div class="shading"></div>
          <div class="key"></div>
          <div class="highlight"></div>
          <div class="egg-shadow"></div>
        </div>
        <!-- <div class="egg-wrapper rotate">
          <div class="egg">
            <div class="fill"></div>
            <div class="shading"></div>
            <div class="key"></div>
            <div class="highlight"></div>
            <div class="egg-shadow"></div>
          </div>
        </div>-->
      </div>
      <!-- 一个鸡蛋 E -->
      <div class="egg-wrapper">
        <div class="shadow">
          <div class="main"></div>
          <div class="secondary"></div>
        </div>
        <div class="egg">
          <div class="fill"></div>
          <div class="shading"></div>
          <div class="key"></div>
          <div class="highlight"></div>
          <div class="egg-shadow"></div>
        </div>
      </div>
      <div class="egg-wrapper">
        <div class="shadow">
          <div class="main"></div>
          <div class="secondary"></div>
        </div>
        <div class="egg">
          <div class="fill"></div>
          <div class="shading"></div>
          <div class="key"></div>
          <div class="highlight"></div>
          <div class="egg-shadow"></div>
        </div>
      </div>
    </div>
    <div class="lamp-box">
      <div class="lamp">
        <span class="bottom-l"></span>
      </div>
      <div class="lamp">
        <span class="bottom-l"></span>
      </div>
      <div class="lamp">
        <span class="bottom-l"></span>
      </div>
      <div class="lamp">
        <span class="bottom-l"></span>
      </div>
    </div>
    <div class="float-box float-l">
      <div class="radius-stone">stone</div>
      <div class="radius-mango">mango</div>
    </div>
    <div class="animate-img">
      <div class="img-box">
        <a href="" class="slide-a slide-1 in">
          <img src="../assets/imgs/sun.png" alt="">
        </a>
        <a href="" class="slide-a slide-2">
          <img src="../assets/imgs/yuchuan.png" alt="">
        </a>
        <a href="" class="slide-a slide-3">
          <img src="../assets/imgs/color.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="arrow-box">
      <span class="arrow arrow-top"></span>
      <span class="arrow arrow-bottom"></span>
      <span class="arrow arrow-left"></span>
      <span class="arrow arrow-right"></span>
      <span class="arrow arrow-topleft"></span>
      <span class="arrow arrow-bright"></span>
      <span class="arrow arrow-topbottom"></span>
      <span class="arrow arrow-two"></span>
      <span class="arrow arrow-round"></span>
    </div>
    <!-- 猫咪组件 -->
    <cat class="cat-box"></cat>
  </div>
</template>

<script>
import "../assets/cssanimate.js";
import Cat from "../components/cat";
export default {
  data() {
    return {};
  },
  components: {
    Cat
  }
};
</script>

<style scoped>
.page {
  /* background-color: #abc; */
  background: #0088a8;
}
.my-eggs {
  padding-left: 30vw;
}
.box1 {
  margin: 10px;
  width: 16vh;
  height: 22vh;
  display: inline-block;
  position: relative;
  animation: move 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
.box1::before {
  content: "";
  position: absolute;
  bottom: -135%;
  left: -75%;
  display: block;
  width: 65%;
  height: 200%;
  border-radius: inherit;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.54;
  border-top-left-radius: 55% 45%;
  border-top-right-radius: 55% 45%;
  border-bottom-left-radius: 60% 75%;
  border-bottom-right-radius: 60% 75%;
  transition: filter 2s;
  transition: filter 2s, -webkit-filter 2s;
  transform: rotate(65deg);
}
.box1::after {
  content: "";
  display: inline-block;
  width: 50%;
  height: 12%;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.66;
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translate(-56%);
}
.box1 .egg {
  width: 16vh;
  height: 22vh;
  display: inline-block;
  background: #ebbcc6;
  border-top-left-radius: 60% 75%;
  border-top-right-radius: 60% 75%;
  border-bottom-left-radius: 55% 45%;
  border-bottom-right-radius: 55% 45%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: wobble 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
.box1 .egg .shadow {
  display: inline-block;
  position: absolute;
  border-radius: inherit;
}
.box1 .egg .shadow4 {
  right: 10%;
  top: 11%;
  width: 20%;
  height: 28%;
  background-color: #f7ebee;
  transform: rotate(-20deg);
}
.box1 .egg .shadow3 {
  right: 10%;
  top: 8%;
  width: 35%;
  height: 55%;
  background-color: #eed4da;
  transform: rotate(-18deg);
}
.box1 .egg .shadow2 {
  left: 8%;
  bottom: -15%;
  width: 60%;
  height: 78%;
  background-color: #c47989;
  transform: rotate(-20deg);
}
.box1 .egg .shadow1 {
  display: inline-block;
  width: 98%;
  height: 95%;
  border-radius: inherit;
  position: absolute;
  bottom: 0px;
  left: 3%;
  background: #e49dac;
}
/* //灯 */
.lamp-box {
  padding: 30px 10px;
  position: absolute;
  top: 90px;
  right: 0;
  overflow: hidden;
}
.lamp-box .lamp {
  display: inline-block;
  width: 100px;
  height: 100px;
  border-radius: 100px 10px 100px 10px;
  transform: rotate(-45deg);
  position: relative;
}
.lamp-box .lamp:nth-child(2n) {
  background: #bb6b53;
}
.lamp-box .lamp:nth-child(2n-1) {
  background-color: #00a888;
}
.lamp-box .lamp:nth-child(2n):hover,
.lamp-box.light .lamp:nth-child(2n) {
  background: #eec095;
}
.lamp-box .lamp:nth-child(2n-1):hover,
.lamp-box.light .lamp:nth-child(2n-1) {
  background-color: #4be0c5;
}
.lamp-box .lamp .bottom-l {
  display: inline-block;
  width: 25px;
  height: 22px;
  background-color: #410f0f;
  transform: rotate(45deg);
  position: absolute;
  bottom: -10px;
  left: -12px;
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
}
/* float-box */
.float-box {
  width: 300px;
  height: 200px;
  padding: 20px;
  position: fixed;
  bottom: 0;
}
.float-box > div {
  display: inline-block;
  width: 100px;
  height: 100px;
  overflow: hidden;
  text-align: center;
  line-height: 100px;
  color: #ddd;
}
.float-box .radius-stone {
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 65%;
  border-top-left-radius: 45%;
  border-top-right-radius: 20%;
  background-color: #645b54;
}
.float-box .radius-mango {
  height: 150px;
  line-height: 150px;
  border-radius: 120% 16% 98% 9%;
  background-color: #c4c13a;
}
/* animate-img  */
.animate-img {
  position: fixed;
  right: 10px;
  top: 50%;
}
.img-box {
  width: 138px;
  height: 138px;
  background-clip: content-box;
  border-radius: 5px;
}
.slide-a {
  position: absolute;
  display: block;
  z-index: 0;
}
.slide-a.in {
  animation: clipCircleIn 2s linear 2.6s infinite alternate;
}
.slide-1 {
  animation: clipCircleIn 3s 10.2s infinite alternate;
}
.slide-2 {
  animation: clipCircleIn 2s linear 2.6s infinite alternate;
}
.slide-3 {
  animation: clipCircleIOut 2.5s ease-in 0.1s infinite alternate;
}
.slide-a > img {
  width: 138px;
  height: 138px;
  border-radius: 5px;
  display: block;
}
@keyframes clipCircleIn {
  0% {
    -webkit-clip-path: circle(0 at 50% 50%);
    clip-path: circle(0 at 50% 50%);
  }
  100% {
    -webkit-clip-path: circle(138px at 50% 50%);
    clip-path: circle(138px at 50% 50%);
  }
}
@keyframes clipCircleIOut {
  0% {
    -webkit-clip-path: circle(80px at 50% 50%);
    clip-path: circle(80px at 50% 50%);
  }
  100% {
    -webkit-clip-path: circle(0 at 50% 50%);
    clip-path: circle(0 at 50% 50%);
  }
}

/* arrow-box 箭头 */
.arrow-box {
  width: 60%;
  height: 100px;
  position: fixed;
  right: 10px;
  bottom: 50px;
}
.arrow-box .arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin: 10px 20px;
}
.arrow-box .arrow-top {
  border-bottom: 40px solid #9ac7b6;
  border-left: 80px solid transparent;
  border-right: 20px solid transparent;
}
.arrow-box .arrow-bottom {
  border-top: 20px solid #9e043f;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
.arrow-box .arrow-left {
  border-right: 20px solid #a00586;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
.arrow-box .arrow-right {
  border-left: 20px solid #81056d;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}
.arrow-box .arrow-topleft {
  border-top: 20px solid #a8056d;
  border-right: 20px solid transparent;
}
.arrow-box .arrow-bright {
  border-bottom: 20px solid #81056d;
  border-left: 20px solid transparent;
}
.arrow-box .arrow-topbottom {
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #f7f7f7;
  border-bottom: 20px solid #81056d;
}
.arrow-box .arrow-two {
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #81056d;
  border-right: 20px solid #7e0720;
}
.arrow-box .arrow-round {
  border-top: 20px solid transparent;
  border-bottom: 20px solid #f8f7f7;
  border-left: 20px solid #00a800;
  border-right: 20px solid #0000a8;
}
.arrow-box .arrow:hover {
  transition: all 0.25s ease-in;
  transform: scale(1.5);
}
/* egg-box */
.egg-box {
  /* padding: 100px 0; */
  padding-left: 30vw;
  width: 100%;
  height: calc(100vh - 22vh - 120px);
  margin-top: 100px;
  box-sizing: border-box;
  overflow: hidden;
}
.egg-wrapper {
  display: inline-block;
  position: relative;
  width: 15vw;
  height: 20vw;
  margin: 0 0.3vw;
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
}
.egg-wrapper:not(.rotate) {
  animation: move 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
.egg-wrapper .shadow {
  position: absolute;
  left: 8.6vw;
  top: 3.5vw;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  perspective: 50vw;
  transition-property: filter, opacity;
  transition-duration: 2s;
}
.egg-wrapper .shadow .main {
  position: absolute;
  right: 0;
  width: 400%;
  height: 88%;
  border-radius: inherit;
  transform-origin: center bottom;
  transform: rotateX(90deg) rotateZ(90deg);
  opacity: 0.57;
}
.egg-wrapper .shadow .main::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: #000;
  transition: filter 2s;
}
.egg-wrapper .shadow .secondary {
  position: absolute;
  z-index: 2;
  left: -4.8vw;
  top: 13.5vw;
  width: 6vw;
  height: 6vw;
  background: #000;
  border-radius: 50%;
  transform: rotateX(-66deg);
  transition: filter 2s;
}
.egg-wrapper .egg {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
  background: #ddd;
  transform: translate3d(0, 0, 0) rotate(0deg);
  transform-origin: center 60% !important;
  animation: wobble 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
.egg-wrapper .egg .fill {
  position: absolute;
  left: -12%;
  top: -10%;
  width: 130%;
  height: 124%;
  border-radius: inherit;
  box-shadow: inset 0 0 0 2.5vw #fff;
  opacity: 0.4;
  transition: filter 2s;
}
.egg-wrapper .egg .shading {
  position: absolute;
  left: 10%;
  top: 27%;
  width: 60%;
  height: 85%;
  background: #000;
  border-radius: inherit;
  transform: rotate(-20deg);
  opacity: 0.25;
  transition-property: filter, opacity;
  transition-duration: 2s;
}
.egg-wrapper .egg .key {
  position: absolute;
  left: 55%;
  top: 5%;
  width: 35%;
  height: 55%;
  background: #f4f4f4;
  border-radius: inherit;
  transform: rotate(-20deg);
  transition-property: filter, background;
  transition-duration: 2s;
}
.egg-wrapper .egg .highlight {
  position: absolute;
  left: 70%;
  top: 5%;
  width: 20%;
  height: 30%;
  background: #fff;
  border-radius: inherit;
  transform: rotate(-20deg);
  transition: filter 2s;
}
.egg-wrapper .egg .egg-shadow {
  position: absolute;
  right: -33%;
  top: 36%;
  width: 40%;
  height: 50%;
  border-radius: 50%;
  background: #000;
  opacity: 0.2;
  transition-property: filter, opacity;
  transition-duration: 2s;
  animation: move 3s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}
@keyframes wobble {
  0% {
    transform: translate3d(0, 0, 0) rotate(-8deg);
  }
  50% {
    transform: translate3d(0, 0, 0) rotate(8deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(-8deg);
  }
}
@keyframes move {
  0% {
    transform: translate(-1vw);
  }
  50% {
    transform: translate(1vw);
  }
  100% {
    transform: translate(-1vw);
  }
}

/* 猫咪盒子 */
.cat-box {
  position: fixed;
  left: 0;
  top: 30%;
}
</style>
