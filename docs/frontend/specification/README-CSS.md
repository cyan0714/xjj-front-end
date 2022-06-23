---
title: CSS
---

## CSS规范

### 1.CSS规范

- <b>1.1 规范约定</b>

1）样式文件必须写上 @charset 规则，并且一定要在样式文件的第一行首个字符位置开始写，编码名用 “UTF-8”
2）字符 @charset “”; 都用小写字母，不能出现转义符，编码名允许大小混写
3）考虑到在使用“UTF-8”编码情况下 BOM 对代码的污染和编码显示的问题，在可控范围下，坚决不使用 BOM

推荐：


```js
@charset "UTF-8";

.jdc{}
```

不推荐：

```js
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
 
/* @charset规则不在文件首行首个字符开始 */
@charset "UTF-8";

.jdc{}
```

```js
@CHARSET "UTF-8";
/* @charset规则没有用小写 */

.jdc{}
```


```js
/* 无@charset规则 */
.jdc{}
```

- <b>1.2 代码格式化</b>

样式书写一般有两种：一种是紧凑格式 (Compact)

```js
.jdc{ display: block;width: 50px;}
```

一种是展开格式（Expanded）

```js
.jdc{
    display: block;
    width: 50px;
}
```

统一使用展开格式书写样式

- <b>1.3 代码大小写</b>

样式选择器，属性名，属性值关键字全部使用小写字母书写，属性字符串允许使用大小写。

```js
/* 推荐 */
.jdc{
	display:block;
}
	
/* 不推荐 */
.JDC{
	DISPLAY:BLOCK;
}
```

- <b>1.4 选择器</b>

尽量少用通用选择器 *

不使用 ID 选择器

不使用无具体语义定义的标签选择器


```js
/* 推荐 */
/* 推荐 */
.jdc {}
.jdc li {}
.jdc li p{}

/* 不推荐 */
*{}
#jdc {}
.jdc div{}
```

- <b>1.5 代码缩进</b>

统一使用四个空格进行代码缩进，使得各编辑器表现一致（各编辑器有相关配置）

```js
.jdc {
    width: 100%;
    height: 100%;
}
```

- <b>1.6 分号</b>

每个属性声明末尾都要加分号；

```js
.jdc {
    width: 100%;
    height: 100%;
}
```

- <b>1.7 代码易读性</b>

左括号与类名之间一个空格，冒号与属性值之间一个空格

推荐：

```js
.jdc { 
    width: 100%; 
}

```

不推荐：

```js
.jdc{ 
    width:100%;
}
```

逗号分隔的取值，逗号之后一个空格

推荐：

```js
.jdc {
    box-shadow: 1px 1px 1px #333, 2px 2px 2px #ccc;
}
```

不推荐：

```js
.jdc {
    box-shadow: 1px 1px 1px #333,2px 2px 2px #ccc;
}
```

为单个css选择器或新申明开启新行

推荐：

```js
.jdc, 
.jdc_logo, 
.jdc_hd {
    color: #ff0;
}
.nav{
    color: #fff;
}
```

不推荐：

```js
.jdc,jdc_logo,.jdc_hd {
    color: #ff0;
}.nav{
    color: #fff;
}
```

颜色值 rgb() rgba() hsl() hsla() rect() 中不需有空格，且取值不要带有不必要的 0

推荐：

```js
.jdc {
    color: rgba(255,255,255,.5);
}
```

不推荐：

```js
.jdc {
    color: rgba( 255, 255, 255, 0.5 );
}
```

属性值十六进制数值能用简写的尽量用简写

推荐：

```js
.jdc {
    color: #fff;
}
```

不推荐：

```js
.jdc {
    color: #ffffff;
}
```

不要为 0 指明单位

推荐：

```js
.jdc {
    margin: 0 10px;
}
```

不推荐：

```js
.jdc {
    margin: 0px 10px;
}
```

- <b>1.8 属性值引号</b>

css属性值需要用到引号时，统一使用单引号

```js
/* 推荐 */
.jdc { 
	font-family: 'Hiragino Sans GB';
}

/* 不推荐 */
.jdc { 
	font-family: "Hiragino Sans GB";
}
```

- <b>1.9 属性书写顺序</b>

建议遵循以下顺序：

1）布局定位属性：display / position / float / clear / visibility / overflow

2）自身属性：width / height / margin / padding / border / background

3）文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word

4）其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```js
.jdc {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

- <b>1.10 CSS3浏览器私有前缀写法</b>

CSS3 浏览器私有前缀在前，标准前缀在后

```js
.jdc {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}
```

## CSS注释

### 2.CSS注释

- <b>2.1 单行注释</b>

注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

推荐：

```js
/* Comment Text */
.jdc{}

/* Comment Text */
.jdc{}
```

不推荐：

```js
/*Comment Text*/
.jdc{
	display: block;
}
.jdc{
	display: block;/*Comment Text*/
}
```

- <b>2.2 模块注释</b>

注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符-与*/占一行，行与行之间相隔两行

推荐：

```js
/* Module A
---------------------------------------------------------------- */
.mod_a {}


/* Module B
---------------------------------------------------------------- */
.mod_b {}
```

不推荐：

```js
/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```

- <b>2.3 文件信息注释</b>

在样式文件编码声明 @charset 语句下面注明页面名称、作者、创建日期等信息

```js
@charset "UTF-8";
/**
 * @desc File Info
 * @author Author Name
 * @date 2015-10-10
 */
```





