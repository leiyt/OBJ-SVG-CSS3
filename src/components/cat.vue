<template>
  <div class="cat">
    <div class="head_content">
      <div class="ear_left"></div>
      <div class="ear_right"></div>
      <div class="head"></div>
      <div class="brow_left"></div>
      <div class="brow_right"></div>
      <div class="eye_left">
        <div id="pL" class="pupil" style="top: 19.0339px; left: 33.5145px;"></div>
      </div>
      <div class="eye_right">
        <div id="pR" class="pupil" style="top: 19.0339px; left: 33.5145px;"></div>
      </div>
      <div class="beard_left1"></div>
      <div class="beard_left2"></div>
      <div class="beard_left3"></div>
      <div class="beard_right1"></div>
      <div class="beard_right2"></div>
      <div class="beard_right3"></div>
      <div class="nose"></div>
      <div class="mouse">
        <div class="mouse_top"></div>
        <div class="mouse_left"></div>
        <div class="mouse_right"></div>
        <div class="mouse_bottom"></div>
        <div class="mouse_bottom_show"></div>
        <div class="miao">喵~</div>
      </div>
    </div>
    <div class="body_content">
      <div class="body"></div>
      <div class="arm_left"></div>
      <div class="arm_right"></div>
      <div class="leg_left"></div>
      <div class="leg_right"></div>
      <div class="tail">
        <div class="tail1"></div>
        <div class="tail2"></div>
        <div class="tail3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
/* 猫咪  css */
.cat {
  transform: scale(0.5);
  width: 500px;
  height: 500px;
  margin: 0 auto;
  cursor: pointer;
}
.cat .head_content {
  position: absolute;
  top: 100px;
}
.cat .ear_left {
  width: 100px;
  height: 150px;
  background-color: #fcedbc;
  border-radius: 50% / 10%;
  position: absolute;
  top: 22px;
  left: 16px;
  transform: rotate(-20deg);
}
.cat .ear_right {
  width: 100px;
  height: 150px;
  background-color: #fcedbc;
  border-radius: 50% / 10%;
  position: absolute;
  top: 22px;
  left: 227px;
  transform: rotate(20deg);
}
.cat .head {
  width: 345px;
  height: 270px;
  background-color: #fff5d7;
  -webkit-border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0px 0px 35px #b3a270;
  position: absolute;
  top: 0;
}
.cat:hover .eye_left .pupil {
  animation: eyes 2.5s linear infinite;
}
.cat:hover .eye_right .pupil {
  animation: eyes 2.5s linear infinite;
}
.cat .brow_left {
  width: 44px;
  height: 20px;
  border: 1px solid transparent;
  border-top: 2px solid #000;
  border-radius: 50%/35%;
  position: absolute;
  top: 49px;
  left: 60px;
  transform: rotate(-37deg);
}
.cat .brow_right {
  width: 44px;
  height: 20px;
  border: 1px solid transparent;
  border-top: 2px solid #000;
  border-radius: 50%/35%;
  position: absolute;
  top: 49px;
  left: 240px;
  transform: rotate(37deg);
}
.cat .eye_left {
  width: 70px;
  height: 70px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 67px;
  left: 70px;
}
.eye_left .pupil {
  width: 38px;
  height: 38px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: 30px;
  /* animation: eyes 2.5s ease-out infinite; */
}
.cat .eye_right {
  width: 70px;
  height: 70px;
  background: #fff;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 67px;
  left: 205px;
}
.eye_right .pupil {
  width: 38px;
  height: 38px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: 30px;
  /* animation: eyes 2.5s ease-out infinite; */
}
.cat .beard_left1 {
  width: 95px;
  border-top: 1px solid #000;
  position: absolute;
  top: 158px;
  left: -50px;
  transform: rotate(10deg);
}
.cat .beard_left2 {
  width: 95px;
  border-top: 1px solid #000;
  position: absolute;
  top: 187px;
  left: -60px;
  transform: rotate(-7deg);
}
.cat .beard_left3 {
  width: 95px;
  border-top: 1px solid #000;
  position: absolute;
  top: 208px;
  left: -50px;
  transform: rotate(-16deg);
}
.cat .beard_right1 {
  width: 95px;
  border-top: 1px solid #000;
  position: absolute;
  top: 158px;
  left: 300px;
  transform: rotate(-10deg);
}
.cat .beard_right2 {
  width: 95px;
  border-top: 1px solid #000;
  position: absolute;
  top: 187px;
  left: 310px;
  transform: rotate(7deg);
}
.cat .beard_right3 {
  width: 95px;
  border-top: 1px solid #000;
  position: absolute;
  top: 208px;
  left: 300px;
  transform: rotate(16deg);
}
.cat .nose {
  width: 20px;
  height: 10px;
  background-color: #000;
  border-radius: 50%/40%;
  position: absolute;
  top: 142px;
  left: 161px;
}
.cat .mouse {
  position: absolute;
  top: 152px;
  left: 171px;
}
.cat:hover .mouse .mouse_bottom {
  opacity: 0;
}
.cat:hover .mouse .mouse_bottom_show {
  display: block;
}
.cat .mouse_top {
  height: 10px;
  border-left: 1px solid #000;
  position: absolute;
  top: 0;
  left: 0;
}
.cat .mouse_left {
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-bottom: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  top: -78px;
  left: -86px;
}
.cat .mouse_right {
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-bottom: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  top: -78px;
  left: -14px;
}
.cat .mouse_bottom {
  width: 20px;
  height: 20px;
  border: 1px solid transparent;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  position: absolute;
  top: 8px;
  left: -9px;
  transform: rotate(45deg);
}
.cat .mouse_bottom_show {
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-bottom: 1px solid #f53325;
  border-radius: 50%;
  position: absolute;
  top: -63px;
  left: -49px;
  display: none;
}
.cat .miao {
  position: absolute;
  top: -5px;
  left: 52px;
  font-size: 3em;
  opacity: 0;
  color: #f83a63;
  width: 2.5em;
}
.cat:hover .miao {
  animation: showMiao 1s linear infinite;
}
.cat .body_content {
  position: absolute;
  top: 305px;
  left: 101px;
}
.cat .body {
  width: 140px;
  height: 165px;
  background: #fcedbc;
  border: 1px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
}
.cat .arm_left {
  width: 20px;
  height: 80px;
  background: #fae8ad;
  border: 1px solid #000;
  border-radius: 50% / 40%;
  position: absolute;
  top: 30px;
  left: 10px;
  transform: rotate(50deg);
  z-index: -20;
}
.cat .arm_right {
  width: 20px;
  height: 80px;
  background: #fae8ad;
  border: 1px solid #000;
  border-radius: 50% / 40%;
  position: absolute;
  top: 30px;
  left: 110px;
  transform: rotate(-50deg);
  z-index: -20;
}
.cat .leg_left {
  width: 30px;
  height: 93px;
  background: #fae8ad;
  border: 1px solid #000;
  border-radius: 50% / 40%;
  position: absolute;
  top: 88px;
  left: 14px;
  transform: rotate(-20deg);
  z-index: -20;
}
.cat .leg_right {
  width: 30px;
  height: 93px;
  background: #fae8ad;
  border: 1px solid #000;
  border-radius: 50% / 40%;
  position: absolute;
  top: 88px;
  left: 96px;
  transform: rotate(20deg);
  z-index: -20;
}
.cat .tail {
  position: absolute;
  top: 86px;
  left: 52px;
  z-index: -30;
  animation: tailanim 1.5s infinite;
}
.cat .tail1 {
  width: 226px;
  height: 100px;
  border: 1px solid transparent;
  border-top: 5px solid #fcedbc;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-25deg);
}
.cat .tail2 {
  width: 61px;
  height: 41px;
  border: 1px solid transparent;
  border-bottom: 5px solid #fcedbc;
  border-right: 5px solid #fcedbc;
  border-radius: 50%;
  position: absolute;
  top: -13px;
  left: 145px;
  transform: rotate(-38deg);
}
.cat .tail3 {
  width: 23px;
  height: 30px;
  border: 1px solid transparent;
  border-bottom: 5px solid #fcedbc;
  border-right: 6px solid #fcedbc;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 148px;
  transform: rotate(121deg);
}
@keyframes eyes {
  20% {
    top: 30px;
    left: 15px;
  }
  40% {
    top: 31px;
    left: 20px;
  }
  50% {
    top: 31.1px;
    left: 22.43px;
  }
  60% {
    top: 31px;
    left: 15px;
  }
  80% {
    top: 30px;
    left: 8px;
  }
  100% {
    top: 30.6px;
    left: 17px;
  }
}
@keyframes tailanim {
  20% {
    transform: rotate(5deg);
  }
  40% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes showMiao {
  0% {
    opacity: 0;
    top: -5px;
    left: 50px;
  }
  100% {
    opacity: 1;
    top: -28px;
    left: 110px;
  }
}

</style>
