---
title: 大屏地图
---
## 大屏地图
众多项目有用到地图组件，每次使用的时候都为找地图资源、地图配置非常头疼，因此为大家整理了一个带有飞线图的海南地图，不需要飞线图直接去掉即可。
::: tip
建议使用<a data-v-b271b2f6="" href="#带飞线图地图" class="">带飞线图地图</a><br/>
更多配置可查看<a data-v-b271b2f6="" href="http://datav.jiaminghi.com/guide/flylineChart.html" target="_blank">官方文档</a><br/>
具体实现可参考git <a data-v-b271b2f6="" >http://192.168.0.66/font-end/front-end-template.git</a> 
:::
设置一个中心点，若干飞线点，即可得到动态飞线图。
```js
<dv-flyline-chart :config="config" style="width:740px;height: 600px;" />
```
## 基础地图
 <mapscreen num="1"/>
 
  <a href="http://192.168.0.149:8081/index.html#/map1" target="map_link">效果预览</a>
  
```js
//对应代码
//template 
<dv-flyline-chart :config="config" style="width:740px;height: 600px;" />
//script
export default {
	data() {
		return {
			lineWidth: 0,
			config: {
				centerPoint: [0.73, 0.19],
				points: [
					{
						position: [0.73, 0.19],
						text: '海口市'
					},
					{
						position: [0.59, 0.24],
						text: '澄迈县'
					},
					{
						position: [0.90, 0.23],
						text: '文昌市'
					},
					{
						position: [0.76, 0.45],
						text: '琼海市'
					},
					{
						position: [0.71, 0.35],
						text: '定安县'
					},
					{
						position: [0.465, 0.225],
						text: '临高县'
					},
					{
						position: [0.35, 0.30],
						text: '儋州市'
					},
					{
						position: [0.59, 0.40],
						text: '屯昌县'
					},
					{
						position: [0.34, 0.46],
						text: '白沙县'
					},
					{
						position: [0.17, 0.42],
						text: '昌江县'
					},
					{
						position: [0.12, 0.54],
						text: '东方市'
					},
					{
						position: [0.20, 0.69],
						text: '乐东县'
					},
					{
						position: [0.37, 0.64],
						text: '五指山市'
					},
					{
						position: [0.53, 0.56],
						text: '琼中县'
					},
					{
						position: [0.69, 0.63],
						text: '万宁市'
					},
					{
						position: [0.55, 0.74],
						text: '陵水县'
					},
					{
						position: [0.43, 0.74],
						text: '保亭县'
					},
					{
						position: [0.33, 0.80],
						text: '三亚市'
					},
					{
						position: [0.88, 0.83],
						text: '三沙市'
					}
				],
				bgImgUrl: require('../imgs/map.png')
			}
		}
	}
}
```
 
## 带文字图标地图
 <mapscreen num="2"/>
 <a href="http://192.168.0.149:8081/index.html#/map2" target="map_link">效果预览</a>
 
```js
//对应代码
//template 
<dv-flyline-chart :config="config" style="width:740px;height: 600px;" />
//script
export default {
	data() {
		return {
			lineWidth: 0,
			config: {
				centerPoint: [0.73, 0.19],
				points: [
					{
						position: [0.73, 0.19],
						text: '海口市'
					},
					{
						position: [0.59, 0.24],
						text: '澄迈县'
					},
					{
						position: [0.90, 0.23],
						text: '文昌市'
					},
					{
						position: [0.76, 0.45],
						text: '琼海市'
					},
					{
						position: [0.71, 0.35],
						text: '定安县'
					},
					{
						position: [0.465, 0.225],
						text: '临高县'
					},
					{
						position: [0.35, 0.30],
						text: '儋州市'
					},
					{
						position: [0.59, 0.40],
						text: '屯昌县'
					},
					{
						position: [0.34, 0.46],
						text: '白沙县'
					},
					{
						position: [0.17, 0.42],
						text: '昌江县'
					},
					{
						position: [0.12, 0.54],
						text: '东方市'
					},
					{
						position: [0.20, 0.69],
						text: '乐东县'
					},
					{
						position: [0.37, 0.64],
						text: '五指山市'
					},
					{
						position: [0.53, 0.56],
						text: '琼中县'
					},
					{
						position: [0.69, 0.63],
						text: '万宁市'
					},
					{
						position: [0.55, 0.74],
						text: '陵水县'
					},
					{
						position: [0.43, 0.74],
						text: '保亭县'
					},
					{
						position: [0.33, 0.80],
						text: '三亚市'
					},
					{
						position: [0.88, 0.83],
						text: '三沙市'
					}
				],
				bgImgUrl: require('../imgs/map.png'), //地图底图
				text: { //文字配置项
				  fontSize: 17,
				  color: '#fff',
				  offset: [0, 23]
				},
				halo: { //光晕环配置项
				  show: false
				},
				pointsImg: { //图标配置项
				  width: 30,
				  height: 30,
				  url: require('../imgs/mapPoint.png')
				}
			}
		}
	}
}
```
## 带飞线图地图
 <mapscreen num="3"/>
<a href="http://192.168.0.149:8081/index.html#/map3" target="map_link">效果预览</a>

```js
//对应代码
//template 
<dv-flyline-chart :config="config" style="width:740px;height: 600px;" />
//script
export default {
	data() {
		return {
			lineWidth: 0,
			config: {
				centerPoint: [0.73, 0.19],
				points: [
					{
						position: [0.73, 0.19],
						text: '海口市'
					},
					{
						position: [0.59, 0.24],
						text: '澄迈县'
					},
					{
						position: [0.90, 0.23],
						text: '文昌市'
					},
					{
						position: [0.76, 0.45],
						text: '琼海市'
					},
					{
						position: [0.71, 0.35],
						text: '定安县'
					},
					{
						position: [0.465, 0.225],
						text: '临高县'
					},
					{
						position: [0.35, 0.30],
						text: '儋州市'
					},
					{
						position: [0.59, 0.40],
						text: '屯昌县'
					},
					{
						position: [0.34, 0.46],
						text: '白沙县'
					},
					{
						position: [0.17, 0.42],
						text: '昌江县'
					},
					{
						position: [0.12, 0.54],
						text: '东方市'
					},
					{
						position: [0.20, 0.69],
						text: '乐东县'
					},
					{
						position: [0.37, 0.64],
						text: '五指山市'
					},
					{
						position: [0.53, 0.56],
						text: '琼中县'
					},
					{
						position: [0.69, 0.63],
						text: '万宁市'
					},
					{
						position: [0.55, 0.74],
						text: '陵水县'
					},
					{
						position: [0.43, 0.74],
						text: '保亭县'
					},
					{
						position: [0.33, 0.80],
						text: '三亚市'
					},
					{
						position: [0.88, 0.83],
						text: '三沙市'
					}
				],
				k: 0.5,
				bgImgUrl: require('../imgs/map.png'), //地图底图
				text: { //文字配置项
				  fontSize: 17,
				  color: '#fff',
				  offset: [0, 23]
				},
				centerPointImg: {
				  url: 'http://datav.jiaminghi.com/img/flylineChart/mapCenterPoint.png'
				},
				pointsImg: { //图标配置项
				  width: 30,
				  height: 30,
				  url: require('../imgs/mapPoint.png')
				}
			}
		}
	}
}
```

