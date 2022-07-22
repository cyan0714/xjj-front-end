---
title: Form
---

## Radio 单选框
在一组备选项中进行单选

### 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

<radio-base style="padding: 24px" />

> 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

<<< @/docs/.vuepress/components/radio/base.vue

### 禁用状态
单选框不可用的状态。

<radio-disable style="padding: 24px" />

> 只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。

<<< @/docs/.vuepress/components/radio/disable.vue

### 单选框组
适用于在多个互斥的选项中选择的场景。

<radio-group style="padding: 24px" />

> 结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。

<<< @/docs/.vuepress/components/radio/group.vue



## Checkbox 多选框
一组备选项中进行多选

### 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<checkbox-base style="padding: 24px" />

> 在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。

<<< @/docs/.vuepress/components/checkbox/base.vue

### 禁用状态
多选框不可用状态。

<checkbox-disable style="padding: 24px" />

> 设置disabled属性即可。

<<< @/docs/.vuepress/components/checkbox/disable.vue

### 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<checkbox-group style="padding: 24px" />

> checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

<<< @/docs/.vuepress/components/checkbox/group.vue



## Input 输入框
通过鼠标或键盘输入字符。

### 基础用法
<input-base style="padding: 24px" />

<<< @/docs/.vuepress/components/input/base.vue

### 禁用状态
<input-disabled style="padding: 24px" />
通过 disabled 属性指定是否禁用 input 组件。

<<< @/docs/.vuepress/components/input/disabled.vue

### 可清空
<input-clearable style="padding: 24px; padding-right: 0" />
使用clearable属性即可得到一个可清空的输入框。

<<< @/docs/.vuepress/components/input/clearable.vue

### 密码框
<input-password style="padding: 24px; padding-right: 0" />
使用show-password属性即可得到一个可切换显示隐藏的密码框。

<<< @/docs/.vuepress/components/input/password.vue

### 带icon的输入框
<input-icon />
可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。

<<< @/docs/.vuepress/components/input/icon.vue

### 文本域
<input-textarea style="padding: 24px" />
文本域高度可通过 rows 属性控制

<<< @/docs/.vuepress/components/input/textarea.vue

### 尺寸
<input-size style="padding: 24px" />
可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

<<< @/docs/.vuepress/components/input/size.vue
