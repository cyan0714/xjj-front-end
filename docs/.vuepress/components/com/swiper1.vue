
<template>
  <swiper class="swiper" :options="swiperOption">
    <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-100">Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
      <div class="text" data-swiper-parallax="-360">
        <p>parallax effect</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-100">Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
      <div class="text" data-swiper-parallax="-360">
        <p>parallax effect</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-100">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
      <div class="text" data-swiper-parallax="-360">
        <p>parallax effect</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-parallax',
    title: 'Parallax',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          speed: 600,
          parallax: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
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
    background-image: url('../../public/assets/img/carousel/parallax.jpg');
  }
  .swiper {
    width: 100%;
    height: 380px;
    .swiper-slide {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      box-sizing: border-box;
      padding: 0 80px;
      background-color: transparent;
    }
  }
</style>