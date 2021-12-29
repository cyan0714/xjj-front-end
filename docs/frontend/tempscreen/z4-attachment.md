---
title: 附件
sidebarDepth: 2
---

## 附件

大屏组件中要展示附件时，可直接拿来使用。

::: demo
```vue
<template>
  <div class="attachment">
    <div class="content">
      <img :src="pdfIcon" alt="" />
      <div class="detail">
        <span>关于5月份市督办任务落实情况汇总表.pdf</span>
        <div>
          <span>0.23M</span>
          <span>查看&nbsp; | &nbsp;下载</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pdfIcon: require('../../.vuepress/public/assets/img/common/icon_file.png'),
      };
    },
  };
</script>
<style>
  .content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 300px;
    height: 86px;
    padding: 10px 16px;
    background: url('../../.vuepress/public/assets/img/common/icon_bg.png') no-repeat;
    background-size: 100%;
  }
  .content img {
    width: 32px;
    height: 40px;
    flex-shrink: 0;
  }
  .detail {
    flex: 1;
    margin-left: 20px;
    font-size: 14px;
    color: #fff;
  }
  .content .detail div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .attachment .detail div span:nth-child(2) {
    color: #15c2f4;
  }
</style>
```
:::
