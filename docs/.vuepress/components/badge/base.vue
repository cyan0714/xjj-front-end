<template>
  <div class="container">
    <el-badge :value="200" :max="99" class="item">
      <el-button class="lookui-btn" size="small">评论</el-button>
    </el-badge>
    <el-badge :value="12" class="item">
      <el-button class="lookui-btn" size="small">回复</el-button>
    </el-badge>
    <el-dropdown trigger="click">
      <span class="lookui-dropdown-link">
        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu class="lookui-dropdown-menu" slot="dropdown">
        <el-dropdown-item class="clearfix">
          选项1
          <el-badge class="mark" :value="12" type="primary"/>
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          选项2
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
