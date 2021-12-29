---
title: 基于Element的轮播图
---

## 轮播图

### 1. 基础轮播图
<br>
<com-carousel1 />

`arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标`hover`到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。

```vue
<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

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
```

### 2. 修改指示器样式
<br>
<com-carousel2 />

```vue
<template>
  <el-carousel :interval="3000">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

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
    &:nth-child(2n) {
      background-color: #99a9bf;
    }
    &::nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  ::v-deep .el-carousel__indicators {
    /* 指示器 */
    left: unset;
    transform: translateX(-50%);
    left: 50%;
    .el-carousel__button {
      /* 指示器按钮 */
      width: 10px;
      height: 10px;
      border: none;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
    }
    .is-active .el-carousel__button {
      /* 指示器激活按钮 */
      background: #3f8ec8;
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
```

### 3. 卡片化
<br>
<com-carousel3 />

```vue
<template>
  <el-carousel :interval="4000" type="card" height="200px" arrow="always">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
  ::v-deep .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 200px;
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
```

### 4. 设置指示器以及轮播方向
<br>
<com-carousel4 />

```vue
<template>
  <el-carousel height="200px" direction="vertical" :autoplay="false">
    <el-carousel-item v-for="item in 3" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
  ::v-deep .el-carousel__item {
    h3 {
      color: #475669;
      font-size: 18px;
      opacity: 0.75;
      line-height: 200px;
      margin: 0;
      text-align: center;
    }
    &:nth-child(2n) {
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
```