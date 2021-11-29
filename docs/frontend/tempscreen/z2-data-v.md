---
title: dataV 常用大屏组件
---

<!-- ## 边框

<dv-border-1/>

将下方代码复制到对应位置

```html
<dv-border-box-1>dv-border-box-1</dv-border-box-1>
```

<dv-border-8/>

将下方代码复制到对应位置

```html
<dv-border-box-8>dv-border-box-8</dv-border-box-8>
``` -->

## 安装 dataV

- npm 安装

```sh
npm install @jiaminghi/data-view
```

- yarn 安装

```sh
yarn add @jiaminghi/data-view
```

## 使用

```js
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
```

[dataV 官网](http://datav.jiaminghi.com/)

## 动态环图

<dv-active-ring/>

将下方代码复制到对应位置

```html
<dv-active-ring-chart :config="config" style="width:300px;height:300px;" />
```

```js
export default {
  data () {
    return {
      config: {
        data: [
          {
            name: '周口',
            value: 55,
          },
          {
            name: '南阳',
            value: 120,
          },
          {
            name: '西峡',
            value: 78,
          },
          {
            name: '驻马店',
            value: 66,
          },
          {
            name: '新乡',
            value: 80,
          },
        ],
      },
    }
  }
};
```

## 排名图

<ranking-table/>

将下方代码复制到对应位置

```html
<dv-scroll-ranking-board :config="config" style="width:500px;height:300px" />
```

```js
export default {
    data() {
      return {
        config: {
          data: [
            {
              name: '周口',
              value: 55
            },
            {
              name: '南阳',
              value: 120
            },
            {
              name: '西峡',
              value: 78
            },
            {
              name: '驻马店',
              value: 66
            },
            {
              name: '新乡',
              value: 80
            }
          ],
          unit: '单位'
        },
      };
    },
  };
```

## 轮播表

<scroll-table/>

将下方代码复制到对应位置

```html
<dv-scroll-board :config="config" style="width:500px;height:220px" />
```

```js
export default {
    data() {
      return {
        config: {
          header: ['列1', '列2', '列3'],
          data: [
            ['行1列1', '行1列2', '行1列3'],
            ['行2列1', '行2列2', '行2列3'],
            ['行3列1', '行3列2', '行3列3'],
            ['行4列1', '行4列2', '行4列3'],
            ['行5列1', '行5列2', '行5列3'],
            ['行6列1', '行6列2', '行6列3'],
            ['行7列1', '行7列2', '行7列3'],
            ['行8列1', '行8列2', '行8列3'],
            ['行9列1', '行9列2', '行9列3'],
            ['行10列1', '行10列2', '行10列3']
          ],
          index: true,
          columnWidth: [50],
          align: ['center'],
          carousel: 'page'
        },
      };
    },
  };
```
