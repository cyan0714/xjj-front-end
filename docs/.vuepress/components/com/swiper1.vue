<template>
  <swiper class="swiper" :options="swiperOption">
    <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-13%" :style="{backgroundImage:`url(${parallaxBg})`}"></div>
    <slot name="slide">
      <swiper-slide>
        <div class="title">Slide 1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="title">Slide 2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="title">Slide 3</div>
      </swiper-slide>
    </slot>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

  export default {
    name: 'swiper-example-parallax',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      slideHeight: {
        type: String,
        default: '380px',
      },
      parallaxBg: {
        type: String,
        default:()=>{
          return require('../../public/assets/img/carousel/parallax.jpg')
        },
      },
    },
    data() {
      return {
        swiperOption: {
          speed: 600,
          parallax: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
      };
    },
    
  };
</script>

<style lang="scss" scoped>
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    background-size: cover;
    background-position: left;
  }
  .swiper {
    width: 100%;
    height: 380px;
    .title {
      color: cyan;
      font-size: 20px;
    }
  }
</style>
