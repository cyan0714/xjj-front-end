<template>
  <div class="container">
    <div class="block">
      <p>起始日期时刻为 12:00:00</p>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-time-popper lookui-date-popper"
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <p>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</p>
      <el-date-picker
        class="lookui-picker"
        popper-class="lookui-time-popper lookui-date-popper"
        v-model="value2"
        type="datetimerange"
        align="right"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00', '08:00:00']"
      >
      </el-date-picker>
      <p>
        使用 datetimerange 进行范围选择时，在日期选择面板中选定起始与结束的日期，默认会使用该日期的 00:00:00 作为起始与结束的时刻；通过选项 default-time 可以控制选中起始与结束日期时所使用的具体时刻。
        default-time 接受一个数组，数组每项值为字符串，形如12:00:00，其中第一项控制起始日期的具体时刻，第二项控制结束日期的具体时刻。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: ''
    }
  }
}
</script>
