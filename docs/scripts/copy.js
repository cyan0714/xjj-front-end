//文件处理
const path = require('path')
const fs = require("fs")

const dirName = process.argv[2]

const sourcePath = path.join(__dirname, `../.vuepress/components/${dirName}`)
const targetPath = path.join(__dirname, `../.vuepress/documents/${dirName}`)

if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath);
} else {
  console.log(`the ${dirName} dir had existed!`);
}

const files = fs.readdirSync(sourcePath)

files.forEach(f => {
  const affix = f.split('.')
  fs.writeFileSync(targetPath + `\\${affix[0]}.md`, fs.readFileSync(sourcePath + `/${f}`));
})
console.log("Successfully renamed the file!")


