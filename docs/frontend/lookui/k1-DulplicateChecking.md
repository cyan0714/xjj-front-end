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
      searchRepeatedUrl="http://192.168.230.186:7076"
      isShowCustomSource
      :customSource="customSource"
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
      customSource: {
        label: '自定义来源',
        checkboxs: [
          {
            key: '工作落实',
            value: 'gzls',
            checked: true,
            style: {
              color: '#f00',
              backgroundColor: '#fee5e5',
            },
          },
          {
            key: '重点项目',
            value: 'zdxm',
            checked: false,
            style: {
              color: '#fe8432',
              backgroundColor: '#fff5e6',
            },
          },
        ],
      },
      data: [
        // 重点项目测试数据
        // { taskId: '1', name: '三亚市西水中调项目一期', tenantId: '4602000038', checked: false, },
        {
          taskId: '1',
          name: '三亚市第一艘海洋休闲渔船',
          checked: false,
          tenantId: '4602000038',
          status: '',
          relation: '',
          checkResultListLength: 0,
        },
        {
          taskId: '2',
          name: '事项工作内容',
          checked: false,
          tenantId: '4602000038',
          status: '已插入',
          checkResultListLength: 0,
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          taskId: '3',
          name: '琼海',
          checked: false,
          tenantId: '4602000038',
          checkResultListLength: 0,
          status: '已创建', // 已处理任务的状态
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》', // 已处理任务的关联任务的名字
        },
        {
          taskId: '4',
          name: 'chenshiyan',
          checked: false,
          tenantId: '4602000039',
          status: '',
          checkResultListLength: 0,
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
| :---------------------: | :-----------------------------: | :-------: | :------: | :------: |
| data                   | 导入的任务数据，详见([data中对象属性说明](#data中对象属性说明))             | array   | -  | [  ] |
| isShowSource           | 是否展示查重点          | boolean | -      | true   |
| isShowCustomSource           | 是否展示自定义来源          | boolean | -      | false   |
| isShowCheckAllNoDealBar           | 是否显示底部全选未处理任务Bar          | boolean | -      | true   |
| isShowBtnsInHadDealMission           | 切换到已处理任务时是否显示查重结果操作按钮          | boolean | -      | false   |
| searchRepeatedUrl      | 查重接口ip                 | string | -      | http://59.212.30.45:6068  |
| customSource           | 自定义来源字段（{ label: '自定义来源名称', checkboxs: [ { key: 'checkbox名称', value: '来源的code', checked: '初始化时是否选中', style: { 自定义样式 } ] } ），具体可看示例代码                | object | -      | 示例代码中的 customSource |
| customNames           | 自定义 names 字段     | array | -      | ["taskType"] |

### data中对象属性说明
<br/>

| 属性               | 说明      | 类型    | 是否必传 | 可选值 | 默认值 |
| :-----------------:  | :--------: | :-------: | :-------: | :-------: | :-------: | 
| taskId            | 任务id   |  string  | 是 | - | - |
| checked           | 是否选中 |  boolean  | 是 | false、true | false |
| tenantId          | 租户id  | string  | 是 | - | - |
| status           | 任务状态, 已关注就传“已关注”，已归并就传“已归并”，没有状态就传空  | string | 是 | - | ‘’ |
| relation           | 已处理任务的处理结果, 当 status 不为空且处理结果只为1个时必传 | string | 否 | - | - |
| relations           | 已处理任务的处理结果, 当 status 不为空且 isShowBtnsInHadDealMission 为 true 时必传, 每个对象必须包含 name 属性 | array | 否 | - | - |
| name          | 查重点包含"任务标题"时, 必传  | string  | 否 | - | - |
| feature          | 查重点包含"任务标签"时, 必传  | string  | 否 | - | - |
| requirement          | 查重点包含"事项来源及依据"时, 必传  | string  | 否 | - | - |
| isShowViewBtn          | 是否显示“查看详情”按钮  | boolean  | 否 | false、true | true |

### 事件
<br/>

| 事件名             | 说明                         | 回调参数   |
| :------------------: | :----------------------------: | :----------: |
| toggle-source      | 当切换来源及要求时触发该事件 | val(当前任务的查重结果列表), index(当前选中任务的下标) |
| detail-click       | 当点击查看详情时触发该事件   | row        |
| name-click       | 当点击任务标题名称时触发该事件   | row        |
| relation-click       | 当点击已处理任务的处理结果时触发该事件   | row        |
| relation-row-click   | 在已处理任务 tab 中， 当某条任务有多个处理结果时，点击某条处理结果的链接时触发该事件 | relation(当前点击的处理结果)，task(导入的、当前选中的已处理的任务)
| checking-name-click  | 当点击查重结果标题名称时触发该事件   | row        |
| subscription-click | 当点击关注时触发该事件       | row(查重的、当前点击的任务), instance(导入的、当前选中的任务)        |
| merging-click      | 当点击归并时触发该事件       | row(查重的、当前点击的任务), instance(导入的、当前选中的任务)        |
| insertion-click    | 当点击插入时触发该事件       | row(查重的、当前点击的任务), instance(导入的、当前选中的任务)        |
| createTasks | 当点击批量创建任务按钮时触发该事件 | task(选中的任务列表) |
| onCancelBtnClick | 当点击取消关注、取消合并、取消插入、取消关联等按钮时触发该事件 | item(导入的、当前选中的任务) |
| onCancelRowBtnClick | 在已处理任务 tab 中，当某条任务有多个处理结果时, 点击某一条的取消关注、取消合并、取消插入、取消关联等按钮时触发该事件 | relation(当前点击的处理结果)，task(导入的、当前选中的已处理的任务) |
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
| :------: | :----: |
| operating-btns | 自定义查重结果列表操作按钮, 参数为 { source(当前查重结果对象) } |
