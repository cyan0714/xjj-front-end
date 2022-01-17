<template>
  <div class="parent-dom" :style="{ width:parentWidth,height:parentHeight }">
    <vuescroll :ops="ops">
      <slot name="scrollbar"  >
      </slot>
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
      childWidth:{
        type:String,
        default:'200%'
      },
      childHeight:{
        type:String,
        default:'1000px'
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
<style scoped lang="scss">
  .parent-dom {
    background-color:	#ccc;
  }
</style>
