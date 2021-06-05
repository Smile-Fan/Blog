<template>
  <div id="app">
    <fullPage />
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import fullPage from "@/components/fullPage/index.vue";
import canvas from "@/util/canvas.js";
export default {
  name: "App",
  components: {
    fullPage,
  },
  mounted() {
    canvas();
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
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  #canvas {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
}
</style>