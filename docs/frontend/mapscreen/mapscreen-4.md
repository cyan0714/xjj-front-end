---
title: Echarts版海南地图配
---

## 描述

使用 dataV 生成的地图往往不如 echarts 地图灵活，下面看看如何使用 echarts 配置一个海南省地图。<br/>
具体实现可参考git <a data-v-b271b2f6="" >http://192.168.0.66/font-end/front-end-template.git</a> <br/>
对应路由访问 /e-map1

## 基础地图

基本效果如下：

<mapscreen1 num="1"/>

+ <a href="http://192.168.0.149:8081/index.html#/e-map1" target="map_link">效果预览</a>
+ [下载相关静态资源](http://192.168.0.149/hns-project-h5/file/map/e-map1.zip)<br/>

对应 .vue 文件代码如下

```js
<template>
  <div id="map-container">
    <div ref="echartRef" class="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import echarts from "../js/echarts";
import haiNanMap from "../js/haiNan.json";

export default {
  name: "haiNan-map",
  components: {},
  data() {
    return {
      chart: null,
      option: null,
      defaultCode: {
        name: "hainan",
        mapCode: haiNanMap,
      }
    };
  },
  mounted() {
    this.loadMap(); //初始化地图
  },
  methods: {
    loadMap() {
      var chart = echarts.init(this.$refs.echartRef);
      echarts.registerMap(this.defaultCode.name, this.defaultCode.mapCode);
      this.option = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
        },
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
          show: true,
          orient: "vertical",
          left: "left",
          top: "top",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          },
        },
        series: [
          {
            name: "Map",
            type: "map",
            aspectScale: 1,
            roam: false,
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
              { name: "三沙市", value: 0, itemStyle: {borderColor: "#0e56c2"}},
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
              { name: "秀英区", value: 114822023 },
              { name: "龙华区", value: 4822023 },
              { name: "琼山区", value: 19317568 },
              { name: "美兰区", value: 38041430 },
              { name: "崖州区", value: 5187582 },
              { name: "天涯区", value: 3590347 },
              { name: "吉阳区", value: 917092 },
              { name: "海棠区", value: 632323 },
            ],
          },
        ],
      };
      chart.setOption(this.option);
      chart.on("click", function (params) {
        alert("当前点击:" + '\n 城市：' + params.name + '\n value值：' + params.value);
      });
    }
  },
};
</script>

<style lang="scss">
@import "../css/map.scss";

#map-container {
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
## 可穿透地图

基本效果如下：
<mapscreen1 num="2"/>

+ <a href="http://192.168.0.149:8081/index.html#/e-map2" target="map_link">效果预览</a>
+ [下载相关静态资源](http://192.168.0.149/hns-project-h5/file/map/e-map2.zip)<br/>

对应 .vue 文件代码如下

```js
<template>
  <div id="map-container">
    <div
      ref="echartRefOne"
      class="chart"
      style="width: 100%; height: 100%; position: absolute"
      v-show="areaLevel == 1"
    ></div>
    <div
      ref="echartRefTwo"
      class="chart"
      style="width: 100%; height: 100%; position: absolute"
      v-if="areaLevel == 2"
    ></div>
    <div class="back-btn" v-show="areaLevel == 2" @click="backProvince()">
      <i class="el-icon-back"></i>返回
    </div>
  </div>
</template>

<script>
import echarts from "../js/echarts";
import haiNanMap from "../js/haiNan.json";
import haikouMap from "../js/haiKou.json";
import sanyaMap from "../js/sanYa.json";

export default {
  name: "hainan-map-deep",
  components: {},
  data() {
    return {
      chart: null,
      areaChart: null,
      option: null,
      areaOption: null,
      areaLevel: 1, // 默认为1代表此时展示的是海南省地图，如果下钻则将此值切换为2
      defaultCode: {
        name: "hainan",
        mapCode: haiNanMap,
      },
      city: {
        海口市: {
          name: "haikou",
          mapCode: haikouMap,
        },
        三亚市: {
          name: "sanya",
          mapCode: sanyaMap,
        },
      },
    };
  },
  watch: {
    option: {
      handler: function (newOption) {
        this.chart.setOption(newOption);
      },
      deep: true,
    },
    areaOption: {
      handler: function (newOption) {
        this.areaChart.setOption(newOption);
      },
      deep: true,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let that = this;
      this.chart = echarts.init(this.$refs.echartRefOne);
      echarts.registerMap(this.defaultCode.name, this.defaultCode.mapCode);
      for (let item in this.city) { //地图下钻
        echarts.registerMap(this.city[item].name, this.city[item].mapCode);
      }
      this.loadMap(); //首次地图加载
      this.chart.on("click", function (params) {
        if (that.city[params.name] && that.areaLevel == 1) {
          that.areaLevel = 2;
          that.$nextTick(() => {
            that.loadAreaMap(that.city[params.name].name);
          });
        } else {
          alert("当前区域不存在下级市县或者区");
          return;
        }
      });
    },
    loadMap(name = this.defaultCode.name) {
      this.option = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
          show: false
        },
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
              "#0e56c2"
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
            map: name,
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
                  fontSize: 15
                },
              },
            },
            itemStyle: {
              borderColor: "#2a7fa3",
              borderWidth: 1.2,
              shadowColor: "rgba(100, 100, 100, 0.6)",
              shadowBlur: 100,
              shadowOffsetX: -10,
              // shadowOffsetY: -10,
              opacity: 0.9,
              emphasis: {
                areaColor: "#0e56c2",
              },
            },
            data: [
              { name: "三沙市", value: 114822023, itemStyle: {borderColor: "#0e56c2"}},
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
              { name: "秀英区", value: 114822023 },
              { name: "龙华区", value: 4822023 },
              { name: "琼山区", value: 19317568 },
              { name: "美兰区", value: 38041430 },
              { name: "崖州区", value: 5187582 },
              { name: "天涯区", value: 3590347 },
              { name: "吉阳区", value: 917092 },
              { name: "海棠区", value: 632323 },
            ],
          },
        ],
      };
      this.chart.setOption(this.option);
    },
    loadAreaMap(name) {
      if (!this.areaChart) {
        this.areaChart = echarts.init(this.$refs.echartRefTwo);
        this.areaChart.on("click", function () {
          alert("当前区域不存在下级市县或者区");
          // if (that.areaLevel == 2) {
          //   // 默认切换回海南地图
          //   that.areaLevel = 1;
          //   that.loadMap(that.defaultCode.mapCode, that.defaultCode.name);
          // }
          return;
        });
      }
      this.areaOption = {
        title: {
          text: "HN",
          subtext: "hn map",
          left: "right",
          show: false
        },
        visualMap: {
          left: "right",
          realtime: false,
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
            map: name,
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
              // shadowOffsetY: -10,
              opacity: 0.9,
              emphasis: {
                areaColor: "#0e56c2",
              },
            },
            data: [
              { name: "秀英区", value: 114822023 },
              { name: "龙华区", value: 4822023 },
              { name: "琼山区", value: 19317568 },
              { name: "美兰区", value: 38041430 },
              { name: "崖州区", value: 5187582 },
              { name: "天涯区", value: 3590347 },
              { name: "吉阳区", value: 917092 },
              { name: "海棠区", value: 632323 },
            ],
          },
        ],
      };
      this.areaChart.setOption(this.areaOption);
    },
    backProvince() {
      this.areaLevel = 1;
      this.loadMap();
      this.areaChart = null;
    }
  }
};
</script>

<style lang="scss">
@import "../css/map.scss";
#map-container {
  & > .back-btn {
    cursor: pointer;
    position: absolute;
    top: 7%;
    left: 7%;
    z-index: 999;
    color: #fff;
    font-size: 16px;
    padding: 10px 24px;
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