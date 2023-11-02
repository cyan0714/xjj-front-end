---
title: DuplicateChecking
---

## 基础用法

:::demo

```vue
<template>
  <div style="height: 700px">
    <look-dulplicate-checking
      :data="data"
      @merging-click="mergingClick"
      @subscription-click="subscriptionClick"
      @insertion-click="insertionClick"
      @detail-click="handleViewDetail"
      @onCancelBtnClick="handleCancelBtnClick">
        <!-- 自定义查重结果列表操作按钮 -->
        <!-- <template v-slot:operating-btns="{source}">
          <el-button size="small" @click="handleDiyBtnClick(source)">自定义按钮</el-button>
        </template> -->
    </look-dulplicate-checking>
  </div>
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
          status: '',
          checkResultListLength: 0,
        },
        {
          taskId: '2',
          name: '事项工作内容',
          checked: false,
          tenantId: '4602000038',
          status: '已关注',
          checkResultListLength: 0,
        },
        {
          taskId: '3',
          name: '琼海',
          checked: false,
          tenantId: '4602000038',
          checkResultListLength: 0,
          status: '', // 已处理任务的状态
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
    handleDiyBtnClick(row) {
      console.log('自定义按钮', row);
    },
    handleViewDetail(row) {
      console.log('查看', row);
    },
    handleCancelBtnClick(item) {
      console.log('取消', item)
    },
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
<br/>

| 参数                  | 说明                          | 类型    | 可选值 | 默认值 |
| --------------------- | ----------------------------- | ------- | ------ | ------ |
| data                   | 导入的任务数据             | array   | -      | [] |
| isShowSource           | 是否展示来源及要求          | boolean | -      | true   |

### 事件
<br/>

| 事件名             | 说明                         | 回调参数   |
| ------------------ | ---------------------------- | ---------- |
| toggle-source      | 当切换来源及要求时触发该事件 | val(当前任务的查重结果列表), index(当前选中任务的下标) |
| detail-click       | 当点击查看详情时触发该事件   | row        |
| name-click       | 当点击任务标题名称时触发该事件   | row        |
| checking-name-click  | 当点击查重结果标题名称时触发该事件   | row        |
| subscription-click | 当点击关注时触发该事件       | row        |
| merging-click      | 当点击归并时触发该事件       | row        |
| insertion-click    | 当点击插入时触发该事件       | row        |
| createTasks | 当点击批量创建任务按钮时触发该事件 | - |
| onCancelBtnClick | 当点击取消关注、合并、插入等按钮时触发该事件 | item(当前任务对象) |
| onClickNoDealSimilar | 当点击未处理任务-存在相似任务item时触发该事件 | index |
| onClickNoDealDissimilar | 当点击未处理任务-不存在相似任务item时触发该事件 | index |
| onClickDealSimilar | 当点击已处理任务-存在相似任务item时触发该事件 | index |
| onClickDealDissimilar | 当点击已处理任务-不存在相似任务item时触发该事件 | index |

### 方法
<br/>

| 方法名 | 说明 | 回调参数 |
| ------ | ---- | -------- |

### 插槽 Slot
<br/>

| name | 说明 |
| ------ | ---- |
| operating-btns | 自定义查重结果列表操作按钮, 参数为 { source(当前查重结果对象) } |
