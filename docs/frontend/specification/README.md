---
title: HTML
---
## HTML 规范
### 1.HTML 规范
- <b>1.1 HTML-元素及标签闭合</b>
::: tip HTML元素共有以下5种:
<b>空元素：</b>area、base、br、col、command、embed、hr、img、input、keygen、link、meta、param、source、track、wbr <br/>
<b>原始文本元素：</b>script、style <br/>
<b>RCDATA元素：</b>textarea、title <br/>
<b>外来元素：</b>来自MathML命名空间和SVG命名空间的元素。<br/>
<b>常规元素：</b>其他HTML允许的元素都称为常规元素。<br/>
:::

::: tip 元素标签的闭合应遵循以下原则：
原始文本元素、RCDATA元素以及常规元素都有一个开始标签来表示开始，一个结束标签来表示结束。 <br/>
<b style="color:#f00;">某些元素的开始和结束标签是可以省略的</b>，如果规定标签不能被省略，那么就绝对不能省略它。 <br/>
空元素只有一个开始标签，且不能为空元素设置结束标签。 <br/>
外来元素可以有一个开始标签和配对的结束标签，或者只有一个自闭合的开始标签，且后者情况下该元素不能有结束标签。
:::

为了能让浏览器更好的解析代码以及能让代码具有更好的可读性，有如下约定：

<b style="color:#2486b9">1）所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。</b> <br/>
<b style="color:#2486b9">2）空元素标签都不加 “/” 字符。</b><br/>
推荐： <br/>

```js
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>
	
<br>
```
不推荐：
```js
<div>
    <h1>我是h1标题</h1>
    <p>我是一段文字，我有始无终，浏览器亦能正确解析
</div>

<br/>
```

- <b>1.2 HTML-代码大小写</b>

HTML标签名、类名、标签属性和大部分属性值统一用小写<br/>
推荐：<br/>
```js
<div class="demo"></div>
```
不推荐：<br/>
```js
<div class="DEMO"></div>
	
<DIV CLASS="DEMO"></DIV>
```
HTML文本、CDATA、JavaScript、meta标签某些属性等内容可大小写混合<br/>
```js
<!-- 优先使用 IE 最新版本和 Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

<!-- HTML文本内容 -->
<h1>I AM WHAT I AM </h1>

<!-- JavaScript 内容 -->
<script type="text/javascript">
	var demoName = 'demoName';
	...
</script>
	
<!-- CDATA 内容 -->
<script type="text/javascript"><![CDATA[
...
]]></script>
```

- <b>1.3 HTML-类型属性</b>

不需要为 CSS、JS 指定类型属性，HTML5 中默认已包含<br />

推荐：

```js
<link rel="stylesheet" href="" >
<script src=""></script>
```
不推荐：
```js
<link rel="stylesheet" type="text/css" href="" >
<script type="text/javascript" src="" ></script>
```

- <b>1.4 HTML-元素属性</b>

元素属性值使用双引号语法

元素属性值可以写上的都写上

推荐：

```js
<input type="text">
	
<input type="radio" name="name" checked="checked" >
```

不推荐：


```js
<input type=text>	
<input type='text'>
	
<input type="radio" name="name" checked >
```

- <b>1.5 HTML-特殊字符引用</b>

文本可以和字符引用混合出现。这种方法可以用来转义在文本中不能合法出现的字符。

在 HTML 中不能使用小于号 “<” 和大于号 “>”特殊字符，浏览器会将它们作为标签解析，若要正确显示，在 HTML 源代码中使用字符实体

推荐：

```js
<a href="#">more&gt;&gt;</a>
```

不推荐：

```js
<a href="#">more>></a>
```

- <b>1.6 HTML-纯数字输入框</b>

使用 type="tel" 而不是 type="number"

```js
<input type="tel">
```


- <b>1.7 HTML-代码嵌套</b>

元素嵌套规范，每个块状元素独立一行，内联元素可选

推荐：

```js
<div>
    <h1></h1>
    <p></p>
</div>	
<p><span></span><span></span></p>
```

不推荐：


```js
<div>
    <h1></h1><p></p>
</div>	
<p> 
    <span></span>
    <span></span>
</p>
```

段落元素与标题元素只能嵌套内联元素

推荐：

```js
<h1><span></span></h1>
<p><span></span><span></span></p>
```

不推荐：

```js
<h1><div></div></h1>
<p><div></div><div></div></p>
```

## HTML注释
### 2. HTML注释

- <b>2.1 HTML-单行注释</b>

一般用于简单的描述，如某些状态描述、属性描述等

注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行

推荐：

```js
<!-- Comment Text -->
<div>...</div>
```

不推荐：

```js
<div>...</div><!-- Comment Text -->	
	
<div><!-- Comment Text -->
    ...
</div>
```

- <b>2.2 HTML-模块注释</b>

一般用于描述模块的名称以及模块开始与结束的位置

注释内容前后各一个空格字符，<!-- S Comment Text --> 表示模块开始，<!-- E Comment Text --> 表示模块结束，模块与模块之间相隔一行

推荐写法：

```js
<!-- S Comment Text A -->	
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
	
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```

不推荐写法：

```js
<!-- S Comment Text A -->
<div class="mod_a">
    ...
</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->	
<div class="mod_b">
    ...
</div>
<!-- E Comment Text B -->
```


- <b>2.3 HTML-嵌套模块注释</b>

当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用

```js
<!-- S Comment Text -->
<!-- E Comment Text -->
```

而改用

```js
<!-- /Comment Text -->
```

注释写在模块结尾标签底部，单独一行。

```js
<!-- S Comment Text A -->
<div class="mod_a">
		
    <div class="mod_b">
        ...
    </div>
    <!-- /mod_b -->
    	
    <div class="mod_c">
    	...
    </div>
    <!-- /mod_c -->
		
</div>
<!-- E Comment Text A -->
```
