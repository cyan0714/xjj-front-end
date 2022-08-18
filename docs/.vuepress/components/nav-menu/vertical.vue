<template>
  <div class="container">
    <el-row class="tac">
      <el-col :span="12">
        <h5>默认颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#666"
          active-text-color="#506eda"
        >
          <el-submenu class="lookui-submenu" index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item class="lookui-menu-item" index="1-1">选项1</el-menu-item>
            <el-menu-item class="lookui-menu-item" index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item class="lookui-menu-item" index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item class="lookui-menu-item" index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#506eda"
          text-color="#cbd3f4"
          active-text-color="#fff"
        >
          <el-submenu class="lookui-submenu-theme" index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item class="lookui-menu-item-theme" index="1-1">选项1</el-menu-item>
            <el-menu-item class="lookui-menu-item-theme" index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
