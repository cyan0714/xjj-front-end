<template>
  <div class="container">
    <p>以「日」为基本单位，基础的日期选择控件</p>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-date-popper"
        v-model="value1"
        type="date"
        placeholder="选择日期"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-date-popper"
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      value1: '',
      value2: ''
    }
  }
}
</script>
<style>
tbody {
  width: 100%;
  display: table;
  box-sizing: border-box;
}
</style>
