// automatically import index.scss by this script in every style file

const fs = require('fs')
const path = require('path')
const stylesDirPath = path.join(__dirname, '../.vuepress/styles')
const files = fs.readdirSync(stylesDirPath)
files.forEach((file) => {
  const targetPath = path.join(stylesDirPath, file)
  const fileStat = fs.statSync(targetPath)
  if (fileStat.isDirectory()) {
    writeIn(targetPath)
  }
})

function writeIn(filePath) {
  const data = fs.readFileSync(path.join(filePath, 'index.scss'), 'utf8').split('\n')
  if (data[0].includes('index.scss')) {
    console.log('index.scss has been imported!');
  } else {
    data.unshift(`@import '../index.scss';`)
    fs.writeFileSync(path.join(filePath, 'index.scss'), data.join('\n'),'utf-8')
  }
}