<template>
  <el-table class="lookui-table" :data="tableData" height="300">
    <el-table-column type="selection" width="55" align="center" />
    <el-table-column prop="id" label="规则编号" />
    <el-table-column prop="descrip" label="描述" />
    <el-table-column prop="count" label="调用服务次数" align="center" sortable />
    <el-table-column prop="status" label="状态">
      <template slot-scope="scope">
        <div :class="[
            'lookui-table-status',
            `${handleStatusClass(scope.row.status)}`
        ]"> {{ scope.row.status | handelStatus }} </div>
      </template>
    </el-table-column>
    <el-table-column prop="date" label="更新时间" sortable />
    <el-table-column label="操作 / 标签">
      <template slot-scope="">
        <div class="lookui-table-option">
          <el-button type="text" class="lookui-status__primary">
            配置
          </el-button>
          <el-button type="text" class="lookui-status__danger">
            删除
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  filters: {
    handelStatus(status) {
      const _status = {
        0: '已完成',
        1: '进行中',
        2: '超期预警',
        3: '推进缓慢',
        4: '关闭'
      }
      return _status[status]
    }
  },
  data() {
    return {
      tableData: [
        {
          id: 'TradeCode 0',
          descrip: '这是一段描述',
          count: '357 万',
          status: 4,
          date: '2021-06-24'
        },
        {
          id: 'TradeCode 0',
          descrip: '这是一段描述',
          count: '358 万',
          status: 0,
          date: '2021-06-24'
        },
        {
          id: 'TradeCode 0',
          descrip: '这是一段描述',
          count: '359 万',
          status: 1,
          date: '2021-06-24'
        },
        {
          id: 'TradeCode 0',
          descrip: '这是一段描述',
          count: '360 万',
          status: 3,
          date: '2021-06-24'
        },
        {
          id: 'TradeCode 0',
          descrip: '这是一段描述',
          count: '361 万',
          status: 2,
          date: '2021-06-24'
        }
      ]
    }
  },
  methods: {
    handleStatusClass(status) {
      const _status = {
        0: 'lookui-status__success',
        1: 'lookui-status__process',
        2: 'lookui-status__warning',
        3: 'lookui-status__danger',
        4: 'lookui-status__info'
      }
      return _status[status]
    }
  }
}
</script>
