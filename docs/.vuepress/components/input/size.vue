<template>
  <div class="demo-input-size">
    <el-input
      class="lookui-input"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input1">
    </el-input>
    <el-input
      class="lookui-input"
      size="medium"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input2">
    </el-input>
    <el-input
      class="lookui-input"
      size="small"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input3">
    </el-input>
    <el-input
      class="lookui-input"
      size="mini"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input4">
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: ''
    }
  }
}
</script>