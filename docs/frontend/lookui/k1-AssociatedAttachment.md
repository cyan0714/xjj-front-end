---
title: AssociatedAttachment
---

## 基础用法

:::demo

```vue
<template>
  <section>
    <look-associated-attachment
      :data="data"
      :url="url"
      :ticket="ticket"
      @previous="onPrevious"
      @confirm="onConfirm"
    />
  </section>  
</template>

<script>
export default {
  data() {
    return {
      data: [],
      url: 'http://192.168.230.186:9099',
      ticket: '8e6b6a197a6d1a25b5b476cc11b24bd3'
    }
  },
  created() {
    this.data =  [
       {title: '流程实例迁移（公文标题）', type: 1, showTime: '2023-12-01 14:12', procInstId: 690180},
       {title: '省府办发文流程（多发节点）(20087sfy)', type: 0, showTime: '2024-01-01 12:12', procInstId: 689554 },
    ]
  },
  methods: {

    /**
     * 上一步事件
     * @param {Array} val 返回已经勾选的公文信息
     */
    onPrevious(val) {
       this.$message.success(JSON.stringify(val))
    },

     /**
     * 确定事件
     * @param {Array} val 返回已经勾选的公文信息
     */
    onConfirm(val) {
      this.$message.success(JSON.stringify(val))
    }
  },
}
</script>

:::

### 属性
<br/>

| 参数                        | 说明                          | 类型      | 可选值 | 默认值  |
| --------------------------- | ----------------------------- | -------  | ------ | ------ |
| data                        | 含公文信息的一个数组            | Array    | —      | []     |
| url                         | 接口请求地址                   | String   | —      | —      |
| ticket                      | 用户票据                       | String   | —      | —      |


### 事件
<br/>

| 事件                        | 说明                  | 回调参数                |
| ---------------------       | --------------------  | ----------------------  |
| previous                  | 上一步事件            | 返回已经勾选的公文信息  | 
| confirm                   | 确定事件              | 返回已经勾选的公文信息  | 
