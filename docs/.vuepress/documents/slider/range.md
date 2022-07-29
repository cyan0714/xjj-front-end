<template>
  <el-slider class="lookui-slider" v-model="value" range show-stops :max="10"> </el-slider>
</template>

<script>
export default {
  data() {
    return {
      value: [4, 8]
    }
  }
}
</script>
