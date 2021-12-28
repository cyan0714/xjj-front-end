<template>
  <el-carousel height="200px" direction="vertical">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
  ::v-deep .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    text-align: center;
    margin: 0;
  }

  ::v-deep .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  ::v-deep .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
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
