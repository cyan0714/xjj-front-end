<template>
  <div class="example-3d">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions"  >
      <swiper-slide></swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide></swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOptions: {
          effect: 'cube',
          grabCursor: true,
          cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
          pagination: {
            el: '.swiper-pagination',
          },
        },
      };
    },
  };
</script>
<style lang="scss" scoped>
  .example-3d {
    position: relative;
    overflow: hidden;
    height: 360px;
    padding: 15px;
  }
  .swiper {
    width: 300px !important;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      background-color: #2c8dfb;
      background-position: center;
      background-size: cover;
      color: '#fff';
      &:nth-child(1){
        background-image: url('../../public/assets/img/carousel/thumbs2.jpg');
      }
      &:nth-child(3){
        background-image: url('../../public/assets/img/carousel/thumbs3.jpg');
      }
      &:nth-child(5){
        background-image: url('../../public/assets/img/carousel/thumbs4.jpg');
      }
    }
    .swiper-pagination {
      ::v-deep .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: '#fff';
      }
    }
  }
</style>
