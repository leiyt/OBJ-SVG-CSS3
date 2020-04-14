<template>
  <div class="topology-box">
    <!-- 左侧工具栏 -->
    <div class="tools">
      <div v-for="(item, index) in tools" :key="index">
        <div class="title">{{ item.group }}</div>
        <div class="buttons">
          <a
            v-for="(btn, i) in item.children"
            :key="i"
            :title="btn.name"
            :draggable="btn.data"
            @dragstart="onDrag($event, btn)"
          >
            <i :class="`iconfont ${btn.icon}`"></i>
          </a>
        </div>
      </div>
      <span class="svg-box" v-for="item of svgIcon" :key="item">
        <icon-svg :id="item" :name="item" :icon-class="item" class="icon-svg"></icon-svg>
        <span>{{ item }}</span>
      </span>
    </div>
    <!-- 画布 -->
    <div class="canvas" id="topo-canvas"></div>
    <!-- 右侧属性栏 -->
    <div class="props">
      <div class="props-col" v-if="propFlag == 'box'">
        <p>形状属性</p>
        <ul class="props-items">
          <li class="item">
            <span class="txt">宽</span>
            <input type="text" v-model="nodeProps.rect.width">
          </li>
          <li class="item">
            <span class="txt">高</span>
            <input type="text" v-model="nodeProps.rect.height">
          </li>
          <li class="item">
            <span class="txt">圆角</span>
            <input type="text" v-model="nodeProps.borderRadius">
          </li>
          <p>外观</p>
          <li class="item">
            <span class="txt">边框颜色</span>
            <input type="color" value="#2D9900" v-model="nodeProps.strokeStyle">
          </li>
          <li class="item">
            <span class="txt">边框宽度（px）</span>
            <input type="text" value="#2D9900" v-model="nodeProps.lineWidth">
          </li>
          <li class="item">
            <span class="txt">背景颜色</span>
            <input type="color" value="#2D9900" v-model="nodeProps.fillStyle">
          </li>
          <li class="item">
            <span class="txt">文字颜色</span>
            <input type="color" value="#2D9900" v-model="nodeProps.font.color">
          </li>
          <li class="item">
            <span class="txt">文字大小</span>
            <input type="text" value="#2D9900" v-model="nodeProps.font.fontSize">
          </li>
          <p>动画</p>
          <li class="item">
            <span class="txt">动画时长</span>
            <input type="numbder" v-model="nodeProps.animateDuration">
          </li>
          <li class="item">
            <span class="txt">动画帧</span>
            <input type="text" v-model="nodeProps.animateFrames">
          </li>
          <li class="item">
            <span class="txt">动画效果</span>
            <input type="text" v-model="nodeProps.animateType">
          </li>
        </ul>
        <span class="btn">
          <button @click="updateNodeClick">确定修改</button>
        </span>
      </div>
      <div class="props-col" v-else-if="propFlag == 'line'">
        <p>连接线属性</p>
        <ul class="props-items">
          <li class="item">
            <span class="txt">线类型</span>
            <input type="text" v-model="lineProps.name">
            <select v-model="lineProps.name">
              <option value="line">直线</option>
              <option value="curve">贝塞尔曲线</option>
              <option value="polyline">折线</option>
            </select>
            <!-- curve - 贝塞尔曲线 polyline - 折线 line - 直线 -->
          </li>
          <li class="item">
            <span class="txt">线起点箭头</span>
            <input type="text" v-model="lineProps.fromArrow">
          </li>
          <li class="item">
            <span class="txt">线终点箭头</span>
            <input type="text" v-model="lineProps.toArrow">
          </li>
          <li class="item">
            <span class="txt">线宽度</span>
            <input type="text" v-model.number="lineProps.lineWidth">
          </li>
          <li class="item">
            <span class="txt">线颜色</span>
            <input type="color" value="#2D9900" v-model="lineProps.strokeStyle">
          </li>
          <li class="item">
            <span class="txt">线边框宽度</span>
            <input type="text" v-model.number="lineProps.borderWidth">
          </li>
          <li class="item">
            <span class="txt">线边框颜色</span>
            <input type="color" value="#2D9900" v-model="lineProps.borderColor">
          </li>
          <p>动画</p>
          <li class="item">
            <span class="txt">播放动画</span>
            <input type="checkbox" v-model="lineProps.isAnimate">
            <label for="checkbox">{{ lineProps.isAnimate }}</label>
          </li>
          <li class="item">
            <span class="txt">开始播放时间</span>
            <input
              type="checkbox"
              @change="changeAnimateStart(animateStartVal)"
              v-model="animateStartVal"
            >
            <label for="checkbox">{{ lineProps.animateStart }}</label>
          </li>
          <li class="item">
            <span class="txt">连线动画颜色</span>
            <input type="color" v-model="lineProps.animateColor">
          </li>
          <li class="item">
            <span class="txt">圆点大小</span>
            <input type="text" v-model="lineProps.animateDotSize">
          </li>
          <li class="item">
            <span class="txt">连线动画步长</span>
            <input type="text" v-model="lineProps.animateSpan">
          </li>
          <li class="item">
            <span class="txt">连线动画类型</span>
            <select v-model="lineProps.animateType">
              <option value="">水流动画</option>
              <option value="beads">水珠动画</option>
              <option value="dot">圆点</option>
              <option value="comet">彗星</option>
            </select>
          </li>
          <!-- <li class="item">
            <span class="txt">连线动画时长</span>
            <input type="text" v-model="lineProps.animateDuration">
          </li>-->
          <!-- <li class="item">
            <span class="txt">连线动画当前所在位置</span>
            <input type="text" v-model="lineProps.animatePos">
          </li>-->
        </ul>
        <span class="btn">
          <button @click="updateLineClick">确定修改</button>
        </span>
      </div>
      <div class="menus" v-else>
        <div>
          <a :class="{disabled:!props.node && !props.nodes}" @click="onTop()">置顶</a>
        </div>
        <div>
          <a :class="{disabled:!props.node && !props.nodes}" @click="onBottom()">置底</a>
        </div>
        <div class="line"></div>
        <div v-if="props.nodes">
          <a @click="onCombine()">组合</a>
          <div>
            <a @click="onCombine(true)">包含</a>
          </div>
        </div>
        <div v-if="props.node && props.node.name === 'combine'">
          <a @click="onUncombine()">取消组合/包含</a>
        </div>
        <div>
          <a
            :class="{disabled:!props.node && !props.nodes}"
            @click="onLock()"
          >{{ props.locked ? '解锁' : '锁定' }}</a>
        </div>
        <div class="line"></div>
        <div>
          <a :class="{disabled:!props.node && !props.nodes && !props.line}" @click="onDel()">删除</a>
        </div>
        <div class="line"></div>
        <div>
          <a @click="canvas.undo()" class="flex">
            <span class="full">撤消</span>
            <span class="ml50">Ctrl + Z</span>
          </a>
        </div>
        <div>
          <a @click="canvas.redo()">
            恢复
            <span class="ml50">Ctrl + Shift+ Z</span>
          </a>
        </div>
        <div class="line"></div>
        <div>
          <a @click="canvas.cut()" class="flex">
            <span class="full">剪切</span>
            <span class="ml50">Ctrl + X</span>
          </a>
        </div>
        <div>
          <a @click="canvas.copy()" class="flex">
            <span class="full">复制</span>
            <span class="ml50">Ctrl + C</span>
          </a>
        </div>
        <div>
          <a @click="canvas.parse()" class="flex">
            <span class="full">粘贴</span>
            <span class="ml50">Ctrl + V</span>
          </a>
        </div>
        <div class="line"></div>
        <div>
          <a
            :class="{disabled:!props.node || !props.node.image}"
            @click="onCopyImage()"
            class="flex"
          >
            <span class="full">复制节点图片地址</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 导入绘画引擎
import { Topology } from "topology-core";
// 导入工具和属性
import { Tools, canvasRegister } from "../services/canvas";
import * as FileSaver from "file-saver";
import AnimateJson from "../assets/data/animate.json";
import FlowJson from "../assets/data/topo-flow.json";
import svgIcons from "../icons/svg-icons";

// import { Node } from "topology-core/models/node";
// import { Line } from "topology-core/models/line";
// import CanvasProps from 'CanvasProps'

console.log(Tools);
// console.dir(IconSvg);

export default {
  data() {
    return {
      numberVal: 0,
      showBoxProp: false,
      propFlag: "",
      svgIcon: svgIcons,
      tools: Tools,
      canvas: {},
      canvasOptions: {
        rotateCursor: "/img/rotate.cur",
        color: "#00a888",
        activeColor: "#0b947d",
        dragColor: "#aabbcc",
        font: {
          color: "#aabbcc",
          fontSize: 12,
          lineHeight: 1,
          textAlign: "center",
          textBaseline: "middle"
        },
        on: function(event, data) {
          console.log("***  on ** ", event, data);
        }
      },
      // 形状属性
      nodeProps: {
        rect: {
          width: 20,
          height: 20
        },
        borderRadius: 5,
        fillStyle: "#0088a8",
        strokeStyle: "",
        lineWidth: 1,
        animateType: "",
        animateFrames: "",
        animateDuration: 3,
        font: {
          color: "",
          fontSize: ""
        }
      },
      // 连接线属性
      lineProps: {
        name: 1,
        fromArrow: 1,
        toArrow: 1,
        lineWidth: 1,
        strokeStyle: "#00a888",
        borderWidth: 0,
        borderColor: "",
        animateColor: "#0088a8",
        animateCycle: 1,
        animateCycleIndex: 0,
        animateDotSize: 3,
        animateFromSize: 0,
        animatePlay: true,
        animatePos: 0,
        animateSpan: 3,
        animateStart: 0,
        animateToSize: 0,
        animateDuration: 3,
        animateType: "dot",
        isAnimate: true
      },
      animateStartVal: Date.now(),
      props: {
        node: null,
        line: null,
        nodes: null,
        multi: false,
        locked: false
      },
      contextmenu: {
        left: null,
        top: null,
        bottom: null
      }
    };
  },
  components: {
    // CanvasProps
  },
  computed: {
    // event() {
    //   return this.$store.state.event.event;
    // }
  },
  watch: {
    event(curVal) {
      if (this["handle_" + curVal.name]) {
        this["handle_" + curVal.name](curVal.data);
      }
    },
    $route(val) {
      this.open();
    }
  },
  created() {
    canvasRegister();
    if (process.client) {
      document.onclick = event => {
        this.contextmenu = {
          left: null,
          top: null,
          bottom: null
        };
      };
    }
  },
  mounted() {
    this.canvasOptions.on = this.onMessage;
    this.canvas = new Topology("topo-canvas", this.canvasOptions);

    // 渲染外部json
    // this.canvas.open(AnimateJson);
    this.canvas.open(FlowJson);
    this.canvas.render();
  },
  methods: {
    async open() {
      if (!this.$route.query.id) {
        return;
      }
      const data = await this.$axios.$get(
        "/api/topology/" + this.$route.query.id
      );
      if (data && data.id) {
        this.canvas.open(data.data);
      }
    },
    onDrag(event, node) {
      event.dataTransfer.setData("Text", JSON.stringify(node.data));
    },
    changeAnimateStart(val) {
      this.lineProps.animateStart = val ? Date.now() : 0;
      this.canvas.animate();
    },
    onMessage(event, data, node) {
      // console.log("onMessage事件");
      switch (event) {
        case "node":
          console.log("***********");
          console.log("data =>  ", data);
          this.propFlag = "box";
          this.nodeProps = data;
          break;
        case "addNode":
          this.props = {
            node: data,
            line: null,
            multi: false,
            nodes: null,
            locked: data.locked
          };
          break;
        case "line":
          console.log("line **  ", data, event);
          this.propFlag = "line";
          this.props = {
            node: data,
            line: null,
            multi: false,
            nodes: null,
            locked: data.locked
          };

          // data.isAnimate = true;
          // data.animateFromSize = 0;
          // data.animateToSize = 50;
          // data.animateDotSize = 5;//dot移动点的大小
          // data.animateCycleIndex = 0;
          // data.animateColor = "#0088a8";
          // data.animateSpan = 5;//滑块移动速度
          // data.animatePos = 1;
          // data.animateStart = Date.now();
          // data.animateType = "comet";//dot-圆点  comet-彗星    beads-水珠动画   默认-水流动画
          // this.canvas.AnimateLayer.animate();
          console.log("line --after **  ", data);
          this.lineProps = data;
          break;
        case "addLine":
          this.props = {
            node: null,
            line: data,
            multi: false,
            nodes: null,
            locked: data.locked
          };
          break;
        case "multi":
          this.props = {
            node: null,
            line: null,
            multi: true,
            nodes: data.nodes.length > 1 ? data.nodes : null,
            locked: this.getLocked(data)
          };
          break;
        case "space":
          this.props = {
            node: null,
            line: null,
            multi: false,
            nodes: null,
            locked: false
          };
          this.propFlag = "";
          break;
        case "moveOut":
          break;
        case "moveNodes":
        case "resizeNodes":
          if (data.length > 1) {
            this.props = {
              node: null,
              line: null,
              multi: true,
              nodes: data,
              locked: this.getLocked({ nodes: data })
            };
          } else {
            this.props = {
              node: data[0],
              line: null,
              multi: false,
              nodes: null,
              locked: false
            };
          }
          break;
        case "resize":
        case "scale":
        case "locked":
        // if (this.canvas && this.canvas.data) {
        //   this.$store.commit("canvas/data", {
        //     scale: this.canvas.data.scale || 1,
        //     lineName: this.canvas.data.lineName,
        //     fromArrowType: this.canvas.data.fromArrowType,
        //     toArrowType: this.canvas.data.toArrowType,
        //     fromArrowlockedType: this.canvas.data.locked
        //   });
        // }
        // break;
      }
    },
    //确认 修改line属性
    updateLineClick() {
      this.nodeProps.isAnimate = true;
      this.onUpdateProps();
    },
    // 确认修改node属性
    updateNodeClick() {
      this.onUpdateProps(this.nodeProps);
    },
    getLocked(data) {
      let locked = true;
      if (data.nodes && data.nodes.length) {
        for (const item of data.nodes) {
          if (!item.locked) {
            locked = false;
            break;
          }
        }
      }
      if (locked && data.lines) {
        for (const item of data.lines) {
          if (!item.locked) {
            locked = false;
            break;
          }
        }
      }

      return locked;
    },
    onUpdateProps(node) {
      // 如果是node属性改变，需要传入node，重新计算node相关属性值
      // 如果是line属性改变，无需传参
      this.canvas.updateProps(node);
    },
    handle_new(data) {
      this.canvas.open({ nodes: [], lines: [] });
    },
    handle_open(data) {
      this.handle_replace(data);
    },
    handle_replace(data) {
      const input = document.createElement("input");
      input.type = "file";
      input.onchange = event => {
        const elem = event.srcElement || event.target;
        if (elem.files && elem.files[0]) {
          // const name = elem.files[0].name.replace(".json", "");
          const reader = new FileReader();
          reader.onload = e => {
            const text = e.target.result + "";
            try {
              const data = JSON.parse(text);
              if (
                data &&
                Array.isArray(data.nodes) &&
                Array.isArray(data.lines)
              ) {
                this.canvas.open(data);
              }
            } catch (e) {
              return false;
            }
          };
          reader.readAsText(elem.files[0]);
        }
      };
      input.click();
    },
    handle_save(data) {
      FileSaver.saveAs(
        new Blob([JSON.stringify(this.canvas.data)], {
          type: "text/plain;charset=utf-8"
        }),
        `le5le.topology.json`
      );
    },
    handle_savePng(data) {
      this.canvas.saveAsImage("le5le.topology.png");
    },
    handle_saveSvg(data) {
      const ctx = new C2S(
        this.canvas.canvas.width + 200,
        this.canvas.canvas.height + 200
      );
      for (const item of this.canvas.data.nodes) {
        item.render(ctx);
      }

      for (const item of this.canvas.data.lines) {
        item.render(ctx);
      }

      let mySerializedSVG = ctx.getSerializedSvg();
      mySerializedSVG = mySerializedSVG.replace(
        "<defs/>",
        `<defs>
          <style type="text/css">
            @font-face {
              font-family: 'topology';
              src: url('http://at.alicdn.com/t/font_1331132_h688rvffmbc.ttf?t=1569311680797') format('truetype');
            }
          </style>
        </defs>`
      );

      mySerializedSVG = mySerializedSVG.replace(/--le5le--/g, "&#x");

      const urlObject = window.URL || window;
      const export_blob = new Blob([mySerializedSVG]);
      const url = urlObject.createObjectURL(export_blob);

      const a = document.createElement("a");
      a.setAttribute("download", "le5le.topology.svg");
      a.setAttribute("href", url);
      const evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, true);
      a.dispatchEvent(evt);
    },
    handle_undo(data) {
      this.canvas.undo();
    },
    handle_redo(data) {
      this.canvas.redo();
    },
    handle_copy(data) {
      this.canvas.copy();
    },
    handle_cut(data) {
      this.canvas.cut();
    },
    handle_parse(data) {
      this.canvas.parse();
    },
    handle_state(data) {
      this.canvas.data[data.key] = data.value;
      this.$store.commit("canvas/data", {
        scale: this.canvas.data.scale || 1,
        lineName: this.canvas.data.lineName,
        fromArrowType: this.canvas.data.fromArrowType,
        toArrowType: this.canvas.data.toArrowType,
        fromArrowlockedType: this.canvas.data.locked
      });
    },
    onContextMenu(event) {
      event.preventDefault();
      event.stopPropagation();

      if (event.clientY + 360 < document.body.clientHeight) {
        this.contextmenu = {
          left: event.clientX + "px",
          top: event.clientY + "px"
        };
      } else {
        this.contextmenu = {
          left: event.clientX + "px",
          bottom: document.body.clientHeight - event.clientY + "px"
        };
      }
    },
    onTop() {
      if (this.props.node) {
        this.canvas.top(this.props.node);
      }

      if (this.props.nodes) {
        for (const item of this.props.nodes) {
          this.canvas.top(item);
        }
      }

      this.canvas.render();
    },
    onBottom() {
      if (this.props.node) {
        this.canvas.bottom(this.props.node);
      }

      if (this.props.nodes) {
        for (const item of this.props.nodes) {
          this.canvas.bottom(item);
        }
      }

      this.canvas.render();
    },
    onCombine(stand) {
      if (!this.props.nodes) {
        return;
      }
      this.canvas.combine(this.props.nodes, stand);
      this.canvas.render();
    },
    onUncombine() {
      if (!this.props.node) {
        return;
      }
      this.canvas.uncombine(this.props.node);
      this.canvas.render();
    },
    onLock() {
      this.props.locked = !this.props.locked;
      if (this.props.node) {
        this.props.node.locked = this.props.locked;
      }
      if (this.props.nodes) {
        for (const item of this.props.nodes) {
          item.locked = this.props.locked;
        }
      }
      if (this.props.lines) {
        for (const item of this.props.lines) {
          item.locked = this.props.locked;
        }
      }
      this.canvas.render(true);
    },
    onDel() {
      this.canvas.delete();
    }
  }
};
</script>

<style scoped>
.topology-box {
  display: flex;
  height: 100vh;
}
.tools {
  width: 200px;
  overflow: hidden;
  overflow-y: auto;
  background-color: #fafafa;
}
.tools .title {
  margin-top: 10px;
  text-indent: 10px;
  color: #086466;
}
.tools .buttons {
  border-bottom: 1px solid #abc;
  padding: 15px 0;
}
.tools .buttons > a {
  display: inline-block;
  padding: 5px;
  font-size: 2em;
  cursor: move;
}
.canvas {
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background-color: #f8f8ef;
}
.props {
  width: 200px;
  background-color: #fafafa;
}
.props-col {
  padding: 15px;
}
.props-col .item {
  margin: 15px 0;
  /* border-top: 1px solid #dedede; */
}
.props-col .item .txt {
  display: inline-block;
  width: 6em;
  font-size: 13px;
  color: #043c3d;
}
.props-col .item input {
  width: 46px;
}
ul,
li {
  list-style: none;
}
</style>

<style>
.menus {
  color: #000;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  min-width: 1.8rem;
  text-align: left;
  padding: 0.08rem 0;
}
.menus > div {
  line-height: 2.2;
}
.menus > div a {
  color: #314659;
  display: block;
  padding: 0 0.2rem;
  text-decoration: none;
  cursor: pointer;
}
.menus > div a:hover {
  color: #1890ff;
}
.menus > div a.flex {
  display: flex;
}
.menus > div a.disabled {
  color: #cccccc;
  cursor: default;
}
.menus .line {
  background-color: transparent !important;
  padding: 0;
  margin: 0.05rem 0;
  border-top: 1px solid #eee;
}
.svg-box {
  display: inline-block;
  width: 32px;
  height: 32px;
  color: #00a888;
  margin:10px;
}
.svg-box .icon-svg {
  width: 32px;
  height: 32px;
}

</style>
