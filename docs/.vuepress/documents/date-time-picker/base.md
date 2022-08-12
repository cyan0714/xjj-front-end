<template>
  <div class="container">
    <div class="block">
      <p>默认</p>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-time-popper lookui-date-popper"
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <p>带快捷选项</p>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-time-popper lookui-date-popper"
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <p>设置默认时间</p>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-time-popper lookui-date-popper"
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00"
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
      value2: '',
      value3: ''
    }
  }
}
</script>
