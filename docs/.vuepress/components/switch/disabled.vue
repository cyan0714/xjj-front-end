<template>
  <div class="container">
    <el-switch class="lookui-switch" v-model="value1" disabled> </el-switch>
    <el-switch class="lookui-switch" v-model="value2" disabled> </el-switch>
    <p>设置disabled属性，接受一个Boolean，设置true即可禁用。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: false
    }
  }
}
</script>
