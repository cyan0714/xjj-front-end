<template>
  <div class="container">
    <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
    <el-form ref="form" class="lookui-form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input class="lookui-input" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select
          class="lookui-select"
          popper-class="lookui-select-dropdown"
          v-model="form.region"
          placeholder="请选择活动区域"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            class="lookui-picker"
            popper-class="lookui-date-popper"
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            class="lookui-picker"
            popper-class="lookui-time-popper"
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch class="lookui-switch" v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox
            class="lookui-checkbox"
            label="美食/餐厅线上活动"
            name="type"
          ></el-checkbox>
          <el-checkbox
            class="lookui-checkbox"
            label="地推活动"
            name="type"
          ></el-checkbox>
          <el-checkbox
            class="lookui-checkbox"
            label="线下主题活动"
            name="type"
          ></el-checkbox>
          <el-checkbox
            class="lookui-checkbox"
            label="单纯品牌曝光"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio class="lookui-radio" label="线上品牌商赞助"></el-radio>
          <el-radio class="lookui-radio" label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input
          class="lookui-input"
          type="textarea"
          v-model="form.desc"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <p>在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括 Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
