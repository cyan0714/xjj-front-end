<template>
  <com-swiper1 :parallaxBg="parallaxBg">
    <template v-slot:slide>
      <swiper-slide>
        <div class="title">Slide 1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="title">Slide 2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="title">Slide 3</div>
      </swiper-slide>
    </template>
  </com-swiper1>
</template>

<script>
  export default {
    data() {
      return {
        parallaxBg: require('../../public/assets/img/carousel/thumbs2.jpg'),
      };
    },
  };
</script>

<style scoped lang="scss">
  .title {
    color: #fff;
    font-size: 30px;
  }
</style>
