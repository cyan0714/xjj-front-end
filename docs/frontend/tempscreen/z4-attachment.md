---
title: 附件
sidebarDepth: 2
---

## 附件

<attach-cpn1 />
上方为附件效果，想要在项目中使用只需以下两步：

1. 注册。将以下代码复制到你项目的`components`文件夹下的一个`.vue`文件中，文件名自取，如`MyAttachment.vue`。

```vue
<template>
  <div class="attachment">
    <div class="content">
      <img :src="attachPic" alt="" />
      <div class="detail">
        <span class="text">{{ contentText }}</span>
        <div>
          <span>{{ size }}</span>
          <span>查看&nbsp; | &nbsp;下载</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      contentText: {
        type: String,
        default: 'default.pdf',
      },
      size: {
        type: String,
        default: '0.23M',
      },
      attachPic: {
        type: String,
        default: () => {
          return require('.vuepress/public/assets/img/common/icon_file.png');
        },
      },
    },
  };
</script>
<style lang="scss" scoped>
  .content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 300px;
    height: 86px;
    padding: 10px 16px;
    background: url('../../../.vuepress/public/assets/img/common/icon_bg.png') no-repeat;
    background-size: 100%;
    img {
      width: 32px;
      height: 40px;
      flex-shrink: 0;
    }
    .detail {
      flex: 1;
      margin-left: 20px;
      font-size: 14px;
      color: #fff;
      .text {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; 
        overflow: hidden;
        text-overflow: ellipsis;
      }
      div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        span:nth-child(2) {
          color: #15c2f4;
        }
      }
    }
  }
</style>
```

2. 使用。在需要使用的地方引入即可。

```vue
<my-attachment content-text='附件名附件名附件名附件名附件名附件名.pdf' size='6.66M' />
```
如需改变左边的图标，传入对应的`attachPic`即可。

效果如下：  

<attach-cpn1 content-text='附件名附件名附件名附件名附件名附件名.pdf' size='6.66M' />


