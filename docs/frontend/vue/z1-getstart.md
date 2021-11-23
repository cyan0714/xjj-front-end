---
title: 快速开始
---

## 介绍
本章节将介绍如何快速开始搭建新的项目模板直接开发，本框架包含以下内容：
+ 组件库
+ 常用工具函数
+ 常用过滤器
+ 布局模块
+ 系统设置模块
+ 登录模块
+ 支持svg图标的使用

## 创建新的工程
1. 下载骨架工程：git clone http://192.168.0.66/frontGroup/single/xjj-single-pro.git，生成xjj-vue-pro目录，目录包含以下内容，如图：
![JavaScript Number](/frontend/vue/getstart/step1.png)
2. 将工程重新命名为你自己的工程名，并将.git目录删除
## 运行
切换到项目的根目录下，即package.json所在目录，执行以下命令运行项目，如没有安装开发环境，请先移步至[开发指南](/frontend/guide/)先进行安装
```js
yarn serve
```
## 编写一个示例()
本章节介绍如何开发一个系统设置模块的常量管理列表功能，先根据demo目录示例，复制一个自己的业务模块目录，如：我的模块为syssetting模块
+ 编写列表页面
在/src/modules/syssetting/views目录下创建一个list.vue页面，内容如下：
```js
    <template>
  <div class="app-container" ref="app-container">
    <el-table :data="items" style="width: 100%" v-loading="menulistLoading">
      <el-table-column prop="name" label="常量名称" width="260" />
      <el-table-column label="常量值" prop="value" />
      <el-table-column label="描述" prop="remark" />
      <el-table-column label="日期">
        <template slot-scope="{row}">{{row.updateTime | formatTime}}</template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="text" size="small" @click="handleUpdate(row)">编辑</el-button>
          <el-button type="text" size="small" @click="deleteItem(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

```
+ 定义方法获取接口数据
在/src/modules/syssetting/api下创建一个constmanagerApi.js文件，如图：
![JavaScript Number](/frontend/vue/getstart/step3.png)
内容为：
```js
    import request from '@xjjbase/modules/xjjvuebase/utils/request'
    export const listUrl = '/api/constants?page=1&limit=10'
    export const listApi = function () {
        return request({
            url: listUrl,
            method: 'get'
        })
    }
```
+ 调用获取list数据方法
在/src/modules/syssetting/views/list.vue下，引入定义的api，然后调用，如下：
```js
<script>
import { listApi } from "../../api/constmanagerApi";
export default {
    name: "ConstmanagerList",
    data() {
        return {
        menulistLoading: false
        };
    },
    created() {
        this.list();
    },
    methods: {
        list() {
        this.menulistLoading = true;
        listApi()
            .then((res) => {
            return parseRes(res);
            })
            .then((data) => {
            this.items = data;
            this.menulistLoading = false;
            })
            .catch((err) => {
            this.menulistLoading = false;
            });
        }
    },
};
</script>
```
## 调试
下载调试工具[dev-tools](https://github.com/vuejs/vue-devtools#vue-devtools),具体安装方法自行在网上查找，本章节不做过多讲解，安装完成后打开F12开发人员调试工具，chrome浏览器的效果如图：
![JavaScript Number](/frontend/vue/getstart/step2.png)
## 打包
你的项目已经开发完成，需要打包部署，执行以下项目打包项目,打包成功后，会自动生成static目录，此目录就是通过webpack打包生成，将此目录放到nginx上部署
```js
yarn build
```
## 部署
本项目可以独立用nginx部署，也可以跟后端服务一起部署。具体部署方式请阅读[nginx部署文档](/frontend/nginx/)