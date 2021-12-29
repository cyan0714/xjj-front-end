/*
 * @Author: your name
 * @Date: 2020-02-12 14:39:35
 * @LastEditTime : 2020-02-12 16:29:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpro\xjjui-docs\docs\.vuepress\config.js
 */
const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: '智慧城市-前端组件化开发1.0',
  description: '前端开发者技术交流和学习的平台',
  head: headConf,
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    // repo: 'shanyuhai123/documents',
    editLinks: true,
    // editLinkText: '编辑文档！',
    docsDir: 'docs',
    nav: navConf,
    algolia: {
      appId: 'M698VCXCJN',
      apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
      indexName: 'shanyuhai_documents',
      algoliaOptions: {
        hitsPerPage: 10,
        facetFilters: ""
      }
    }
  },
}