<template>
  <div class="container">
    <p>支持选择某一数值范围</p>
    <el-slider class="lookui-slider" v-model="value" range show-stops :max="10"> </el-slider>
    <p>设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [4, 8]
    }
  }
}
</script>
