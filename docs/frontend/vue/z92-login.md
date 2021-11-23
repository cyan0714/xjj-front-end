---
title: 登录模块
---

## 用户信息

用户登录后， 默认情况下用户信息对象将存储在cookie中， 如有对应的配置， 将存储在与之对应的位置

### 使用

提供了getUserInfo方法用于获取userInfo对象

同时vuex也导出了userInfo这个对象， 可以直接通过vuex的mapGetters辅助函数将其引入到vue文件内的计算属性当中

```JavaScript

// script
import { mapGetters } from 'vuex'
import { getUserInfo } from '@/modules/base/utils/auth'

export default {
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters('login', [
      'userInfo',
    ])
  },
  methods: {
    myFuncToGetUserInfo() {
      // 获取到用户信息
      let userInfo = getUserInfo();
    }
  }
}
```

## 本章节未完待续...
