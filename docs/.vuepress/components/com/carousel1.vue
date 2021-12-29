<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
  export default {};
</script>
<style scoped lang="scss">
  ::v-deep .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 300px;
      margin: 0;
      text-align: center;
    }
    &:nth-child(2n){
      background-color: #99a9bf;
    }
    &:nth-child(2n + 1) {
    background-color: #d3dce6;
    }
  }
  ::v-deep .el-carousel__arrow {
    background-color: rgba(0, 0, 0, 0);
    .el-icon-arrow-right,
    .el-icon-arrow-left {
      font-size: 50px;
      color: #007aff;
    }
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
</style>
