---
title: AssociatedDocument
---

## 基础用法

:::demo

```vue
<template>
  <section>
    <look-associated-document
      :selectedData="selectedData"
      :url="url"
      :ticket="ticket"
      @add="onAdd"
      @delete="onDelete"
      @clear="onClear"
      @next="onNext"
    />
  </section>  
</template>

<script>
export default {
  data() {
    return {
      selectedData: [],
      url: 'http://192.168.230.186:9099',
      ticket: '8e6b6a197a6d1a25b5b476cc11b24bd3'
    }
  },
  methods: {

    /**
     * 关联事件
     * @param {Object} val 返回关联的公文信息
     */
    onAdd(val) {
       this.$message.success(JSON.stringify(val))
    },

    /**
    * 取消关联事件
    * @param {Object} val 返回取消关联的公文信息
    */
    onDelete(val) {
      this.$message.success(JSON.stringify(val))
    },

    /**
    * 清空事件
    * @param {Array} val 返回一个空数组
    */
    onClear(val) {
      this.$message.success(JSON.stringify(val))
    },

    /**
    * 下一步事件
    * @param {Array} val 返回已经关联的公文信息
    */
    onNext(val) {
      this.$message.success(JSON.stringify(val))
    }
  }
}
</script>

:::

### 属性
<br/>

| 参数                        | 说明                          | 类型      | 可选值 | 默认值  |
| --------------------------- | ----------------------------- | -------  | ------ | ------ |
| selectedData                | 被关联的公文信息            | Array    | —      | []     |
| url                         | 接口请求地址                   | String   | —      | —      |
| ticket                      | 用户票据                       | String   | —      | —      |


### 事件
<br/>

| 事件                   | 说明                  | 回调参数             |
| --------------------- | -------------------- | --------------------- |
| add                 | 关联事件              | 返回关联的公文信息     | 
| delete              | 取消关联事件          | 返回取消关联的公文信息 |
| clear               | 清空事件              | 返回一个空数组        |
| next                | 下一步事件            | 返回已经关联的公文信息 |  
| search                | 查询事件              | 返回查询结果集 | 
| sizeChange                | 页码改变事件            | 返回当前页码大小和查询结果 | 
| currentChange                | 当前页改变事件            | 返回当前页和查询结果| 
| tabClick             | tabbar 切换事件            | 返回被点击的 tab | 
