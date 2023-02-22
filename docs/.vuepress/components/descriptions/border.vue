<template>
  <div class="container">
    <el-descriptions class="lookui-descriptions" :column="2" border>
      <el-descriptions-item v-for="(item, index) in listData">
        <template slot="label">
         {{ item.label }} 
        </template>
        {{ item.value }} 
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          label: '用户名',
          value: 'kooriookami'
        },
        {
          label: '项目名称',
          value: '海口国际免税城项目'
        },
        {
          label: '牵头部门及项目负责人',
          value: '金发管理公司 朱鹤松1309232342'
        },
        {
          label: '资规部门及项目负责人',
          value: '县资规局 钟继秀13929324348'
        },
      ],
    };
  }
};
</script>