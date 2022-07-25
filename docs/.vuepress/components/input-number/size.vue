<template>
  <div class="container">
    <el-input-number class="lookui-input-number" v-model="num1"></el-input-number>
    <el-input-number class="lookui-input-number" size="medium" v-model="num2"></el-input-number>
    <el-input-number class="lookui-input-number" size="small" v-model="num3"></el-input-number>
    <el-input-number class="lookui-input-number" size="mini" v-model="num4"></el-input-number>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1
      }
    }
  };
</script>