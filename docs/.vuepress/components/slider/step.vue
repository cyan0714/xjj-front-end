<template>
  <div class="container">
    <p>选项可以是离散的</p>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider class="lookui-slider" v-model="value1" :step="10"> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider class="lookui-slider" v-model="value2" :step="10" show-stops> </el-slider>
    </div>
    <p>改变step的值可以改变步长，通过设置show-stops属性可以显示间断点</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 0
    }
  }
}
</script>
