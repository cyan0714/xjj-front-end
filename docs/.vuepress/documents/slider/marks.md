<template>
  <el-slider class="lookui-slider" v-model="value" range :marks="marks"> </el-slider>
</template>

<script>
export default {
  data() {
    return {
      value: [30, 60],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      }
    }
  }
}
</script>
