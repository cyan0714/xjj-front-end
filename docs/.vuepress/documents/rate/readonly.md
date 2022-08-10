<template>
  <el-rate
    v-model="value"
    disabled
    show-score
    text-color="#ff9900"
    score-template="{value}"
  >
  </el-rate>
</template>

<script>
export default {
  data() {
    return {
      value: 3.7
    }
  }
}
</script>
