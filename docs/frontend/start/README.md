---
title: 介绍
---
## 介绍
为了减少大家对常用组件的使用成本，特地整合出了这一份组件文档，日后会不断完善及更新，追求高质量高效率的前端开发。
## 安装环境
依赖vue框架，推荐使用公司前端骨架工程 <a href="http://192.168.0.66/frontGroup/single/xjj-single-pro" target="_blank">git地址</a><br/>
具体使用可 <a href="http://192.168.0.96:2023/frontend/vue/#工程骨架">查看文档</a>
## 安装DataV
npm安装
```js
npm install @jiaminghi/data-view
```
cnpm安装
```js
cnpm install @jiaminghi/data-view
```
yarn安装
```js
yarn add @jiaminghi/data-view
```
使用
```js
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
```
注意需在前端工程骨架中需要配置，否则容易运行报错
```js
const dataViewDir = `.${nodeModules}/@jiaminghi/data-view`
//并找到chainWebpack()方法，
在 config.module.rule('compile').test(/\.js$/) 后配置.add(resolve(dataViewDir))
config.module.rule('vue') 后配置 .add(resolve(dataViewDir))
```
