// automatically generate component、style

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const componentname = process.argv[2]
const componentSubName = process.argv[3]

const componentsPath = path.resolve(__dirname, '../.vuepress/components', componentname)
const stylesPath = path.resolve(__dirname, '../.vuepress/styles', componentname)


const Files = [
  {
    filename: `${componentSubName}.vue`,
    content: `<template>
<div class="container"></div>
</template>

<script>
</script>`
  }
]

const Styles = [
  {
    filename: `index.scss`,
    content: `.lookui- {

}`
  }
]

// 创建 component
Files.forEach(file => {
  fileSave(path.join(componentsPath, file.filename))
    .write(file.content, 'utf8')
    .end('\n');
});

// 创建 style
// Styles.forEach(file => {
//   fileSave(path.join(stylesPath, file.filename))
//     .write(file.content, 'utf8')
//     .end('\n');
// });