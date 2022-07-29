<template>
  <div class="container">
    <el-slider class="lookui-slider" v-model="value" vertical height="200px"> </el-slider>
    <p>设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  }
}
</script>
