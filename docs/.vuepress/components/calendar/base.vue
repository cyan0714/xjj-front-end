<template>
  <div class="container">
    <el-calendar v-model="value">
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
<style>
thead,
tbody {
  width: 100%;
  display: table;
  box-sizing: border-box;
}

tr {
  background-color: #fff !important;
}

td {
  padding: 0 !important;
}
</style>
