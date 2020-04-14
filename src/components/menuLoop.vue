<template>
  <div class="menu-loop" :class="{showmore:showRound}">
    <div class="loop-animate" :class="{animate:showRound}">
      <span class="border-loop loop">导航1</span>
      <span class="border-loop loop">导航2</span>
      <span class="border-loop loop">导航3</span>
      <span class="border-loop loop">导航4</span>
      <span class="border-loop loop">导航5</span>
      <span class="border-loop loop">导航6</span>
      <span class="border-loop loop">导航7</span>
      <span class="border-loop loop">导航8</span>
    </div>
    <div class="loop-box loop">
      <div class="center-loop loop" @click="clickLoopCenter">导航</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showRound: false
    };
  },
  components: {},
  methods: {
    clickLoopCenter() {
      this.showRound = !this.showRound;
    }
  }
};
</script>

<style scoped>
.menu-loop {
  /* width: 26em;
  height: 26em; */
  margin: 50px;
  padding: 8em;
  position: relative;
  user-select: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  transform: translate(20%, 10%);
}
.menu-loop.showmore {
  transform: translate(0, 0);
}
.loop-animate {
  display: none;
  width: 26em;
  height: 26em;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  border-color: transparent;
}
.loop-animate.animate {
  border: 1px solid #00a888;
  border-radius: 50%;
  display: inline-block;
  animation: rotateMenu 15s 0.5s linear infinite;
}
@keyframes rotateMenu {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.loop {
  border: 1px solid #00a888;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
}
.loop-box {
  width: 10em;
  height: 10em;
  padding: 2.5em;
  border-color: transparent;
  box-shadow: 1px 1px 125px #0ab0da;
}
.center-loop {
  width: 5em;
  height: 5em;
  line-height: 5em;
  background-color: #0088a8;
  color: #ffffff;
  position: relative;
}
.center-loop:hover {
  box-shadow: 0 0 95px #0088a8;
}
span.border-loop {
  width: 6em;
  height: 6em;
  line-height: 6em;
  position: absolute;
  background-color: #0088a8;
  color: #ffffff;
  cursor: pointer;
  letter-spacing: 1px;
}
span.border-loop:nth-child(1) {
  left: -3em;
  top: calc(50% - 3em);
  transform: rotate(-90deg);
}
span.border-loop:nth-child(2) {
  top: calc(25% - 5em);
  left: 0.5em;
  transform: rotate(-45deg);
}
span.border-loop:nth-child(3) {
  top: -3em;
  left: calc(50% - 3em);
}
span.border-loop:nth-child(4) {
  top: calc(25% - 5em);
  right: 0.5em;
  transform: rotate(45deg);
}
span.border-loop:nth-child(5) {
  right: -3em;
  top: calc(50% - 3em);
  transform: rotate(90deg);
}
span.border-loop:nth-child(6) {
  right: 0.5em;
  bottom: calc(25% - 5em);
  transform: rotate(135deg);
}
span.border-loop:nth-child(7) {
  bottom: -3em;
  left: calc(50% - 3em);
  transform: rotate(-180deg);
}
span.border-loop:nth-child(8) {
  left: 0.5em;
  bottom: calc(25% - 5em);
  transform: rotate(-135deg);
}
</style>
