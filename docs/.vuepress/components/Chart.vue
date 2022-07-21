<template>
  <div id="chart">
    <div ref="echartRef" class="chart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts/dist/echarts.js';
  export default {
    data() {
      return {
        chart: null,
      };
    },
    props: {
      options: {
        type: Object,
        default: () => {},
      },
    },
    mounted() {
      const chart = echarts.init(this.$refs.echartRef, 'dark');
      this.chart = chart;
      this.chart.setOption(this.options);
    },
    watch: {
      options: {
        handler: function(newOption) {
          console.log(this);
          this.chart.setOption(newOption);
        },
        deep: true,
      },
    },
  };
</script>
<style scoped>
  .chart {
    width: 100%;
    height: 400px;
  }
</style>
