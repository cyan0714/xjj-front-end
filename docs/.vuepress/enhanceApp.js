import Vue from 'vue';
import Element from 'element-ui';
// import Swiper from 'swiper';
import 'element-ui/lib/theme-chalk/index.css';
// import 'swiper/swiper-bundle.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
import './styles/documents/index.scss'
import './styles/button/index.scss'
import './styles/radio/index.scss'
import './styles/checkbox/index.scss'
import './styles/input/index.scss'
import './styles/input-number/index.scss'
import './styles/select/index.scss'
import './styles/cascader/index.scss'
import './styles/switch/index.scss'
import './styles/slider/index.scss'
import './styles/picker/index.scss'
import './styles/time-picker/index.scss'
import './styles/date-picker/index.scss'
import './styles/upload/index.scss'
import './styles/transfer/index.scss'
import './styles/form/index.scss'

import './styles/bread-crumb/index.scss'
import './styles/dropdown/index.scss'
import './styles/nav-menu/index.scss'

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
