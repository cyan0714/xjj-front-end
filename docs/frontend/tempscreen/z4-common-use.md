---
title: 常用组件
sidebarDepth: 2
---

### 附件

大屏组件中要展示附件时，可直接拿来使用。

::: demo

```vue
<template>
  <div class="attachment">
    <div class="content">
      <img :src="pdfIcon" alt="" />
      <div class="detail">
        <span>关于5月份市督办任务落实情况汇总表.pdf</span>
        <div>
          <span>0.23M</span>
          <span>查看&nbsp; | &nbsp;下载</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pdfIcon: require('../../.vuepress/public/assets/img/common/icon_file.png'),
      };
    },
  };
</script>
<style>
  .content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 300px;
    padding: 10px 16px;
    background: url('../../.vuepress/public/assets/img/common/icon_bg.png') no-repeat;
    background-size: contain;
  }
  .content img {
    width: 32px;
    height: 40px;
    flex-shrink: 0;
  }
  .detail {
    margin-left: 20px;
    font-size: 14px;
    color: #fff;
  }
  .content .detail div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .attachment .detail div span:nth-child(2) {
    color: #15c2f4;
  }
</style>
```

:::

### 滚动条

当页面内容的宽高大于页面可视区域宽高时，会在水平和垂直方向出现默认滚动条，可通过以下方式进行修改。

::: demo 以`webkit`为前缀的支持谷歌，Safari，edge，360 安全和 360 极速浏览器的极速模式，不支持火狐，IE，opera。其中，要想修改火狐的滚动条默认样式，可以通过`scrollbar-width`和`scrollbar-color`来修改。上面展示的是局部滚动条样式修改，如果想作用于整个浏览器，则可以放在根元素中。

```vue
<template>
  <div class="container">
    <div class="scroll-bar">
      自定义滚动条样式自定义滚动条样式自定义滚动条样式
    </div>
  </div>
</template>
<style>
  .container {
    width: 100%;
    height: 300px;
    overflow: scroll;
    /* 下面两个属性在 firefox 中生效 */
    /* thin，auto，none*/
    scrollbar-width: thin;
    /* 第一个值为滑轨颜色，第二个为轨道颜色 */
    scrollbar-color: #316fff #00136f;
  }
  .scroll-bar {
    height: 200%;
    width: 200%;
    background-color: #ccc;
  }
  .container::-webkit-scrollbar {
    /* 定义 y 轴方向滚动条厚度 */
    width: 12px;
    /* 定义 x 轴方向滚动条厚度 */
    height: 12px;
  }
  .container::-webkit-scrollbar-thumb {
    /* 控制滚动条滑轨样式 */
    border-radius: 8px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #316fff;
  }
  .container::-webkit-scrollbar-track {
    /* 控制滚动条轨道样式 */
    /* border-radius: 8px; */
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #00136f;
  }
</style>
```

:::

### 轮播图

在有限空间内，循环播放同一类型的图片、文字等内容。

::: demo `arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标`hover`到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。

```vue
<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-carousel__arrow {
    background-color: rgba(0, 0, 0, 0);
  }
  .el-carousel__arrow:hover {
    background-color: rgba(0, 0, 0, 0);
  }
  .el-icon-arrow-right,
  .el-icon-arrow-left {
    font-size: 50px;
    color: #007aff;
  }
</style>
```

:::
