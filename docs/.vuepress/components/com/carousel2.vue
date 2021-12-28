<template>
  <el-carousel :interval="3000">
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
  }
  ::v-deep .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  ::v-deep .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  ::v-deep .el-carousel__indicators {
    // 指示器
    left: unset;
    transform: translateX(-50%);
    left: 50%;
  }
  ::v-deep .el-carousel__button {
    // 指示器按钮
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  ::v-deep .is-active .el-carousel__button {
    // 指示器激活按钮
    background: #3f8ec8;
  }
  ::v-deep .el-carousel__arrow {
    background-color: rgba(0, 0, 0, 0);
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  ::v-deep .el-icon-arrow-right,
  ::v-deep .el-icon-arrow-left {
    font-size: 50px;
    color: #007aff;
  }
</style>
