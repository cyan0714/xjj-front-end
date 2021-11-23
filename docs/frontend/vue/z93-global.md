---
title: 全局常量
---

## 介绍
全局常量用于设置系统一些全局配置在/src/settings.js文件中，可自行添加自行调用，通过this.$global获取常量值
## 详细文档
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:----------------------------|:---------------|:---------------|:---------------|:---------------|
|name | 是&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 在/src/modules/下的子目录，如/src/modules/demo，demo为你的模块目录。用于系统预加载功能，比如svg图标加载，务必保证此属性的唯一性，|string|&nbsp;&nbsp;&nbsp;&nbsp;无&nbsp;&nbsp;&nbsp;&nbsp;|
|title | 是| 模块或系统名称|string|无|
|serverPrefix | 是| 接口api前缀|string|无|
| dynamicRouter | 是| false是静态路由，true是动态路由，设置左侧栏目是否通过接口获取|boolean|无|
| whiteRouteList | 是| 过滤路由，数组中的路由项不会被操作，而是直接添加到路由中，不做权限控制,  在静态路由状态下不会使用这个值|Array|无|
| loginApi | 是| 登录接口|string|无|
| logoutApi | 是| 登出接口|string|无|
| whiteList | 是| 白名单路由，设置路由不登录也能访问到|Array|无|
| request | 是| 请求参数设置|object|无|
| request/tokenName | 是| 设置传给接口的key，比如：ticket/token|string|无|
| request/userName | 是| 可通过此属性获取到用户名|string|无|
| request/timeout | 是| 请求超时时间|number|无|
| interceptor | 是| 设置是否需要登录|boolean|无|
| response | 是| 设置请求响应信息|object|无|
| response/statusName | 是| 设置获取响应状态码的key ，如：code/resultCode|string|无|
| response/msgName | 是| 设置获取响应状态信息的key msg/resultMsg|string|无|
| response/dataName | 是| 设置获取响应数据的key data/resultData|string|无|
| response/statusCode | 是| 设置成功或失败的状态码|object|无|
| response/statusCode/ok | 是| 接口请求成功状态码|number|无|
| response/statusCode/logout | 是| 会话失效状态码|number|无|
| response/statusCode/error | 是| 接口请求失败状态码|number|无|
| pKey | 否| 登录接口需要的私钥|string|无|
| hideHeader | 否| 显示或隐藏框架的头部布局|boolean|无|
| fixedHeader | 否| 固定或非固定框架的头部|boolean|无|
| sidebarLogo | 否| 是否显示头部的系统名称|boolean|无|
| hideBreadcrumb | 否| 是否显示头部的面包屑|boolean|无|
