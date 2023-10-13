---
title: DuplicateChecking
---

## 基础用法

<dulplicate-checking-main />

<details>
  <summary>显示代码</summary>

```vue
<template>
  <dulplicate-checking
    :noDealSimilarList="noDealSimilarList"
    :noDealDissimilarList="noDealDissimilarList"
    :hadDealSimilarList="hadDealSimilarList"
    :hadDealDissimilarList="hadDealDissimilarList"
    :checkingResultList="checkingResultList"
    @mission-click="handleMissionClick"
    @toggle-source="toggleSource"
    @detail-click="handleDetailClick"
    @subscription-click="handleSubscribe"
    @merging-click="handleMerge"
    @insertion-click="handleInsert"/>
</template>

<script>
export default {
  data(){
    return {
      // 未处理任务-存在相似任务列表
      noDealSimilarList: [
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            { name: '省政府督查', count: 3, },
            { name: '省委督查', count: 3, },
            { name: '深改办(自贸办)', count: 2, },
          ],
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            { name: '省政府督查', count: 3, },
            { name: '省委督查', count: 3, },
            { name: '深改办(自贸办)', count: 2, },
          ],
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            { name: '省政府督查', count: 3, },
            { name: '省委督查', count: 3, },
            { name: '深改办(自贸办)', count: 2, },
          ],
        },
      ],
      // 未处理任务-不存在相似任务列表
      noDealDissimilarList: [
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
        },
      ],
      // 已处理任务-存在相似任务列表
      hadDealSimilarList: [
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            { name: '省政府督查', count: 3, },
            { name: '省委督查', count: 3, },
            { name: '深改办(自贸办)', count: 2, },
          ],
          status: 3,
          relation: '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            { name: '省政府督查', count: 3, },
            { name: '省委督查', count: 3, },
            { name: '深改办(自贸办)', count: 2, },
          ],
          status: 3,
          relation: '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
      ],
      // 已处理任务-不存在相似任务列表
      hadDealDissimilarList: [
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          status: 3,
          relation: '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          status: 3,
          relation: '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          title: '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          status: 3,
          relation: '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
      ],
      checkingResultList: [],
    },
    methods: {
      handleMissionClick(row){
        console.log('row', row)
      },
      toggleSource(val){
        console.log('val', val)
      },
      // 关注
      handleSubscribe(row) {
        console.log('row', row)
      },
      // 归并
      handleMerge(row) {
        console.log('row', row)
      },
      // 插入
      handleInsert(row) {
        console.log('row', row)
      },
    }
  },
  created() {
    for (let i = 0; i < 3; i++) {
      this.checkingResultList.push({
        title:
          '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
        tags: [
          '坚持生态立省',
          '放眼非洲和世界',
          '习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问',
          '其他发展中国家加强团结合作',
          '南非进行国事访问',
          '共同维护联合国宪章宗旨和原则维护广大发展中国家共同利益',
        ],
        sourceTxt:
          '总书记进话:要认真学习领会、深入贯彻落实习近平总书记重要进话精神，牢记嘱托、不负厚望，奋力追赶、敢于超越封关运作“三张清单”:要认真学习领会、深入贯彻落实习近平总书记重要讲话精神，牢记嘱托、不负厚望，奋力追赶、敢于金砖国家一带一路超越敢于超越敢于超越超深入贯彻落实习近平总书记重要讲话精神，牢记嘱托、不深入贯彻落实习近平总书记重要讲话精神，牢记嘱托。',
        leaderUnits: ['省发展改革委员会', '海口市政府', '三亚市政府'],
        superviseUnits: ['省政府督查'],
        arriveTime: '2023-02-30 12:12',
        recommandTags: ['任务标题相似', '任务标签相同', '来源及要求相似'],
        status: 0,
      });
    }
  },
}
</script>
```
</details>

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| isShowSource | 是否展示来源及要求 | boolean | - | true |
| noDealSimilarList | 未处理任务-存在相似任务列表 | array | - | - |
| noDealDissimilarList | 未处理任务-不存在相似任务列表 | array | - | - |
| hadDealSimilarList | 已处理任务-存在相似任务列表 | array | - | - |
| hadDealDissimilarList | 已处理任务-不存在相似任务列表 | array | - | - |
| checkingResultList | 查重结果列表 | array | - | - |

### 事件

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| mission-click | 当某个任务被点击时触发该事件 | row, index |
| toggle-source | 当切换来源及要求时触发该事件 | val |
| detail-click | 当点击查看详情时触发该事件 | row |
| subscription-click | 当点击关注时触发该事件 | row |
| merging-click | 当点击归并时触发该事件 | row |
| insertion-click | 当点击插入时触发该事件 | row |


### 方法
| 方法名 | 说明 | 回调参数 |
|------|------|------|
