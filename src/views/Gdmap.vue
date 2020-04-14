<template>
  <div class="page map-box">
    <div id="mapBox"></div>
  </div>
</template>

<script>
import { Scene, PointLayer } from "@antv/l7";
import { GaodeMap } from "@antv/l7-maps";
import dataJson from "../assets/data/cq.json";
import areaJson from "../assets/data/cqAreas.json";

export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const scene = new Scene({
        id: "mapBox",
        map: new GaodeMap({
          pitch: 35.210526315789465,
          style: "dark",
          center: [106.546239, 29.548681],
          zoom: 13.6,
          token: "03b8558ca0e82bb7c0ff7277fffc3706"
        })
      });
      // 获取在线数据
      // fetch(
      //   "https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json"
      // )
      //   .then(res => res.json())
      //   .then(data => {
      const pointLayer = new PointLayer({})
        .source(dataJson.list, {
          parser: {
            type: "json",
            x: "j",
            y: "w"
          }
        })
        .shape("cylinder")
        .size("t", function(level) {
          return [5, 20, level * 2 + 20];
        })
        .color("t", [
          "#0a5244",
          "#1D7F7E",
          "#00A888",
          "#289899",
          "#34B6B7",
          "#4AC5AF",
          "#5FD3A6",
          "#7BE39E",
          "#A1EDB8",
          "#a85715"
        ])
        .style({
          opacity: 1.0
        });
      scene.addLayer(pointLayer);
      // });
    }
  }
};
</script>

<style scoped>
.map-box {
  width: 100%;
  height: 100%;
}
#mapBox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #0a5244;
}
</style>
