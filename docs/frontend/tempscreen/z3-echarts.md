---
title: echarts 常用大屏组件
---

<!-- <br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
</code>
</pre>
</details>

<br/> -->

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
    <Chart :options="对应图表配置"></Chart>
  </div>
</template>
```

::: warning 用前须知！

1. 以下所有图表的`template`如上图所示，有关`Chart`的具体封装在[快速生成一个大屏页面](./z1-before-use.md)中有提及。

2. 本页面中图表的背景颜色仅仅为了方便展示，具体情况根据项目需求而定。

:::

更多使用详见官网，[跳到官网](https://echarts.apache.org/zh/index.html)

## 饼图

<br/>
<echarts-pie1/>
<br/>

<details>
  <summary>点击展开上方图表对应代码</summary>
  <pre>
   <code >
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
  </code> 
  </pre>
</details>

<br/>
<echarts-pie2/>

<br/>

<details>
  <summary>点击展开上方图表对应代码</summary>
  <pre>
   <code >
  export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'item',
          },
          legend: {
            top: '5%',
            left: 'center',
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
              ],
            },
          ],
        },
      };
    },
  };
  </code> 
  </pre>
</details>

<br/>

<echarts-pie3/>

<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {
        option: {
          legend: {
            top: 'bottom',
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true },
            },
          },
          series: [
            {
              name: 'Nightingale Chart',
              type: 'pie',
              radius: [50, 250],
              center: ['50%', '50%'],
              roseType: 'area',
              itemStyle: {
                borderRadius: 8,
              },
              data: [
                { value: 40, name: 'rose 1' },
                { value: 38, name: 'rose 2' },
                { value: 32, name: 'rose 3' },
                { value: 30, name: 'rose 4' },
                { value: 28, name: 'rose 5' },
                { value: 26, name: 'rose 6' },
                { value: 22, name: 'rose 7' },
                { value: 18, name: 'rose 8' },
              ],
            },
          ],
        },
      };
    },
  };
</code>
</pre>
</details>

## 柱状图

<br/>
<echarts-bar1/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {
        options: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
            },
          ],
        },
      };
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-bar2/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
 export default {
    data() {
      return {};
    },
    computed: {
      options() {
        const labelRight = {
          position: 'right',
        };
        return {
          title: {
            text: 'Bar Chart with Negative Value',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
            },
          },
          grid: {
            top: 80,
            bottom: 30,
          },
          xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
              lineStyle: {
                type: 'dashed',
              },
            },
          },
          yAxis: {
            type: 'category',
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one'],
          },
          series: [
            {
              name: 'Cost',
              type: 'bar',
              stack: 'Total',
              label: {
                show: true,
                formatter: '{b}',
              },
              data: [
                { value: -0.07, label: labelRight },
                { value: -0.09, label: labelRight },
                0.2,
                0.44,
                { value: -0.23, label: labelRight },
                0.08,
                { value: -0.17, label: labelRight },
                0.47,
                { value: -0.36, label: labelRight },
                0.18,
              ],
            },
          ],
        };
      },
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-bar3/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {};
    },
    computed: {
      options() {
        // prettier-ignore
        let dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        // prettier-ignore
        let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
          dataShadow.push(yMax);
        }
        return {
          xAxis: {
            data: dataAxis,
            axisLabel: {
              inside: true,
              color: '#fff',
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            z: 10,
          },
          yAxis: {
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: '#999',
            },
          },
          dataZoom: [
            {
              type: 'inside',
            },
          ],
          series: [
            {
              type: 'bar',
              showBackground: true,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#83bff6' },
                  { offset: 0.5, color: '#188df0' },
                  { offset: 1, color: '#188df0' },
                ]),
              },
              emphasis: {
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#2378f7' },
                    { offset: 0.7, color: '#2378f7' },
                    { offset: 1, color: '#83bff6' },
                  ]),
                },
              },
              data: data,
            },
          ],
        };
      },
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-bar4/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {};
    },
    computed: {
      options() {
        const categories = (function () {
          let now = new Date();
          let res = [];
          let len = 10;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(+now - 2000);
          }
          return res;
        })();
        const categories2 = (function () {
          let res = [];
          let len = 10;
          while (len--) {
            res.push(10 - len - 1);
          }
          return res;
        })();
        const data = (function () {
          let res = [];
          let len = 10;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })();
        const data2 = (function () {
          let res = [];
          let len = 0;
          while (len < 10) {
            res.push(+(Math.random() * 10 + 5).toFixed(1));
            len++;
          }
          return res;
        })();
        return {
          title: {
            text: 'Dynamic Data',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#283b56',
              },
            },
          },
          legend: {},
          dataZoom: {
            show: false,
            start: 0,
            end: 100,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: true,
              data: categories,
            },
            {
              type: 'category',
              boundaryGap: true,
              data: categories2,
            },
          ],
          yAxis: [
            {
              type: 'value',
              scale: true,
              name: 'Price',
              max: 30,
              min: 0,
              boundaryGap: [0.2, 0.2],
            },
            {
              type: 'value',
              scale: true,
              name: 'Order',
              max: 1200,
              min: 0,
              boundaryGap: [0.2, 0.2],
            },
          ],
          series: [
            {
              name: 'Dynamic Bar',
              type: 'bar',
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: data,
            },
            {
              name: 'Dynamic Line',
              type: 'line',
              data: data2,
            },
          ],
        };
      },
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-bar5/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {
        options: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999',
              },
            },
          },
          legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature'],
          },
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisPointer: {
                type: 'shadow',
              },
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: 'Precipitation',
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                formatter: '{value} ml',
              },
            },
            {
              type: 'value',
              name: 'Temperature',
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                formatter: '{value} °C',
              },
            },
          ],
          series: [
            {
              name: 'Evaporation',
              type: 'bar',
              data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            },
            {
              name: 'Precipitation',
              type: 'bar',
              data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            },
            {
              name: 'Temperature',
              type: 'line',
              yAxisIndex: 1,
              data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            },
          ],
        },
      };
    },
  };
</code>
</pre>
</details>

## 折线图

<br/>
<echarts-line1/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {
        options: {
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
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              areaStyle: {},
            },
          ],
        },
      };
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-line2/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {};
    },
    computed: {
      options() {
        // prettier-ignore
        const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
        const dateList = data.map(function (item) {
          return item[0];
        });
        const valueList = data.map(function (item) {
          return item[1];
        });
        return {
          // Make gradient line here
          visualMap: [
            {
              show: false,
              type: 'continuous',
              seriesIndex: 0,
              min: 0,
              max: 400,
            },
            {
              show: false,
              type: 'continuous',
              seriesIndex: 1,
              dimension: 0,
              min: 0,
              max: dateList.length - 1,
            },
          ],
          title: [
            {
              left: 'center',
              text: 'Gradient along the y axis',
            },
            {
              top: '55%',
              left: 'center',
              text: 'Gradient along the x axis',
            },
          ],
          tooltip: {
            trigger: 'axis',
          },
          xAxis: [
            {
              data: dateList,
            },
            {
              data: dateList,
              gridIndex: 1,
            },
          ],
          yAxis: [
            {},
            {
              gridIndex: 1,
            },
          ],
          grid: [
            {
              bottom: '60%',
            },
            {
              top: '60%',
            },
          ],
          series: [
            {
              type: 'line',
              showSymbol: false,
              data: valueList,
            },
            {
              type: 'line',
              showSymbol: false,
              data: valueList,
              xAxisIndex: 1,
              yAxisIndex: 1,
            },
          ],
        };
      },
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-line3/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
export default {
    data() {
      return {
        options: {
          title: {
            text: 'Stacked Area Chart',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
          ],
          yAxis: [
            {
              type: 'value',
            },
          ],
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              label: {
                show: true,
                position: 'top',
              },
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
        },
      };
    },
  };
</code>
</pre>
</details>

<br/>
<echarts-line4/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
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
</code>
</pre>
</details>

<br/>
<echarts-line5/>
<br/>

<details>
<summary>点击展开上方图表对应代码</summary>
<pre>
<code>
import * as echarts from 'echarts';
  export default {
    data() {
      return {};
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
            position: function (pt) {
              return [pt[0], '10%'];
            },
          },
          title: {
            left: 'center',
            text: 'Large Area Chart',
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
    },
  };
</code>
</pre>
</details>

<br/>
