---
title: Form
sidebarDepth: 3
---

## Radio 单选框
在一组备选项中进行单选

### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<radio-base style="padding: 24px" />

要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio`label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/radio/base.vue
</details>

### 禁用状态
单选框不可用的状态。

<radio-disable style="padding: 24px" />

只要在`el-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/radio/disable.vue
</details>

### 单选框组
适用于在多个互斥的选项中选择的场景。

<radio-group style="padding: 24px" />

结合`el-radio-group`元素和子元素`el-radio`可以实现单选组，在`el-radio-group`中绑定`v-model`，在`el-radio`中设置好`label`即可，无需再给每一个`el-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/radio/group.vue
</details>


## Checkbox 多选框
一组备选项中进行多选

### 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<checkbox-base style="padding: 24px" />

在`el-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/checkbox/base.vue
</details>

### 禁用状态
多选框不可用状态。

<checkbox-disable style="padding: 24px" />

> 设置disabled属性即可。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/checkbox/disable.vue
</details>

### 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<checkbox-group style="padding: 24px" />

`checkbox-group`元素能把多个`checkbox`管理为一组，只需要在`Group`中使用`v-model`绑定Array类型的变量即可。 `el-checkbox`的`label`属性是该`checkbox`对应的值，若该标签中无内容，则该属性也充当`checkbox`按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/checkbox/group.vue
</details>


## Input 输入框
通过鼠标或键盘输入字符。

### 基础用法
<input-base style="padding: 24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/base.vue
</details>

### 禁用状态
<input-disabled style="padding: 24px" />

通过`disabled`属性指定是否禁用`input`组件。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/disabled.vue
</details>

### 可清空
<input-clearable style="padding: 24px; padding-right: 0" />

使用`clearable`属性即可得到一个可清空的输入框。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/clearable.vue
</details>

### 密码框
<input-password style="padding: 24px; padding-right: 0" />

使用`show-password`属性即可得到一个可切换显示隐藏的密码框。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/password.vue
</details>

### 带icon的输入框
<input-icon />

可以通过`prefix-icon`和`suffix-icon`属性在`input`组件首部和尾部增加显示图标，也可以通过`slot`来放置图标。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/icon.vue
</details>

### 文本域
<input-textarea style="padding: 24px" />
文本域高度可通过`rows`属性控制

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/textarea.vue
</details>

### 尺寸
<input-size style="padding: 24px" />

可通过`size`属性指定输入框的尺寸，除了默认的大小外，还提供了`medium`、`small`和`mini`三种尺寸。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input/size.vue
</details>

## InputNumber 计数器

仅允许输入标准的数字值，可定义范围。

### 基础用法
<input-number-base style="margin-top:24px" />

要使用它，只需要在`el-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/base.vue
</details>

### 禁用状态
<input-number-disabled style="margin-top:24px" />

`disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/disabled.vue
</details>

### 步数
<input-number-step style="margin-top:24px" />

设置`step`属性可以控制步长，接受一个`Number`。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/step.vue
</details>

### 严格步数
<input-number-strictstep style="margin-top:24px" />

`step-strictly`属性接受一个`Boolean`。如果这个属性被设置为`true`，则只能输入步数的倍数。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/strictstep.vue
</details>

### 严格步数
<input-number-precision style="margin-top:24px" />

设置`precision`属性可以控制数值精度，接收一个`Number`。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/precision.vue
</details>

> precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。

### 尺寸
<input-number-size style="margin-top:24px" />

额外提供了`medium`、`small`、`mini`三种尺寸的数字输入框

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/size.vue
</details>

### 位置
<input-number-position style="margin-top:24px" />

设置`controls-position`属性可以控制按钮位置。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/input-number/position.vue
</details>


## Select 选择器
当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法
<select-base style="margin-top:24px" />

`v-model`的值为当前被选中的`el-option`的`value`属性值

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/select/base.vue
</details>

### 禁用状态
选择器不可用状态

<select-disabled/>

为`el-select`设置`disabled`属性，则整个选择器不可用

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/select/disabled.vue
</details>

### 有禁用选项
<select-disabled-option style="margin-top:24px" />

在`el-option`中，设定`disabled`值为`true`，即可禁用该选项

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/select/disabled-option.vue
</details>

### 可清空单选
包含清空按钮，可将选择器清空为初始状态

<select-clearable />

为`el-select`设置`clearable`属性，则可将选择器清空。需要注意的是，`clearable`属性仅适用于单选。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/select/clearable.vue
</details>

### 基础多选
适用性较广的基础多选，用`Tag`展示已选项

<select-multiple />
为`el-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/select/multiple.vue
</details>

### 分组
备选项进行分组展示

<select-group />
使用`el-option-group`对备选项进行分组，它的`label`属性为分组名

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/select/group.vue
</details>

## Cascader 级联选择器

### 基础用法
有两种触发子菜单的方式

<cascader-base />

只需为`Cascader`的`options`属性指定选项数组即可渲染出一个级联选择器。通过`props.expandTrigger`可以定义展开子级菜单的触发方式。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/cascader/base.vue
</details>

### 禁用选项
通过在数据源中设置`disabled`字段来声明该选项是禁用的

<cascader-disabled />

本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的disabled字段是否为true，如果你的数据中表示禁用含义的字段名不为disabled，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/cascader/disabled.vue
</details>

### 可清空
通过`clearable`设置输入框可清空

<cascader-clearable />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/cascader/clearable.vue
</details>

### 仅显示最后一级
可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

<cascader-last-level />
属性`show-all-levels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/cascader/last-level.vue
</details>

### 多选
可通过`props.multiple = true`来开启多选模式

<cascader-multiple />
在开启多选模式后，默认情况下会展示所有已选中的选项的Tag，你可以使用`collapse-tags`来折叠Tag

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/cascader/multiple.vue
</details>

### 选择任意一级选项
在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。

<cascader-free-level />

可通过`props.checkStrictly = true`来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/cascader/free-level.vue
</details>


## Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
### 基础用法

<switch-base style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/components/switch/base.vue
</details>

### 文字描述

<switch-describe style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/switch/describe.md
</details>


### 禁用状态

<switch-disabled style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/switch/disabled.md
</details>


## Slider 滑块

### 基础用法

<slider-base style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/slider/base.md
</details>

### 离散值

<slider-step style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/slider/step.md
</details>

### 带有输入框

<slider-input style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/slider/input.md
</details>

### 范围选择

<slider-range style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/slider/range.md
</details>

### 竖向模式

<slider-vertical style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/slider/vertical.md
</details>

### 展示标记

<slider-marks style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/slider/marks.md
</details>


## TimePicker 时间选择器
### 固定时间点

<time-picker-settled style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/time-picker/settled.md
</details>

### 任意时间点

<time-picker-free style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/time-picker/free.md
</details>

### 固定时间范围

<time-picker-settled-range style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/time-picker/settled-range.md
</details>

### 任意时间范围

<time-picker-free-range style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/time-picker/free-range.md
</details>


## DatePicker 日期选择器

### 选择日

<date-picker-date style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-picker/date.md
</details>

### 其他日期单位

<date-picker-other-unit style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-picker/other-unit.md
</details>

### 选择日期范围

<date-picker-date-range style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-picker/date-range.md
</details>

### 选择月份范围

<date-picker-month-range style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-picker/month-range.md
</details>


## 日期时间选择器
### 日期和时间点

<date-time-picker-base style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-time-picker/base.md
</details>

### 日期和时间范围

<date-time-picker-range style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-time-picker/range.md
</details>

### 默认的起始与结束时刻

<date-time-picker-default-start-end style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/date-time-picker/default-start-end.md
</details>


## 上传
### 点击上传

<upload-clicking style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/clicking.md
</details>

### 用户头像上传

<upload-portrait style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/portrait.md
</details>

### 照片墙

<upload-photos style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/photos.md
</details>

### 文件缩略图

<upload-file-thumbnail style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/file-thumbnail.md
</details>

### 图片列表缩略图

<upload-picture-thumbnail style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/picture-thumbnail.md
</details>

### 拖拽上传

<upload-drag style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/drag.md
</details>

### 手动上传

<upload-manual style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/upload/manual.md
</details>


## Rate 评分
### 基础用法

<rate-base style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/rate/base.md
</details>

### 辅助文字

<rate-auxiliary-text style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/rate/auxiliary-text.md
</details>

### 其他 icon

<rate-others-icon style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/rate/others-icon.md
</details>

### 只读

<rate-readonly style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/rate/readonly.md
</details>


## Transfer 穿梭框
### 基础用法

<transfer-base style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/transfer/base.md
</details>

### 可搜索

<transfer-searchable style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/transfer/searchable.md
</details>

### 可自定义

<transfer-customable style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/transfer/customable.md
</details>


## 表单
### 典型表单

<form-typical style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/typical.md
</details>

### 配置表单

<form-config style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/config.md
</details>

### 行内表单

<form-inline style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/inline.md
</details>

### 对齐方式

<form-align-way style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/align-way.md
</details>

### 表单验证

<form-validator style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/validator.md
</details>

### 自定义校验规则

<form-diy-validator style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/diy-validator.md
</details>

### 数字类型验证

<form-number-validator style="margin-top:24px" />

<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/form/number-validator.md
</details>





