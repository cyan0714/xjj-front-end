---
title: DataV版海南地图配置版
---
## 描述
配置若干飞线点后，你可以在任意两点间设置飞线，得到动态飞线图，组件提供的dev模式可以帮你快速配置飞线点位置。
::: tip
更多配置可查看<a data-v-b271b2f6="" href="http://datav.jiaminghi.com/guide/flylineChartEnhanced.html" target="_blank">官方文档</a><br/>
:::
```js
<dv-flyline-chart-enhanced :config="config" style="width:600px;height: 600px;" />
```
## 基础地图
 <mapscreen num="4"/>
 
  <a href="http://192.168.0.149:8081/index.html#/map4" target="map_link">效果预览</a>
  
```js
//对应代码
//template 
<dv-flyline-chart :config="config" style="width:600px;height: 600px;" />
//script
export default {
	data() {
		return {
			points: [
			  {
			    name: '海口市',
			    coordinate: [0.73, 0.19],
			  },
			  {
			    name: '澄迈县',
			    coordinate: [0.59, 0.24]
			  },
			  { 
			    name: '文昌市',
			    coordinate:  [0.90, 0.23]
			  },
			  {
			    name: '琼海市',
			    coordinate:  [0.76, 0.45]
			  },
			  {
			    name: '定安县',
			    coordinate: [0.71, 0.35]
			  },
			  {
			    name: '临高县',
			    coordinate: [0.465, 0.225]
			  },
			  {
			    name: '儋州市',
			    coordinate: [0.35, 0.30]
			  },
			  {
			    name: '屯昌县',
			    coordinate: [0.59, 0.40],
			    halo: {
			      show: true,
			      color: '#8378ea'
			    }
			  },
			  {
			    name: '白沙县',
			    coordinate: [0.34, 0.46]
			  },
			  {
			    name: '昌江县',
			    coordinate: [0.17, 0.42],
			    halo: {
			      show: true,
			      color: '#37a2da'
			    }
			  },
			  {
			    name: '东方市',
			    coordinate: [0.12, 0.54]
			  },
			  {
			    name: '乐东县',
			    coordinate: [0.20, 0.69]
			  },
			  {
			    name: '五指山市',
			    coordinate: [0.37, 0.64]
			  },
			  {
			    name: '琼中县',
			    coordinate: [0.53, 0.56]
			  },
			  {
			    name: '万宁市',
			    coordinate: [0.69, 0.63]
			  },
			  {
			    name: '陵水县',
			    coordinate: [0.55, 0.74]
			  },
			  {
			    name: '保亭县',
			    coordinate: [0.43, 0.74]
			  },
			  {
			    name: '三亚市',
			    coordinate: [0.33, 0.80]
			  },
			  {
			    name: '三沙市',
			    coordinate: [0.88, 0.83]
			  },
			],
			bgImgSrc: require('../imgs/map.png')
		}
	}
}
```
## 带文字地图
 <mapscreen num="5"/>
 
  <a href="http://192.168.0.149:8081/index.html#/map5" target="map_link">效果预览</a>
  
```js
//对应代码
//template 
<dv-flyline-chart-enhanced :config="config" style="width:600px;height: 600px;" />
//script
export default {
	data() {
		return {
			config: {
				points: [
				  {
				    name: '海口市',
				    coordinate: [0.73, 0.19],
				    icon: {
				      src: require('../imgs/mapCenterPoint.png'),
				      width: 30,
				      height: 30
				    },
				    text: {
				      show: true
				    }
				  },
				  {
				    name: '澄迈县',
				    coordinate: [0.59, 0.24]
				  },
				  {
				    name: '文昌市',
				    coordinate:  [0.90, 0.23]
				  },
				  {
				    name: '琼海市',
				    coordinate:  [0.76, 0.45]
				  },
				  {
				    name: '定安县',
				    coordinate: [0.71, 0.35]
				  },
				  {
				    name: '临高县',
				    coordinate: [0.465, 0.225]
				  },
				  {
				    name: '儋州市',
				    coordinate: [0.35, 0.30]
				  },
				  {
				    name: '屯昌县',
				    coordinate: [0.59, 0.40],
				    halo: {
				      show: true,
				      color: '#8378ea'
				    }
				  },
				  {
				    name: '白沙县',
				    coordinate: [0.34, 0.46]
				  },
				  {
				    name: '昌江县',
				    coordinate: [0.17, 0.42],
				    halo: {
				      show: true,
				      color: '#37a2da'
				    }
				  },
				  {
				    name: '东方市',
				    coordinate: [0.12, 0.54]
				  },
				  {
				    name: '乐东县',
				    coordinate: [0.20, 0.69]
				  },
				  {
				    name: '五指山市',
				    coordinate: [0.37, 0.64]
				  },
				  {
				    name: '琼中县',
				    coordinate: [0.53, 0.56]
				  },
				  {
				    name: '万宁市',
				    coordinate: [0.69, 0.63]
				  },
				  {
				    name: '陵水县',
				    coordinate: [0.55, 0.74]
				  },
				  {
				    name: '保亭县',
				    coordinate: [0.43, 0.74]
				  },
				  {
				    name: '三亚市',
				    coordinate: [0.33, 0.80]
				  },
				  {
				    name: '三沙市',
				    coordinate: [0.88, 0.83]
				  },
				],
				lines: [
				  {
				    source: '澄迈县',
				    target: '海口市',
				    width: 0
				  }
				],
				text: { //文字配置项
				  show: true,
				  fontSize: 17,
				  color: '#fff',
				  offset: [0, 23]
				},
				icon: { //图标配置项
				  show: true,
				  width: 30,
				  height: 30,
				  src: require('../imgs/mapPoint.png'),
				},
				bgImgSrc: require('../imgs/map.png')
			}
		}
	}
}
```
## 带数量地图
 <mapscreen num="6"/>
 
  <a href="http://192.168.0.149:8081/index.html#/map6" target="map_link">效果预览</a>
  
```js
//对应代码
//template 
<dv-flyline-chart-enhanced :config="config" style="width:600px;height: 600px;" />
//script
export default {
	data() {
		return {
			config: {
				points: [
				  {
				    name: '海口市',
				    coordinate: [0.68, 0.20],
				    icon: {
				      src: require('../imgs/mapCenterPoint.png'),
				      width: 28,
				      height: 28
				    },
				    text: {
				      show: true
				    }
				  },
				  {
				    name: '111230',
				    coordinate: [0.68, 0.22],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '澄迈县',
				    coordinate: [0.55, 0.28]
				  },
				  {
				    name: '11230',
				    coordinate: [0.55, 0.30],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '文昌市',
				    coordinate:  [0.87, 0.24]
				  },
				  {
				    name: '1230',
				    coordinate: [0.87, 0.26],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '琼海市',
				    coordinate: [0.74, 0.46]
				  },
				  {
				    name: '7230',
				    coordinate: [0.74, 0.48],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '定安县',
				    coordinate: [0.71, 0.36]
				  },
				  {
				    name: '111230',
				    coordinate: [0.71, 0.38],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '临高县',
				    coordinate: [0.43, 0.23]
				  },
				  {
				    name: '4210',
				    coordinate: [0.43, 0.25],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '儋州市',
				    coordinate: [0.30, 0.31]
				  },
				  {
				    name: '111230',
				    coordinate: [0.30, 0.33],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '屯昌县',
				    coordinate: [0.56, 0.40],
				    halo: {
				      show: true,
				      color: '#8378ea'
				    }
				  },
				  {
				    name: '6230',
				    coordinate: [0.56, 0.42],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '白沙县',
				    coordinate: [0.30, 0.46]
				  },
				  {
				    name: '6230',
				    coordinate: [0.30, 0.48],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '昌江县',
				    coordinate: [0.15, 0.42],
				    halo: {
				      show: true,
				      color: '#37a2da'
				    }
				  },
				  {
				    name: '6230',
				    coordinate: [0.15, 0.443],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '东方市',
				    coordinate: [0.09, 0.54]
				  },
				  {
				    name: '6230',
				    coordinate: [0.09, 0.56],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '乐东县',
				    coordinate: [0.14, 0.69]
				  },
				  {
				    name: '630',
				    coordinate: [0.14, 0.71],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '五指山市',
				    coordinate: [0.34, 0.64],
				    text: {
				      show: true,
				      offset: [48, -3]
				    }
				  },
				  {
				    name: '1630',
				    coordinate: [0.34, 0.66],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [48, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '琼中县',
				    coordinate: [0.47, 0.56]
				  },
				  {
				    name: '1630',
				    coordinate: [0.47, 0.58],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '万宁市',
				    coordinate: [0.69, 0.63]
				  },
				  {
				    name: '1230',
				    coordinate: [0.65, 0.66],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '陵水县',
				    coordinate: [0.54, 0.76]
				  },
				  {
				    name: '430',
				    coordinate: [0.54, 0.78],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '保亭县',
				    coordinate: [0.40, 0.74]
				  },
				  {
				    name: '430',
				    coordinate: [0.40, 0.76],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '三亚市',
				    coordinate: [0.30, 0.82]
				  },
				  {
				    name: '430',
				    coordinate: [0.30, 0.84],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				  {
				    name: '三沙市',
				    coordinate: [0.84, 0.83]
				  },
				  {
				    name: '0',
				    coordinate: [0.84, 0.85],
				    icon: {
				      show: false,
				    },
				    text: {
				      show: true,
				      offset: [40, 7],
				      fontSize: 18
				    }
				  },
				],
				lines: [
				  {
				    source: '澄迈县',
				    target: '海口市',
				    width: 0
				  }
				],
				text: { //文字配置项
				  show: true,
				  fontSize: 17,
				  color: '#fff',
				  // offset: [0, 23]
				  offset: [40, -3]
				},
				icon: { //图标配置项
				  show: true,
				  width: 28,
				  height: 28,
				  src: require('../imgs/mapPoint.png')
				},
				bgImgSrc: require('../imgs/map.png')
			}
		}
	}
}
```
## 可灵活配置
 <mapscreen num="7"/>
 
  <a href="http://192.168.0.149:8081/index.html#/map7" target="map_link">效果预览</a>
  
```js
//对应代码
//template 
<dv-flyline-chart-enhanced :config="config" style="width:600px;height: 600px;" />
//script
export default {
	data() {
		return {
			config: {
				points: [
				    {
						name: '海口市',
						coordinate: [0.73, 0.19],
						halo: {
							show: true,
						},
						icon: {
							src: require('../imgs/mapCenterPoint.png'),
							width: 30,
							height: 30
						},
						text: {
							show: true
						}
				    },
				    {
						name: '澄迈县',
						coordinate: [0.59, 0.24]
				    },
				    {
						name: '文昌市',
						coordinate:  [0.90, 0.23]
				    },
				    {
						name: '琼海市',
						coordinate:  [0.76, 0.45]
				    },
				    {
						name: '定安县',
						coordinate: [0.71, 0.35]
				    },
				    {
						name: '临高县',
						coordinate: [0.465, 0.225]
				    },
				    {
						name: '儋州市',
						coordinate: [0.35, 0.30]
				    },
				    {
						name: '屯昌县',
						coordinate: [0.59, 0.40],
						halo: {
							show: true,
							color: '#8378ea'
						}
				    },
				    {
						name: '白沙县',
						coordinate: [0.34, 0.46]
				    },
				    {
						name: '昌江县',
						coordinate: [0.17, 0.42],
						halo: {
							show: true,
							color: '#37a2da'
						}
				    },
				    {
						name: '东方市',
						coordinate: [0.12, 0.54]
				    },
				    {
						name: '乐东县',
						coordinate: [0.20, 0.69]
				    },
				    {
						name: '五指山市',
						coordinate: [0.37, 0.64]
				    },
				    {
						name: '琼中县',
						coordinate: [0.53, 0.56]
				    },
				    {
						name: '万宁市',
						coordinate: [0.69, 0.63]
				    },
				    {
						name: '陵水县',
						coordinate: [0.55, 0.74]
				    },
				    {
						name: '保亭县',
						coordinate: [0.43, 0.74]
				    },
				    {
						name: '三亚市',
						coordinate: [0.33, 0.80]
				    },
				    {
						name: '三沙市',
						coordinate: [0.88, 0.83]
				    }
				],
				lines: [
				    {
						source: '澄迈县',
						target: '海口市'
				    },
				    {
						source: '儋州市',
						target: '海口市'
				    },
				    {
						source: '文昌市',
						target: '海口市'
				    },
				    {
						source: '琼海市',
						target: '海口市'
				    },
				    {
						source: '屯昌县',
						target: '海口市',
						color: '#fb7293',
						width: 2
				    },
				    {
						source: '昌江县',
						target: '海口市',
						color: '#fb7293',
						width: 4
				    },
				    {
						source: '东方市',
						target: '昌江县',
						color: '#fb7293',
						width: 4
				    },
				    {
						source: '五指山市',
						target: '海口市'
				    },
				    {
						source: '陵水县',
						target: '万宁市'
				    },
				    {
						source: '琼中县',
						target: '海口市'
				    },
				    {
						source: '文昌市',
						target: '海口市',
						color: 'yellow',
						width: 2
				    },
				    {
						source: '乐东县',
						target: '三亚市',
						color: 'yellow',
						width: 2
				    },
				    {
						source: '乐东县',
						target: '海口市',
						color: 'yellow',
						width: 2
				    },
				    {
						source: '保亭县',
						target: '三亚市',
						color: 'yellow',
						width: 2
				    }
				],
				icon: { //图标配置项
				    show: true,
				    width: 30,
				    height: 30,
				    src: require('../imgs/mapPoint.png'),
				},
				text: { //文字配置项
				    show: true,
				    fontSize: 17,
				    color: '#fff',
				    offset: [0, 23]
				},
				k: 0.5,
				bgImgSrc: require('../imgs/map.png')
			}
		}
	}
}
```