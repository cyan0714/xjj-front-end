<template>
  <div id="map-container">
    <iframe :src="url + '?width=' + width + '&height=' + height" :style="'width: ' + width + 'px;height: ' + height + 'px;'"></iframe>
  </div>
</template>

<script>
  const global = require('../config/global.js');
  export default {
    // name: "map",
    components: {},
    props: { num: '' },
    data() {
      return {
        width: this.num == 3 ? 1040 : 740,
        height: 600,
        url: global.OUT_LINK + 'e-map' + this.num,
      };
    },
    mounted() {},
  };
</script>

<style>
  iframe {
    border: 0 none;
  }
</style>
