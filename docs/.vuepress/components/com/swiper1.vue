<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">slider1</div>
      <div class="swiper-slide">slider2</div>
      <div class="swiper-slide">slider3</div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  export default {
    mounted() {
      let mySwiper = new Swiper('.swiper', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
      mySwiper.slideNext();
    },
  };
</script>

<style>
  .swiper {
    width: 600px;
    height: 300px;
    /* background-color: pink; */
  }
</style>
