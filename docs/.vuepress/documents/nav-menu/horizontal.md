<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#fff"
      text-color="#666"
      active-text-color="#506eda"
      @select="handleSelect"
    >
      <el-menu-item class="lookui-menu-item" index="1">处理中心</el-menu-item>
      <el-submenu class="lookui-submenu" index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item class="lookui-menu-item" index="2-1">选项1</el-menu-item>
        <el-menu-item class="lookui-menu-item" index="2-2">选项2</el-menu-item>
        <el-menu-item class="lookui-menu-item" index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item class="lookui-menu-item" index="3" disabled>消息中心</el-menu-item>
      <el-menu-item class="lookui-menu-item" index="4">订单管理</el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#506eda"
      text-color="#cbd3f4"
      active-text-color="#fff"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item class="lookui-menu-item-theme" index="2-1">选项1</el-menu-item>
        <el-menu-item class="lookui-menu-item-theme" index="2-2">选项2</el-menu-item>
        <el-menu-item class="lookui-menu-item-theme" index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.el-menu-demo {
  margin-bottom: 14px;
}
</style>
