<template>
  <div class="container">
    <p>提供几个固定的时间点供用户选择</p>
    <el-time-select
      class="lookui-picker"
      popper-class="lookui-time-popper"
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间"
    >
    </el-time-select>
    <p>使用 el-time-select 标签，分别通过start、end和step指定可选的起始时间、结束时间和步长</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
