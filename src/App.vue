<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import './assets/css/base.scss'
import "./assets/css/font_jpq.css";
import "./assets/css/font_wkb.css";
import screenfull from "screenfull";

export default {
  name: "App",
  mounted() {
    window.addEventListener("keydown", this.KeyDown, true);
  },
  methods: {
    toFullscreen() {
      //不支持screenfull全屏，则打印错误
      if (!screenfull.isEnabled) {
        console.error("unEnabled");
        return;
      }
      screenfull.toggle();
    },
    KeyDown(event) {
      if (event.keyCode === 122) {
        event.returnValue = false;
        this.toFullscreen();
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
