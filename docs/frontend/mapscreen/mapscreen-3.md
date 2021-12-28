---
title: Echarts版海南地图配置版
---

## 描述

使用 dataV 生成的地图往往不如 echarts 地图灵活，下面看看如何使用 echarts 配置一个海南省地图。<br/>
具体实现可参考git <a data-v-b271b2f6="" >http://192.168.0.66/font-end/front-end-template.git</a> <br/>
对应路由访问 /e-map1

## 基础地图

基本效果如下：
<mapscreen1/>

<a href="http://192.168.0.149:8081/index.html#/e-map1" target="map_link">效果预览</a>

对应 .vue 文件代码如下

```js
<template>
  <div id="map-container">
    <div ref="echartRef" class="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import echarts from "../js/echarts"; // 引入对应的 echarts
import haiNanMap from "../js/460000.json"; // 引入生成海南省地图的 json 文件

export default {
  name: "demo-list",
  components: {},
  data() {
    return {
      chart: null,
      option: null,
    };
  },
  watch: { // 监听配置信息变化
    option: {
      handler: function (newOption) {
        this.chart.setOption(newOption);
      },
      deep: true,
    },
  },
  mounted() {
    // 注：必须要在 mounted 后才能操作 dom！
    const chart = echarts.init(this.$refs.echartRef);// 初始化 echarts
    this.chart = chart;
    echarts.registerMap("hainan", haiNanMap);// 注册地图
    this.option = { // 对应配置
      title: {
        text: "HN",
        subtext: "hn map",
        left: "right",
      },
      tooltip: {
        show: false,
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
        formatter: function (params) {
          var value = (params.value + "").split(".");
          value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,");
          return params.seriesName + "<br/>" + params.name + ": " + value;
        },
      },
      visualMap: {
        left: "right",
        min: 500000,
        max: 38000000,
        inRange: {
           color: [
            "#001937",
            "#0e56c2",
            "#0a3c7b",
            "#0c4281",
            "#0d4799",
            "#114892",
            "#133361",
            "#105cc5",
            "#154185",
            "#06234b",
            "#1566c4",
            "#0f428c",
            "#06234b",
            "#062b58",
            "#105bc5",
            "#062b58",
            "#032d5d",
            "#062b58",
            "#133361",
          ],
        },
        text: ["High", "Low"], // 文本，默认为数值文本
        calculable: true,
      },

      toolbox: {
        show: true,
        left: "left",
        top: "top",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: "hainan",
          type: "map",
          aspectScale: 1,
          roam: true,
          map: "hainan",
          label: {
            formatter: ["{b|{b}}", "{c|{c}}"].join("\n"),
            show: true,
            rich: {
              b: {
                color: "#fff",
                lineHeight: 26,
                fontSize: 15,
              },
              c: {
                color: "#fff",
                fontSize: 15,
              },
            },
          },
          itemStyle: {
            borderColor: "#2a7fa3",
            borderWidth: 1.2,
            shadowColor: "rgba(100, 100, 100, 0.6)",
            shadowBlur: 100,
            shadowOffsetX: -10,
            opacity: 0.9,
            emphasis: {
              areaColor: "#0e56c2",
            },
          },
          data: [
            { name: "三沙市", value: 114822023 },
            { name: "儋州市", value: 4822023 },
            { name: "海口市", value: 2685905 },
            { name: "三亚市", value: 6553255 },
            { name: "白沙县", value: 2949131 },
            { name: "保亭县", value: 38041430 },
            { name: "昌江县", value: 5187582 },
            { name: "澄迈县", value: 3590347 },
            { name: "定安县", value: 917092 },
            { name: "东方市", value: 632323 },
            { name: "乐东县", value: 19317568 },
            { name: "临高县", value: 9919945 },
            { name: "陵水县", value: 1392313 },
            { name: "琼海市", value: 1595728 },
            { name: "琼中县", value: 12875255 },
            { name: "屯昌县", value: 6537334 },
            { name: "万宁市", value: 3074186 },
            { name: "文昌市", value: 2085905 },
            { name: "五指山市", value: 4380415 },
          ],
        },
      ],
    };
    this.chart.setOption(option);// 设置配置
    this.chart.on("click", function (params) {
      console.log(params);
      alert("点击了" + params.name + "\n" + params.value);
    });
  },
};
</script>
```
