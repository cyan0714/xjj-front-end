<template>
  <div>
    <pie-echart :pieData="overView" :objV="obj1"></pie-echart>
    <!--大屏页面下肯定不只有一个饼图，还会有其他图表，如有需要，你可以在这里添加其他图表组件 -->
  </div>
</template>

<script>
  // 这里引入图表配置（若不传，则使用默认的配置）
  import obj from './config/pie0-config';
  // 这里引入图表组件
  import PieEchart from '../../base-ui/common/pie-echart.vue';

  export default {
    data() {
      return {
        obj1: obj,
      };
    },
    components: {
      PieEchart,
    },
    created() {
      // 这里发送网络请求
    },
    computed: {
      overView() {
        return '这里传入后端返回的数据';
      },
    },
  };
</script>

<style scoped></style>
