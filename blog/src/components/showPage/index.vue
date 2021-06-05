<template>
  <div class="showPage-container">
    <el-row>
      <el-col :md="4" class="left hidden-sm-and-down">
        <menuList @themeColorChange="themeColorChange" />
      </el-col>
      <el-col :md="16" class="mid">
        <articleList />
        <articleList />
        <articleList />
        <articleList />
      </el-col>
      <el-col :md="4" class="right hidden-sm-and-down">
        <groupList />
      </el-col>
      <el-col class="hidden-md-and-up menu">
        <i class="el-icon-s-operation" @click="drawer = true"></i>
      </el-col>
      <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        size="360px"
        class="drawer"
      >
        <menuList />
      </el-drawer>
    </el-row>
  </div>
</template>

<script>
import { themeColor } from "@/util/themeColor.js";
import "element-ui/lib/theme-chalk/display.css";
import menuList from "@/components/menuList/index.vue";
import articleList from "@/components/articleList/index.vue";
import groupList from "@/components/groupList/index.vue";
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
    };
  },
  components: {
    menuList,
    articleList,
    groupList,
  },
  methods: {
    themeColorChange(value) {
      themeColor(value);
    },
  },
};
</script>

<style lang="less" scoped>
.showPage-container {
  z-index: 3;
  .left {
    margin-top: 100px;
  }
  .mid {
    margin-top: 100px;
  }
  .right {
    margin-top: 100px;
  }
}
</style>