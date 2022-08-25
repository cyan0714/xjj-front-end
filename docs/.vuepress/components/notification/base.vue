<template>
  <el-button plain @click="open"> 点击弹出通知 </el-button>
</template>

<script>
export default {
  methods: {
    open() {
      this.$notify({
        title: '提示',
        message: '这是一段内容',
        customClass: 'lookui-notification',
      })
    }
  }
}
</script>
