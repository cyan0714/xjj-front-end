---
title: SVG图标
---
## 介绍
#### 优点
1. 和传统的图像比起来，尺寸更小，且可压缩性更强
2. 可伸缩
3. 任何分辨率之下都可以被完美的打印
4. svg中图像中的文本是可选的，同时也是可搜索的，很适合做地图。
## 管理图标
推荐以项目为维度来管理图标。自行在阿里图标库中注册账号进行登录，进入到我的项目，如图：
![JavaScript Number](/frontend/vue/svg/step6.png)

## 查找图标
1. 进入[阿里图标库](https://www.iconfont.cn/)查找图标,如图：
![JavaScript Number](/frontend/vue/svg/step1.png)
2. 点击加入购物车，并添加到自己的项目下，如图：
![JavaScript Number](/frontend/vue/svg/step8.png)
![JavaScript Number](/frontend/vue/svg/step7.png)
3. 点击下载按钮，如图：
![JavaScript Number](/frontend/vue/svg/step11.png)
4. 选择'128'尺寸，复制svg，如图：
![JavaScript Number](/frontend/vue/svg/step10.png)
5. 在icons/svg目录下新建一个文件，假设文件名叫week.svg,将复制的内容黏贴到week.svg作为文件内容并保存。如图：
```js
<svg t="1599123911675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2105" width="128" height="128"><path d="M768.633 178.466v-66.5h-128.2v66.5h-256.8v-66.5h-126.2v66.5h-194.6v733.7h897v-733.7h-191.2zM239.138 357.064h275.628v126.194H239.138V357.064z m541.791 370.904H242.398V601.774h538.531v126.194z" p-id="2106"></path></svg>
```
![JavaScript Number](/frontend/vue/svg/step4.png)

## 使用图标
1. 在左侧栏目中使用,点击栏目信息管理，在栏目图标中输入'week'即可,如图：
![JavaScript Number](/frontend/vue/svg/step5.png)
2. 在页面中使用，如下：
```js
<svg-icon icon-class="week" />
```
## 图标集合
以下图标已经整理了，可以直接下载使用
![JavaScript Number](/frontend/vue/svg/step12.png)
[点击下载](/frontend/vue/svg/src/svg.zip)