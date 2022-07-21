<template>
  <div class="container">
    <el-radio disabled class="lookui-radio" v-model="radio" label="禁用">备选项</el-radio>
    <el-radio disabled class="lookui-radio" v-model="radio" label="选中且禁用">备选项</el-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>