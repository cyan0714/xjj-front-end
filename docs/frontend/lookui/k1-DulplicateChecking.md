---
title: DuplicateChecking
---

## 基础用法

:::demo

```vue
<template>
  <look-dulplicate-checking
    :data="data"
    @merging-click="mergingClick"
    @subscription-click="subscriptionClick"
    @insertion-click="insertionClick" />
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          taskId: '1',
          name: '三亚市第一艘海洋休闲渔船',
          checked: false,
          tenantId: '4602000038',
          checkResultListLength: 0,
        },
        {
          taskId: '2',
          name: '事项工作内容',
          checked: false,
          tenantId: '4602000038',
          checkResultListLength: 0,
        },
        {
          taskId: '3',
          name: '琼海',
          checked: false,
          tenantId: '4602000038',
          checkResultListLength: 0,
          status: '已关注', // 已处理任务的状态
          relation: '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》', // 已处理任务的关联任务的名字
        },
      ],
    };
  },
  created() {
  },
  computed: {
  },
  methods: {
    insertionClick(row) {
      console.log('插入', row)
    },
    subscriptionClick(row) {
      console.log('关注', row)
    },
    mergingClick(row) {
      console.log('归并', row)
    },
  },
};
</script>

```
:::


### 属性

| 参数                  | 说明                          | 类型    | 可选值 | 默认值 |
| --------------------- | ----------------------------- | ------- | ------ | ------ |
| data                   | 导入的任务数据             | array   | -      | [] |
| isShowSource           | 是否展示来源及要求          | boolean | -      | true   |

### 事件

| 事件名             | 说明                         | 回调参数   |
| ------------------ | ---------------------------- | ---------- |
| toggle-source      | 当切换来源及要求时触发该事件 | val(当前任务的查重结果列表), index(当前选中任务的下标) |
| detail-click       | 当点击查看详情时触发该事件   | row        |
| subscription-click | 当点击关注时触发该事件       | row        |
| merging-click      | 当点击归并时触发该事件       | row        |
| insertion-click    | 当点击插入时触发该事件       | row        |
| createTasks | 当点击批量创建任务按钮时触发该事件 | - |
| onClickNoDealSimilar | 当点击未处理任务-存在相似任务item时触发该事件 | index |
| onClickNoDealDissimilar | 当点击未处理任务-不存在相似任务item时触发该事件 | index |
| onClickDealSimilar | 当点击已处理任务-存在相似任务item时触发该事件 | index |
| onClickDealDissimilar | 当点击已处理任务-不存在相似任务item时触发该事件 | index |

### 方法

| 方法名 | 说明 | 回调参数 |
| ------ | ---- | -------- |
