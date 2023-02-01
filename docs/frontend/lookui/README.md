---
title: 开发指南
---

## 依赖

> vue2 + element

## 准备

1. 安装 element-ui、look-ui

```sh
npm i element-ui look-ui -S
```

2. 在 main.js 中引入 element-ui、look-ui 的组件和样式

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LookUI from 'look-ui'
import 'look-ui/index.scss'

Vue.use(ElementUI)
Vue.use(LookUI)
```

