<template>
  <div class="container">
    <el-popover popper-class="lookui-popover" placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button class="lookui-btn" slot="reference">hover 激活</el-button>
    </el-popover>
    <el-popover popper-class="lookui-popover" placement="bottom" title="标题" width="200" trigger="click" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <el-button class="lookui-btn" slot="reference">click 激活</el-button>
    </el-popover>
    <el-popover popper-class="lookui-popover" ref="popover" placement="right" title="标题" width="200" trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    </el-popover>
    <el-button class="lookui-btn" v-popover:popover>focus 激活</el-button>
    <el-popover popper-class="lookui-popover" placement="bottom" title="标题" width="200" trigger="manual" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible">
      <el-button class="lookui-btn" slot="reference" @click="visible = !visible">手动激活</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>
