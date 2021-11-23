---
title: 路由(router)
---

## 介绍
本框架基于vue-router路由实现，Vue Router 是 [Vue.js](https://www.iconfont.cn/) 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：
+ 嵌套的路由/视图表
+ 模块化的、基于组件的路由配置
+ 路由参数、查询、通配符
+ 基于 Vue.js 过渡系统的视图过渡效果
+ 细粒度的导航控制
+ 带有自动激活的 CSS class 的链接
+ HTML5 历史模式或 hash 模式，在 IE9 中自动降级
+ 自定义的滚动条行为

了解更多，请移步到[官网](https://router.vuejs.org/zh/)进行查阅
## 快速开始
1. 在自己的模块下创建一个router/index.js文件，如图：
![JavaScript Number](/frontend/vue/router/step1.png)
2. 并在index.js定义自己的路由，内容如下：
```js
export default [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@layout/modules/layout/views/'),
    alwaysShow: true, // will always show the root menu
    meta: {
        title: '示例',
        icon: 'setting'
    },
    children: [{
        path: 'demo1',
        component: () => import('../views/constmanager/list'),
        name: 'org',
        meta: {
        title: '示例1',
        affix: false
        }
    }
  ]
}]

```
3. 上述内容为定义一个name为demo的路由，此路由为嵌套路由，访问路由地址为，/demo/demo1，即父路由的path+子路由的path组合进行访问，将此路由加入到左侧栏目的效果如下图：
![JavaScript Number](/frontend/vue/router/step2.png)
## 详细文档

| 参数       | 必须                                   | 说明                                                                            | 类型          | 默认值                                                                        |
|:-----------|:---------------------------------------|:--------------------------------------------------------------------------------|:--------------|:------------------------------------------------------------------------------|
| path       | &nbsp;&nbsp;&nbsp;是&nbsp;&nbsp;&nbsp; | 路由地址，如：/demo，可通过此属性访问地址,this.$router.push({"/demo")           | string        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    |
| name       | &nbsp;&nbsp;&nbsp;是&nbsp;&nbsp;&nbsp; | 路由名字,可通过此属性访问地址,this.$router.push({ name: "demo" })               | string        | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    |
| component  | &nbsp;&nbsp;&nbsp;否&nbsp;&nbsp;&nbsp; | 组件，指定路由要跳转到哪个组件                                                  | string/Object | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    |
| alwaysShow | &nbsp;&nbsp;&nbsp;否&nbsp;&nbsp;&nbsp; | 如果有子路由，需要设置该属性为true，可展开收缩                                  | Boolean       | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;false&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| meta       | &nbsp;&nbsp;&nbsp;否&nbsp;&nbsp;&nbsp; | meta中的title定义左侧栏目的名称，icon定义图标，还有其他更多属性，请参考官网文档 | Boolean       | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;false&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| children   | &nbsp;&nbsp;&nbsp;否&nbsp;&nbsp;&nbsp; | 嵌套路由的子路由，用于左侧栏目的二级栏目显示，此时父路由的component选项设置需要设置为component: () => import('@layout/modules/layout/views/'),                                    | Boolean       | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
| hidden   | &nbsp;&nbsp;&nbsp;否&nbsp;&nbsp;&nbsp; | 用于显示或隐藏左侧栏目，true：隐藏，false：显示                                    | Boolean       | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;false&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |

更多的文档内容请移步至[官网](https://router.vuejs.org/zh/)进行查阅