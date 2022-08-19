<template>
  <div class="lookui-aside-menu">
    <div class="lookui-aside-menu-icons">
      <div class="icons-top">
        <div
          v-for="(icon, idx) in icons"
          :key="idx"
          :class="['icon-item', currentIdx === idx ? 'actived-icon' : '']"
          @click="currentIdx = idx"
        >
          <i :class="icon"></i>
        </div>
      </div>
      <div class="icon-item" @click="isShowMenuItems = true">
        <i class="el-icon-s-unfold"></i>
      </div>
    </div>
    <div v-show="isShowMenuItems" class="lookui-aside-menu-items">
      <div class="items-top">
        <template v-if="currentIdx === 0">
          <div
            v-for="(item, index) in 7"
            :key="index"
            :class="['menu-item', currentIndex === index ? 'actived-item' : '']"
            @click="currentIndex = index"
          >
            <div>
              <i class="el-icon-s-promotion"></i>
              <span>二级栏目</span>
            </div>
          </div>
        </template>
        <template v-if="currentIdx === 1">
          <div
            v-for="(item, index) in 4"
            :key="index"
            :class="['menu-item', currentIndex === index ? 'actived-item' : '']"
            @click="currentIndex = index"
          >
            <div>
              <i class="el-icon-s-promotion"></i>
              <span>二级栏目</span>
            </div>
          </div>
        </template>
      </div>
      <div class="items-fold" @click="isShowMenuItems = false">
        <i class="el-icon-s-fold"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowMenuItems: true,
      currentIdx: 0,
      currentIndex: 0,
      icons: [
        'el-icon-s-data',
        'el-icon-s-check',
        'el-icon-s-grid',
        'el-icon-s-opportunity',
        'el-icon-s-custom'
      ]
    }
  },
}
</script>

<style>
.lookui-aside-menu {
  height: 646px;
}
</style>
