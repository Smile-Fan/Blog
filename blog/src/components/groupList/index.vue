<template>
  <div class="groupList-container">
    <div class="newArticle groupList">
      <p>最新文章</p>
      <el-row class="list">
        <el-col class="list-li">第一个文章</el-col>
        <el-col class="list-li">第二个文章</el-col>
        <el-col class="list-li">第三个文章</el-col>
        <el-col class="list-li">第四个文章</el-col>
      </el-row>
    </div>
    <div class="newCommont groupList">
      <p>最新评论</p>
      <el-row class="list">
        <el-col class="list-li">第一个评论</el-col>
        <el-col class="list-li">第二个评论</el-col>
        <el-col class="list-li">第三个评论</el-col>
        <el-col class="list-li">第四个评论</el-col>
      </el-row>
    </div>
    <div class="classify groupList">
      <p>分类</p>
      <el-row class="list">
        <el-col class="list-li">第一个分类</el-col>
        <el-col class="list-li">第二个分类</el-col>
        <el-col class="list-li">第三个分类</el-col>
        <el-col class="list-li">第四个分类</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.groupList-container {
  .groupList {
    border: 1px solid #ccc;
    height: 300px;
    margin: 15px 0;
    border-radius: 10px;
    .list {
      padding: 20px 10px;
      .list-li {
        margin: 10px 0;
      }
    }
  }
}
</style>