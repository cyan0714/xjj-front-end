---
title: 框架说明
---
## 介绍
vue框架是基于vue全家桶+vantui实现的二次开发框架，代码结构已模块化。vue全家桶+vantui技术栈请阅读相关文档
1. vue全家桶
+ vue2.0 [链接到vue2.0](https://cn.vuejs.org/)
+ Vue-router [链接到Vue-router](https://router.vuejs.org/zh/)
+ Vuex [链接到Vuex](https://vuex.vuejs.org/zh/)
+ Axios [链接到Axios](https://www.kancloud.cn/yunye/axios/234845)
2. vantUI
+ [链接到vantUI](https://youzan.github.io/vant/#/zh-CN/)
![JavaScript Number](/frontend/vue/induce/vantui.png)
## 工程骨架
[工程骨架git地址](http://192.168.0.66/frontGroup/vue-repo/xjj-cli-vue-vant-template.git)
+ 安装依赖
yarn
+ 运行
yarn serve
+ 打包
yarn build
## 代码结构说明
遵循 “约定优于配置” 的原则，推荐的目录结构如下：
```js
|-- vue-vant-template
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
+ <font color=#477BB2>vue-vant-template/.env.development</font>：开发环境变量配置文件
+ <font color=#477BB2>vue-vant-template/.env.production</font>：生产环境变量配置文件
+ <font color=#477BB2>vue-vant-template/babel.config.js</font>：babel配置文件
+ <font color=#477BB2>vue-vant-template/vue.config.js</font>：webpack配置文件
+ <font color=#477BB2>vue-vant-template/dist</font>：编译目录
+ <font color=#477BB2>vue-vant-template/public</font>：静态资源目录。
+ <font color=#477BB2>vue-vant-template/src</font>：源码目录，业务模块和基础模块代码目录
+ <font color=#477BB2>vue-vant-template/src/permission.js</font>：权限文件
+ <font color=#477BB2>vue-vant-template/src/router.js</font>：全局路由文件
+ <font color=#477BB2>vue-vant-template/src/settings.js</font>：全局配置文件
+ <font color=#477BB2>vue-vant-template/src/store.js</font>：全局状态管理文件
+ <font color=#477BB2>vue-vant-template/src/modules</font>：业务模块和基础模块目录
+ <font color=#477BB2>vue-vant-template/src/modules/ansiEtheus</font>：业务模块示例目录
+ <font color=#477BB2>vue-vant-template/src/modules/ansiEtheus/api</font>：接口统一实现目录
+ <font color=#477BB2>vue-vant-template/src/modules/ansiEtheus/components</font>：组件目录
+ <font color=#477BB2>vue-vant-template/src/modules/ansiEtheus/router/index.js</font>：路由文件
+ <font color=#477BB2>vue-vant-template/src/modules/ansiEtheus/store/index.js</font>：状态管理文件
+ <font color=#477BB2>vue-vant-template/src/modules/ansiEtheus/views</font>：视图目录
+ <font color=#477BB2>vue-vant-template/src/modules/base</font>：基础模块目录
+ <font color=#477BB2>vue-vant-template/src/modules/layout</font>：系统布局模块目录
+ <font color=#477BB2>vue-vant-template/src/modules/login</font>：系统登录模块目录
+ <font color=#477BB2>vue-vant-template/src/modules/syssetting</font>：系统设置模块目录