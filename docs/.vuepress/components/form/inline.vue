<template>
  <div class="container">
    <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
    <el-form :inline="true" class="lookui-form" :model="formInline">
      <el-form-item label="审批人">
        <el-input
          class="lookui-input"
          v-model="formInline.user"
          placeholder="审批人"
        ></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          class="lookui-select"
          popper-class="lookui-select-dropdown"
          v-model="formInline.region"
          placeholder="活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <p>设置 inline 属性可以让表单域变为行内的表单域</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
