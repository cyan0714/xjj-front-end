<template>
  <div class="container">
    <p>通过输入框设置精确数值</p>
    <el-slider class="lookui-slider" v-model="value" show-input> </el-slider>
    <p>设置show-input属性会在右侧显示一个输入框</p>
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
