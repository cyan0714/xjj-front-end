<template>
  <div class="container">
    <el-checkbox class="lookui-checkbox" v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox class="lookui-checkbox" v-model="checked2" disabled>备选项</el-checkbox>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked1: false,
        checked2: true
      };
    }
  };
</script>