<template>
  <dv-active-ring-chart :config="config" style="width:100%;height:300px;background:#282c34" />
</template>

<script>
  import Vue from 'vue'
    import dataV from '@jiaminghi/data-view'
    Vue.use(dataV)
    export default {
      data () {
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
            ],
          },
        }
      }
    };
</script>

<style></style>
