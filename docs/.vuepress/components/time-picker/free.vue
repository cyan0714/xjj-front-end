<template>
  <div class="container">
    <p>可以选择任意时间</p>
    <el-time-picker
      class="lookui-picker"
      popper-class="lookui-time-popper"
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
    <el-time-picker
      class="lookui-picker"
      popper-class="lookui-time-popper"
      arrow-control
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
    <p>使用 el-time-picker 标签，通过selectableRange限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40)
    }
  }
}
</script>
