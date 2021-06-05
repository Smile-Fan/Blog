<template>
  <div id="app">
    <fullPage />
    <showPage />
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import fullPage from "@/components/fullPage/index.vue";
import showPage from "@/components/showPage/index.vue";
import canvas from "@/util/canvas.js";
export default {
  name: "App",
  components: {
    fullPage,
    showPage,
  },
  mounted() {
    //先关闭，影响性能
    canvas();
    //尺寸改变重新绘制
    window.onresize = () => {
      canvas();
    };
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  transition: background 0.5s;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  // width: 100%;
  // height: 100%;
  #canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>