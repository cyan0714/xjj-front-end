---
title: DuplicateChecking
---

## 基础用法

:::demo

```vue
<template>
  <look-dulplicate-checking
    :loadingCheckResultList="loadingCheckResultList"
    :noDealSimilarList="noDealSimilarList"
    :noDealDissimilarList="noDealDissimilarList"
    :hadDealSimilarList="hadDealSimilarList"
    :hadDealDissimilarList="hadDealDissimilarList"
    :checkingResultList="checkingResultList"
    @toggle-source="toggleSource"
    @detail-click="handleDetailClick"
    @subscription-click="handleSubscribe"
    @merging-click="handleMerge"
    @insertion-click="handleInsert"
    @onClickNoDealSimilar="onClickNoDealSimilar" />
</template>

<script>
export default {
  data() {
    return {
      loadingCheckResultList: false,
      allCheckingResultList: [],
      // 未处理任务-存在相似任务列表
      noDealSimilarList: [
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
      // 未处理任务-不存在相似任务列表
      noDealDissimilarList: [
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
      // 已处理任务-存在相似任务列表
      hadDealSimilarList: [
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
      // 已处理任务-不存在相似任务列表
      hadDealDissimilarList: [
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
      checkingResultList: [],
      fakeAllCheckingResultList: [
        {
          hitRes: [
            {
              beginTime : "2023-09-12 15:03:18",
              name : "四证齐全！三亚市第一艘海洋休闲渔船从威海启航返程三亚",
              qtOrgs : "三亚市财政局",
              source : "gzls",
              sourceName : "工作落实",
              status : "督办中"
            },
            {
              beginTime : "2023-10-12 15:03:18",
              name : "四证齐全！三亚市第一艘海洋休闲渔船从威海启航返程三亚",
              qtOrgs : "三亚市财政局",
              source : "gzls",
              sourceName : "工作落实",
              status : "督办中"
            }
          ],
          keyId : "1",
          size : 2
        },
        {
          hitRes: [
            {
              beginTime : "2023-09-12 15:03:18",
              name : "四证齐全！三亚市第一艘海洋休闲渔船从威海启航返程三亚",
              qtOrgs : "三亚市财政局",
              source : "gzls",
              sourceName : "工作落实",
              status : "督办中"
            },
            {
              beginTime : "2023-10-12 15:03:18",
              name : "四证齐全！三亚市第一艘海洋休闲渔船从威海启航返程三亚",
              qtOrgs : "三亚市财政局",
              source : "gzls",
              sourceName : "工作落实",
              status : "督办中"
            },
            {
              beginTime : "2023-11-12 15:03:18",
              name : "四证齐全！三亚市第一艘海洋休闲渔船从威海启航返程三亚",
              qtOrgs : "三亚市财政局",
              source : "gzls",
              sourceName : "工作落实",
              status : "督办中"
            },
          ],
          keyId : "2",
          size : 3
        }
      ]
    };
  },
  created() {
    // 使用setTimeout模拟异步请求, 实际项目使用axios发送请求
    setTimeout(() => {
      this.allCheckingResultList = this.fakeAllCheckingResultList;
      this.allCheckingResultList.forEach(item => {
        this.noDealSimilarList.forEach(iten => {
          if (item.keyId == iten.taskId) {
            // 未处理任务-存在相似任务数量
            iten.checkResultListLength = item.size;
          }
        });
      });
      this.getCurrMissionCheckingResultList(0);
    }, 1000)
  },
  computed: {
    paramsData() {
      return {
        from: 0,
        jsonStr: JSON.stringify(this.noDealSimilarList),
        keyId: 'taskId',
        modelIndex: 'common_task',
        modelType: 'task',
        names: 'name',
        size: 10000,
      }
    }
  },
  methods: {
    // 获取查重结果列表
    fetchCheckingResultList(index) {
      this.loadingCheckResultList = true
      // 使用setTimeout模拟异步请求, 实际项目使用axios发送请求
      setTimeout(() => {
        this.allCheckingResultList = this.fakeAllCheckingResultList;
        this.getCurrMissionCheckingResultList(index)
      }, 1000)
    },
    onClickNoDealSimilar(index) {
      this.getCurrMissionCheckingResultList(index)
    },
    // 获取当前任务的查重结果列表
    getCurrMissionCheckingResultList(index) {
      this.loadingCheckResultList = true
      setTimeout(() => {
        const currentMissionKeyId = this.noDealSimilarList[index].taskId;
        const resObj = this.allCheckingResultList.find(item => item.keyId == currentMissionKeyId) || {};
        this.checkingResultList = resObj.hitRes || [];
        this.loadingCheckResultList = false;
      }, 500);
    },
    toggleSource(val, index) {
      // 修改来源及要求参数
      this.paramsData.names = val.toString()
      this.fetchCheckingResultList(index)
    },
    handleDetailClick() {

    },
    // 关注
    handleSubscribe(row) {
      console.log('row', row);
    },
    // 归并
    handleMerge(row) {
      console.log('row', row);
    },
    // 插入
    handleInsert(row) {
      console.log('row', row);
    },
  },
};
</script>
```
:::


### 属性

| 参数                  | 说明                          | 类型    | 可选值 | 默认值 |
| --------------------- | ----------------------------- | ------- | ------ | ------ |
| loadingCheckResultList | 是否展示查重结果列表loading | boolean | -      | false  |
| isShowSource          | 是否展示来源及要求 | boolean | -      | true   |
| noDealSimilarList     | 未处理任务-存在相似任务列表 | array   | -      | -      |
| noDealDissimilarList  | 未处理任务-不存在相似任务列表 | array   | -      | -      |
| hadDealSimilarList    | 已处理任务-存在相似任务列表 | array   | -      | -      |
| hadDealDissimilarList | 已处理任务-不存在相似任务列表 | array   | -      | -      |
| checkingResultList    | 当前任务的查重结果列表 | array   | -      | -      |

### 事件

| 事件名             | 说明                         | 回调参数   |
| ------------------ | ---------------------------- | ---------- |
| toggle-source      | 当切换来源及要求时触发该事件 | val, index(当前选中任务的下标) |
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
