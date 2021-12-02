<template>
  <div style="width:100%;height:300px;background:#282c34" class="outer">
    <dv-decoration-9 style="width:32%;height:230px;color:#fff">66%</dv-decoration-9>
  </div>
</template>

<script>
  import Vue from 'vue';
  import dataV from '@jiaminghi/data-view';
  Vue.use(dataV);
  export default {
    data() {
      return {};
    },
  };
</script>

<style>
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
