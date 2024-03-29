import Vue from 'vue';
import Element from 'element-ui';
// import Swiper from 'swiper';
import 'element-ui/lib/theme-chalk/index.css';
import LookUI from 'look-ui';
import 'look-ui/dist/look-ui.css';
// import 'swiper/swiper-bundle.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'

// global Var
import './styles/index.scss';

// import style
import 'swiper/css/swiper.css'
import './styles/documents/index.scss'
import './styles/button/index.scss'

// 数据
import './styles/table/index.scss'
import './styles/pagination/index.scss'
import './styles/descriptions/index.scss'

// 表单
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

// 导航
import './styles/bread-crumb/index.scss'
import './styles/dropdown/index.scss'
import './styles/nav-menu/index.scss'
import './styles/page-header/index.scss'
import './styles/tabs/index.scss'
import './styles/steps/index.scss'

// 通知和警告
import './styles/alert/index.scss'
import './styles/loading/index.scss'
import './styles/notification/index.scss'
import './styles/message-box/index.scss'

// 其他
import './styles/dialog/index.scss'
import './styles/popover/index.scss'
import './styles/card/index.scss'
import './styles/calendar/index.scss'


export default ({ Vue, options, router }) => {
  Vue.use(Element);
  Vue.use(LookUI);
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
