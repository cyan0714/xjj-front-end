---
title: 常用过滤器(filters)
---

## 大纲
+ <font color=#477BB2>parseTime</font>
+ <font color=#477BB2>formatTime</font>
+ <font color=#477BB2>pluralize</font>
+ <font color=#477BB2>timeAgo</font>
+ <font color=#477BB2>numberFormatter</font>
+ <font color=#477BB2>toThousandFilter</font>
+ <font color=#477BB2>uppercaseFirst</font>
## 使用
示例：使用parseTime过滤器，直接在template中使用即可，无需引入
```js
{{message | parseTime}}
```

### parseTime(根据日期格式将日期类型转换为字符串类型)
