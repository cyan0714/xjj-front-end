---
title: PerformanceCms
---

## 基础用法

:::demo

```vue
<template>
  <div style="height: 700px">
    <look-performance-cms :token="token" :baseUrl="baseUrl" maxHeight="470" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: 'http://192.168.230.124:6068/performance-appraisal',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJhNWRlNWFhMi0wZTQ2LTQ2YjItYTVhMC02NDIyNDg4NDU0YmUiLCJhcHBJZCI6IkdaTFNaWCIsInRlbmFudElkIjoiNDYwMjAwMDAzOCIsImFjY2Vzc1Rva2VuIjoiOTM1NGI2ZjFhYzM0OGFmMjY5YTRhNGFjNWRmNDVmNWQiLCJpYXQiOjE3MDk2ODg3MTAsImV4cCI6MTcwOTY5NTkxMH0.PzUjHeJt6idFJ5bOE0qfEySFxcNzf03Ph9qRzc8uhOM',
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
```

:::
