---
title: DuplicateChecking
---

## 基础用法

:::demo

```vue
<template>
  <look-dulplicate-checking
    :noDealMission="noDealMission"
    :hadDealMission="hadDealMission"
    :checkingResultList="checkingResultList"/>
</template>

<script>
export default {
  data() {
    return {
      // 未处理任务
      noDealMission: {
        // 存在相似任务列表
        similar: [
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
        ],
        // 不存在相似任务列表
        dissimilar: [
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
        ]
      },
      // 已处理任务
      hadDealMission: {
        similar: [
          {
            name:
              '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
            checked: false,
            checkResultListLength: 0,
            checkResultList: [
              { name: '省政府督查', count: 3 },
              { name: '省委督查', count: 3 },
              { name: '深改办(自贸办)', count: 2 },
            ],
            status: 3,
            relation:
              '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
          },
          {
            name:
              '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
            checked: false,
            checkResultListLength: 0,
            checkResultList: [
              { name: '省政府督查', count: 3 },
              { name: '省委督查', count: 3 },
              { name: '深改办(自贸办)', count: 2 },
            ],
            status: 3,
            relation:
              '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
          },
        ],
        dissimilar: [
          {
            name:
              '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
            checked: false,
            status: 3,
            relation:
              '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
          },
          {
            name:
              '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
            checked: false,
            status: 3,
            relation:
              '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
          },
          {
            name:
              '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
            checked: false,
            status: 3,
            relation:
              '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
          },
        ],
      },
      checkingResultList: [],
    };
  },
  methods: {
  }
};
</script>
```
:::


### 属性

| 参数                  | 说明                          | 类型    | 可选值 | 默认值 |
| --------------------- | ----------------------------- | ------- | ------ | ------ |
| isShowSource   | 是否展示来源及要求 | boolean | -      | true   |
| noDealMission    | 未处理任务 | array   | -      | { similar: [ ], dissimilar: [ ] }      |
| hadDealMission    | 已处理任务 | array   | -      | { similar: [ ], dissimilar: [ ] }    |
| checkingResultList    | 当前任务的查重结果列表 | array   | -      | -      |

### 事件

| 事件名             | 说明                         | 回调参数   |
| ------------------ | ---------------------------- | ---------- |
| toggle-source      | 当切换来源及要求时触发该事件 | val(当前选中的任务), index(当前选中任务的下标) |
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
