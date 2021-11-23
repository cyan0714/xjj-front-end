---
title: 组件库
---
## 树形地址簿组件

选取部门/人员

### 特性

- 左侧树结构按需加载

::: tip
组件库xjjvuesystem版本：4.1.0+
:::

### 使用范例

```JavaScript
<template>
  <div label-width="100px" class="tree-addresssbook-demo">
    <div class="tree-addresssbook-input">
      <div class="tree-addresssbook-selected-data" @click.prevent="open">
        <el-tag
          class="tree-addresssbook-selected-data-item"
          v-for="selectedData in selectedDatas"
          :key="selectedData.id"
          >{{ selectedData["title"] }}</el-tag
        >
      </div>
      <el-button type="text" @click="cleanAll">清除</el-button>
    </div>
    <tree-addresssbook
      style="width: 50%"
      :visible.sync="visible"
      :selected-datas.sync="selectedDatas"
    ></tree-addresssbook>
  </div>
</template>

<script>
//单体应用引用:
import TreeAddresssbook from "@xjjbase/modules/xjjvuebase/components/TreeAddresssbook";
//微服务引用：
//import TreeAddresssbook from "@xjjbase/components/TreeAddresssbook";
export default {
  name: "tree-addresssbook-demo",
  components: { TreeAddresssbook },
  data() {
    return {
      visible: false,
      formData: {},
      selectedDatas: [],
    };
  },
  created() {},
  watch: {
    selectedDatas(newval) {
      console.log(JSON.stringify(newval));
    },
  },
  methods: {
    open() {
      this.visible = true;
    },
    cleanAll() {
      this.selectedDatas = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-addresssbook-demo {
  background-color: #ffffff;
  height: 100%;
  margin: 16px;
  padding: 16px;
}
.tree-addresssbook-input {
  display: flex;
  justify-content: flex-start;
  .tree-addresssbook-selected-data {
    border: 1px solid $--border-color-light;
    min-height: 32px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 4px;
    padding: 4px 8px 0;
    margin-right: 8px;
    min-width: 200px;
    width: 100%;
    .tree-addresssbook-selected-data-item {
      margin: 0 8px 8px 0;
    }
  }
  .tree-addresssbook-selected-data:hover {
    border: 1px solid $--color-primary;
    cursor: pointer;
  }
}
</style>
```
#### 地址簿参数说明
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:-----|:-----|:-----|:-----|:-------|
| selectedData  | 是   | 已选择的数据，数据结构说明请查阅selectedData参数说明 | Array   | 无       |
| visible       | 是   | 是否可见                                             | Boolean | 无       |
| componentType | 否   | 组件类型，4部门地址本，6人员地址本                   | string  | "4"      |
| rootId        | 否   | 部门根id                                             | string  | "0"      |
| title         | 否   | 地址本标题                                           | string  | "地址簿" |
| defaultProps  | 否   | 默认字段名 , 数据结构说明请查阅defaultProps参数说明  | Object  | {        |
          children: "children",
          label: "title",
          id: "id",
          isLeaf: "last",
        }     |
| multiple   | 否   | 是否多选    | Boolean  | true     |

#### selectedData参数说明
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:-----|:-----|:-----|:-----|:-------|
| selectedData | 是   | 已选择的数据，数据结构说明请查阅selectedData参数说明 | Array | 无     |

#### defaultProps参数说明
| 参数 | 说明 |
|:-----|:-----|
| children | 子节点字段名           |
| label    | 用于显示的字段名       |
| id       | 唯一标识的字段名       |
| isLeaf   | 是否为叶子节点的字段名 |

## 文件上传(XjjUpload)

### 快速开始
```js
  <template>
  <div class="xjj-upload-demo">
    <!--编辑页面-->
    <xjj-upload
      :fileList="fileList"
    >

    <!--查看页面-->
    <xjj-upload
      :fileList="fileList"
      :showUploadBtn="false"
    >
  </div>
</template>

<script>
import XjjUpload from "@xjjbase/modules/xjjvuebase/components/XjjUpload";
export default {
  name: "xjj-upload-demo",
  components: { XjjUpload },
  data() {
    return {
      fileList: [
        {
          id: "64777387732107264",
          fileName: "api-ms-win-core-console-l1-1-0.dll",
          fileExt: "dll",
          fileSize: "18624",
          uid: "hpWEDTT8HBN7CPxcN4PKMJa2wsQftpecmDtBQawwxnhcwNkDr5",
          fileSecret:0
        },
      ],
    };
  },
};
</script>
```
更多的配置项，请查看XjjUpload属性说明
#### 展示的效果
![JavaScript Number](/frontend/vue/components/01.png)

#### XjjUpload属性
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:-----|:-----|:-----|:-----|:-------|
| fileList      | 是   | 已上传的文件列表，具体字段请看fileList列表            | Array   | []              |
| width         | 否   | 设置组件的宽度                                        | String  | 自适应          |
| tip           | 否   | 提示信息                                              | String  | 无              |
| showUploadBtn | 否   | 是否显示上传按钮                                      | Boolean | true            |
| headers       | 否   | 设置上传的请求头部                                    | Object  | 无              |
| limit         | 否   | 最大允许上传个数                                      | Number  | 无              |
| accept        | 否   | 接受上传的文件类型（thumbnail-mode 模式下此参数无效） | String  | 无              |
| drag          | 否   | 是否启用拖拽上传                                      | Boolean | false           |
| name          | 否   | 上传的文件字段名                                      | String  | file            |
| data          | 否   | 上传时附带的额外参数                                  | Object  | 无              |
| multiple      | 否   | 是否支持多选文件                                      | Boolean | true            |
| url           | 否   | 上传的地址                                            | String  | /api/attachment |
| showSecret    | 否   | 是否显示机密字段选择器                                | Boolean | false           |


#### fileList属性说明
| 参数 | 说明 | 类型 | 默认值 |
|:----------------------------|:---------------|:---------------|:---------------|:---------------|
|id |后端生成的唯一标识 |String| 无 |
|fileName |文件名		 |String| 无 |
|fileExt |文件后缀名		 |String| 无 |
|fileSize |文件大小(单位是:B)		 |String| 无 |
|uid |前端生成文件临时唯一标识） |String| 无 |
|fileSecret |  机密字段，0普通，1秘密，2机密		 |Number| 0 |

## 富文本编辑器(tinymce)
::: tip
组件库xjj-vue-base版本：2.5.10+
:::

### 快速开始
```js
  <template>
  <div class="components-container">
    <div>
      <tinymce
      ref="tinymce1"
        v-model="content"
        :height="300"
      />
    </div>
  </div>
</template>

<script>
import Tinymce from "@xjjbase/modules/xjjvuebase/components/Tinymce";

export default {
  name: "TinymceDemo",
  components: { Tinymce },
  data() {
    return {
      content: `<h1 style="text-align: center;">欢迎使用tinymce，这里是内容</h1>`,
    };
  },
};
</script>



```
更多的配置项，请查看属性说明,会根据业务不断地补充更多的配置项
#### 属性
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:-----|:-----|:-----|:-----|:-------|
| content | 是   | 内容 | String | 无     |

#### 方法
| 方法名 | 说明 | 示例 |
|:-------|:-----|:-----|
| closeDirty | 关闭页面离开时提醒 | this.$refs["tinymce1"].closeDirty() |
## 富文本编辑器（xjjEditor）
::: tip
组件库xjjvuesystem版本：4.1.0+
:::

### 兼容处理
```js
在vue.config.js的configureWebpack配置中加入以下配置，如图：
new webpack.ProvidePlugin({
        // 在这儿添加下面两行
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      }),
```
![JavaScript Number](/frontend/vue/components/components.png)
### 用法


```js
  <template>
  <div class="xjj-editor-demo">
    <xjj-editor
      ref="mailQuillEditor"
      :content="content"
      @onEditorReady="onEditorReady($event)"
      @setContent="setContent"
    ></xjj-editor>
    <el-button @click="getContent"> 获取content</el-button>
    <div v-html="content"></div>
    <el-button @click="getEditor"> 获取editor对象</el-button>
  </div>
</template>

<script>
import XjjEditor from "@xjjbase/modules/xjjvuebase/components/XjjEditor";
//微服务用下面的路径
//import XjjEditor from "@xjjbase/components/XjjEditor";
export default {
  name: "xjj-editor-demo",
  components: { XjjEditor },
  data() {
    return {
      content: "这里是编辑器内容的初始值",
      editor: null,
    };
  },
  methods: {
    setContent(val) {
      this.content = val;
    },
    getContent() {
      return this.content;
    },
    onEditorReady(editor) {
      alert(editor);
      this.editor = editor;
    },
    getEditor() {
      alert(this.editor);
    },
  },
};
</script>
```

#### 属性
| 参数 | 必须 | 说明 | 类型 | 默认值 |
|:-----|:-----|:-----|:-----|:-------|
| content        | 是   | 富文本内容                              | String | 无                     |
| placeholder    | 否   | 文本提示                                | String | 无                     |
| uploadAction   | 否   | 上传图片/文件url                        | String | /api/attachment        |
| downloadAction | 否   | 下载图片/文件url，请在url后面追加文件id | String | /api/attachment?token= |


## 使用按钮权限控制指令
1. 更新最新的xjj-micro-base， 目前2021-07-22 最新为9.2.27    
  ```json
  "dependencies": {
      "xjj-micro-base": "9.2.27"
    },
  ```

2. permission文件调用 （此文件为项目中路由权限导航的控制文件permission.js）
  ```javascript
  const others = async function (next, to = {}) {
    store.state.layout.hasLoadMenu = true

    // 加入这句代码 --- begin
    await store.dispatch('layout/setButtonAuth')  
    // 加入这句代码 --- end

    const result = await store.dispatch('layout/generateRoutes', {})
    router.addRoutes(result.handledRoutes)

    next({
      ...to
    })
  }
  ```

4. vue文件调用
  ```html 
    <AuthButtonWrap :buttonPermission="['sys_con_add']">
      <el-button size="small"
                 class="filter-item"
                 type="primary"
                 icon="el-icon-plus"
                 @click="handleAdd">新建</el-button>
    </AuthButtonWrap>
  ```
  