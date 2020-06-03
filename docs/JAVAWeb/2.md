## 1、html 的简介

```html
什么是html？ 　　　　- HyperText Markup Language：超文本标记语言，网页语言
 　　　　　　超文本：超出文本的范畴，使用html可以轻松实现这样操作
 　　　　　　标记：html所有的操作都是通过标记实现的，标记就是标签，<标签名称>
 　　　　　 　　第一个html程序。 　　　　- 创建java文件.java     　　　　
先编译，然后再运行（jvm） 　　　　- html后缀是 .html .htm     　　　　
直接通过浏览器就可以运行 　　　　- 代码  　　　　　　这是我的<font
  size="5"
  color="red"
  >第一个html程序！</font
>

1
<html>
  2
  <head>
    3
    <title>这是一个标题</title>
    4
  </head>
  5
  <body>
    6 <font size="10" color="red">这是我的第一个html程序1！</font> <br />
    7 <font size="7" color="green">这是我的第一个html程序2！</font><br />
    8 <font size="5" color="#66cc66">这是我的第一个html程序3！</font> 9
    <!--这是一个注释-->
    10
    <hr />
    11
  </body>
  12
</html>
```

### 　 html 的规范（遵循）

1、一个 html 文件开始标签和结束的标签  <html>  </html>

- 定义一个 java 方法 { }

2、html 包含两部分内容

（1）<head> 设置相关信息</head>

（2）<body> 显示在页面上的内容都写在 body 里面</body>

3、html 的标签有开始标签，也要有结束标签

- <head></head>

4、html 的代码不区分大小写的

5、有些标签，没有结束标签 ，在标签内结束

- 比如 换行  <br/>  <hr/>

### html 的操作思想（理解）

网页中有很多数据，不同的数据可能需要不同的显示效果，这个时候需要使用标签把要操作的数据包起来（封装起来），通过修改标签的属性值实现标签内数据样式的变化。

一个标签相当于一个容器，想要修改容器内数据的样式，只需要改变容器的属性值，就可以实现容器内数据样式的变化。

### html 中常用的标签

2、文字标签和注释标签

```html
文字标签：修改文字的样式 　　　　- <font></font>

- 属性：  　　　　　　size: 文字的大小 取值范围 1-7,超出了7，默认还是7
　　　　　　 color：文字颜色 　　　　- 两种表示方式 　　　　　　 英文单词：red
 green  blue  black  white  yellow   gray...... 　　　　　　 使用十六进制数表示
#ffffff :  RGB 　　　　- 通过工具实现不同的颜色   #66cc66 　　注释标签 　　　　-
java注释几种？三种 　　　　- html的注释 ：
<!--  html的注释  -->
```

3、标题标签、水平线标签和特殊字符

```html
标题标签 　　　　-
<h1></h1>
<h2></h2>
<h3></h3>
.......
<h6></h6>

- 从h1到h6，大小是依次变小，同时会自动换行 　　水平线标签 　　　　-
<hr />

- 属性 　　　　　　size: 水平线的粗细 取值范围 1-7 　　　　　　color: 颜色
　　　　- 代码

<hr size="5" color="blue" />

特殊字符 　　　　- 想要在页面上显示这样的内容
<html>
  :是网页的开始！ 　　　　- 需要对特殊字符进行转义  　　　　　　<    <
   　　　　　　>    >  　　　　　　空格：  　　　　　　 &  : &
</html>
```

```html
1
<html>
  2
  <head>
    3
    <title>HTML示例</title>
    4
  </head>
  5
  <body>
    6
    <!--  演示标题标签  -->
    7
    <h1>标题一</h1>
    8
    <h2>标题二</h2>
    9
    <h3>标题三</h3>
    10
    <h6>标题六</h6>
    11 12
    <!--  演示水平线标签  -->
    13
    <hr size="5" color="blue" />
    14 15
    <!-- 演示特殊字符 -->
    16 &lt;html&gt;:是&nbsp;&nbsp;&nbsp;&nbsp;网页的开始！ 17
  </body>
  18
</html>
```

4、列表标签

```html
- 比如现在显示这样的效果 　　　　传智播客 　　　　　　财务部 　　　　　　学工部
　　　　　　人事部

<dl></dl>
: 表示列表的范围  　　　　在dl里面
<dt></dt>
: 上层内容  　　　　在dl里面
<dd></dd>
：下层内容 　　- 代码

<dl>
  <dt>传智播客</dt>

  <dd>财务部</dd>

  <dd>学工部</dd>

  <dd>人事部</dd>
</dl>

- 想要在页面上显示这样的效果 　　　　1. 财务部 　　　　2. 学工部 　　　　3.
人事部   　　　　a. 财务部 　　　　b. 学工部 　　　　c. 人事部   　　　　i.
财务部 　　　　ii. 学工部 　　　　iii. 人事部

<ol></ol>
: 有序列表的范围 　　　　　　- 属性 type：设置排序方式 1(默认)  a  i
　　　　　　在ol标签里面
<li>具体内容</li>

- 代码

<ol>
  <li>财务部</li>

  <li>学工部</li>

  <li>人事部</li>
</ol>

- 想要在页面上显示这样的效果 　　　　特殊符号（方框） 财务部
　　　　特殊符号（方框） 学工部

<ul></ul>
: 表示无序列表的范围 　　　　　　属性： type: 空心圆circle 、实心圆disc
、实心方块square ，默认disc 　　　　　　在ul里面
<li></li>

- 代码

<ul>
  <li>财务部</li>

  <li>学工部</li>

  <li>人事部</li>
</ul>

1
<html>
  2
  <head>
    3
    <title>HTML示例</title>
    4
  </head>
  5
  <body>
    6
    <!-- 列表标签 -->
    7
    <dl>
      8
      <dt>传智播客</dt>
      9
      <dd>财务部</dd>
      10
      <dd>学工部</dd>
      11
      <dd>人事部</dd>
      12
    </dl>
    13 14
    <hr />
    15 16
    <!-- 有序列表 -->
    17
    <ol type="i">
      18
      <li>财务部</li>
      19
      <li>学工部</li>
      20
      <li>人事部</li>
      21
    </ol>
    22 23
    <hr />
    24
    <!-- 无序列表 -->
    25
    <ul type="square">
      26
      <li>财务部</li>
      27
      <li>学工部</li>
      28
      <li>人事部</li>
      29
    </ul>
    30
  </body>
  31
</html>
```

5、图像标签（**\*\*\***）

```html
<img src="图片的路径" />

- src: 图片的路径 　　　　- width：图片的宽度 　　　　- height：图片的高度  
　　　　- alt: 图片上显示的文字，把鼠标移动到图片上，停留片刻显示内容
　　　　　　有些浏览器下不显示（没有效果） 1
<html>
  2
  <head>
    3
    <title>HTML示例</title>
    4
  </head>
  5
  <body>
    6 <img src="b1.jpg" alt="这是一个美女" /> 7 8
    <!-- <img src="w02.jpg" width="300" height="400" alt="这是图片上的文字"/>-->
    9 10 <img src="img\a1.jpg" alt="这是一个美女" /> 11 12
    <img src="../c.png" alt="这是一个美女" /> 13
  </body>
  14
</html>
```

6、路径的介绍

```html
绝对路径 　　　　- C:\Users\asus\Desktop\0413\day01\code\a.jpg 　　　　-
http://www.baidu.com/b.jpg 　　相对路径 　　　　-
一个文件相对于另外一个文件的位置 　　　　- 三种：
　　　　　　 html文件和图片在一个路径下，可以直接写文件名称 　　　　　　　　-
<img src="b1.jpg" alt="这是一个美女" />

图片在html的下层目录 　　　　　　　　在html文件中，使用img文件夹下面的a.jpg
　　　　　　　　-- C:\Users\asus\Desktop\0413\day01\code\   4.html
　　　　　　　　-- C:\Users\asus\Desktop\0413\day01\code\   img\a.jpg
　　　　　　　　在html中使用图片 4.html和img在一个路径下
　　　　　　　　　　img\a.jpg   　　　　　　图片在html文件的上层目录
　　　　　　　　--- C:\Users\asus\Desktop\0413\day01\   code\4.html
　　　　　　　　--- C:\Users\asus\Desktop\0413\day01\   c.png
　　　　　　　　html文件所在的目录和图片是一个目录
　　　　　　　　图片和html文件是什么关系？ 　　　　　　　　　　-
图片在html的所在目录的上层目录 day01 　　　　　　　　怎么表示上层路径  ../
　　　　　　　　　　- ../: day01 　　　　　　　　　　-- ../c.png
　　　　　　　　想要表示上层的上层 ../../
```

### 7、案例一：列表标签的使用

```html
1
<html>
  2
  <head>
    3
    <title>HTML示例</title>
    4
  </head>
  5
  <body>
    6 <img src="images/header.jpg" /> 7 <br /><br />
    8 首页 > 中国馆 > 女装/女士精品 > 所有商品 9 <br /><br />
    10 <img src="images/list_header.jpg" /> 11
    <h1>热点推荐</h1>
    12
    <dl>
      13
      <dt><img src="images/photo_01.jpg" /></dt>
      14
      <dd>
        一口价：49.00<br />
        15 全国包邮！韩版修身长袖T恤 打底衫 纯棉圆领T恤
      </dd>
      16
    </dl>
    17 <img src="images/line.gif" /> 18
  </body>
  19
</html>
```

### 8、超链接标签（**\*\***）

```html
链接资源() 　　　　- <a href="链接到资源的路径"> 显示在页面上的内容 </a>

href: 链接的资源的地址 　　　　　　 target：设置打开的方式 ，默认是在当前页打开
　　　　　　　　-- _blank : 在一个新窗口打开 　　　　　　　　-- _self:
在当前页打开 默认 　　　　- 当超链接不需要到任何的地址 在href里面加#
　　　　　　-- <a href="#">这是一个超链接2</a>

1
<html>
  2
  <head>
    3
    <title>HTML示例</title>
    4
  </head>
  5
  <body>
    6 7 <a href="hello.html" target="_self">这是一个超链接2</a> 8 9 <br />
    10 <a href="#">这是一个超链接2</a> 11 12 <br />
    13 14
    <pre>
15     public static void main(String[] args) {
16         System.out.println("hello");
17     }
18                     aaaaaa
19     </pre
    >
    20
  </body>
  21
</html>
```

```html
定位资源 　　　　如果想要定位资源：定义一个位置

<a name="top">顶部</a>

回到这个位置

<a href="#top">回到顶部</a>

引入一个标签 pre：原样输出
```

### 9、表格标签（\***\*重要的标签\*\*\***）

```html
　　可以对数据进行格式化，使数据显示更加清晰

　　<table></table>: 表示表格的范围

　　　　- border：表格线

　　　　- bordercolor：表格线的颜色

　　　　- cellspacing：单元格之间的距离

　　　　- width：表格的宽度

　　　　- height：表格的高度

　　　　在table里面 <tr></tr>

　　　　　　- 设置对齐方式 align： left  center  right

　　　　在tr里面 <td></td>

　　　　　　- 设置显示方式 align： left  center  right

　　　　使用th也可以表示单元格

　　　　- 表示可以实现居中和加粗

　　代码

　　　　<table border="1" bordercolor="blue" cellspacing="0" width="200" height="150">

　　画图分析表格的写法
　　- 首先定义一个表格的范围使用table

　　　　- 定义一行使用 tr

　　　　- 定义一个单元格使用 td

　　操作技巧：

　　　　- 首先数有多少行 ，数每行里面有多少个单元格

 1 <html>
 2 <head>
 3   <title>HTML示例</title>
 4 </head>
 5 <body>
 6     <!--
 7         多少行： 4
 8         每行里面有多少个单元格：3
 9     -->
10     <table border="1" bordercolor="blue" cellspacing="0" width="400" height="150">
11         <caption>人员信息</caption>
12         <tr align="center">
13             <td>姓名</td>
14             <td>性别</td>
15             <td>年龄</td>
16         </tr>
17         <tr>
18             <td align="right">东方不败</td>
19             <td>男</td>
20             <td>20</td>
21         </tr>
22         <tr>
23             <td>岳不群</td>
24             <td>女</td>
25             <td>30</td>
26         </tr>
27         <tr>
28             <th>林平之</th>
29             <th>男</th>
30             <th>40</th>
31         </tr>
32     </table>
33 </body>
34 </html>

　　表格的标题

　　　　<caption></caption>

 　　合并单元格

　　- rowspan：跨行

　　　　<td rowspan="3">人员信息</td>

　　- colspan：跨列

　　　　<td colspan="3">人员信息</td>

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4 </head>
 5 <body>
 6     <!--第一行：1
 7           第二行到第四行都是 3-->
 8     <table border="1" bordercolor="red" width="200">
 9         <tr>
10             <td colspan="3">
11                 人员信息
12             </td>
13         </tr>
14         <tr>
15             <td>
16                 东方不败
17             </td>
18             <td>
19                 男
20             </td>
21             <td>
22                 20
23             </td>
24         </tr>
25         <tr>
26             <td>
27                 岳不群
28             </td>
29             <td>
30                 女
31             </td>
32             <td>
33                 30
34             </td>
35         </tr>
36         <tr>
37             <td>
38                 林平之
39             </td>
40             <td>
41                 男
42             </td>
43             <td>
44                 40
45             </td>
46         </tr>
47     </table>
48     <hr />
49     <!--多少行    ： 3
50     数每行里面有多少个单元格
51     第一个行：3
52     第二行和第三行都是：2-->

53     <table border="1" bordercolor="red" width="200" cellspacing="0">
54         <tr>
55             <td>
56                 东方不败
57             </td>
58             <td>
59                 男
60             </td>
61             <td rowspan="3">
62                 20
63             </td>
64         </tr>
65         <tr>
66             <td>
67                 岳不群
68             </td>
69             <td>
70                 女
71             </td>
72         </tr>
73         <tr>
74             <td>
75                 林平之
76             </td>
77             <td>
78                 男
79             </td>
80         </tr>
81     </table>
82 </body>
83 </html>
```


 

#### 10、表单标签（****今天最重要的标签****）
```html
　　可以提交数据到开心网的服务器，这个过程可以使用表单标签实现

　　<form></form>: 定义一个表单的范围

　　　　- 属性

　　　　　　action： 提交到地址，默认提交到当前的页面

　　　　　　method:  表单提交方式

　　　　　　　　- 常用的有两种  get和post，默认是get请求
```
#### 面试题目： get和post区别
　　1、get请求地址栏会携带提交的数据，post不会携带（备注后加在请求体里面。在第七天时候讲http协议时候会有）

　　2、get请求安全级别较低，post较高

　　3、get请求数据大小的限制，post没有限制



#### 输入项：可以输入内容或者选择内容的部分
```html

　　　　- 大部分的输入项 使用  <input type="输入项的类型"/>

　　　　　　在输入项里面需要有一个name属性

　　　　　　普通输入项：<input type="text"/>

　　　　　　密码输入项：<input type="password"/>

　　　　　　单选输入项：<input type="radio"/>

　　　　　　　　- 在里面需要属性 name

　　　　　　　　- name的属性值必须要相同

　　　　　　　　- 必须有一个value值

　　　　实现默认选中的属性

　　　　　　-- checked="checked"

　　　　复选输入项：<input type="checkbox"/>

　　　　　　- 在里面需要属性 name

　　　　　　- name的属性值必须要相同

　　　　　　- 必须有一个value值

　　　　实现默认选中的属性

　　　　　　-- checked="checked"

　　　　文件输入项（在后面上传时候用到）

　　　　　　- <input type="file"/>

　　　　下拉输入项（不是在input标签里面的）

　　　　　　<select name="birth">

　　　　　　　　<option value="1991">1991</option>

　　　　　　　　　　<option value="1992">1992</option>

　　　　　　　　　　<option value="1993">1993</option>

　　　　　　　　</select>

　　　　　　　　- 默认选择

　　　　　　　　　　selected="selected"

　　文本域

　　　　<textarea cols="10" rows="10"></textarea>

　　隐藏项（不会显示在页面上，但是存在于html代码里面）

　　　　<input type="hidden" />

　　提交按钮

　　　　<input type="submit"/>

　　　　<input type="submit" value="注册"/>


 

　　　　- file:///C:/Users/asus/Desktop/0413/day01/code/10-表单标签一.html?sex=on&love=on&love=on&birth=1991

 

　　　　当在输入项里面写了name属性之后

　　　　- file:///C:/Users/asus/Desktop/0413/day01/code/10-表单标签一.html?phone=2222&pwd=3333&sex=on&love=on&birth=1993&tex=aaaaaaaa&hid=

　　　　- file:///C:/Users/asus/Desktop/0413/day01/code/10-表单标签一.html?

phone=130111111&pwd=123456&sex=nv&love=y&love=p&love=pp&birth=1992&tex=good+love&hid=

 

　　　　?输入项name的值=输入的值&

　　　　参数类似于key-value形式

　　使用图片提交

　　　　<input type="image" src="图片路径"/>

　　重置按钮： 回到输入项的初始状态

　　　　<input type="reset"/>

　　普通按钮(和明天讲js在一起使用的)

　　　　<input type="button" value=""/>

结果：



代码：

 1 <html>
 2 <head>
 3   <title>HTML示例</title>
 4 </head>
 5 <body>
 6     <form action="01-hello.html" method="get">
 7         手机号码：<input type="text" name="phone"/><br/>
 8         创建密码：<input type="password" name="pwd"/><br/>
 9         性别：<input type="radio" name="sex" value="nv" checked="checked"/>女 <input type="radio" name="sex" value="nan"/>男<br/>
10         爱好：<input type="checkbox" name="love" value="y"/>羽毛球 <input type="checkbox" name="love" value="p"   checked="checked"/>乒乓球
11             <input type="checkbox" name="love" value="pp"/> 排球<br/>
12         文件：<input type="file"/><br/>
13         生日：<select name="birth">
14                 <option value="0">请选择</option>
15                 <option value="1991" selected="selected">1991</option>
16                 <option value="1992">1992</option>
17                 <option value="1993">1993</option>
18             </select>
19         <br/>
20         自我描述：<textarea cols="10" rows="10" name="tex"></textarea><br/>
21         隐藏项：<input type="hidden" name="hid"/><br/>
22         <input type="submit" value="注册"/>
23         <input type="reset" value="重置注册"/>
24
25         <input type="button" value="普通按钮"/>
26         <br/>
27         <!--  <input type="image" src="a.jpg"/>-->
28     </form>
29 </body>
30 </html>
11、案例：使用表单标签实现注册页面
　　- 使用表格实现页面效果

　　- 超链接不想要他有效果 href="#"

　　- 如果表格里面的单元格没有内容， 使用空格作为占位符  

　　- 使用图片提交表单 <input type="image" src="图片的路径"/>

效果：



 1 <html>
 2 <head>
 3   <title>HTML示例</title>
 4 </head>
 5 <body>
 6     <h2>注册天空制造的账号</h2>
 7     <form action="01-hello.html">
 8     <table  width="100%">
 9         <tr>
10             <td align="right">注册邮箱：</td>
11             <td><input type="text" name="mail"/></td>
12         </tr>
13         <tr>
14             <td>&nbsp;</td>
15             <td>你可以使用 <a href="#">账号</a>注册或者使用 <a href="#">手机号</a>注册</td>
16         </tr>
17         <tr>
18             <td align="right">创建密码：</td>
19             <td><input type="password" name="pwd"/></td>
20         </tr>
21         <tr>
22             <td align="right">真实姓名：</td>
23             <td><input type="text" name="realname"/></td>
24         </tr>
25         <tr>
26             <td align="right">性别：</td>
27             <td><input type="radio" name="sex" value="nv"/>女 <input type="radio" name="sex" value="nan"/>男</td>
28         </tr>
29         <tr>
30             <td  align="right" >生日：</td>
31             <td>
32                 <select name="year">
33                     <option value="1945">1945</option>
34                     <option value="1931">1931</option>
35                     <option value="1949">1949</option>
36                 </select>年
37                 <select name="month">
38                     <option value="10">10</option>
39                     <option value="11">11</option>
40                     <option value="12">12</option>
41                 </select>月
42                 <select name="day">
43                     <option value="30">30</option>
44                     <option value="10">10</option>
45                     <option value="25">25</option>
46                 </select>日
47             </td>
48         </tr>
49         <tr>
50             <td  align="right">我现在：</td>
51             <td>
52                 <select name="now">
53                     <option value="study">我正在上学</option>
54                     <option value="work">我已经工作</option>
55                 </select>
56             </td>
57         </tr>
58         <tr>
59             <td>&nbsp;</td>
60             <td><img src="verycode.gif"/> <a href="#">看不清换一张?</a></td>
61         </tr>
62         <tr>
63             <td align="right">验证码：</td>
64             <td><input type="text" name="verycode"/></td>
65         </tr>
66         <tr>
67             <td>&nbsp;</td>
68             <td><input type="image" src="btn_reg.gif"/></td>
69         </tr>
70     </table>
71 </form>
72 </body>
73 </html>
12、html中的其他的常用标签的使用
　　b : 加粗

　　s ：删除线

　　u ：下划线

　　i ：斜体

 　　pre ：原样输出

 　　sub : 下标

　　sup : 上标

 　　p ：段落标签 比br标签多一行

 　　div ：自动换行

　　span：在一行显示

效果：



代码：

 1 <html>
 2 <head>
 3 <title>HTML示例</title>
 4 </head>
 5 <body>
 6     <b>天之道</b>，
 7     <u>损有余而补不足</u>
 8     <i>是故虚胜实，</i>
 9     <s>不足胜有余。</s>
10     <hr/>
11     <pre>
12         public static void main(String[] args) {
13             System.out.println("hello");
14         }
15     </pre>
16     <hr/>
17     3 <sub>100</sub>
18     <br/>
19     4 <sup>200</sup>
20     <hr/>
21     <div>这是div1</div>
22     <div>这是div2</div>
23     <div>这是div3</div>
24     <hr/>
25     <span>这是span1</span>
26     <span>这是span2</span>
27     <span>这是span3</span>
28     <hr/>
29
30     <p>勿约而幽明斯契，稽其言有微，验之事不忒，诚可谓至道之宗，</p>
31 奉生之始矣。假若天机迅发，妙识玄通，成谋虽属乎生知，标格亦资于
32 治训，未尝有行不由送
33 </body>
34 </html>
13、html的头标签的使用
　　html两部分组成 head和body

　　在head里面的标签就是头标签

 

　　title标签：表示在标签上显示的内容

　　<meta>标签：设置页面的一些相关内容

　　　　- <meta name="keywords" content="毕姥爷，熊出没，刘翔">

　　　　  <meta http-equiv="refresh" content="3;url=01-hello.html" />

　　base标签：设置超链接的基本设置

　　　　- 可以统一设置超链接的打开方式

　　　　 <base target="_blank"/>

　　link标签：引入外部文件

　　　　可以使用link标签引入css文件

效果：



代码：

 1 <html>
 2 <head>
 3 <title>HTML示例</title>
 4     <meta name="keywords" content="毕姥爷，熊出没，刘翔">
 5     <!-- <meta http-equiv="refresh" content="3;url=01-hello.html" />-->
 6     <base target="_blank"/>
 7 </head>
 8 <body>
 9 <h1>头标签</h1>
10 <a href="01-hello.html" >超链接1</a>
11 <a href="01-hello.html" >超链接2</a>
12 <a href="01-hello.html" >超链接3</a>
13 </body>
14 </html>
14、框架标签的使用（会用）
　　<frameset>

　　　　- rows:按照行进行划分

　　　　　　<frameset rows="80,">

　　　　- cols:按照列进行划分

　　　　　　<frameset cols="80,">

　　<frame>

　　　　- 具体显示的页面

　　　　　　- <frame name="lower_left" src="b.html">

 

　　使用框架标签时候，不能写在body里面，使用了框架标签，需要把body去掉

　　<frameset rows="80,">                        //把页面划分成上下两部分

　　　　<frame name="top" src="a.html">             //上面页面

　　　　<frameset cols="150,">                     //把下面部分划分成左右两部分

　　　　　　<frame name="lower_left" src="b.html">  //左边的页面

　　　　　　<frame name="lower_right" src="c.html"> //右边的页面

　　　　</frameset>

　　</frameset>

　　如果在左边的页面超链接，想让内容显示在右边的页面中

　　　　- 设置超链接里面属性 target值设置成名称

　　　　- <a href="01-hello.html" target="right">超链接1</a>

效果：



代码：

 1 <html>
 2 <head>
 3   <title>HTML示例</title>
 4 </head>
 5     <frameset rows="80,*">
 6         <frame name="top" src="a.html"/>
 7         <frameset cols="80,*">
 8             <frame name="left" src="b.html"/>
 9             <frame name="right"/>
10         </frameset>
11     </frameset>
12 </html>
b.html:

 1 <html>
 2 <head>
 3   <title>HTML示例</title>
 4 </head>
 5 <body>
 6     <h1>bbbbbbb</h1>
 7     <a href="01-hello.html" target="right">超链接1</a>
 8     <a href="02-标题和水平线和特殊字符.html" target="right">超链接2</a>
 9     <a href="03-列表标签.html" target="right">超链接3</a>
10 </body>
11 </html>
15、a标签的扩展（了解）
　　- 百度是网络资源

　　- 当a标签里面访问网络资源时候，必须要加一个协议 http：表示一个网络的公共协议，

　　如果加上http协议之后，自动识别访问资源是一个网络资源

　　- 当浏览器里面找到相关协议，首先看这个协议是不是公共协议http。

　　如果不是公共协议，会去本地电脑找支持这个协议的应用程序。

16、今天内容的总结
　　1、html操作思想（）

　　　　使用标签把要操作的数据包起来，通过修改标签的属性值，来实现标签内数据样式的变化

　　2、font标签 属性：size 取值范围 1-7  color：英文单词，十六进制数 #ffffff

　　3、标题标签 <h1></h1>.....<h6></h6> : 从h1到h6越来越小，自动换行

　　4、注释 <!-- html的注释 -->

　　5、列表标签

　　　　<dl> <dt></dt> <dd></dd></dl>

　　　　有序 <ol><li></li></ol>

　　　　无序 <ul><li></li></ul>

　　6、图像标签()

　　　　<img src="图片的路径" width="" height="" alt=""/>

　　　　　　alt:浏览器兼容性很差

　　7、路径（相对路径）()

　　　　在同一级目录 ：直接写

　　　　在下一层目录： images/1.jpg

　　　　在上层目录： ../

　　8、超链接标签（）

　　　　<a href="路径">显示在页面上的内容</a>

　　　　- 打开方式 target="_self  _ blank"

　　　　- 默认是在当前页面打开

　　9、表格标签（）

　　　　<table>

　　　　　　<tr>

　　　　　　　　<td></td>

　　　　　　　　<th></th>  //加粗和居中

　　　　　　</tr>

　　　　</table>

　　　　- 技巧：先数有多少行，数每行里面有多少个单元格
```

### 10、表单标签（最重要的标签）
```java
　　　　<form></form>:

　　　　　　- action: 提交到地址

　　　　　　- method：提交方式 ：常用的有两种 get和post

　　　　　　- get和post区别

　　　　　　- enctype属性（上传时候使用）

　　　　输入项

　　　　　　输入项里面写name属性

　　　　　　普通输入项 <input type="text"/>

　　　　　　密码：password

　　　　　　单选框：radio

　　　　　　复选框：checkbox

　　　　　　下拉框

　　　　　　　　<select name="">

　　　　　　　　　　<option value=""></option>

　　　　　　　　</select>

　　　　　　文本域

　　　　　　　　<textarea cols="" rows="" name=""></textarea>

　　　　　　文件 file

　　　　　　提交按钮 submit

　　　　　　重置  reset

　　　　　　使用图片提交 <input type="image" src=""/>

　　　　　　隐藏项 hidden

　　　　　　普通按钮 button
```
###　　11、div和span()
```html
（一)span和div功能区别

span和div区别在于， **div是一个块级元素，它包含的元素会自动换行。而span是内联元素，在它的前后不会换行。**

span没有结构上的意义，只是单纯的应用样式，其他元素不适合时，就可以使用span元素。span可以作为div的子元素，但div不能是span的子元素，如果出现span中出现div不符合ws3c的页面标准。

（二）span和div使用区别

span元素宽度是被包围的内容宽度决定，不建议给span设置宽度属性width，可以给span设置margin值，设置与父元素之前的距离。

span可以通过css声明（display:block）转换为块元素，想对一行中的文字或图片单独设置样式，而又由不需要换行的条件下又不影响其他行内其他内容，span可以很好解决这些问题
```
###    12、框架标签（会用）

```html
与HTML框架有关的标签主要有三种：

<frameset> 框架结构标签
<frame> 框架标签
<iframe> 内联框架标签


一、 先来说第一种框架结构标签 <frameset>，其主要属性是rows和cols，使用如下：

复制代码
<html>

<frameset cols="25%,50%,25%">
  <frame src="frame_a.htm" />
  <frame src="frame_b.htm" />
  <frame src="frame_c.htm" />
</frameset>

</html>
复制代码
重要的提示： 
不能将 <body></body> 标签与<frameset></frameset> 标签同时使用！不过，假如你添加包含一段文本的<noframes> 标签，就必须将这段文字嵌套于<body></body>标签内。



二、<frame>标签定义 frameset 中的一个特定的窗口（框架）。其常用的属性如下：

frameborder，规定是否显示框架周围的边框。值：0/1；
name，规定框架的名称。值：name；
noresize，规定无法调整框架的大小。值：noresize；
scrolling，规定是否在框架中显示滚动条。值：yes/no/auto；
src，规定在框架中显示的文档的 URL。值：URL；
marginheight，定义框架的上方和下方的边距。
marginwidth，定义框架的左侧和右侧的边距。
longdesc，规定一个包含有关框架内容的长描述的页面。（由于浏览器对 longdesc 属性的支持性非常差，没有必要使用该属性。）

三、内联框架<iframe>用于在网页内显示网页

<iframe src="URL"></iframe>
```