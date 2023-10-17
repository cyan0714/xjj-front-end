<template>
  <div class="mission-header">
    <div>
      <img :src="require(`./imgs/icon_${type === SIMILAR ? '2' : '3'}.png`)" />
      <span class="title">{{ title }}:</span>
      <span :class="['count', type === SIMILAR ? '' : 'dissmilar']">{{ count }}</span>
    </div>
    <el-checkbox v-if="!isDealMission" class="lookui-checkbox" v-model="checkAll" @change="handleCheckAll"
      >全选</el-checkbox
    >
  </div>
</template>

<script>
import { SIMILAR } from './constants';
export default {
  components: {},
  data() {
    return {
      SIMILAR,
    };
  },
  props: {
    // 是否是已处理任务
    isDealMission: {
      type: Boolean,
      default: false,
    },
    // 存在相似任务(SIMILAR) | 不存在相似任务(DISSIMILAR)
    type: {
      type: String,
      default: SIMILAR,
    },
    count: {
      type: Number,
      default: 0,
    },
    checkAll: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    title() {
      return this.type === SIMILAR ? '存在相似任务' : '不存在相似任务';
    },
  },
  created() {},
  mounted() {},
  methods: {
    handleCheckAll(val) {
      this.$emit('toggleCheckAll', val);
    },
  },
};
</script>

<style scoped lang="scss">
.mission-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 18px;
    }
    .title {
      font-weight: bold;
      color: #000;
      margin: 0 8px;
      font-size: 18px;
    }
    .count {
      color: #506eda;
      font-weight: bold;
      font-size: 18px;
      &.dissmilar {
        color: #ff4d4f;
      }
    }
  }
}
</style>
