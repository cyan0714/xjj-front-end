---
title: 系统设置模块
---

## 常量
#### 获取常量使用示例
```js
import { getConstByKey } from "@syssetting/modules/syssetting/utils/syssettingsUtil";

getConstByKey({
    key:"LOGIN_ENABLE_DYNAMIC_CODE",
    vKey:'remark'
}).then(value=>{
    console.log(value)
})

```

##### 输入参数
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:----------------------------|:---------------|:---------------|:---------------|:---------------|
|key | 是 | 常量名|string|无|
|vkey | 否| 常量值的object中的key,当该值为'all'时，将返回object，否则将根据key返回相应的value|string|value|

##### 输出参数
| 参数 | 说明 | 类型 |
|:-|:-|:--|
|name  | 常量名|string|
|value |  常量值,当该值为'all'时，将返回object，否则将根据key返回相应的value|string/object|
|remark |  常量备注|string|