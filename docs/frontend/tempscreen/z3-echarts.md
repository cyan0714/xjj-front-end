---
title: echarts 常用大屏组件
---

## 封装 echarts

- npm 安装

```sh
npm install echarts --save
```

- 封装 echarts
  [详见快速生成一个大屏页面](./z1-before-use.md)

## 用前须知

```html
<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>
```

::: warning 用前须知！

1. 以下所有图表的`template`如上图所示，有关`base-echart`的具体封装在[快速生成一个大屏页面](./z1-before-use.md)中有提及。

2. 本页面中图表的背景颜色仅仅为了方便展示，具体情况根据项目需求而定。
   :::

更多使用详见官网，[跳到官网](https://echarts.apache.org/zh/index.html)

## 饼图

<echarts-pie/>
下方为`script`标签中的对应配置

```js
export default {
    data() {
      return {
        options:{
          title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }
      };
    },
  }
```

## 柱图

<echarts-bar/>

```js
export default {
    data() {
      return {
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
        }
      };
    },
  }
```

## 折柱混合

<echarts-line-bar/>

```js
export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature']
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Precipitation',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml'
              }
            },
            {
              type: 'value',
              name: 'Temperature',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C'
              }
            }
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              data: [
                2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
              ]
            },
            {
              name: 'Precipitation',
              type: 'bar',
              data: [
                2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
              ]
            },
            {
              name: 'Temperature',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
          ]
        }
      }
    },
  }
```

## 大数据量面积图

<echarts-large-area/>

```js
export default {
    data() {
      return {

      }
    },
    computed: {
      options() {
        let base = +new Date(1968, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let date = [];
        let data = [Math.random() * 300];
        for (let i = 1; i < 20000; i++) {
          var now = new Date((base += oneDay));
          date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
          data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }
        return {
          tooltip: {
            trigger: 'axis',
            position: function(pt) {
              return [pt[0], '10%'];
            },
          },
          title: {
            left: 'center',
            text: 'Large Area Chart',
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none',
              },
              restore: {},
              saveAsImage: {},
            },
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
          },
          yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
          },
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: 10,
            },
            {
              start: 0,
              end: 10,
            },
          ],
          series: [
            {
              name: 'Fake Data',
              type: 'line',
              symbol: 'none',
              sampling: 'lttb',
              itemStyle: {
                color: 'rgb(255, 70, 131)',
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 158, 68)',
                  },
                  {
                    offset: 1,
                    color: 'rgb(255, 70, 131)',
                  },
                ]),
              },
              data: data,
            },
          ],
        };
      },
    }

}

```

## 折线堆叠图

<echarts-line-stacked/>

```js
export default {
    data() {
      return {};
    },
    computed: {
      options() {
        return {
          title: {
            text: 'Stacked Line',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
        };
      },
    },
  };
```
