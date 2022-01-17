<template>
  <div class="attachment">
    <div class="content">
      <img :src="attachPic" alt="" />
      <div class="detail">
        <span class="text">{{ contentText }}</span>
        <div>
          <span>{{ size }}</span>
          <span>查看&nbsp; | &nbsp;下载</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      // 附件内容
      contentText: {
        type: String,
        default: 'default.pdf',
      },
      // 附件大小
      size: {
        type: String,
        default: '0.23M',
      },
      // 附件图片
      attachPic: {
        type: String,
        default: () => {
          return require('../../../.vuepress/public/assets/img/common/icon_file.png');
        },
      },
    },
  };
</script>
<style lang="scss" scoped>
  .content {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 300px;
    height: 86px;
    padding: 10px 16px;
    background: url('../../../.vuepress/public/assets/img/common/icon_bg.png') no-repeat;
    background-size: 100%;
    img {
      width: 32px;
      height: 40px;
      flex-shrink: 0;
    }
    .detail {
      flex: 1;
      margin-left: 20px;
      font-size: 14px;
      color: #fff;
      .text {
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; //需要显示的行数
        overflow: hidden;
        text-overflow: ellipsis;
      }
      div {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        span:nth-child(2) {
          color: #15c2f4;
        }
      }
    }
  }
</style>
