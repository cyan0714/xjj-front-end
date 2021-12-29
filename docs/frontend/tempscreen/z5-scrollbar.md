---
title: 滚动条
sidebarDepth: 2
---

## 滚动条

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
    overflow: auto;
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