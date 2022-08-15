<template>
  <div class="container">
    <p>
      为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts
      可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值
      max。
    </p>
    <el-rate v-model="value" show-text> </el-rate>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null
    }
  }
}
</script>
