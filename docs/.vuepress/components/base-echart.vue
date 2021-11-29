<template>
  <div class="base-echart">
    <!-- echarts 必须要设置宽高，不然不能使用 -->
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
  import useEchart from '../hooks/useEcharts';
  export default {
    data() {
      return {
        setOptions: '',
      };
    },
    props: {
      options: {
        type: Object,
        default: () => {},
      },
      width: {
        type: String,
        default: '100%',
      },
      height: {
        type: String,
        default: '360px',
      },
    },
    mounted() {
      const { setOptions } = useEchart(this.$refs.echartDivRef);
      this.setOptions = setOptions;
      // 使用 Vue 实例方法 watch，监听 props 中 options 的变化，可以深度监听，一旦其中一个属性改变，页面也会跟着刷新
      this.$watch(
        'options',
        function (val) {
          this.setOptions(val);
        },
        {
          deep: true,
          immediate: true,
        }
      );
    },
  };
</script>
<style scoped></style>
