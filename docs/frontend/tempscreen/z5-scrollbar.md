---
title: 滚动条
sidebarDepth: 2
---

## 滚动条

当页面内容的宽高大于页面可视区域宽高时，会在水平和垂直方向出现默认滚动条，可通过以下两种方式进行修改或配置。

### 1. 自定义滚动条样式

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

### 2. 使用 vuescroll
使用自定义滚动条时往往兼容性不够好，这时可以使用一个滚动条插件：vuescroll。

**安装**

```sh
npm install vuescroll

yarn add vuescroll
```
**引入**

**1.全局引入**
```js
import Vue from 'vue';
import vuescroll from 'vuescroll';

// 你可以在这里设置全局配置
Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});

/*
 * 或者
 */

Vue.use(vuescroll); // install the vuescroll first
Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#000'
  }
};
```

**2.局部引入**
```vue
<template>
  <vuescroll> <!-- 你的内容... --> </vuescroll>
</template>
<script>
  import vuescroll from 'vuescroll';

  export default {
    components: {
      vuescroll
    }
  };
</script>
```


**示例**

<scrollbar-bar1 />

::: warning 用前须知
把 vuescroll 放在parent-dom里面，child-dom外面即可。如果你看不到滚动条， 请打检查你的子元素尺寸是否超过了你的父元素尺寸。 出现滚动条的条件与原生滚动条的相同， 即： 子元素的尺寸超出了父元素。
:::

```vue
<template>
  <div class="parent-dom">
    <vuescroll :ops="ops">
      <div class="child-dom">vuescrollvuescrollvuescrollvuescrollvuescrollvuescrollvuescroll</div>
    </vuescroll>
  </div>
</template>
<script>
  import vuescroll from 'vuescroll';

  export default {
    components: {
      vuescroll,
    },
    data() {
      return {
        ops: {
          scrollPanel: {
            // 是否启用 x 或者 y 方向上的滚动
            scrollingX: true,
            scrollingY: true,
          },
          rail: {
            // 轨道的背景色。
            background: '#00136d',
            // 轨道的透明度。
            opacity: 1,
            // 轨道的尺寸。
            size: '16px',
            // 是否指定轨道的 borderRadius， 如果不那么将会自动设置。
            specifyBorderRadius: '6px',
            // 轨道距 x 和 y 轴两端的距离。
            gutterOfEnds: '6px',
            // 距离容器的水平和垂直距离。
            gutterOfSide: '6px',
            // 是否即使 bar 不存在的情况下也保持显示。
            keepShow: false,
          },
          bar: {
            // 是否只在滚动时显示 bar
            onlyShowBarOnScroll: false,
            // 滚动条是否保持显示。
            keepShow: false,
            // 滚动条背景色。
            background: '#2f6bf6',
            // 滚动条透明度。
            opacity: 1,
            // 是否指定滚动条的 borderRadius， 如果不那么和轨道的保持一致。
            specifyBorderRadius: false,
            // 为 bar 设置一个最小尺寸, 从 0 到 1. 如 0.3, 代表 30%。
            minSize: 0.3,
            size: '10px',
            // 是否禁用滚动条。
            disable: false,
          },
          scrollButton: {
            // 是否启用 scrollButton.
            enable: false,
            background: 'red',
            opacity: 1,
            // 每次当你点击 scrollButton 所滚动的距离。
            step: 180,
            // 每次当你按住 scrollButton 所滚动的距离。
            mousedownStep: 30,
          },
        },
      };
    },
  };
</script>
<style scoped lang="scss">
  .parent-dom {
    height: 300px;
    width: 100%;
    background-color: #ccc;
  }
  .child-dom {
    height: 1400px;
    width: 200%;
  }
</style>
```
更多用法，请移步至[vuescroll官网](https://vuescrolljs.yvescoding.org)