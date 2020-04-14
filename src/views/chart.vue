<template>
  <div class="chart-page">
    <div id="container">
      <div id="leftBar" class="side-bar left-bar">
        <span class="show-contral" @click="toggleLeftBar">
          <icon-svg icon-class="round" name="round"></icon-svg>
        </span>
        <h4 class="bar-title">
          <icon-svg icon-class="text" name="text"></icon-svg>
          <span class="txt">一个不存在的项目</span>
        </h4>
        <div class="content-bar" v-show="showLeftBar">
          <canvas id="myChart" width="280" height="220"></canvas>
          <canvas id="pie" width="160" height="160"></canvas>
          <canvas id="area" width="360" height="180"></canvas>
          <div class="card-content">
            <ul class="blocks">
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right white">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right white">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right white">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right">354 ppm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="rightBar" class="side-bar right-bar">
        <span class="show-contral" @click="toggleRightBar">
          <icon-svg icon-class="round" name="round"></icon-svg>
        </span>
        <h4 class="bar-title">
          <icon-svg icon-class="text" name="text"></icon-svg>
          <span class="txt">一个不存在的项目</span>
        </h4>
        <div class="content-bar" v-show="showRightBar">
          <div class="card-content">
            <ul class="blocks">
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right white">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right white">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right white">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right">354 ppm</span>
              </li>
              <li class="block-item">
                <span class="left">AOC^_</span>
                <span class="right">354 ppm</span>
              </li>
            </ul>
          </div>
          <canvas id="loop" width="240" height="220"></canvas>
          <canvas id="rchart1" width="260" height="260"></canvas>
          <canvas id="rchart2" width="300" height="260"></canvas>
          <canvas id="rchart3" width="260" height="260"></canvas>
        </div>
      </div>
    </div>
    <div class="footer" ref="footerBox">
      <div class="foot-content">
        <span class="menu-icon" @click="clickFlod"></span>
        <div class="footer-title">footer-MY FOOTER</div>
        <ul class="box-card">
          <li class="item">
            <div class="border-title">标题1</div>
            <div class="card-content"></div>
          </li>
          <li class="item">
            <div class="border-title">标题2</div>
            <div class="card-content">
              <ul class="blocks">
                <li class="block-item red">
                  <span class="left">AOC^_</span>
                  <span class="right">354 ppm</span>
                </li>
                <li class="block-item">
                  <span class="left">AOC^_</span>
                  <span class="right white">354 ppm</span>
                </li>
                <li class="block-item">
                  <span class="left">AOC^_</span>
                  <span class="right white">354 ppm</span>
                </li>
                <li class="block-item">
                  <span class="left">AOC^_</span>
                  <span class="right white">354 ppm</span>
                </li>
                <li class="block-item orange">
                  <span class="left">AOC^_</span>
                  <span class="right">354 ppm</span>
                </li>
                <li class="block-item red">
                  <span class="left">AOC^_</span>
                  <span class="right">354 ppm</span>
                </li>
              </ul>
            </div>
          </li>
          <li class="item">
            <div class="border-title">标题3</div>
            <div class="card-content"></div>
          </li>
          <li class="item">
            <div class="border-title">标题4</div>
            <div class="card-content"></div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loop-bottom">
      <loop></loop>
    </div>
    <span class="full-btn" @click="toFullscreen">切换全屏</span>
  </div>
</template>

<script>
import F2 from "@antv/f2/lib/index-all";
import insertCss from "insert-css";
// import F2 from "@antv/f2";
// import '@antv/f2/lib/interaction/pie-select';
import screenfull from "screenfull";
import Loop from "@/components/menuLoop";

export default {
  data() {
    return {
      showLeftBar: true,
      showRightBar: true
      // isFullscreen: false,
      // winnerHeight: 0
    };
  },
  components: { Loop },
  mounted() {
    // this.winnerHeight = window.innerHeight;
    insertCss(`
  canvas.fitness-ring {
    background-color: #151515;
    box-shadow: 0px 0px 1px 0px #06060d;
  }
`);
    // 设置独立的css
    const container = document.getElementById("container");
    container.className = "fitness-ring";
    this.init();
    this.initLoop();
    this.initPie();
    // this.initLine();
    this.initArea();
  },
  methods: {
    init() {
      const chart = new F2.Chart({
        id: "myChart",
        pixelRatio: window.devicePixelRatio // 指定分辨率
      });
      const data = [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ];
      // Step 2: 载入数据源
      chart.source(data);

      chart.axis("sold", {
        grid: {
          stroke: "#333",
          lineWidth: 1,
          lineDash: null,
          top: false
        },
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });

      // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
      chart
        .interval()
        .position("genre*sold")
        .color("genre");

      // 点击选中柱子
      chart.interaction("interval-select", {
        selectAxisStyle: {
          fill: "#0088a8",
          fontWeight: "bold"
        },
        mode: "range",
        defaultSelected: {
          genre: "默认",
          sold: 59
        },
        onEnd: function onEnd(ev) {
          const data = ev.data,
            selected = ev.selected;

          lastTextShape &&
            lastTextShape.attr({
              fill: "#00a888",
              fontWeight: "normal"
            });
          if (selected) {
            const textShape = shapes[data.genre];
            textShape.attr({
              fill: "#fff",
              fontWeight: "bold"
            });
            lastTextShape = textShape;
          }
          canvas.draw();
        }
      });

      // Step 4: 渲染图表
      chart.render();
    },
    initLoop() {
      const data = [
        { name: "芳华", percent: 0.4, type: "1" },
        { name: "妖猫传", percent: 0.2, type: "1" },
        { name: "机器之血", percent: 0.18, type: "1" },
        { name: "心理罪", percent: 0.15, type: "1" },
        { name: "寻梦环游记", percent: 0.05, type: "1" },
        { name: "其他", percent: 0.12, type: "1" },
        { name: "芳华", percent: 0.4, type: "2" },
        { name: "妖猫传", percent: 0.2, type: "2" },
        { name: "机器之血", percent: 0.18, type: "2" },
        { name: "心理罪", percent: 0.15, type: "2" },
        { name: "寻梦环游记", percent: 0.05, type: "2" },
        { name: "其他", percent: 0.12, type: "2" }
      ];

      const chart = new F2.Chart({
        id: "loop",
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data);
      chart.legend({
        position: "right"
      });
      chart.tooltip(false);
      chart.coord("polar", {
        transposed: true,
        radius: 0.8,
        inner: 0.5
      });
      chart.axis(false);
      chart
        .interval()
        .position("type*percent")
        .color("name", [
          "#1890FF",
          "#13C2C2",
          "#2FC25B",
          "#FACC14",
          "#F04864",
          "#8543E0"
        ])
        .adjust("stack");

      chart.interaction("pie-select", {
        startEvent: "tap",
        animate: {
          duration: 300,
          easing: "backOut"
        },
        cancelable: true
      });

      chart.render();
    },
    initPie() {
      const { Shape, Util, Global, G, Animate } = F2;
      const { Vector2 } = G;

      Shape.registerShape("interval", "tick", {
        draw: function draw(cfg, container) {
          const points = this.parsePoints(cfg.points);
          const style = Util.mix(
            {
              stroke: cfg.color
            },
            Global.shape.interval,
            cfg.style
          );
          if (cfg.isInCircle) {
            let newPoints = points.slice(0);
            if (this._coord.transposed) {
              newPoints = [points[0], points[3], points[2], points[1]];
            }

            // eslint-disable-next-line one-var
            const _cfg$center = cfg.center,
              x = _cfg$center.x,
              y = _cfg$center.y;

            const v = [1, 0];
            const v0 = [newPoints[0].x - x, newPoints[0].y - y];
            const v1 = [newPoints[1].x - x, newPoints[1].y - y];
            const v2 = [newPoints[2].x - x, newPoints[2].y - y];

            let startAngle = Vector2.angleTo(v, v1);
            let endAngle = Vector2.angleTo(v, v2);
            const r0 = Vector2.length(v0);
            const r = Vector2.length(v1);

            if (startAngle >= 1.5 * Math.PI) {
              startAngle = startAngle - 2 * Math.PI;
            }

            if (endAngle >= 1.5 * Math.PI) {
              endAngle = endAngle - 2 * Math.PI;
            }

            const lineWidth = r - r0;
            const newRadius = r - lineWidth / 2;

            return container.addShape("Arc", {
              className: "fitness-ring",
              attrs: Util.mix(
                {
                  x,
                  y,
                  startAngle,
                  endAngle,
                  r: newRadius,
                  lineWidth,
                  lineCap: "round",
                  shadowColor: "rgba(200, 200, 200, 0.6)",
                  shadowOffsetX: 0,
                  shadowOffsetY: -5,
                  shadowBlur: 50
                },
                style
              )
            });
          }
        }
      });

      Animate.registerAnimation("waveIn", function(shape, animateCfg) {
        const startAngle = shape.attr("startAngle");
        const endAngle = shape.attr("endAngle");
        shape.attr("endAngle", startAngle);
        shape.animate().to(
          Util.mix(
            {
              attrs: {
                endAngle
              }
            },
            animateCfg
          )
        );
      });

      const data = [
        {
          name: "activity1",
          percent: 2370,
          color: "#0ab2d8",
          icon: "stand.png",
          bgColor: "#09687e"
        },
        {
          name: "activity2",
          percent: 80,
          color: "#00a888",
          icon: "walk.png",
          bgColor: "#05493d"
        },
        {
          name: "activity3",
          percent: 65,
          color: "#a84498",
          icon: "run.png",
          bgColor: "#502449"
        }
      ];

      const chart = new F2.Chart({
        id: "pie",
        width: 180,
        height: 180,
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data, {
        percent: {
          max: 100
        }
      });
      chart.legend(false);
      chart.coord("polar", {
        transposed: true,
        innerRadius: 0.382,
        radius: 0.8
      });
      chart.axis(false);
      chart
        .interval()
        .position("name*percent")
        .color("color", function(val) {
          return val;
        })
        .shape("tick")
        .size(10)
        .animate({
          appear: {
            animation: "waveIn",
            duration: 1500,
            easing: "elasticOut"
          },
          update: {
            duration: 1500,
            easing: "elasticOut"
          }
        });

      data.forEach(function(obj) {
        // background
        chart.guide().arc({
          start: [obj.name, 0],
          end: [obj.name, 99.98],
          top: false,
          style: {
            lineWidth: 6,
            stroke: obj.bgColor
          }
        });
        chart.guide().html({
          position: [obj.name, 0],
          html: `<div style="width: 10px;height: 10px;">
            <img style="width: 10px;height: 10px;display: block; color:#fff" src="http://www.adeveloperdiary.com/wp-content/uploads/2015/11/${
              obj.icon
            }"/>
            </div>`
        });
      });
      chart.render();

      const updateData = function updateData() {
        for (let i = 0; i < data.length; ++i) {
          data[i].percent = Math.floor(Math.random() * 60 + 20);
        }
        chart.changeData(data);
        setTimeout(updateData, 1500);
      };

      setTimeout(updateData, 1500);
    },
    initLine() {
      const data = [
        {
          day: "周一",
          value: 300
        },
        {
          day: "周二",
          value: 400
        },
        {
          day: "周三",
          value: null
        },
        {
          day: "周四",
          value: 500
        },
        {
          day: "周五",
          value: 490
        },
        {
          day: "周六",
          value: 600
        },
        {
          day: "周日",
          value: 900
        }
      ];
      const chart = new F2.Chart({
        id: "line",
        pixelRatio: window.devicePixelRatio
      });

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [0, 1]
        }
      });
      chart.axis("day", {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.tooltip({
        showCrosshairs: true
      });
      chart
        .line({
          connectNulls: true // 配置，连接空值数据
        })
        .position("day*value");
      chart.point().position("day*value");
      chart.render();
    },
    initArea() {
      const data = [
        {
          time: "2016-08-08 00:00:00",
          tem: 10
        },
        {
          time: "2016-08-08 00:10:00",
          tem: 22
        },
        {
          time: "2016-08-08 00:30:00",
          tem: 16
        },
        {
          time: "2016-08-09 00:35:00",
          tem: 26
        },
        {
          time: "2016-08-09 01:00:00",
          tem: 12
        },
        {
          time: "2016-08-09 01:20:00",
          tem: 26
        },
        {
          time: "2016-08-10 01:40:00",
          tem: 18
        },
        {
          time: "2016-08-10 02:00:00",
          tem: 26
        },
        {
          time: "2016-08-10 02:20:00",
          tem: 12
        }
      ];
      const chart = new F2.Chart({
        id: "area",
        pixelRatio: window.devicePixelRatio
      });
      chart.source(data, {
        time: {
          type: "timeCat",
          tickCount: 3,
          range: [0, 1]
        },
        tem: {
          tickCount: 5,
          min: 0
        }
      });

      chart.axis("time", {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = "left";
          } else if (index === total - 1) {
            textCfg.textAlign = "right";
          }
          return textCfg;
        }
      });
      chart.axis("tem", {
        grid: {
          stroke: "#abc",
          lineDash: null
        }
      });
      chart.tooltip({
        showCrosshairs: true
      });

      chart
        .area()
        .position("time*tem")
        .color("l(90) 0:#1890FF 1:#0088a8")
        .shape("smooth");
      chart
        .line()
        .position("time*tem")
        .color("l(90) 0:#1890FF 1:#f7f7f7")
        .shape("smooth");
      chart.render();
    },
    clickFlod() {
      // 展开或收起底部导航
      console.dir(this.$refs.footerBox);
      console.log(
        this.$refs.footerBox.style.bottom !== "0px",
        this.$refs.footerBox.style.bottom !== ""
      );
      if (this.$refs.footerBox.style.bottom !== "0px") {
        this.$refs.footerBox.style.bottom = "0px";
      } else {
        this.$refs.footerBox.style.bottom = "-380px";
      }
      console.log(this.$refs.footerBox.style);
    },
    toggleLeftBar() {
      this.showLeftBar = !this.showLeftBar;
    },
    toggleRightBar() {
      this.showRightBar = !this.showRightBar;
    },
    toFullscreen() {
      //不支持screenfull全屏，则打印错误
      if (!screenfull.isEnabled) {
        console.error("unEnabled");
        return;
      }
      screenfull.toggle();
    }
  }
};
</script>

<style scoped>
.chart-page {
  padding-top: 70px;
  width: 100%;
  height: 100vh;
  /* background: url(../assets/imgs/dark_bg.png) no-repeat center center; */
  background-size: 100% 100%;
  background-color: #000;
  overflow: hidden;
  position: relative;
}
#container {
  position: relative;
}
.side-bar {
  height: calc(100vh - 70px);
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.35);
}
.side-bar span.show-contral {
  display: inline-block;
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  top: 2em;
  /* padding: 5px; */
  color: #0c7466;
  cursor: pointer;
}
.side-bar span.show-contral > .icon-svg {
  width: 100%;
  height: 100%;
}
.left-bar span.show-contral {
  right: 0;
}
.right-bar span.show-contral {
  left: 0;
}
.left-bar span.show-contral .icon-svg__round {
  transform: rotate(-90deg);
}
.right-bar span.show-contral .icon-svg__round {
  transform: rotate(90deg);
}
.left-bar {
  padding-right: 30px;
  width: 400px;
  left: 0;
  box-shadow: 1px 0 15px #4a4d4c;
}
.right-bar {
  padding-left: 30px;
  width: 450px;
  right: 0;
  box-shadow: -1px 0 15px #4a4d4c;
}
.bar-title {
  color: #0e99c4;
  font-size: 18px;
  padding: 10px 0;
  position: relative;
  background: url(../assets/icons/icon-bline.svg) no-repeat left bottom;
  background-size: 60% auto;
}
.bar-title .icon-svg {
  width: 1.5em;
  height: 1.5em;
  color: #1296db;
}
.bar-title span.txt {
  display: inline-block;
  text-indent: 15px;
  font-family: cursive;
}

/* footer */
.footer {
  width: 100%;
  height: 400px;
  position: absolute;
  left: 0;
  bottom: -380px;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
}
.footer::before {
  content: "";
  display: block;
  width: 120%;
  height: 150%;
  position: absolute;
  left: -10%;
  top: 0;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  background-color: rgba(36, 78, 78, 0.6);
  border-top: 3px solid #51eed1;
}
.foot-content {
  position: relative;
}
.footer-title {
  line-height: 4em;
  font-size: 18px;
  font-family: sans-serif;
  color: #06cc90;
  text-align: center;
  margin-bottom: 2em;
}
.box-card,
.box-card > li,
.blocks,
.blocks > li {
  list-style: none;
}
.card-content {
  height: 240px;
}
.box-card > li.item {
  display: inline-block;
  width: 24%;
  text-align: center;
  vertical-align: middle;
}
.item .border-title {
  display: inline-block;
  width: 120px;
  padding: 5px 0;
  text-align: center;
  border: 1px solid #7cdfcc;
  border-radius: 10px;
  box-shadow: 1px 1px 18px #00a888;
  color: #d4fff6;
}
.card-content .block-item {
  display: inline-block;
  width: 40%;
  border-radius: 5px;
  padding: 8px;
  /* border-top: 1px solid #00a888;
  border-bottom: 1px solid #00a888; */
  border-top: 1px solid #3e99a3;
  border-bottom: 1px solid #3e99a3;
  margin: 15px;
  color: #73dcf3;
  background-color: rgba(51, 94, 107, 0.2);
}
.card-content .block-item.orange {
  color: #ed9b29;
  border-color: #ed9b29;
  background-color: rgb(100, 67, 21, 0.2);
}
.card-content .block-item.red {
  color: #c12b3f;
  border-color: #9a1628;
  background-color: rgba(136, 36, 49, 0.2);
}
.block-item.red span.right {
  color: #f83242;
}
.block-item span.left,
.block-item span.right {
  display: inline-block;
  width: 45%;
}
.block-item span.right.white {
  color: #cef8ee;
}
.block-item span.right {
  text-align: right;
}
.foot-content span.menu-icon {
  display: inline-block;
  width: 2.5em;
  height: 2.5em;
  position: absolute;
  top: -15px;
  left: 49%;
  padding: 5px;
  background: url(../assets/icons/icon_fold.svg) no-repeat center center;
  background-size: 2.5em 2.5em;
  cursor: pointer;
}
/* loop */
.loop-bottom {
  position: absolute;
  right: -7%;
  bottom: -15%;
}

/* button */
.full-btn {
  display: inline-block;
  padding: 5px 15px;
  color: #fff;
  position: fixed;
  left: 0;
  top: 50%;
  background-color: #00a888;
  cursor: pointer;
}
</style>
