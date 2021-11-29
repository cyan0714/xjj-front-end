<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script>
  import BaseEchart from '../base-echart.vue';
  export default {
    data() {
      return {};
    },
    components: {
      BaseEchart,
    },
    props: {
      // 图表要展示的数据
      pieData: {
        type: Array,
        default: () => [],
      },
      // 图表的配置信息
      objV: {
        type: Object,
        default: () => {},
      },
    },
    computed: {
      options() {
        return {
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
          },
          legend: {
            left: this.objV.legend.left || 'center',
            textStyle: {
              color: this.objV.legend.textStyle.color || '#fff',
            },
          },
          series: [
            {
              name: '',
              type: this.objV.series[0].type || 'pie',
              radius: this.objV.series[0].radius || ['25%', '65%'],
              center: this.objV.series[0].center || ['50%', '50%'],
              roseType: this.objV.series[0].roseType || '',
              data: this.pieData,
              label: {
                show: this.objV.series[0].label.show || true,
              },
              labelLine: {
                show: this.objV.series[0].labelLine.show || false,
              },
            },
          ],
        };
      },
    },
  };
</script>

<style scoped></style>
