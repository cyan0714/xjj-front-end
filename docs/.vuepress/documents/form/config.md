<template>
  <div class="container">
    <el-form ref="form" class="lookui-form" :model="form" label-width="80px">
        <el-col :span="12" v-for="(item, index) in formData">
          <el-form-item  :label="item.label">
              <el-input v-if="item.type === 'input'" class="lookui-input" v-model="form[item.field]"></el-input>
              <el-select
                v-if="item.type === 'select'"
                class="lookui-select"
                popper-class="lookui-select-dropdown"
                v-model="form[item.field]"
                placeholder="请选择活动区域"
              >
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
              <div v-if="item.type === 'select-out'" style="display:flex">
                <el-input class="lookui-input" v-model="form[item.field]"></el-input>
                <el-button type="primary" icon="el-icon-plus" class="lookui-button" size="small" style="margin-left:10px"></el-button>
              </div>
              <el-date-picker
                  v-if="item.type === 'date'"
                  class="lookui-picker"
                  popper-class="lookui-date-popper"
                  type="date"
                  placeholder="选择日期"
                  v-model="form[item.field]"
                  style="width: 100%"
                ></el-date-picker>
              <el-time-picker
                v-if="item.type === 'time'"
                class="lookui-picker"
                popper-class="lookui-time-popper"
                placeholder="选择时间"
                v-model="form[item.field]"
                style="width: 100%"
              ></el-time-picker>
              <el-switch v-if="item.type === 'switch'" class="lookui-switch" v-model="form[item.field]"></el-switch>
              <el-checkbox-group v-if="item.type === 'checkbox'" v-model="form[item.field]">
                <el-checkbox
                  class="lookui-checkbox"
                  label="美食/餐厅线上活动"
                  :name="form[item.field]"
                ></el-checkbox>
                <el-checkbox
                  class="lookui-checkbox"
                  label="地推活动"
                  :name="form[item.field]"
                ></el-checkbox>
                <el-checkbox
                  class="lookui-checkbox"
                  label="线下主题活动"
                  :name="form[item.field]"
                ></el-checkbox>
                <el-checkbox
                  class="lookui-checkbox"
                  label="单纯品牌曝光"
                  :name="form[item.field]"
                ></el-checkbox>
              </el-checkbox-group>
              <el-radio-group v-if="item.type === 'radio'" v-model="form[item.field]">
                <el-radio class="lookui-radio" label="线上品牌商赞助"></el-radio>
                <el-radio class="lookui-radio" label="线下场地免费"></el-radio>
              </el-radio-group>
              <el-input
                v-if="item.type === 'textarea'"
                class="lookui-input"
                type="textarea"
                v-model="form[item.field]"
              ></el-input>
          </el-form-item>
        </el-col>
    </el-form>
    <div>
      <el-button class="lookui-btn" type="primary" @click="onSubmit">确认</el-button>
      <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        checkbox1: []
      },
      formData: [
        {
          type: 'input',
          label: '活动名称',
          field: 'name'
        },
        {
          type: 'select',
          label: '活动区域',
          field: 'region'
        },
        {
          type: 'select-out',
          label: '外部选择',
          field: 'region-out'
        },
        {
          type: 'date',
          label: '活动日期',
          field: 'date'
        },
        {
          type: 'time',
          label: '活动时间',
          field: 'time'
        },
        {
          type: 'switch',
          label: '开关',
          field: 'switch'
        },
        {
          type: 'checkbox',
          label: '多选',
          field: 'checkbox1'
        },
        {
          type: 'radio',
          label: '单选',
          field: 'radio'
        },
        {
          type: 'textarea',
          label: '文本域',
          field: 'textarea'
        },
      ]
    }
  },
  methods: {
    onSubmit() {
      console.log(JSON.parse(JSON.stringify(this.form)))
    }
  }
}
</script>
