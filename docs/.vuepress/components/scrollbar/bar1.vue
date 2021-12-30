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
            keepShow: true,
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
