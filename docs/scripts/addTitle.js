const path = require('path')
const fs = require('fs')
const fileSave = require('file-save')
const componentName = process.argv[2]
const componentSubName = process.argv[3]
const titleText = process.argv[4]

const targetPath = path.resolve(__dirname, '../frontend/lookui/k1-Data.md')

const docText = `${fs.readFileSync(targetPath)}
### ${titleText}${'\n'}
<${componentName}-${componentSubName} style="margin-top:24px" />${'\n'}
<details>
  <summary>显示代码</summary>

  <<< @/docs/.vuepress/documents/${componentName}/${componentSubName}.md
</details>`

fileSave(targetPath)
  .write(docText, 'utf8')
  .end('\n');