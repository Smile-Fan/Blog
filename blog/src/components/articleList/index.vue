<template>
  <div class="articleList-container">
    <el-row>
      <el-col :sm="6" :xs="0">
        <div class="leftImg">
          <el-image
            style="width: 100%; height: 100%"
            :style="url"
            :fit="cover"
          ></el-image>
        </div>
      </el-col>
      <el-col :sm="18">
        <div class="rightContent">
          <div class="title">
            <h3>这是一个标题</h3>
            <span class="time message">时间：2021年6月5号</span>
            <span class="pageView message">浏览量：21113</span>
            <span class="comment message">评论：35</span>
            <el-divider class="hr"></el-divider>
          </div>
          <div class="description">
            这是一个描述，这是一个描述，这是一个描述，这是一个描述，这是一个描述，这是一个描述这是一个描述这是一个描述
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="less" scoped>
.articleList-container {
  border-radius: 10px;
  margin: 15px 10px;
  overflow: hidden;
  display: flex;
  height: 200px;
  border: 1px solid #ccc;
  .leftImg {
    width: 100%;
    height: 21vh;
    min-width: 232px;
  }
  .rightContent {
    flex-grow: 1;
    padding: 0 20px 15px 20px;
    .message {
      margin: 0 30px;
    }
    .description {
      text-align: start;
    }
  }
  .hr {
    margin: 10px;
  }
}
</style>