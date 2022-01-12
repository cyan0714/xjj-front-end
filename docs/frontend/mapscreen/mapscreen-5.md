---
title: Echarts版中国地图
---

## 描述

使用 dataV 生成的地图往往不如 echarts 地图灵活，下面看看如何使用 echarts 配置一个海南省地图。<br/>
具体实现可参考git <a data-v-b271b2f6="" >http://192.168.0.66/font-end/front-end-template.git</a> <br/>
对应路由访问 /e-map1

## 基础地图

基本效果如下：
<mapscreen1 num="3"/>

<a href="http://192.168.0.149:8081/index.html#/e-map3" target="map_link">效果预览</a>

对应 .vue 文件代码如下

```js
<template>
  <div id="map-container">
    <div
      ref="echartRefOne"
      class="china-chart"
    ></div>
  </div>
</template>

<script>
import echarts from "../js/echarts.min.js";
import ChinaMap from "../js/china.json";

export default {
  name: "China-map",
  components: {},
  data() {
    return {
      chart: null,
      areaChart: null,
      option: null,
      defaultCode: {
        name: "china",
        mapCode: ChinaMap
      }
    };
  },
  mounted() {
    //初始化地图
    this.loadMap();
  },
  methods: {
    loadMap() {
      var chart = echarts.init(this.$refs.echartRefOne);
      echarts.registerMap(this.defaultCode.name, this.defaultCode.mapCode);
      var option = {
        title: {
          text: "China Map",
          subtext: "",
          left: "right",
          show: false
        },
        //右侧颜色范围
        visualMap: {
          left: "right",
          realtime: false,
          min: 500000,
          max: 38000000,
          inRange: {
            color: [
              "#0e56c2",
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
              "#0e56c2",
            ],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        toolbox: {
          show: false,
          orient: "vertical",
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
            name: "Map",
            type: "map",
            aspectScale: 1,
            roam: true,
            map: this.defaultCode.name,
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
              { name: "南海诸岛",value: 0, itemStyle: {borderColor: "#0e56c2"}},
              { name: "新疆", value: 114822023 },
              { name: "西藏", value: 4822023 },
              { name: "青海", value: 2685905 },
              { name: "甘肃", value: 6553255 },
              { name: "内蒙古", value: 2949131 },
              { name: "黑龙江", value: 38041430 },
              { name: "吉林", value: 5187582 },
              { name: "辽宁", value: 3590347 },
              { name: "宁夏", value: 917092 },
              { name: "四川", value: 632323 },
              { name: "云南", value: 19317568 },
              { name: "陕西", value: 9919945 },
              { name: "重庆", value: 1392313 },
              { name: "贵州", value: 1595728 },
              { name: "山西", value: 12875255 },
              { name: "河南", value: 6537334 },
              { name: "湖北", value: 3074186 },
              { name: "湖南", value: 2085905 },
              { name: "广西", value: 4380415 },
              { name: "河北", value: 1148 },
              { name: "北京", value: 4822 },
              { name: "天津", value: 19317568 },
              { name: "山东", value: 38041430 },
              { name: "安徽", value: 5187582 },
              { name: "江西", value: 3590347 },
              { name: "广东", value: 917092 },
              { name: "江苏", value: 632323 },
              { name: "上海", value: 114822023 },
              { name: "浙江", value: 4822023 },
              { name: "福建", value: 2685905 },
              { name: "海南", value: 12875255 },
              { name: "台湾", value: 6537334 },
              { name: "香港", value: 9919945 },
              { name: "澳门", value: 114822023 },
            ],
          },
        ],
      };
      chart.setOption(option);
      chart.on("click", function (params) {
        alert("当前点击:" + '\n 城市：' + params.name + '\n value值：' + params.value);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../css/map.scss";
#map-container {
  .china-chart {
    width: 100%;
    height: 100%;
  }
  & > .back-btn {
    cursor: pointer;
    position: absolute;
    top: 13%;
    left: 26%;
    z-index: 999;
    color: #fff;
    font-size: 16px;
    padding: 5px 15px;
    background: #1451ae;
    border-radius: 5px;
    text-align: center;
    & > i {
      margin-right: 4px;
    }
    &:hover {
      background: #3f7bd5;
    }
  }
}
</style>

```

