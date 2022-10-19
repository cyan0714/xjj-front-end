<template>
  <div class="container">
    <el-calendar class="lookui-calendar" v-model="value">
    </el-calendar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  }
}
</script>
<style scoped lang="scss">
/* 为了防止和 md 自带的表格样式冲突，才添加以下样式，实际开发中不需要添加 */
.lookui-calendar {
  ::v-deep thead {
    width: 100%;
    display: table;
    box-sizing: border-box;
  }

  ::v-deep tbody {
    width: 100%;
    display: table;
    box-sizing: border-box;

    tr {
      background-color: #fff !important;
    }

    td {
      padding: 0 !important;
    }
  }
}
</style>
