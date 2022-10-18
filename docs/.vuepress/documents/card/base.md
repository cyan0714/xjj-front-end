<template>
  <div class="container">
    <el-card class="lookui-card">
      <div slot="header">
        <span>卡片名称</span>
        <el-button class="lookui-btn">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
</script>
