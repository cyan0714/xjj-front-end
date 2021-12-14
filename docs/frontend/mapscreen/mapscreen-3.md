---
title: Echarts版海南地图配置版
---

## 描述

使用 dataV 生成的地图往往不如 echarts 地图灵活，下面看看如何使用 echarts 配置一个海南省地图。

## 基础地图

基本效果如下：
<mapscreen1/>

<a href="http://192.168.177.12:2021/index.html#/e-map1" target="map_link">效果预览</a>

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
          silent:true,
          // 文本位置修正
          textFixed: {
            Alaska: [20, -20],
          },
          itemStyle: {
            normal: {
              label: {
                show: true,
                formatter: "{b}\n{c}",
                fontSize: 10,
                color: "#fff",
              },
              borderWidth: 0,
            },
            emphasis: {
              label: {
                show: true,
              },
              areaColor: "rgb(213, 214, 79)",
            },
          },

          data: [
            { name: "三沙市", value: 4822023 },
            { name: "儋州市", value: 4822023 },
            { name: "海口市", value: 731449 },
            { name: "三亚市", value: 6553255 },
            { name: "白沙黎族自治县", value: 2949131 },
            { name: "保亭黎族苗族自治县", value: 38041430 },
            { name: "昌江黎族自治县", value: 5187582 },
            { name: "澄迈县", value: 3590347 },
            { name: "定安县", value: 917092 },
            { name: "东方市", value: 632323 },
            { name: "乐东黎族自治县", value: 19317568 },
            { name: "临高县", value: 9919945 },
            { name: "陵水黎族自治县", value: 1392313 },
            { name: "琼海市", value: 1595728 },
            { name: "琼中黎族苗族自治县", value: 12875255 },
            { name: "屯昌县", value: 6537334 },
            { name: "万宁市", value: 3074186 },
            { name: "文昌市", value: 2885905 },
            { name: "五指山市", value: 4380415 },
          ],
        },
      ],
    };
    this.chart.setOption(option);// 设置配置
  },
};
</script>
```
