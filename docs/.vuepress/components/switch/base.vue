<template>
  <div class="container">
    <el-switch class="lookui-switch" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <p>绑定 v-model 到一个 Boolean 类型的变量。可以使用 active-color 属性与 inactive-color 属性来设置开关的背景色。</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true
    }
  }
}
</script>
