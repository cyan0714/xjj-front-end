<template>
  <div class="container">
    <p>可选择任意的时间范围</p>
    <el-time-picker
      class="lookui-picker"
      popper-class="lookui-time-popper"
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <el-time-picker
      class="lookui-picker"
      popper-class="lookui-time-popper"
      is-range
      arrow-control
      v-model="value2"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <p>添加is-range属性即可选择时间范围，同样支持arrow-control属性。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  }
}
</script>
