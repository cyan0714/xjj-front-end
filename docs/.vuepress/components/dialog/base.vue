<template>
  <div class="container">
    <el-button class="lookui-btn" type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog title="提示" custom-class="lookui-dialog" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button class="lookui-btn" @click="dialogVisible = false">取 消</el-button>
        <el-button class="lookui-btn" type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>
