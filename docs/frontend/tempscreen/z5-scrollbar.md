---
title: 滚动条
sidebarDepth: 2
---

## 滚动条

当页面内容的宽高大于页面可视区域宽高时，会在水平和垂直方向出现默认滚动条，可通过以下两种方式进行修改或配置。(建议使用第2种，兼容性比较好)

### 1. 自定义滚动条样式

::: demo 以`webkit`为前缀的支持谷歌，Safari，edge，360 安全和 360 极速浏览器的极速模式，不支持火狐，IE，opera。其中，要想修改火狐的滚动条默认样式，可以通过`scrollbar-width`和`scrollbar-color`来修改。上面展示的是局部滚动条样式修改，如果想作用于整个浏览器，则可以放在根元素中。
```vue
<template>
  <div class="scroll-wrapper">
    <div class="scroll-bar">
      自定义滚动条样式自定义滚动条样式自定义滚动条样式
    </div>
  </div>
</template>
<style>
  .scroll-wrapper {
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
  .scroll-wrapper::-webkit-scrollbar {
    /* 定义 y 轴方向滚动条厚度 */
    width: 12px;
    /* 定义 x 轴方向滚动条厚度 */
    height: 12px;
  }
  .scroll-wrapper::-webkit-scrollbar-thumb {
    /* 控制滚动条滑轨样式 */
    border-radius: 8px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #316fff;
  }
  .scroll-wrapper::-webkit-scrollbar-track {
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

Vue.use(vuescroll, {
  ops: {}, // 在这里设置全局默认配置
  name: 'myScroll' // 在这里自定义组件名字，默认是vueScroll
});
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

<scrollbar-bar1>
  <template v-slot:scrollbar>
    <div class="child-dom" style='height:1400px;width:200%'>
      vuescrollvuescrollvuescrollvuescrollvuescrollvuescroll
    </div>
  </template>
</scrollbar-bar1>



使用步骤：
1. 注册。将以下代码复制到你项目的`components`文件夹下的一个`.vue`文件中，文件名自取，如`MyScrollbar.vue`。

```vue
<template>
  <div class="parent-dom" :style="{ width:parentWidth,height:parentHeight }">
    <vuescroll :ops="ops">
      <slot name="scrollbar"></slot>
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
            background: this.railBackground,
            size: this.railSize,
            opacity: 1,
          },
          bar: {
            // 滚动条背景色。
            background: this.barBackground,
            size: this.barSize,
            keepShow: true,
          },
        },
      };
    },
    props: {
      parentWidth:{
        type:String,
        default:'100%'
      },
      parentHeight:{
        type:String,
        default:'300px'
      },
      railBackground:{
        type:String,
        default:'#00136d'
      },
      railSize:{
        type:String,
        default:'12px'
      },
      barBackground:{
        type:String,
        default:'#2f6bf6'
      },
      barSize:{
        type:String,
        default:'12px'
      }
    }
  };
</script>
```

::: warning 注意
把 vuescroll 放在parent-dom里面、child-dom外面即可。如果你看不到滚动条， 请检查你的子元素尺寸是否超过了你的父元素尺寸。 出现滚动条的条件与原生滚动条的相同， 即： 子元素的尺寸超出了父元素。
:::

2. 使用。在需要使用的地方引入该组件即可。

```vue
<my-scrollbar barBackground='pink'> 
  <template v-slot:scrollbar>
    <div class="child-dom" style='height:1400px;width:200%'>
      这里放需要滚动的内容
    </div>
  </template>
</my-scrollbar>
```
效果如下：

<scrollbar-bar1 barBackground='pink'>
  <template v-slot:scrollbar>
    <div class="child-dom" style='height:1400px;width:200%'>
      <div>这里放需要滚动的内容</div>
    </div>
  </template>
</scrollbar-bar1>

除了可以修改滚动条背景颜色(上面例子将滚动条的背景颜色改成了粉色)，也可以修改其他属性，只需要在 `my-scrollbar` 标签中传入对应的 props 就可以了。

::: warning 注意
重申一遍：应该给子元素一个高度和一个宽度，且这个高度和宽度要大于父元素，这样才能显示出滚动条。  
但是在实际开发中，我们可能希望让内容来决定容器的高度，这时你可以不给子元素定义宽高，让内容来决定子元素的高度，如果内容超出了父元素的高度则显示滚动条，不超出则不显示。
:::

更多用法，请移步至[vuescroll官网](https://vuescrolljs.yvescoding.org)