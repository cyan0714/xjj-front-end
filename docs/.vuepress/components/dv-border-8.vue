<template>
  <div>
    <h3>dv-border-box-8</h3>
    <div style="width:100%;height:300px;background:#282c34" class="outer">
      <dv-border-box-8 class="border-8">dv-border-box-8</dv-border-box-8>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import dataV from '@jiaminghi/data-view'
  Vue.use(dataV)
  export default {

  };
</script>

<style>
  .outer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .border-8 {
    width: 90%;
    height: 250px;
    background: #282c34;
    text-align: center;
    line-height: 250px;
    color: #fff;
  }
</style>
