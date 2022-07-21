import Vue from 'vue';
import Element from 'element-ui';
// import Swiper from 'swiper';
import 'element-ui/lib/theme-chalk/index.css';
// import 'swiper/swiper-bundle.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
import './styles/radio/index.scss'
import './styles/checkbox/index.scss'

export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(VueAwesomeSwiper,{
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
  },)
  // Vue.use(Swiper);
};
