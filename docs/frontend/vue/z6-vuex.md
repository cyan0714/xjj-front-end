---
title: 状态管理(vuex)
---
## 介绍
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。更多的内容请移步至[官网](https://vuex.vuejs.org/zh/)进行查阅

## 快速开始
每个模块的vuex都被放到store目录中，如图：
![JavaScript Number](/frontend/vue/vuex/step1.png)
+ <font color=#477BB2>action.js</font>：定义vuex的action
+ <font color=#477BB2>getter.js</font>：定义vuex的getter
+ <font color=#477BB2>index.js</font>：定义vuex统一入口
+ <font color=#477BB2>mutation-types.js</font>：定义vuex的mutation-types
+ <font color=#477BB2>mutations.js</font>：定义vuex的mutations
+ <font color=#477BB2>state.js</font>：：定义vuex的state

## 定义action
```js
  import types from './mutation-types'
  export default {
      [types.SET_PROPERTY]({ commit }, property) {
          commit(types.SET_PROPERTY, property);
      }
  }
```

