<template>
  <div class="container">
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination class="lookui-pagination" layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination class="lookui-pagination" layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
</script>
