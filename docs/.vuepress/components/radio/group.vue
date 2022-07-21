<template>
  <el-radio-group v-model="radio">
    <el-radio class="lookui-radio" :label="3">备选项</el-radio>
    <el-radio class="lookui-radio" :label="6">备选项</el-radio>
    <el-radio class="lookui-radio" :label="9">备选项</el-radio>
  </el-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>