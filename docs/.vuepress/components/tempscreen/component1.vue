<template>
  <div class="chart-container" :style="{'--var-mainColor': mainColor}">
    <div class="box">
      <p class="tip">窄</p>
      <div ref="echartRef1" class="chart-box"></div>
    </div>
    <div class="box">
      <p class="tip">宽</p>
      <div ref="echartRef2" class="chart-box"></div>
    </div>
    <div class="box">
      <p class="tip">支</p>
      <div ref="echartRef3" class="chart-box"></div>
    </div>
  </div>
</template>

<script>
  import * as echarts from './echarts.min.js';
  export default {
    name: "chart",
    data() {
      return {}
    },
    props: {
      mainColor: {
        type: String,
        default: '#4ACF9C'
      },
      data: {
        type: Array,
        default: () => [27, 30, 32, 26, 32, 29, 25, 20, 23, 10, 21, 16, 20]
      }
    },
    methods: {
      initChart(index) {
        let echartRef = 'echartRef' + index;
        const chart = echarts.init(this.$refs[echartRef]);
        const option = {
          color: [this.mainColor],
          grid: {
            top: 70,
            left: 30,
            right: 30,
            bottom: 10,
            containLabel: true,
          },
          xAxis: {
            type: "value",
            axisLine: {
              show: true,
            },
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
            max: 50,
          },
          yAxis: {
            type: "category",
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff',
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#000'
            },
            data: [
              "HU",
              "CN",
              "JD",
              "8L",
              "GS",
              "FU",
              "PN",
              "GX",
              "GT",
              "9H",
              "Y8",
              "HT",
            ],
          },
          series: [
            {
              name: "",
              type: "bar",
              barWidth: 12,
              markLine: {
                lineStyle: {
                  type: "solid",
                  color: "#000",
                },
                label: {
                  fontSize: 16,
                  color: this.mainColor,
                },
                symbol: "circle",
                symbolSize: 5,
                symbolOffset: [-1,0.5,0,0],
                data: [{ type: "average", name: "Avg" }],
              },
              label: {
                show: true,
                position: 'outside',
                color: this.mainColor,
              },
              data: this.data,
            },
          ],
        };
        chart.setOption(option);
      },
    },
    mounted() {
      this.initChart(1);
      this.initChart(2);
      this.initChart(3);
    }
  }
</script>
<style lang="scss" scoped>
  .chart-container {
    width: 100%;
    height: 326px;
    display: flex;
  }
  .box {
    position: relative;
    width: 33%;
    height: 100%;
  }
  .tip {
    width: 26px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    background:  var(--var-mainColor);
    position: absolute;
    top: 14px;
    left: 30px;
    font-size: 14px;
  }
  .chart-box {
    height: 100%;
    width: 100%;
  }
</style>
