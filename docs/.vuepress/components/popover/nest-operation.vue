<template>
  <div class="container">
    <el-popover placement="top" width="160" v-model="visible">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button class="lookui-btn" size="mini" type="text" @click="visible = false">取消</el-button>
        <el-button class="lookui-btn" type="primary" size="mini" @click="visible = false">确定</el-button>
      </div>
      <el-button class="lookui-btn" slot="reference">删除</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  }
}
</script>
