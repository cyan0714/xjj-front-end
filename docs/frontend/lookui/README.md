---
title: 开发指南
---

## 依赖

> vue2 + element

## 准备

1. 安装 elementui

```sh
npm i element-ui -S
```

2. 在 main.js 中引入 element 组件和样式

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/lookui.all.min.css'

Vue.use(ElementUI)
```

