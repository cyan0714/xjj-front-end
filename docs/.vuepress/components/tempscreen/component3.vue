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
        const data = [
          [27, 30, 32, 26, 32, 29, 25, 20, 23, 10],
          [13, 25, 20, 24, 22, 20, 25, 20, 33, 20],
          [20, 15, 20, 25, 12, 30, 35, 20, 24, 30],
          [64, 74, 76, 86, 70, 83, 89, 54, 84, 64],
        ];
        const option = {
          legend: {},
          grid: {
            top: 40,
            left: 10,
            right: 10,
            bottom: 10,
            containLabel: true,
          },
          xAxis: {
            type: "category",
            axisTick: {
              show: false,
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
              "9H"
            ],
          },
          yAxis: {
            type: "value",
            axisLine: {
              show: true,
            },
            data: ['经营租赁', '融资租赁', '自有购买']
          },
          series: [
            {
              name: "经营租赁",
              type: "bar",
              stack: "total",
              barWidth: 27,
              label: {
                show: true,
                formatter: '{c}%',
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                focus: "series",
              },
              data: data[0],
              itemStyle: {
                color: '#76CBEE',
              },
              textStyle: {
                color: '#fff'
              }
            },
            {
              name: "融资租赁",
              type: "bar",
              stack: "total",
              label: {
                show: true,
                formatter: '{c}%',
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                focus: "series",
              },
              data: data[1],
              itemStyle: {
                color: '#6596FB',
              }
            },
            {
              name: "自有购买",
              type: "bar",
              stack: "total",
              label: {
                show: true,
                formatter: '{c}%',
                textStyle: {
                  color: '#fff'
                }
              },
              emphasis: {
                focus: "series",
              },
              data: data[2],
              itemStyle: {
                color: '#4ACF9C',
              }
            },
            {
              name: "",
              type: "bar",
              stack: "total",
              label: {
                show: true,
                color: '#4ACF9C',
                position: 'top',
                textStyle: {
                  fontSize: 15
                }
              },
              emphasis: {
                focus: "series",
              },
              data: [0,0,0,0,0,0,0,0,0,0]
            },
          ],
        };
        //计算总和
        let series = option.series;
        function setSum(params) {
          let dataValue = 0;
          for(let i=0;i<series.length;i++) {
            dataValue += series[i].data[params.dataIndex];
          }
          return dataValue;
        }
        series[series.length -1].label.formatter = setSum;
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
