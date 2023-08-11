<template>
  <div ref="echartRef" class="chart-container"></div>
</template>

<script>
  import * as echarts from './echarts.min.js';
  export default {
    name: "chart",
    data() {
      return {}
    },
    methods: {
      initChart() {
        const chart = echarts.init(this.$refs.echartRef);
        // y x content
        const data = [
          [0, 0, 1],
          [5, 7, 2],
          [3, 4, 3],
          [2, 2, 3],
          [3, 6, 3],
          [6, 2, 10],
          [1, 4, 1],
          [7, 6, 1],
          [7, 5, 2],
          [3, 1, 2],
          [3, 8, 2],
          [4, 9, 2],
          [2, 9, 2],
        ].map((item) => [item[1], item[0], item[2]] || "-");
        const option = {
          grid: {
            show: false,
            top: 20,
            left: 10,
            right: 10,
            bottom: 10,
            containLabel: true,
            borderColor: "#000",
          },
          xAxis: {
            type: "category",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              },
            },
            data: [
              "B737",
              "B787",
              "A319",
              "A320",
              "A330",
              "A350",
              "E190",
              "E145",
              "A321",
              "B767",
            ],
          },
          yAxis: {
            type: "category",
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
              },
            },
            data: ["FU", "UQ", "GS", "8L", "JD", "CN", "HU"],
          },
          visualMap: {
            show: false,
            inRange: {
              color: "#506eda",
            },
          },
          series: [
            {
              type: "heatmap",
              label: {
                show: true,
                color: "#fff",
              },
              data,
            },
          ],
        };
        chart.setOption(option);
      },
    },
    mounted() {
      this.initChart();
    }
  }
</script>
<style lang="scss" scoped>
  .chart-container {
    width: 100%;
    height: 326px;
  }
</style>

