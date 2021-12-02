<template>
  <div style="width:100%;height:300px;background:#282c34" class="outer">
    <dv-scroll-ranking-board :config="config" style="width:50%;height:300px;background:#282c34" />
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
              name: '周口',
              value: 55,
            },
            {
              name: '南阳',
              value: 120,
            },
            {
              name: '西峡',
              value: 78,
            },
            {
              name: '驻马店',
              value: 66,
            },
            {
              name: '新乡',
              value: 80,
            },
            {
              name: '信阳',
              value: 45,
            },
            {
              name: '漯河',
              value: 29,
            },
          ],
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
