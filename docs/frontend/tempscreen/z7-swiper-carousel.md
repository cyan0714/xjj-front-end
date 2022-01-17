---
title: 基于Swiper的轮播图
---

## 轮播图

想要在`Vue2.x`中使用`Swiper`，需要安装`Swiper@5.x`版本，同时需要安装`vue-awesome-swiper`，可通过以下方式安装：

```sh
npm install swiper@5.x vue-awesome-swiper

yarn add swiper@5.x vue-awesome-swiper
```

全局引入：

```js
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

Vue.use(VueAwesomeSwiper /* { 默认选项配置 } */);
```

局部引入：

```js
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
```

### 1. 视差效果

<br>

<com-swiper1 />

1. 注册

```vue
<template>
  <swiper class="swiper" :options="swiperOption">
    <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%" :style="{ backgroundImage: `url(${parallaxBg})` }"></div>
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
        default: () => {
          return require('../../public/assets/img/carousel/parallax.jpg');
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
```

2. 使用

<com-use-swiper1 />

```vue
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
```

### 2. 切换效果：cube

<br>
<com-swiper2 />

```vue
<template>
  <div class="example-3d">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
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
      &:nth-child(1) {
        background-color: #d1ba74;
      }
      &:nth-child(3) {
        background-color: #8cc7b5;
      }
      &:nth-child(5) {
        background-color: #ecad9e;
      }
    }
    .swiper-pagination {
      ::v-deep .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: '#fff';
      }
    }
  }
</style>
```

### 3. 切换效果：coverflow

<br>
<com-swiper3 />

```vue
<template>
  <div class="example-3d">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
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
          effect: 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
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
    height: 300px;
  }
  .swiper {
    perspective: 1200px;
    height: 300px;
    .swiper-slide {
      display: flex;
      width: 245.8px !important;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: 18px;
      background-color: #2c8dfb;
      background-position: center;
      background-size: cover;
      color: '#fff';
      &:nth-child(1) {
        background-color: #d1ba74;
      }
      &:nth-child(3) {
        background-color: #8cc7b5;
      }
      &:nth-child(5) {
        background-color: #ecad9e;
      }
    }
    .swiper-pagination {
      ::v-deep .swiper-pagination-bullet.swiper-pagination-bullet-active {
        background-color: '#fff';
      }
    }
  }
</style>
```

### 4. 缩略图

<br>
<com-swiper4 />

```vue
<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
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
        swiperOptionTop: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 5, // looped slides should be the same
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          slideToClickedSlide: true,
        },
      };
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      });
    },
  };
</script>

<style lang="scss" scoped>
  .thumb-example {
    height: 480px;
    background-color: #000;
  }
  .swiper {
    .swiper-slide {
      background-size: cover;
      background-position: center;
      &.slide-1 {
        background-image: url('../../public/assets/img/carousel/parallax.jpg');
      }
      &.slide-2 {
        background-image: url('../../public/assets/img/carousel/thumbs2.jpg');
      }
      &.slide-3 {
        background-image: url('../../public/assets/img/carousel/thumbs3.jpg');
      }
      &.slide-4 {
        background-image: url('../../public/assets/img/carousel/thumbs4.jpg');
      }
      &.slide-5 {
        background-image: url('../../public/assets/img/carousel/thumbs5.jpg');
      }
    }
    &.gallery-top {
      height: 80%;
      width: 100%;
    }
    &.gallery-thumbs {
      height: 20%;
      box-sizing: border-box;
    }
    &.gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    &.gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
  }
</style>
```

更多用法，请前往[Swiper 官网](https://www.swiper.com.cn/api/index.html)
