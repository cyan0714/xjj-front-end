<template>
  <el-input class="lookui-input" placeholder="请输入密码" v-model="input" show-password></el-input>
</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    }
  }
</script>