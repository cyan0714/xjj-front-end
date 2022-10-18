<template>
  <div class="container">
    <el-card>
      <div v-for="o in 4" :key="o">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
</script>
