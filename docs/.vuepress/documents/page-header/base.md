<template>
  <div class="container">
    <el-page-header class="lookui-page-header white-bg" @back="goBack" content="详情页面"> </el-page-header>
    <el-page-header class="lookui-page-header theme-bg" @back="goBack" content="详情页面"> </el-page-header>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log('go back')
    }
  }
}
</script>
