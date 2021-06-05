<template>
  <div class="menuList-container">
    <el-row class="menu-list">
      <el-col :span="24">
        <el-avatar
          :src="require('@/assets/Avatar.png')"
          :size="120"
        ></el-avatar>
      </el-col>
      <el-col :span="24">
        <span>主题切换：</span>
        <el-switch
          v-model="value"
          :active-icon-class="moon"
          :inactive-icon-class="sun"
          @change="handleClick"
        >
        </el-switch>
      </el-col>
      <el-col>
        <el-row class="router-text">
          <el-col :span="24" class="list router-home">
            <span>首页</span>
          </el-col>
          <el-col :span="24" class="list router-technology">
            <span>技术笔记</span>
          </el-col>
          <el-col :span="24" class="list router-trap">
            <span>踩坑日志</span>
          </el-col>
          <el-col :span="24" class="list router-essay">
            <span>随笔杂谈</span>
          </el-col>
          <el-col :span="24" class="list router-about">
            <span>关于我</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <div class="contact">
          <span class="iconfont">&#xe619;</span
          ><span class="iconfont">&#xea0a;</span
          ><span class="iconfont">&#xe763;</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      sun: "el-icon-sunny",
      moon: "el-icon-moon",
    };
  },
  methods: {
    handleClick() {
      this.$emit("themeColorChange", this.value);
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 2594120 */
  src: url("//at.alicdn.com/t/font_2594120_icp7ei5806j.woff2?t=1622882331273")
      format("woff2"),
    url("//at.alicdn.com/t/font_2594120_icp7ei5806j.woff?t=1622882331273")
      format("woff"),
    url("//at.alicdn.com/t/font_2594120_icp7ei5806j.ttf?t=1622882331273")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 28px;
  margin: 0 15px;
}
.menuList-container {
}
.menu {
  position: absolute;
  left: 0;
  top: -20px;
  width: 65px;
  height: 25px;
  cursor: pointer;
  line-height: 25px;
  text-align: center;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.5);
}
.switch {
  font-size: 25px;
}
.menu-list {
  margin-top: 100px;
  el-col {
    margin: 10px 5px;
  }
  .router-text {
    margin-top: 30px;
    .list {
      font-size: 18px;
      padding: 15px 10px;
    }
  }
  .contact {
    margin-top: 50px;
  }
}
</style>