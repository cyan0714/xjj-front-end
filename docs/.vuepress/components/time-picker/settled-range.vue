<template>
  <div class="container">
    <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
    <el-time-select
      class="lookui-time-picker"
      popper-class="lookui-time-date-editor"
      placeholder="起始时间"
      v-model="startTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
    >
    </el-time-select>
    <el-time-select
      class="lookui-time-picker"
      popper-class="lookui-time-date-editor"
      placeholder="结束时间"
      v-model="endTime"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
      }"
    >
    </el-time-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  }
}
</script>
