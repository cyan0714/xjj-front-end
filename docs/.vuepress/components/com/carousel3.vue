<template>
  <el-carousel :interval="4000" type="card" height="400px" arrow="always" :autoplay="false">
    <el-carousel-item v-for="(item, index) in carouselList" :key="index">
      <!-- <h3 class="medium">{{ item }}</h3> -->
      <p class="title">环岛旅游公路建设</p>
      <p class="txt">《冯飞省长5月17日批示跟踪》</p>
      <hr />
      <div class="cont-container">
        <p class="cont">冯飞省长指示：年底前才实现实质性动工，要求低了，应提前。</p>
        <p class="name">
          <span>省政府督查室</span>
          <span>2021-05-18</span>
        </p>
      </div>
      <div class="progress-container">
        <div class="pro-block" :style="{ backgroundColor:item.lineColor, width:'70%' }" >
          <img :src="item.img" />
        </div>
        <span class="red-txt">推进缓慢</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      carouselList: [
        {
          img: require('../../public/assets/img/carousel/icon_alarm.png'),
          lineColor: '#ff4d4f'
        },
        {
          img: require('../../public/assets/img/carousel/icon_finished.png'),
          lineColor: '#43bcff'
        },
        {
          img: require('../../public/assets/img/carousel/icon_processing.png'),
          lineColor: '#55bf96'
        },
        {
          img: require('../../public/assets/img/carousel/icon_alarm.png'),
          lineColor: '#ff4d4f'
        },
        {
          img: require('../../public/assets/img/carousel/icon_finished.png'),
          lineColor: '#43bcff'
        },
        {
          img: require('../../public/assets/img/carousel/icon_processing.png'),
          lineColor: '#55bf96'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.progress-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pro-block {
    position: relative;
    height: 14px;
    border-radius: 10px;
    img{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-42%);
    }
  }
}
::v-deep .el-carousel__item {
  box-sizing: border-box;
  border-radius: 20px;
  padding: 10px 30px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 5px 15px #dddfe2;
  .title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }
  .txt {
    text-align: center;
    color: #ccc;
    font-size: 18px;
  }
  .cont {
    font-size: 20px;
  }
  .name {
    span {
      display: block;
      text-align: right;
    }
  }
  hr {
    border-top: 1px solid #ccc;
  }
  h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  &.is-active {
    border: 1px solid #5977c6 !important;
    box-shadow: 0 4px 8px #a8bae4;
  }
}
::v-deep .el-carousel__arrow {
  background-color: rgba(0, 0, 0, 0);
  .el-icon-arrow-right,
  .el-icon-arrow-left {
    font-size: 50px;
    color: #007aff;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
