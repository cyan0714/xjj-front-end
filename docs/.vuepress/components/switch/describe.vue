<template>
  <div class="container">
    <el-switch class="lookui-switch" v-model="value1" active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <el-switch
      class="lookui-switch"
      style="display: block;  margin-top: 20px"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </el-switch>
    <p>使用active-text属性与inactive-text属性来设置开关的文字描述。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true
    }
  }
}
</script>
