---
title: 介绍
---
## 介绍
vue框架是基于vue全家桶+elementui实现的二次开发框架，代码结构已模块化。vue全家桶+elementui技术栈请阅读相关文档
1. vue全家桶
+ vue2.0 [链接到vue2.0](https://cn.vuejs.org/)
+ Vue-router [链接到Vue-router](https://router.vuejs.org/zh/)
+ Vuex [链接到Vuex](https://vuex.vuejs.org/zh/)
+ Axios [链接到Axios](https://www.kancloud.cn/yunye/axios/234845)
2. ElementUI
+ [链接到ElementUI](https://element.eleme.cn/#/)
![JavaScript Number](/frontend/vue/induce/elementui.png)
## 工程骨架
[工程骨架git地址](http://192.168.0.66/frontGroup/single/xjj-single-pro.git)
+ 安装依赖
yarn
+ 运行
yarn serve
+ 打包
yarn build
## 代码结构说明
遵循 “约定优于配置” 的原则，推荐的目录结构如下：
```js
|-- vue-ele-template
    |-- .env.development
    |-- .env.production
    |-- babel.config.js
    |-- package.json
    |-- vue.config.js
    |-- dist
    |-- public
    |   |-- favicon.ico
    |   |-- index.html
    |-- src
        |-- App.vue
        |-- main.js
        |-- permission.js
        |-- router.js
        |-- settings.js
        |-- store.js
        |-- modules
            |-- ansiEtheus
            |   |-- api
            |   |-- components
            |   |-- router
            |   |   |-- index.js
            |   |-- store
            |   |   |-- index.js
            |   |-- views
            |-- base
            |-- layout
            |-- login
            |-- syssetting
```
+ <font color=#477BB2>vue-ele-template/.env.development</font>：开发环境变量配置文件
+ <font color=#477BB2>vue-ele-template/.env.production</font>：生产环境变量配置文件
+ <font color=#477BB2>vue-ele-template/babel.config.js</font>：babel配置文件
+ <font color=#477BB2>vue-ele-template/vue.config.js</font>：webpack配置文件
+ <font color=#477BB2>vue-ele-template/dist</font>：编译目录
+ <font color=#477BB2>vue-ele-template/public</font>：静态资源目录。
+ <font color=#477BB2>vue-ele-template/src</font>：源码目录，业务模块和基础模块代码目录
+ <font color=#477BB2>vue-ele-template/src/permission.js</font>：权限文件
+ <font color=#477BB2>vue-ele-template/src/router.js</font>：全局路由文件
+ <font color=#477BB2>vue-ele-template/src/settings.js</font>：全局配置文件
+ <font color=#477BB2>vue-ele-template/src/store.js</font>：全局状态管理文件
+ <font color=#477BB2>vue-ele-template/src/modules</font>：业务模块和基础模块目录
+ <font color=#477BB2>vue-ele-template/src/modules/ansiEtheus</font>：业务模块示例目录
+ <font color=#477BB2>vue-ele-template/src/modules/ansiEtheus/api</font>：接口统一实现目录
+ <font color=#477BB2>vue-ele-template/src/modules/ansiEtheus/components</font>：组件目录
+ <font color=#477BB2>vue-ele-template/src/modules/ansiEtheus/router/index.js</font>：路由文件
+ <font color=#477BB2>vue-ele-template/src/modules/ansiEtheus/store/index.js</font>：状态管理文件
+ <font color=#477BB2>vue-ele-template/src/modules/ansiEtheus/views</font>：视图目录
+ <font color=#477BB2>vue-ele-template/src/modules/base</font>：基础模块目录
+ <font color=#477BB2>vue-ele-template/src/modules/layout</font>：系统布局模块目录
+ <font color=#477BB2>vue-ele-template/src/modules/login</font>：系统登录模块目录
+ <font color=#477BB2>vue-ele-template/src/modules/syssetting</font>：系统设置模块目录