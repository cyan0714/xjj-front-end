<template>
  <div class="checking-result-item">
    <div class="content">
      <div class="title">{{ item.name }}</div>
      <div class="tags-wrap">
        <div v-for="(tag, tagIndex) in item.feature && item.feature.split(',')" :key="tagIndex" class="tag-item">
          {{ tag }}
        </div>
      </div>
      <div class="source-and-request">
        <div class="title">来源及要求:</div>
        <div class="text-area">{{ item.requirement }}</div>
      </div>
      <div class="other-info">
        <div class="left">
          <div class="leader-unit">
            <span class="key">牵头单位:</span>
            <div class="value">
              <span
                v-for="(leaderUnit, leaderUnitIndex) in item.qtOrgs && item.qtOrgs.split(',')"
                :key="leaderUnitIndex"
                class="leader-unit-item"
                >{{ leaderUnit }}</span>
            </div>
          </div>
          <div class="supervise-unit">
            <span class="key">督办单位:</span>
            <div class="value">
              <span
                v-for="(superviseUnit, superviseUnitIndex) in item.createdOrg && item.createdOrg.split(',')"
                :key="superviseUnitIndex"
                class="supervise-unit-item"
                >{{ superviseUnit }}</span
              >
            </div>
          </div>
        </div>
        <div class="right">
          <span class="key">下达时间:</span>
          <div class="value">{{ item.beginTime }}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <span class="key">推荐依据:</span>
        <div class="value">
          <span
            v-for="(recommandTag, recommandTagIndex) in recommandTags"
            :key="recommandTagIndex"
            class="recommand-tag-item"
            >{{ recommandTag }}</span
          >
        </div>
      </div>
      <div class="right">
        <el-button class="lookui-btn" size="small" type="primary" @click="handleInsert">插入任务</el-button>
        <el-button class="lookui-btn" size="small" @click="handleSubscribe">关注</el-button>
        <el-button class="lookui-btn" size="small" @click="handleMerge">归并</el-button>
      </div>
    </div>
    <img :src="mapStatus(item.status)" alt="" class="status" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chooseFirstId: '',
      curId: '',
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    recommandTags: {
      type: Array,
      default: () => ([]),
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    closeMissionResolve(val) {
    },
    handleSubscribe() {
      this.$emit('handleSubscribe');
    },
    handleMerge() {
      this.$emit('handleMerge');
    },
    handleInsert() {
      this.$emit('handleInsert');
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
  },
};
</script>

<style scoped lang="scss">
.checking-result-item {
  position: relative;
  box-shadow: 0 3px 6px rgba(140, 149, 159, 0.15);
  margin-bottom: 14px;
  border-radius: 8px;
  .status {
    position: absolute;
    right: 0;
    top: 0;
  }
  .content {
    padding: 20px 20px 0;
    background-color: #fff;
    border-radius: 8px 8px 0 0;
  }
  div.title {
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

  div.tags-wrap {
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
    margin-top: 10px;
    font-size: 15px;
    div.tag-item {
      padding: 4px 8px;
      color: #000;
      background-color: #edf2fe;
      border-radius: 4px;
    }
  }

  .key {
    font-size: 15px;
    color: #999;
    font-weight: normal;
  }
  .value {
    display: flex;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
  }
  div.source-and-request {
    margin-top: 20px;
    font-size: 15px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e5e5e5;
    div.title {
      font-size: 15px;
      color: #999;
      margin-bottom: 10px;
      font-weight: normal;
      text-decoration: none;
    }
  }

  div.other-info {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    div.left {
      display: flex;
      div.leader-unit {
        display: flex;
        align-items: center;
      }
      div.supervise-unit {
        display: flex;
        align-items: center;
        margin-left: 50px;
      }
    }
    div.right {
      display: flex;
      align-items: center;
    }
  }

  div.footer {
    display: flex;
    justify-content: space-between;
    background-color: #edf2fe;
    padding: 12px 20px;
    border-radius: 0 0 8px 8px;
    overflow: auto;
    div.left {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      div.value {
        display: flex;
        column-gap: 10px;
        span.recommand-tag-item {
          padding: 4px 8px;
          color: #3a75f3;
          background-color: #d8e4fd;
          border-radius: 4px;
        }
      }
    }
    div.right {
      display: flex;
    }
  }
}
</style>
