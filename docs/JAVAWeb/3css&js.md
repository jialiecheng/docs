#
## 1、css的简介
　　css： 层叠样式表

　　　　层叠：一层一层的

 　　　　样式表：很多的属性和属性值

- CSS将网页内容和显示样式进行分离，提高了显示功能。
- 需要将css样式单独创建，并在页面中关联，方便管理

## 2、css和html的结合方式（四种结合方式）
```html
　　（1）在每个html标签上面都有一个属性 style，把css和html结合在一起

- <div style="background-color:red;color:green;">
<html>
<head>
 　　<title>HTML示例</title>
 　　<style type="text/css">
      div {
      　　background-color:gray;
      　　color:white;
      }
  　　</style>
 </head>
 <body>
     <div style="background-color:red;color:green;">天之道，损有余而补不足，是故虚胜实，不足胜有余。</div>
     <div>变化之由表，死生之兆彰，不谋而遗迹自同，</div>
 </body>
 </html>
 
```
![QQ截图20200602213454.png](http://ww1.sinaimg.cn/large/007eYKdZly1gfe9tatomlj30f305iwee.jpg)

```html
　　（2）使用html的一个标签实现 <style>标签，写在head里面

　　　　<style type="text/css">

　　　　　　css代码;

　　　　</style>

 　　　　<style type="text/css">

　　　　　　div {

　　　　　　　　background-color:blue;

　　　　　　　　color: red;

　　　　　　}

　　　　</style>

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4 
 5     <style type="text/css">    
 6         div {
 7             background-color:green;
 8             color: red;
 9         }        
10     </style>
11 </head>
12 <body>
```
```html
　　（3）在style标签里面 使用语句（在某些浏览器下不起作用）

　　　　@import url(css文件的路径);

 　　　　- 第一步，创建一个css文件

　　　　<style type="text/css">

　　　　　　@import url(div.css);

　　　　</style>

 1 <html>
 2 <head>
 3 　　<title>HTML示例</title>
 4 　　<style type="text/css">
 5 　　　　@import url(div.css);
 6 　　</style>
 7 </head>
 8 <body>
 9 　　<div>变化之由表，死生之兆彰，不谋而遗迹自同，</div>
10 </body>
11 </html>
```
```html
　　（4）使用头标签 link，引入外部css文件

　　　　- 第一步 ，创建一个css文件

　　　　- <link rel="stylesheet" type="text/css" href="css文件的路径" />

1 <html>
2 <head>
3     <title>HTML示例</title>
4     <link rel="stylesheet" type="text/css" href="div.css" />
5 </head>
6 <body>
7     <div>变化之由表，死生之兆彰，不谋而遗迹自同，</div>
8 </body>
9 </html>

　　第三种结合方式，缺点：在某些浏览器下不起作用，一般使用第四种方式

　　优先级（一般情况）

　　　　由上到下，由外到内。优先级由低到高。

　　　　后加载的优先级高

　　格式  选择器名称 { 属性名：属性值；属性名：属性值；…….}
```

## 3、css的基本选择器（三种）
　　要对哪个标签里面的数据进行操作
```html

　　（1）标签选择器

　　　　使用标签名作为选择器的名称

　　　　　　div {
　　　　　　　　background-color:gray;
　　　　　　　　color:white;
　　　　　　}

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             background-color: red;
 7         }
 8         p {
 9             background-color: green;
10         }
11     </style>
12 </head>
13 <body>
14     <div>变化之由表，死生之兆彰，不谋而遗迹自同，1111</div>
15     <p>勿约而幽明斯契，稽其言有微，验之事不忒，诚可谓至道之宗，</p>
16 </body>
17 </html>
```
　　（2）class选择器
```html
　　　　每个html标签都有一个属性 class
       在class名前用.表示使用class标签

　　　　- <div class="haha">aaaaaaa</div>

　　　　- .haha {
　　　　　　background-color: orange;
　　　　}

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         /*div.haha {
 6             background-color: yellow;
 7         }
 8         p.haha {
 9             background-color: yellow;
10         }*/
11         .haha {
12             background-color: orange;
13    　　 }
14     </style>
15 </head>
16 <body>
17     <div class="haha">变化之由表，死生之兆彰，不谋而遗迹自同，1111</div>
18     <p class="haha">变化之由表aaaaaaaaaa</p>
19 </body>
```
　　（3）id选择器
```html
　　　　每个html标签上面有一个属性 id
        用#号来表示使用id选择器

　　　　- <div id="hehe">bbbbb</div>

　　　　- #hehe {

　　　　　　background-color: #333300;

　　　　}

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         /div#hehe {
 6             background-color: gray;
 7         }
 8         p#hehe {
 9             background-color: gray;
10    　　 }/
11         #hehe {
12             background-color: #333300;
13         }
14     </style>
15 </head>
16 <body>
17     <div id="hehe">故动则有成，犹鬼神幽赞，而命世奇杰，时时间出焉</div>
18     <p id="hehe">aaaaaaaaaaaaaaaaaaaaaa</p>
19 </body>
20 </html>
```
　　优先级

　　　　style > id选择器 > class选择器 > 标签选择器
```html
 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5           #hehe1 {
 6             background-color: orange;
 7         }
 8         .haha1 {
 9             background-color: green;
10         }
11         div {
12             background-color: red;
13         }
14     </style>
15 </head>
16 <body>
17     <div class="haha1" id="hehe1" style="background-color: gray;">故动则有成，犹鬼神幽赞，而命世奇杰，时时间出焉</div>
18     <div>aaaaaaaaaaaaaaaaaaaaaa</div>
19 </body>
20 </html>
```
![QQ截图20200602215619.png](http://ww1.sinaimg.cn/large/007eYKdZly1gfeafgtow2j30e403mwec.jpg)

## 4、css的扩展选择器
```html
　　（1）关联选择器

　　　　<div><p>wwwwwwww</p></div>

　　　　设置div标签里面p标签的样式，嵌套标签里面的样式

　　　　div p {

　　　　　　background-color: green;

　　　　}

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div p {
 6             background-color: green;
 7         }
 8     </style>
 9 </head>
10 <body>
11     <div><p>CSS的扩展选择器</p></div>
12     <p>WWWWWWWWWWWWWWWWWWWWWW</p>
13 </body>
14 </html>
```
　　（2）组合选择器
```html
　　<div>1111</div>

　　<p>22222</p>

　　把div和p标签设置成相同的样式，把不同的标签设置成相同的样式

　　div,p {

　　　　background-color: orange;

　　}

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div,p {
 6             background-color: orange;
 7     　　}
 8     </style>
 9 </head>
10 <body>
11     <div>QQQQQQQQQQQQQQQQQ</div>
12     <p>AAAAAAAAAAAAAAAAAAAAAAA</p>
13 </body>
14 </html>
```
　　（3）伪元素选择器(了解，浏览器的兼容性比较差)
```html
　　　　css里面提供了一些定义好的样式，可以拿过来使用

　　　　　　比如超链接

　　　　　　超链接的状态

　　　　　　原始状态     鼠标放上去状态 　  点击        点击之后

　　　　　　:link         :hover        :active     :visited

　　　　

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         /原始状态/
 6         a:link {
 7             background-color: red;
 8         }
 9         /悬停状态/
10         a:hover {
11             background-color: green;
12         }
13         /点击状态/
14         a:active {
15             background-color: blue;
16         }
17         /点击之后的状态/
18         a:visited {
19             background-color: gray;
20         }
21     </style>
22 </head>
23 <body>
24     <a href="http://www.sina1.com.cn" target="_blank">CSS概述和与HTML的结合方式超链接</a>
25 </body>
26 </html>
```
## 5、css的盒子模型(重点)
```html
　　在进行布局前需要把数据封装到一块一块的区域内（div）

　　（1）边框

　　　　border: 2px solid blue;

　　　　border：统一设置

　　　　上 border-top

　　　　下 border-bottom

　　　　左 border-left

　　　　右 border-right

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             width: 200px;
 7             height: 100px;
 8             border: 2px solid blue; // 粗细  实线 颜色
 9    　　 }
10         #div12 {
11             border-right: 2px dashed yellow;
12     　　}
13     </style>
14 </head>
15 <body>
16     <div id="div11">AAAAAAAAAAAAAAA</div>
17     <div id="div12">BBBBBBBBBBBBBBB</div>
18     <div id="div13">CCCCCCCCCCCCCCC</div>
19 </body>
20 </html>
```


 
```html
　　（2）内边距

　　padding:20px;

　　使用padding统一设置

　　也可以分别设置

　　上下左右四个内边距

 

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             width: 200px;
 7             height: 100px;
 8             border: 2px solid blue;
 9         }
10         #div22 {
11             padding: 20px;
12         }
13         #div23 {
14             padding-left: 30px;
15         }
16     </style>
17 </head>
18 <body>
19     <div id="div21">AAAAAAAAAAAAAAA</div>
20     <div id="div22">BBBBBBBBBBBBBBBBBBBBBBBBB</div>
21     <div id="div23">CCCCCCCCCCCCCCC</div>
22 </body>
23 </html>
```
 ![QQ截图20200602220547.png](http://ww1.sinaimg.cn/large/007eYKdZly1gfeapcgqtlj30aw0bjglf.jpg)

```html
　　（3）外边距

　　　　margin: 20px;

　　　　可以使用margin统一设置

　　　　也可以分别设置

　　　　上下左右四个外边距

 1 <html>
 2 <head>
 3 <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             border: 2px solid blue;
 7         }
 8         #div32 {
 9             margin: 20px;
10         }
11         #div33 {
12             margin-left : 30px;
13         }
14     </style>
15 </head>
16 <body>
17     <div id="div31">AAAAAAAAAAAAAAA</div>
18     <div id="div32">BBBBBBBBBBBBBBBBBBBBBBBBBBBB</div>
19     <div id="div33">CCCCCCCCCCCCCCC</div>
20 </body>
21 </html>
```

 

## 6、css的布局的漂浮(了解)
```html
　　float：

　　　　属性值

　　　　left  :　 文本流向对象的右边 （后面的div到右边）
　　　　right  :　 文本流向对象的左边（后面的div到左边）

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             width: 200px;
 7             height:150px;
 8             border: 2px solid blue;
 9         }
10         #div41 {
11             float : left;
12         }
13         #div42 {
14             float:left;
15     　　}
16     </style>
17 </head>
18 <body>
19     <div id="div41">AAAAAAAAAAAAAAA</div>
20     <div id="div42">BBBBBBBBBBBBBBB</div>
21     <div id="div43">CCCCCCCCCCCCCCC</div>
22 </body>
23 </html>

```
## 7、css的布局的定位（了解）
```html
　　position：

　　属性值

　　　　- absolute ：

　　　　　　将对象从文档流中拖出

　　　　　　可以使用top、bottom等属性进行定位

　　　　- relative ：

　　　　　　不会把对象从文档流中拖出

　　　　　　可以使用top、bottom等属性进行定位

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             width: 200px;
 7             height:150px;
 8             border: 2px solid blue;
 9         }
10         #div51 {
11             background-color: red;
12             position:absolute;
13             top: 80px;
14             left: 120px;
15         }
16         #div52 {
17             background-color: green;
18             width: 250px;
19             height:150px;
20         }
21   　　  #div53 {
22             background-color: orange;
23    　　 }
24     </style>
25 </head>
26 <body>
27     <div id="div51">AAAAAAAAAAAAAAA</div>
28     <div id="div52">BBBBBBBBBBBBBBB</div>
29     <div id="div53">CCCCCCCCCCCCCCC</div>
30 </body>
31 </html>
```

 ```html

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         div {
 6             width: 200px;
 7             height:150px;
 8             border: 2px solid blue;
 9         }
10         #div51 {
11             background-color: red;
12             position: relative;
13             top: 80px;
14             left:120px;
15         }
16         #div52 {
17             background-color: green;
18         }
19         #div53 {
20             background-color: orange;
21     　　}
22     </style>
23 </head>
24 <body>
25     <div id="div51">AAAAAAAAAAAAAAA</div>
26     <div id="div52">BBBBBBBBBBBBBBB</div>
27     <div id="div53">CCCCCCCCCCCCCCC</div>
28 </body>
29 </html>
```

 

## 8、案例 图文混排案例
```html
　　图片和文字在一起显示

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         #imgtex11 {
 6             width: 400px;
 7             height: 350px;
 8             border:2px dashed orange;
 9         }
10         #img11 {
11             /float:left;/
12             float:right;
13         }
14         #tex11 {
15             color: green;
16         }
17     </style>
18 </head>
19 <body>
20 　　<div id="imgtex11">
21    　　 <div id="img11"><img src="aa.jpg" width="250" height="200"/></div>
22     　　<div id="tex11">奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于</div>
23     </div>
24 </body>
25 </html>
```
![QQ截图20200602221602.png](http://ww1.sinaimg.cn/large/007eYKdZly1gfeb0foj12j30dw0ceab4.jpg)
![QQ截图20200602221626.png](http://ww1.sinaimg.cn/large/007eYKdZly1gfeb0ullyuj30fg0caab5.jpg)
 

## 9、案例 图像签名

　　在图片上面显示文字

 
```html
 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5         #tex21 {
 6             position: absolute;
 7             top: 50px;
 8             left: 30px;
 9             color: red;
10         }
11     </style>
12 </head>
13 <body>
14     <div id="img21"><img src="aa.jpg" width="450" height="350"/></div>
15     <div id="tex21">这是很多美女</div>
16 </body>
17 </html>
```

 

## 10、内容总结
```html
　　1、css和html的四种结合方式（）

　　2、css的基本选择器（）

　　　　标签选择器 使用标签名

　　　　class选择器 .名称

　　　　id选择器  #名称

　　　　优先级

　　　　　　style > id > class > 标签

　　3、css的扩展选择器(了解)

　　　　关联选择器

　　　　　　- 设置嵌套标签的样式  div p {}

　　　　组合选择器

　　　　　　- 不同的标签具有相同的样式 div,p{}

　　　　伪元素选择器

　　　　　　超链接的状态

　　　　　　　　- 原始 :link

　　　　　　　　- 悬停 :hover

　　　　　　　　- 点击 :active

　　　　　　　　- 点击之后 :visited

　　4、盒子模型(了解)

　　　　边框 border:2px solid red;

　　　　上下左右  border-top  border-bottom  border-left  border-right

　　　　内边距 padding:20px

　　　　上下左右

　　　　外边距 margin:20px

　　　　上下左右

　　　　对数据进行操作，需要把数据放到一个区域里面（div）

　　5、布局的漂浮(了解)

　　　　float

　　　　　　- left: 后面的div到右边

　　　　　　- right：后面的div到左边

　　6、布局的定位(了解)

　　　　position

　　　　　　- absolute

　　　　　　　　从文档流中拖出

　　　　　　- relative

　　　　　　　　不会从文档流中拖出

一般在目录里面，标出符号

　　（）：重点，代码看懂，代码会写，代码理解

　　　　- （重点中的重点）

　　（了解）：代码看懂

　　（理解）：能够把原理讲清楚
```
## 1、javascript的简介
```html
　　是基于对象和事件驱动的语言，应用与客户端。

　　- 基于对象：

　　　　提供好了很多对象，可以直接拿过来使用

　　- 事件驱动：

　　　　html做网站静态效果，javascript动态效果

　　- 客户端：专门指的是浏览器

　　js的特点
　　　　（1）交互性

　　　　　　- 信息的动态交互

　　　　（2）安全性

　　　　　　- js不能访问本地磁盘的文件

　　　　（3）跨平台性

　　　　　　- java里面跨平台性，虚拟机

　　　　　　- 只有能够支持js的浏览器，都可以运行
```
　　javascript和java的区别（雷锋和雷峰塔）
```html
　　　　（1）java是sun公司，现在oracle；js是网景公司

　　　　（2）JavaScript 是基于对象的，java是面向对象

　　　　（3）java是强类型的语言，js是弱类型的语言

　　　　　　- 比如java里面 int i = "10";

　　　　　　- js:  var i = 10; var m = "10";

　　　　（4）JavaScript只需解析就可以执行，而java需要先编译成字节码文件，再执行。
```
　　**javascript的组成（下面js）**
```html
　　　　三部分组成

　　　　（1）ECMAScript

　　　　　　- ECMA : 欧洲计算机协会

　　　　　　- 有ECMA组织制定的js的语法，语句.....

　　　　（2）BOM

　　　　　　- broswer object model: 浏览器对象模型

　　　　（3）DOM

　　　　　　- document object model：文档对象模型
```
## 2、js和html的结合方式（两种）
```html　　
第一种：

　　　　- 使用一个标签 <script type="text/javascript">  js代码; </script>

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //向页面弹出一个框，显示内容
10         alert("aaaa");
11     </script>
12 </body>
13 </html>

　　第二种：(常用)

　　　　- 使用script标签，引入一个外部的js文件

　　　　创建一个js文件，写js代码

　　　　- <script type="text/javascript" src="1.js"></script>

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript" src="1.js">
 9         alert("ccccccc");//不会执行了
10     </script>
11 </body>
12 </html>


外部的 1.js 内容

1 //单行注释
2 /多行注释/
3 alert("bbbbbb");
　　使用第二种方式时候，就不要在script标签里面写js代码了，不会执行。
```
## 3、js的原始类型和声明变量
```html
　　java的基本数据类型 byte short int long float double char boolean

　　定义变量 都使用关键字 var

　　js的原始类型（五个）

　　　　- string: 字符串

　　　　　　var str = "abc";

　　　　- number：数字类型

　　　　　　var m = 123;

　　　　- boolean：true和false

　　　　　　var flag = true;

　　　　- null

　　　　　　var date = new Date();

　　　　　　获取对象的引用，null表示对象引用为空 ，所有对象的引用也是object

　　　　- undifined

　　　　　　定义一个变量，没有赋值

　　　　　　var aa;

　　　　typeof(); 查看当前变量的数据类型

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript" >
 9         //定义一个字符串
10         var str = "123";
11         //alert(str);
12         //alert(typeof(str))
13 
14         //定义数字
15         var mm = 123;
16         //alert(mm);
17         //alert(typeof(mm));
18 
19         //定义boolean类型
20         var flag = true;
21         //alert(flag);
22         alert(typeof(flag));
23     </script>
24 </body>
25 </html>
```
## 4、js的语句
```html
　　- java里面的语句：

　　　　if判断

　　　　switch语句

　　　　循环 for  while do-while

　　-js里面的这些语句

　　　　if判断语句

　　　　　　=:表示赋值

　　　　　　==：表示判断

　　　　switch语句

　　　　　　　　- java里面支持数据类型 string支持吗？在jdk1.7开始支持

　　　　　　　　- js里面都支持

　　　　　　　　- switch(a) {
　　　　　　　　　　case 5:
　　　　　　　　　　　　　　break;
　　　　　　　　　　case 6:
　　　　　　　　　　　　　　break;
　　　　　　　　　　default:
　　　　　　　　　　　　......
 　　　　　　　　　　}

　　　　循环语句 for  while    do-while

　　　　　　　　　　- while循环

　　　　　　　　　　var i = 5;

　　　　　　　　　　while(i>1) {

　　　　　　　　　　　　alert(i);

　　　　　　　　　　　　i--;
　　　　　　　　　　}

　　　　　　　　　　- for循环

　　　　　　java中　　　for(int i=0;i<=10;i++) { }

　　　　　　　js中　　　for(var mm=0;mm<=3;mm++) {

　　　　　　　　　　　　　　alert(mm);

　　　　　　　　　　　　}

　　　　　　　　　　i++ ++i和java里面一样

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">    
 9         //if语句
10         var a = 5;
11         if(a == 5) {
12             alert("5");
13         } else {
14             alert("6");
15         }
16 
17         //switch语句
18         /var b = 60;
19         switch(b) {
20             case 3:
21                 alert("3");
22                 break;  //每一个case后都要有break，不然会有穿透
23             case 6:
24                 alert("6");
25                 break;
26             default:
27                 alert("other");
28         }/
29 
30         //while循环
31         /var i = 5;
32         while(i>1) {
33             alert(i);
34             i--;
35         }/
36 
37         //for循环
38         /for(var mm=0;mm<=3;mm++) {
39             alert(mm);
40         }/
41     </script>
42 </body>
43 </html>
```
## 5、js的运算符

```html
　　+=  ： x+=y;  ===》 x=x+y;

　　js里面不区分整数和小数

　　　　var j = 123;

　　　　alert(j/10001000);  

　　　　//  j/10001000    在java里面得到结果是 0

　　　　// 在js里面不区分整数和小数，123/1000=0.123  1000 = 123

　　字符串的相加和相减的操作

　　　　var str = "123";

　　　　如果相加时候，做是字符串连接

　　　　如果相减，做的是相减的运算

 

　　　　//字符串的操作

　　　　var str = "456";

　　　　//alert(str+1);   //在java里面操作的结果是 4561 ，在js里面还是 4561

　　　　alert(str-1);    //相减时候，执行减法的运算

 

　　　　提示NaN:表示不是一个数字

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         /var j = 123;
10         alert(j/10001000);  /
11         //  j/10001000    在java里面得到结果是 0 
12         // 在js里面不区分整数和小数，123/1000=0.123  1000 = 123
13 
14         //字符串的操作
15         var str = "abc";   //提示NaN:表示不是一个数字
16         //alert(str+1);   //在java里面操作的结果是 4561 ，在js里面还是 4561
17         alert(str-1);    //相减时候，执行减法的运算
18     </script>
19 </body>
20 </html>

　　boolean类型也可以操作

　　　　如果设置成true，相当于这个值是1

　　　　如果设置成false，相当于这个值是0

 

　　** == 和 === 区别
　　　　做判断

　　　　== 比较的只是值

　　　　=== 比较的是值和类型

　　　　引入知识

　　　　直接向页面输出的语句（可以把内容显示在页面上）

　　　　　　document.write("aaa");

　　　　　　document.wirte("<hr/>");

　　　　　　可以向页面输出变量，固定值和html代码

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //boolean操作
10         var flag = true;  //等于1
11         //alert(flag+1);
12 
13         var flag1 = false; //等于0
14         //alert(flag1+1);
15         
16         // == 和 === 区别
17         /var aa = "5";
18         if(aa === "5") {
19             alert("5");
20         } else {
21             alert("other");
22         }/
23         document.write("aaaaaaaaaa");
24         document.write("<br/>");
25         document.write("bbbbbbbbbbbbb");
26         document.write("<hr/>");
27     </script>
28 </body>
29 </html>
```
## 6、实现99乘法表（输出到页面上）
```html
　　- document.write里面是双引号，如果设置标签的属性需要使用单引号

　　- document.write可以输出变量，还可以输出html代码

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         document.write("<table border='1' bordercolor='blue'>");
10         //循环行 9
11         for(var i=1;i<=9;i++) {
12             document.write("<tr>");
13             //循环列
14             for(var j=1;j<=i;j++) {
15                 document.write("<td>");
16                 //运算
17                 document.write(j+""+i+"="+ij);
18                 document.write("</td>");
19             }
20             //document.write("<br/>");
21             document.write("</tr>");
22         }
23         document.write("</table>");
24     </script>
25 </body>
26 </html>
```
## 7、js的数组
```html
　　什么是数组？

　　　　- 使用变量，var m = 10;

　　　　- java里面的数组 定义 int[] arr = {1,2,3};

 

　　定义方式（三种）

　　　　第一种： var arr = [1,2,3];   var arr = [1,"4",true];

　　　　第二种：使用内置对象 Array对象

　　　　　　var arr1 = new Array(5);  //定义一个数组，数组的长度是5

　　　　　　arr1[0] = "1"; //赋值操作

 

　　　　第三种：使用内置对象 Array

　　　　　　var arr2 = new Array(3,4,5); //定义一个数组，数组里面的元素是3 4 5

　　数组里面有一个属性  length：获取到数组的长度

　　数组可以存放不同的数据类型的数据

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //定义数组第一种方式
10         var arr = [1,2,"3"];
11         //alert(arr);
12         alert("length:  "+arr.length);
13 
14         //第二种方式定义数组
15         var arr1 = new Array(3);
16         arr1[0] = "a";
17         arr1[1] = "b";
18         arr1[2] = "c";
19 
20         //alert(arr1);
21 
22         //第三种方式定义数组
23         var arr2 = new Array(6,7,8);
24         //alert(arr2);
25 
26         var arr3 = new Array(5);
27         alert("arr3: "+arr3.length);
28     </script>
29 </body>
30 </html>
```
## 8、js的函数
```html
　　在java里面定义方法

　　public 返回类型void /int 方法名(参数列表) {

　　　　方法体;

　　　　返回值;

　　}

　　public int add(int a,int b) {

　　　　int sum = a+b;

　　　　return sum;

　　}

　　在js里面定义函数（方法）有三种方式
　　　　函数的参数列表里面，不需要写var，直接写参数名称

　　　　第一种方式：

　　　　　　使用到一个关键字 function

　　　　　　function 方法名(参数列表) {

　　　　　　　　方法体;

　　　　　　　　返回值可有可无（根据实际需要）;

　　　　　　}

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //使用第一种方式创建函数
10         function test() {
11             alert("qqqqq");
12         }
13 
14         //调用方法
15         //test();
16 
17         //定义一个有参数的方法  实现两个数的相加
18         function add1(a,b) {
19             var sum = a+b;
20             alert(sum);        
21         }
22 
23         //add1(2,3);
24 
25         //有返回值的效果
26         function add2(a,b,c) {
27             var sum1 = a+b+c;
28             return sum1;
29         }
30         alert(add2(3,4,5));
31     </script>
32 </body>
33 </html>
　　　　第二种方式：

　　　　　　匿名函数

　　　　　　var add = function(参数列表) {

　　　　　　　　方法体和返回值;

　　　　　　}

 

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //第二种方式创建函数
10         var add3 = function(m,n) {
11             alert(m+n);
12         }
13         //调用方法
14         //add3(5,6);
15 
16         //第三种方式创建函数
17         var canshu = "x,y";
18         var fangfati = "var sum;sum=x+y;return sum;";
19 
20         var add4 = new Function(canshu,fangfati);
21         alert(add4(3,5));
22     </script>
23 </body>
24 </html>
```

## 9、js的全局变量和局部变量
```html
　　全局变量：在script标签里面定义一个变量，这个变量在页面中js部分都可以使用

　　　　- 在方法外部使用，在方法内部使用，在另外一个script标签使用

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         var aa = 10;
10         alert("在方法外部调用aa： "+aa);
11         //定义一个方法
12         function test1() {
13             alert("在方法内部调用aa： "+aa);
14         }
15         test1();
16     </script>
17     <script type="text/javascript">
18         alert("在另外一个script标签使用： "+aa);
19     </script>
20 </body>
21 </html>
　　局部变量：在方法内部定义一个变量，只能在方法内部使用

　　　　- 如果在方法的外部调用这个变量，提示出错

　　　　- SCRIPT5009: “nn”未定义

　　　　12-js的局部变量.html, 行14 字符3

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         function test11() {
10             var nn = 10;
11             alert("在方法内部： "+nn);
12         }
13         test11();
14         alert("方法外部： "+nn);    //SCRIPT5009: “nn”未定义 
15     </script>
16 </body>
17 </html>
　　ie自带了一个调试工具，ie8及其以上的版本中，键盘上 F12，在页面下方出现一个条

10、script标签放在的位置
　　建议把script标签放到 </body>后面

　　如果现在有这样一个需求：

　　　　在js里面需要获取到input里面的值，如果把script标签放到head里面会出现问题。

　　　　html解析是从上到下解析的，script标签放到的是head里面，直接在里面取input里面的值，因为页面还没有解析到input那一行，肯定取不到。

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6    <script type="text/javascript">
 7         //alert("aaaa");
 8         var input1 = document.getElementById("nameid");
 9         alert(input1.value);  //SCRIPT5007: 无法获取属性“value”的值: 对象为 null 或未定义 
10     </script>
11 </head>
12 <body>
13     <input type="text" name="name" id="nameid" value="aaa"/>
14 </body>
15 </html>
11、js的重载
　　什么是重载？方法名相同，参数列表不同

　　　　- java里面有重载，肯定有

　　js里面是否有重载？没有

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         function add11(a,b) {
10             return a+b;
11         }
12 
13         function add11(a,b,c) {
14             return a+b+c;
15         }
16 
17         function add11(a,b,c,d) {
18             return a+b+c+d;
19         }
20         alert(add11(2,2));   //NaN
21         alert(add11(2,2,3)); //NaN
22         alert(add11(2,2,4,5)); // 13
23     </script>
24 </body>
25 </html>
12、今天的内容总结
　　css

　　css和html的四种结合方式()

　　css的基本选择器()

　　　　标签选择器 div {css代码}

　　　　class选择器 .名称 {}

　　　　id选择器   #名称{}

　　css的扩展选择器(了解)

　　　　关联选择器

　　　　　　嵌套标签的样式的设置

　　　　组合选择器

　　　　　　不同标签设置相同的样式

　　　　伪元素选择器

　　　　　　a标签的状态

　　　　　　　　lv ha

　　　　盒子模型(了解)

　　　　　　边框 border

　　　　　　　　上下左右

　　　　　　内边距 padding

　　　　　　　　上下左右

　　　　　　外边距 margin

　　　　　　　　上下左右

　　　　漂浮(了解)

　　　　　　float : left right

　　　　定位(了解)

　　　　　　position：absolute  relative

　　javascript()

　　　　什么是javascript

　　　　　　- 基于对象和事件驱动的语言，应用与客户端。

　　　　　　- 特点：

　　　　　　　　交互性  安全性  跨平台性

　　　　　　- javascript和java区别

　　　　　　- 组成（3部分）

　　　　　　　　ECMAScript

　　　　　　　　bom

　　　　　　　　dom

　　　　js和html的结合方式（两种）

　　　　　　第一种 <script type="text/javascript"> js代码; </script>

　　　　　　第二种 <script type="text/javascript" src="js的路径"> </script>

　　　　js的数据类型

　　　　　　五种原始类型

　　　　　　　　string  number boolean null undifined

　　　　　　　　定义变量使用  var

　　　　js的语句

　　　　　　if

　　　　　　switch

　　　　　　for while do-while

　　　　js的运算符

　　　　　　字符串的操作

　　　　　　　　字符串相加：连接

　　　　　　　　字符串相减：执行相减运算

　　　　　　boolean类型相加

　　　　　　　　true： 1

　　　　　　　　false：0

　　　　　　== 和 === 区别

　　　　　　　　== ： 判断值

　　　　　　　　=== ： 判断值和类型

　　　　js的数组

　　　　　　三种定义方式

　　　　　　var arr = [1,2,"3"];

　　　　　　var arr1 = new Array(9); //长度9

　　　　　　var arr2 = new Array(1,2,3); //元素是 1 2 3

　　　　　　属性 length：数组的长度

　　　　js的函数

　　　　　　function add(a,b) {方法体和返回值;}

　　　　　　var add1 = function(m,n) {方法体和返回值;}

　　　　　　var add2 = new Function("a,b","方法体和返回值");

　　　　　　不要忘记调用，不然不起作用的

　　　　js的全局变量和局部变量

　　　　　　全局变量：在页面中任何js的部分，都可以使用

　　　　　　局部变量：在方法内部定义一个变量，这个 变量只能在方法内部使用

　　　　script标签位置

　　　　　　建议放在</body>后面

　　　　js的重载（回去思考这个问题）
————————————————
版权声明：本文为CSDN博主「时光如水_岁月如哥」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/xiaoye142034/article/details/78120294