<template>
  <div style="width:100%;height:300px;background:#282c34" class="outer">
    <dv-capsule-chart :config="config" style="width:50%;height:200px" />
  </div>
</template>

<script>
  import Vue from 'vue';
  import dataV from '@jiaminghi/data-view';
  Vue.use(dataV);
  export default {
    data() {
      return {
        config: {
          data: [
            {
              name: '南阳',
              value: 167,
            },
            {
              name: '周口',
              value: 67,
            },
            {
              name: '漯河',
              value: 123,
            },
            {
              name: '郑州',
              value: 55,
            },
            {
              name: '西峡',
              value: 98,
            },
          ],
          colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
          showValue: false,
        },
      };
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
