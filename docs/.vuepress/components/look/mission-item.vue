<template>
  <div class="mission-item">
    <div class="left">
      <div class="title">{{ item.name }}</div>
      <div class="txt-btn" @click="goDetail">查看详情<i class="el-icon-arrow-right"></i></div>
      <div class="result">
        <div class="result-left">
          <div :class="['rl-txt', hasList ? '' : 'dissimilar']">查重结果</div>
          <div class="rl-count" v-if="hasList">匹配任务数 · {{ item.checkResultListLength }} 条</div>
          <div class="rl-count dissimilar" v-else>暂无相似任务</div>
        </div>
        <!-- <div class="result-list" v-if="hasList">
          <div v-for="(iten, indey) in item.checkResultList" :key="indey" class="result-item">
            <span>{{ iten.name }} · </span>
            <span class="count">{{ iten.count }} </span>条
          </div>
        </div> -->
      </div>
      <div class="result-detail" v-if="isDealMission">
        <div class="rd-title">处理结果</div>
        <a>{{ item.relation }}</a>
      </div>
      <div class="btn-area" v-if="isDealMission">
        <el-button class="lookui-btn" size="small" type="primary" @click.native="e => e.stopPropagation()">取消关注</el-button>
      </div>
      <img v-if="isDealMission" :src="mapStatus(item.status)" alt="" class="status" />
    </div>
    <el-checkbox
      v-if="!isDealMission"
      class="right lookui-checkbox"
      @change="handleCheckedChange"
      @click.native="e => e.stopPropagation()"
      v-model="item.checked"></el-checkbox>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    // 是否是已处理任务
    isDealMission: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    hasList() {
      return this.item.checkResultListLength > 0;
    },
  },
  created() {},
  mounted() {},
  methods: {
    goDetail(e) {
      this.$emit('onViewDetailsClick', e)
    },
    mapStatus(status) {
      switch (status) {
        case 0:
          return require(`./imgs/icon_5.png`);
        case 1:
          return require(`./imgs/icon_6.png`);
        case 2:
          return require(`./imgs/icon_7.png`);
        case 3:
          return require(`./imgs/icon_8.png`);
        case 4:
          return require(`./imgs/icon_9.png`);
      }
    },
    handleCheckedChange(val) {
      this.$emit('checkChange', val);
    },
  },
};
</script>

<style scoped lang="scss">
.mission-item {
  .left {
    margin-right: 10px;
    .title {
      font-size: 16px;
      padding-right: 50px;
    }
    .status {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .txt-btn {
    text-align: right;
    color: #999;
    font-size: 14px;
    margin-bottom: 2px;
  }
  .result {
    display: flex;
    font-size: 14px;
    overflow: auto;
    .result-left {
      display: flex;
      flex-shrink: 0;
      .rl-txt {
        padding: 4px 6px;
        background: linear-gradient(90deg, #e4e8f9 0%, #f1f5fb 100%);
        color: #506eda;
        border-radius: 6px;
        &.dissimilar {
          background: linear-gradient(90deg, #fee5e4 0%, #f2faf1 100%);
          color: #ff4d4f;
        }
      }
      .rl-count {
        padding: 4px 6px;
        border-radius: 14px 6px 6px 0px;
        color: #fff;
        background: linear-gradient(90deg, #506eda 0%, #8493e9 100%);
        &.dissimilar {
          background: linear-gradient(90deg, #ff5053 0%, #fb8783 100%);
        }
      }
    }
    .result-list {
      display: flex;
      flex-shrink: 0;
      .result-item {
        padding: 4px 8px;
        color: #000;
        background-color: #edf2fe;
        margin-left: 10px;
        border-radius: 4px;
        .count {
          color: #506eda;
        }
      }
    }
  }
  .result-detail {
    display: flex;
    flex-shrink: 0;
    margin-top: 10px;
    font-size: 14px;
    .rd-title {
      padding: 4px 6px;
      background: linear-gradient(90deg, #def3f0 0%, #f0faf8 100%);
      color: #2eb190;
      border-radius: 6px;
      flex-shrink: 0;
      align-self: start;
    }
    a {
      text-decoration: underline;
      color: #506eda;
    }
  }
  .btn-area {
    display: flex;
    justify-content: end;
  }
}
</style>
