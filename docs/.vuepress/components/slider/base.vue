<template>
  <div class="container">
    <p>在拖动滑块时，显示当前值</p>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider class="lookui-slider" v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider class="lookui-slider" v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider class="lookui-slider" v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider class="lookui-slider" v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider class="lookui-slider" v-model="value5" disabled></el-slider>
    </div>
    <p>通过设置绑定值自定义滑块的初始值</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42
    }
  },
  methods: {
    formatTooltip(val) {
      return val / 100
    }
  }
}
</script>
