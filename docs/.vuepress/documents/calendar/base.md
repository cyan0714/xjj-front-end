<template>
  <div class="container">
    <el-calendar v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
