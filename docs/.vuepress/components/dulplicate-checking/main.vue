<template>
  <div class="look-dulplicate-checking">
    <div class="left-container">
      <header class="left-container-header">
        <div class="intro">
          本次共导入<span class="all-count">{{ importCount.allCount }}</span>条任务,
          其中存在相似任务共<span class="similar-count">{{ importCount.similarCount }}</span>条,
          无相似任务共<span class="dissimilar-count">{{ importCount.disSimilarCount }}</span>条。
        </div>
        <div class="checkboxs">
          <span>来源及要求:</span>
          <el-checkbox-group v-model="checkedTags" @change="handleCheckedTagsChange">
            <el-checkbox class="lookui-checkbox" v-for="tag in tags" :label="tag" :key="tag">{{ tag }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </header>
      <section class="left-container-section">
        <div class="mission-tag-wrap">
          <div
            :class="['mission-tag', currentMissionType === 0 ? 'mission-tag-actived' : '']"
            @click="toggleTag(0)">
            <span>未处理任务</span>
            <span>（{{ missionCount.noDealCount }}）</span>
          </div>
          <div
            :class="['mission-tag', currentMissionType === 1 ? 'mission-tag-actived' : '']"
            @click="toggleTag(1)">
            <span>已处理任务</span>
            <span>（{{ missionCount.hadDealCount }}）</span>
          </div>
        </div>

        <div class="collapse-container" v-show="currentMissionType === 0">
          <el-collapse v-model="activeNoDealName">
            <!-- 未处理任务-存在相似任务 -->
            <el-collapse-item name="noDealSimilar">
              <template slot="title">
                <mission-header
                  :type="SIMILAR"
                  :count="3"
                  :checkAll="checkAllNoDealOfSimilar"
                  @toggleCheckAll="handleCheckAllNoDealOfSimilar"/>
              </template>
              <section class="collapse-content">
                <mission-item
                  v-for="(item, index) in noDealSimilarList"
                  :item="item"
                  :key="index"
                  :class="['mission-item', currentNoDealSimilarIndex === index ? 'mission-item-actived' : '']"
                  @click.native="handleNoDealSimilarClick(item, index)"
                  @onViewDetailsClick="goDetail($event, item)"
                  @checkChange="handleNoDealSimilarCheckedChange"/>
              </section>
            </el-collapse-item>
            <!-- 未处理任务-不存在相似任务 -->
            <el-collapse-item name="noDealDissimilar">
              <template slot="title">
                <mission-header
                  :type="DISSIMILAR"
                  :count="4"
                  :checkAll="checkAllNoDealOfDissimilar"
                  @toggleCheckAll="handleCheckAllNoDealOfDissimilar"/>
              </template>
              <section class="collapse-content">
                <mission-item
                  v-for="(item, index) in noDealDissimilarList"
                  :item="item"
                  :key="index"
                  :class="['mission-item', currentNoDealDissimilarIndex === index ? 'mission-item-actived' : '']"
                  @click.native="handleNoDealDissimilarClick(item, index)"
                  @onViewDetailsClick="goDetail($event, item)"
                  @checkChange="handleNoDealDissimilarCheckedChange"/>
              </section>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="bottom-bar" v-show="currentMissionType === 0">
          <div class="bb-left">
            <el-checkbox
              class="lookui-checkbox"
              v-model="checkedAllNoDeal"
              @change="handleCheckAllNoDeal"
              >全选未处理任务</el-checkbox>
            <span>已选 {{ hadCheckNoDealCount }} 条任务</span>
          </div>
          <div class="bb-right" @click="createTasks">批量创建任务</div>
        </div>

        <div class="collapse-container" v-show="currentMissionType === 1">
          <el-collapse v-model="activeDealNames">
            <!-- 已处理任务-存在相似任务 -->
            <el-collapse-item name="dealSimilar">
              <template slot="title">
                <mission-header isDealMission :type="SIMILAR" :count="4"/>
              </template>
              <section class="collapse-content">
                <mission-item
                  v-for="(item, index) in hadDealSimilarList"
                  :item="item"
                  :key="index"
                  :class="['mission-item', currentDealSimilarIndex === index ? 'mission-item-actived' : '']"
                  @onViewDetailsClick="goDetail($event, item)"
                  @click.native="handleDealSimilarClick(item, index)"
                  isDealMission/>
              </section>
            </el-collapse-item>
            <!-- 已处理任务-不存在相似任务 -->
            <el-collapse-item name="dealDissimilar">
              <template slot="title">
                <mission-header isDealMission :type="DISSIMILAR" :count="5"/>
              </template>
              <section class="collapse-content">
                <mission-item
                  v-for="(item, index) in hadDealDissimilarList"
                  :item="item"
                  :key="index"
                  :class="['mission-item', currentDealDissimilarIndex === index ? 'mission-item-actived' : '']"
                  @onViewDetailsClick="goDetail($event, item)"
                  @click.native="handleDealDissimilarClick(item, index)"
                  isDealMission/>
              </section>
            </el-collapse-item>
          </el-collapse>
        </div>
      </section>
    </div>
    <div class="right-container">
      <header class="right-contiainer-header">
        <img :src="require(`./imgs/icon_4.png`)" alt="" />
        <span class="txt">查重结果: </span>
        <span class="count"> 3</span>
      </header>
      <section class="right-container-section">
        <checking-result-item
          v-for="(item, index) in checkingResultList"
          :item="item"
          :key="index"
          @handleSubscribe="handleSubscribe(item)"
          @handleMerge="handleMerge(item)"
          @handleInsert="handleInsert(item)"/>
      </section>
    </div>
  </div>
</template>

<script>
import MissionHeader from './mission-header'
import MissionItem from './mission-item'
import CheckingResultItem from './checking-result-item'
import { SIMILAR, DISSIMILAR } from './constants';
export default {
  name: 'dulplicateChecking',
  components: {
    MissionHeader,
    MissionItem,
    CheckingResultItem
  },
  data() {
    return {
      SIMILAR,
      DISSIMILAR,
      activeDealNames: ['dealSimilar', 'dealDissimilar'],
      activeNoDealName: ['noDealSimilar', 'noDealDissimilar'],

      checkedAllNoDeal: false, //未处理任务是否全选
      currentNoDealSimilarIndex: 0, //未处理任务-存在相似任务-当前选中任务下标
      currentNoDealDissimilarIndex: -1, //未处理任务-不存在相似任务-当前选中任务下标
      checkAllNoDealOfDissimilar: false, //未处理任务-不存在相似任务-是否全选
      checkAllNoDealOfSimilar: false, //未处理任务-存在相似任务-是否全选
      // 未处理任务-存在相似任务列表
      noDealSimilarList: [
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            {
              name: '省政府督查',
              count: 3,
            },
            {
              name: '省委督查',
              count: 3,
            },
            {
              name: '深改办(自贸办)',
              count: 2,
            },
          ],
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            {
              name: '省政府督查',
              count: 3,
            },
            {
              name: '省委督查',
              count: 3,
            },
            {
              name: '深改办(自贸办)',
              count: 2,
            },
          ],
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            {
              name: '省政府督查',
              count: 3,
            },
            {
              name: '省委督查',
              count: 3,
            },
            {
              name: '深改办(自贸办)',
              count: 2,
            },
          ],
        },
      ],
      // 未处理任务-不存在相似任务列表
      noDealDissimilarList: [
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
        },
      ],

      currentDealSimilarIndex: 0, //已处理任务-存在相似任务-当前选中任务下标
      currentDealDissimilarIndex: -1, //已处理任务-不存在相似任务-当前选中任务下标
      // 已处理任务-存在相似任务列表
      hadDealSimilarList: [
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            {
              name: '省政府督查',
              count: 3,
            },
            {
              name: '省委督查',
              count: 3,
            },
            {
              name: '深改办(自贸办)',
              count: 2,
            },
          ],
          status: 3,
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          matchingResultCount: 8,
          checkResultList: [
            {
              name: '省政府督查',
              count: 3,
            },
            {
              name: '省委督查',
              count: 3,
            },
            {
              name: '深改办(自贸办)',
              count: 2,
            },
          ],
          status: 3,
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
      ],
      // 已处理任务-不存在相似任务列表
      hadDealDissimilarList: [
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          status: 3,
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          status: 3,
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
        {
          title:
            '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
          checked: false,
          status: 3,
          relation:
            '《习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问。立足南非和金砖，放眼非洲和世 界。》',
        },
      ],

      currentMissionType: 0, //当前选中任务类型(已处理1, 未处理0)
      missionCount: {
        noDealCount: 5,
        hadDealCount: 2,
      },
      importCount: {
        allCount: 8,
        similarCount: 4,
        disSimilarCount: 4,
      },
      checkedTags: ['任务标题'],
      tags: ['任务标题', '任务标签', '事项来源及依据'],
      checkingResultList: [],
    };
  },
  watch: {
    //未处理任务-存在相似任务-是否全选
    checkAllNoDealOfSimilar(val) {
      //未处理任务是否全选
      this.checkedAllNoDeal = val && this.checkAllNoDealOfDissimilar;
    },
    //未处理任务-不存在相似任务-是否全选
    checkAllNoDealOfDissimilar(val) {
      //未处理任务是否全选
      this.checkedAllNoDeal = val && this.checkAllNoDealOfSimilar;
    },
    //未处理任务是否全选
    checkedAllNoDeal(val) {
      this.checkAllNoDealOfSimilar = this.noDealSimilarList.every(item => item.checked);
      this.checkAllNoDealOfDissimilar = this.noDealDissimilarList.every(item => item.checked);
    },
  },
  props: {},
  computed: {
    hadCheckNoDealCount() {
      return (
        this.noDealSimilarList.filter(item => item.checked).length +
        this.noDealDissimilarList.filter(item => item.checked).length
      );
    },
  },
  created() {
    for (let i = 0; i < 3; i++) {
      this.checkingResultList.push({
        title:
          '春风验荡。历经百年沧桑的南非比勒陀利亚总统府，习近平主席同拉马福萨总统并肩而立，俯瞰欣欣向荣的城。',
        tags: [
          '坚持生态立省',
          '放眼非洲和世界',
          '习近平主席出席金砖国家领导人第十五次会晤并对南非进行国事访问',
          '其他发展中国家加强团结合作',
          '南非进行国事访问',
          '共同维护联合国宪章宗旨和原则维护广大发展中国家共同利益',
        ],
        sourceTxt:
          '总书记进话:要认真学习领会、深入贯彻落实习近平总书记重要进话精神，牢记嘱托、不负厚望，奋力追赶、敢于超越封关运作“三张清单”:要认真学习领会、深入贯彻落实习近平总书记重要讲话精神，牢记嘱托、不负厚望，奋力追赶、敢于金砖国家一带一路超越敢于超越敢于超越超深入贯彻落实习近平总书记重要讲话精神，牢记嘱托、不深入贯彻落实习近平总书记重要讲话精神，牢记嘱托。',
        leaderUnits: ['省发展改革委员会', '海口市政府', '三亚市政府'],
        superviseUnits: ['省政府督查'],
        arriveTime: '2023-02-30 12:12',
        recommandTags: ['任务标题相似', '任务标签相同', '来源及要求相似'],
        status: 0,
      });
    }
  },
  mounted() {},
  methods: {
    // 查看详情
    goDetail(e, row) {
      e.stopPropagation()
      console.log('row', row)
      this.$emit('detail-click', row)
    },
    // 批量创建任务
    createTasks() {
      this.$emit('createTasks');
    },
    // 关注
    handleSubscribe(row) {
      console.log('row', row)
      this.$emit('subscription-click', row);
    },
    // 归并
    handleMerge(row) {
      console.log('row', row)
      this.$emit('merging-click', row);
    },
    // 插入
    handleInsert(row) {
      console.log('row', row)
      this.$emit('insertion-click', row);
    },
    // 切换来源
    handleCheckedTagsChange(val) {
      console.log('val', val)
      this.$emit('toggleSource', val);
    },
    // 全选未处理任务
    handleCheckAllNoDeal(val) {
      this.noDealSimilarList.forEach(item => (item.checked = val));
      this.noDealDissimilarList.forEach(item => (item.checked = val));
    },
    // 全选(未处理任务-不存在相似任务)
    handleCheckAllNoDealOfDissimilar(val) {
      this.checkAllNoDealOfDissimilar = val
      this.noDealDissimilarList.forEach(item => (item.checked = val));
    },
    // 全选(未处理任务-存在相似任务)
    handleCheckAllNoDealOfSimilar(val) {
      this.checkAllNoDealOfSimilar = val;
      this.noDealSimilarList.forEach(item => (item.checked = val));
    },
    // 点击 checkbox (未处理任务-不存在相似任务)
    handleNoDealDissimilarCheckedChange(val) {
      this.checkAllNoDealOfDissimilar = this.noDealDissimilarList.every(item => item.checked);
      if (!val) {
        this.checkedAllNoDeal = false;
      }
    },
    // 点击 checkbox (未处理任务-存在相似任务)
    handleNoDealSimilarCheckedChange(val) {
      this.checkAllNoDealOfSimilar = this.noDealSimilarList.every(item => item.checked);
      if (!val) {
        this.checkedAllNoDeal = false;
      }
    },
    // 点击 item (未处理任务-不存在相似任务)
    handleNoDealDissimilarClick(item, index) {
      console.log('row', item)
      this.currentNoDealDissimilarIndex = index;
      this.currentNoDealSimilarIndex = -1;
    },
    // 点击 item (未处理任务-存在相似任务)
    handleNoDealSimilarClick(item, index) {
      console.log('row', item)
      this.currentNoDealSimilarIndex = index;
      this.currentNoDealDissimilarIndex = -1;
    },

    // 点击 item (已处理任务-不存在相似任务)
    handleDealDissimilarClick(item, index) {
      console.log('row', item)
      this.currentDealDissimilarIndex = index;
      this.currentDealSimilarIndex = -1;
    },
    // 点击 item (已处理任务-存在相似任务)
    handleDealSimilarClick(item, index) {
      console.log('row', item)
      this.currentDealSimilarIndex = index;
      this.currentDealDissimilarIndex = -1;
    },

    toggleTag(index) {
      this.currentMissionType = index;
    },

  },
};
</script>

<style scoped lang="scss">
.look-dulplicate-checking {
  display: flex;
  background-color: #f6f6f6;
  height: 100%;
  .left-container {
    flex: 4;
    border-right: 1px solid #e4e4f3;
    .left-container-header {
      background-color: #fff;
      padding: 12px;
      padding-bottom: 24px;
      .intro {
        margin-bottom: 20px;
        span {
          font-weight: bold;
          margin: 0 4px;
        }
      }
      .all-count {
        color: #506eda;
      }
      .similar-count {
        color: #506eda;
      }
      .dissimilar-count {
        color: #ff4d4f;
      }
      .checkboxs {
        display: flex;
        align-items: center;
        > span {
          color: #999;
          margin-right: 10px;
        }
      }
    }
    .left-container-section {
      position: relative;
      border-top: 1px solid #eee;
      padding: 10px 12px;
      .mission-tag-wrap {
        display: flex;
        .mission-tag {
          border: 1px solid #506eda;
          padding: 8px 12px;
          background-color: #fff;
          color: #506eda;
          cursor: pointer;
          position: relative;
          &-actived {
            background-color: #506eda;
            color: #fff;
            border-radius: 6px;
            z-index: 1;
          }
        }
        > div {
          &:nth-child(1):not(.mission-tag-actived) {
            border-radius: 6px 0 0 6px;
            margin-right: -4px;
          }
          &:nth-child(2):not(.mission-tag-actived) {
            border-radius: 0 6px 6px 0;
            margin-left: -4px;
            padding-left: 16px;
          }
        }
      }
      .collapse-container {
        box-shadow: 0 3px 6px rgba(140, 149, 159, 0.15);
        background-color: #fff;
        border-radius: 8px;
        height: 650px;
        overflow: auto;
        margin-top: 10px;
        ::v-deep .el-collapse-item__header {
          border-radius: 12px;
        }
        ::v-deep .el-collapse-item__content {
          padding-bottom: 10px;
        }
      }
      .collapse-content {
        /* height: 300px; */
        overflow-y: auto;
        overflow-x: hidden;
        padding: 0 10px;
        &::-webkit-scrollbar-track-piece {
          background-color: transparent;
        }
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background-color: #888;
        }
        .mission-item {
          position: relative;
          padding: 14px 12px;
          display: flex;
          align-items: center;
          border: 2px solid transparent;
          cursor: pointer;
        }

        .mission-item-actived {
          position: relative;
          border: 2px solid #506eda;
          border-radius: 8px;
          &::after {
            content: '';
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border: 8px solid transparent;
            border-left: 8px solid #506eda;
          }
        }
      }
      .bottom-bar {
        position: absolute;
        bottom: -10px;
        left: 12px;
        width: calc(100% - 24px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.65);
        border-radius: 20px;
        color: #fff;
        overflow: hidden;
        font-size: 15px;
        .bb-left {
          flex: 1;
          display: flex;
          justify-content: space-between;
          padding: 8px 16px;
          color: #fff;
          .el-checkbox {
            color: #fff;
          }
          .lookui-checkbox {
            ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
              color: #fff;
            }
          }
        }
        .bb-right {
          background: linear-gradient(to right, #5670db, #7f90e8);
          padding: 8px 16px;
          cursor: pointer;
        }
      }
    }
  }
  .right-container {
    flex: 6;
    padding: 14px;
    header.right-contiainer-header {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: bold;

      span.txt {
        margin: 0 8px;
      }

      span.count {
        color: #506eda;
      }
    }

    section.right-container-section {
      height: 780px;
      overflow-y: auto;
      margin-top: 10px;
      &::-webkit-scrollbar-track-piece {
        background-color: transparent;
      }
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #cfcbcb;
      }
    }
  }
}
</style>
