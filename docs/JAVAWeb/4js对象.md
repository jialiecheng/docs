## 1、js的String对象
```html
　　创建String对象

　　　　var str = "abc";

　　方法和属性（文档）

　　　　属性 length：字符串的长度

　　　　方法

　　　　（1）与html相关的方法

　　　　　　- bold()：加粗

　　　　　　- fontcolor(): 设置字符串的颜色

　　　　　　- fontsize(): 设置字体的大小

　　　　　　- link(): 将字符串显示成超链接

　　　　　　　　str4.link("hello.html")

　　　　　　- sub() sup(): 下标和上标

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //length属性
10         var str = "abcde";
11         document.write(str.length);
12 
13         //bold方法
14         document.write("<hr/>");
15         var str1 = "asdf";
16         document.write(str1.bold());
17 
18         //fontcolor
19         document.write("<hr/>");
20         var str2 = "www";
21         document.write(str2.fontcolor("red"));
22 
23         //fontsize
24         document.write("<hr/>");
25         var str3 = "qqqqq";
26         document.write(str3.fontsize(5));
27 
28         //link
29         document.write("<hr/>");
30         var str4 = "haha";
31         document.write(str4.link("hello.html"));
32 
33         //sub 和sup
34         document.write("<hr/>");
35         var s1 = "100";
36         var s2 = "200";
37         var s3 = "300"
38         document.write(s1.sub());
39         document.write(s3);
40         document.write(s2.sup());
41     </script>
42 </body>
43 </html>

　　（2）与java相似的方法

　　　　- concat(): 连接字符串

　　　　　　//concat方法

　　　　　　var str1 = "abc";

　　　　　　var str2 = "dfg";

　　　　　　document.write(str1.concat(str2));

　　　　- charAt():返回指定指定位置的字符串

　　　　　　var str3 = "abcdefg";

　　　　　　document.write(str3.charAt(20)); //字符位置不存在，返回空字符串

 　　　　- indexOf()： 返回字符串位置

　　　　　　var str4 = "poiuyt";

　　　　　　document.write(str4.indexOf("w")); //字符不存在，返回-1

　　　　- split()：切分字符串，成数组

　　　　　　var str5 = "a-b-c-d";

　　　　　　var arr1 = str5.split("-");

　　　　　　document.write("length: "+arr1.length);

　　　　- replace() ： 替换字符串

　　　　　　传递两个参数：

　　　　　　　　-- 第一个参数是原始字符

　　　　　　　　-- 第二个参数要替换成的字符

　　　　　　var str6 = "abcd";

　　　　　　document.write(str6);

　　　　　　document.write("<br/>");

　　　　　　document.write(str6.replace("a","Q"));

 　　　　- substr()和substring()

　　　　　　var str7 = "abcdefghuiop";

　　　　　　//document.write(str7.substr(5,5));  //fghui  从第五位开始，向后截取五个字符

　　　　　　　　从第几位开始，向后截取几位

　　　　　　document.write("<br/>");

　　　　　　document.write(str7.substring(3,5)); //de  从第几位开始到第几位结束  [3,5)

　　　　　　　　从第几位开始，到第几位结束，但是不包含最后哪一位
               左闭右开

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         //concat方法
10         var str1 = "abc";
11         var str2 = "dfg";
12         document.write(str1.concat(str2));
13 
14         //charAt方法
15         document.write("<hr/>");
16         var str3 = "abcdefg";
17         document.write(str3.charAt(20)); //字符位置不存在，返回空字符串
18         
19         //indexOf方法
20         document.write("<hr/>");
21         var str4 = "poiuyt";
22         document.write(str4.indexOf("w")); //字符不存在，返回-1
23 
24         //split方法
25         document.write("<hr/>");
26         var str5 = "a-b-c-d";
27         var arr1 = str5.split("-");
28         document.write("length: "+arr1.length);
29         
30         //replace
31         document.write("<hr/>");
32         var str6 = "abcd";
33         document.write(str6);
34         document.write("<br/>");
35         document.write(str6.replace("a","Q"));
36 
37         //substr  substring
38         document.write("<hr/>");
39         var str7 = "abcdefghuiop";
40         //document.write(str7.substr(5,5));  //fghui  从第五位开始，向后截取五个字符
41 
42         document.write("<br/>");
43         document.write(str7.substring(3,5)); //de  从第几位开始到第几位结束  [3,5)
44     </script>
45 </body>
46 </html>
```
## 2、js的Array对象
```html
　　创建数组（三种）

　　　　- var arr1 = [1,2,3];

　　　　- var arr2 = new Array(3); //长度是3

　　　　- var arr3 = new Array(1,2,3); //数组中的元素是1 2 3

　　　　- var arr = [];  //创建一个空数组

　　属性：length：查看数组的长度

　　方法

　　　- concat()： 数组的连接

　　　　　　var arr11 = [1,2,3];

　　　　　　var arr12 = [4,5,6];

　　　　　　document.write(arr11.concat(arr12));//1,2,3,4,5,6

 　　 - join()：根据指定的字符分割数组

　　　　　　var arr13 = new Array(3);

　　　　　　arr13[0] = "a";

　　　　　　arr13[1] = "b";

　　　　　　arr13[2] = "c";

　　　　　　document.write(arr13);//a,b,c

　　　　　　document.write("<br/>");

　　　　　　document.write(arr13.join("-"));//a-b-c

　　　　- push()：向数组末尾添加元素，返回数组的新的长度

　　　　　　如果添加的是一个数组，这个时候把数组当做一个整体字符串添加进去

　　　　　　//push方法

　　　　　　var arr14 = new Array(3);

　　　　　　arr14[0] = "tom";

　　　　　　arr14[1] = "lucy";

　　　　　　arr14[2] = "jack";

　　　　　　document.write("old array: "+arr14);//old array: tom,lucy,jack

　　　　　　document.write("<br/>");

　　　　　　document.write("old length:"+arr14.length);//old length:3

 

　　　　　　document.write("<br/>");

　　　　　　document.write("new length: "+arr14.push("zhangsan"));//new length: 4

 

　　　　　　document.write("<br/>");

　　　　　　document.write("new array: "+arr14);//new array: tom,lucy,jack,zhangsan

 

　　　　　　var arr15 = ["aaa","bbb","ccc"];

　　　　　　var arr16 = ["www","qqq"];

 

　　　　　　document.write("old array:"+arr15);//old array:aaa,bbb,ccc

　　　　　　document.write("<br/>");

　　　　　　document.write("old length:"+arr15.length);//old length:3

 

　　　　　　document.write("<br/>");

　　　　　　document.write("new length:"+arr15.push(arr16));//new length:5

　　　　　　document.write("<br/>");

　　　　　　document.write("new array: "+arr15);//new array: aaa,bbb,ccc,www,qqq

　　　　　　for(var i=0;i<arr15.length;i++) {

　　　　　　　　alert(arr15[i]);

　　　　　　}

　　　　- pop()：表示 删除最后一个元素，返回删除的那个元素

　　　　　　var arr17 = ["zhangsan","lisi","wangwu","zhaoliu"];

　　　　　　document.write("old array: "+arr17);//old array:zhangsan,lisi,wangwu,zhaoliu

　　　　　　document.write("<br/>");

　　　　　　document.write("return: "+arr17.pop());//return: zhaoliu

　　　　　　document.write("<br/>");

　　　　　　document.write("new array: "+arr17);//new array: zhangsan,lisi,wangwu

　　　　- reverse():颠倒数组中的元素的顺序

　　　　　　//reverse方法

　　　　　　document.write("<hr/>");

　　　　　　var arr18 = ["zhangsan1","lisi1","zhaoliu1","niuqi1"];

　　　　　　document.write("old array: "+arr18);//old array: zhangsan1,lisi1,zhaoliu1,niuqi1

　　　　　　document.write("<br/>");

　　　　　　document.write("new array:"+arr18.reverse());//new array:niuqi1,zhaoliu1,lisi1,zhangsan1
```
## 3、js的Date对象
```html
　　在java里面获取当前时间

　　　　Date date = new Date();

　　　　//格式化

　　　　//toLocaleString()   //2017年8月03日 11:17:12

 　　js里面获取当前时间

　　　　var date = new Date();

　　　　//获取当前时间

　　　　var date = new Date();

　　　　document.write(date);  // Thu Aug 03 2017 13:22:56 GMT+0800 (中国标准时间)

 　　　　//转换成习惯的格式

　　　　document.write("<hr/>");

　　　　document.write(date.toLocaleString());//2017/8/3 下午1:22:56

　　获取当前的年方法

　　　　getFullYear()：得到当前的年

　　　　　　document.write("year: "+date.getFullYear());//year: 2017

 　　获取当前的月方法

　　　　getMonth()：获取当前的月

　　　　　　返回的是 0-11月，如果想要得到准确的值，加1

　　　　　　var date1 = date.getMonth()+1;

　　　　　　document.write("month: "+date1);//month: 8

 　　获取当前的星期

　　　　getDay()：星期,返回的是 (0 ~ 6)

　　　　外国朋友，把星期日作为一周的第一天，星期日返回的是 0

　　　　而星期一到星期六 返回的是 1-6

　　　　document.write("week: "+date.getDay());//week: 4

 　　获取当前的日

　　　　getDate()：得到当前的天 1-31

　　　　document.write("day: "+date.getDate());//day: 3

 　　获取当前的小时

　　　　getHours()：获取小时

　　　　document.write("hour: "+date.getHours());//hour: 13

 　　获取当前的分钟

　　　　getMinutes()：分钟

　　　　document.write("minute: "+date.getMinutes());//minute: 22

 　　获取当前的秒

　　　　getSeconds(): 秒

　　　　document.write("second: "+date.getSeconds());//second: 56

 　　获取毫秒数

　　　　getTime()

　　　　返回的是1970 1 1 至今的毫秒数

 document.write("times: "+date.getTime());//times: 1501737776787

 应用场景：

　　　　　　使用毫秒数处理缓存的效果（不有缓存）

　　　　　　　　http://www.baidu.com?毫秒数
```
## 4、js的Math对象
```html

　　数学的运算

　　里面的都是静态方法，使用可以直接使用 Math.方法()

　　ceil(x): 向上舍入

　　floor(x)：向下舍入

　　round(x)：四舍五入

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         var mm = 10.7;
10         
11         document.write("old : "+mm);
12         document.write("<br/>");
13         document.write("ceil: "+Math.ceil(mm));
14 
15         document.write("<br/>");
16         document.write("floor: "+Math.floor(mm));
17         
18         document.write("<br/>");
19         document.write("round: "+Math.round(mm));
20     </script>
21 </body>
22 </html>
　　random()：得到随机数（伪随机数0-1）

　　　　- 得到0-9的随机数

　　　　　　Math.random()10

　　　　　　Math.floor(Math.random()10));

 

　　//pow(x,y)  2的5次方

　　　　document.write("<hr/>");

　　　　Document.write(Math.pow(2,5));
```
## 5、js的全局函数
```html
　　由于不属于任何一个对象，直接写名称使用

 

　　eval() ： 执行js代码（如果字符串是一个js代码，使用方法直接执行）

　　　　var str = "alert('1234');";

　　　　//alert(str);

　　　　eval(str);//1234

　　encodeURI() ：对字符进行编码

 var str1 = "测试中文aaa1234";

 var encode1 = encodeURI(str1);

　　　　document.write(encode1);//- %E6%B5%8B%E8%AF%95%E4%B8%AD%E6%96%87aaa1234

 

　　decodeURI()  ：对字符进行解码

var decode1 = decodeURI(encode1);

document.write(decode1);//测试中文aaa1234

 

　　　　encodeURIComponent() 和 decodeURIComponent()

 

　　isNaN():判断当前字符串是否是数字

　　　　-- var str2 = "aaaa";

　　　　alert(isNaN(str2));//true

　　　　如果是数字，返回false

　　　　如果不是数字，返回true

 

　　parseInt()：类型转换

　　　　var str3 = "123";

　　　　document.write(parseInt(str3)+1);//124
```
## 6、js的函数的重载
```html
　　什么是重载？方法名相同，参数不同

　　js的重载是否存在？ 不存在

　　　　调用最后一个方法

　　　　把传递的参数保存到 arguments数组里面

 

　　js里面是否存在重载？(面试题目)

　　　　（1）js里面不存在重载。

　　　　（2）但是可以通过其他方式模拟重载的效果 （通过aruguments数组来实现）

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <script type="text/javascript">
 9         function add1() {
10             //比如传递的是两个参数
11             if(arguments.length == 2) {
12                 return arguments[0]+arguments[1];
13 
14             } else if (arguments.length == 3) {
15                 return arguments[0]+arguments[1]+arguments[2];
16 
17             } else if (arguments.length == 4) {
18 
19                 return arguments[0]+arguments[1]+arguments[2]+arguments[3];
20             } else {
21                 return 0;
22             }
23         }
24         //调用
25         alert(add1(1,2));   //NaN
26         alert(add1(1,2,3)); //NaN
27         alert(add1(1,2,3,4));  // 10
28         alert(add1(1,2,3,4,5));  // 10
29     </script>
30 </body>
31 </html>
```
## 7、js的bom对象
```html
　　bom：broswer object model: 浏览器对象模型

 　　有哪些对象？

　　navigator： 获取客户机的信息（浏览器的信息）
　　　　- navigator.appName

　　　　- document.write(navigator.appName);

　　screen: 获取屏幕的信息

　　　　- document.write(screen.width);//1417

　　　　  document.write("<br/>");

　　　　  document.write(screen.height);//797

　　location: 请求url地址

　　　　- href属性

　　　　　　获取到请求的url地址

　　　　　　　　- document.write(location.href);//file:///F:/第二阶段_JavaWeb阶段/超全面的JavaWeb视频教程/JavaWeb视频教程_day3/JavaWeb视频教程_day3-资料源码/code/08-js的bom对象一.html

 

　　　　　　设置url地址

　　　　　　　　- 页面上安置一个按钮，按钮上绑定一个事件，当我点击这个按钮，页面可以跳转到另外一个页面

　　　　　　　　- location.href = "hello.html";

 

　　　　　　　　<input type="button" value="tiaozhuan" οnclick="href1();"/>

　　　　　　　　　　Function href1() {

　　　　//alert(“aaaa”);

　　　　location.href = “hello.html”;

　　　　}

　　　　　　　　　- 鼠标点击事件  οnclick="js的方法;"

　　history：请求的url的历史记录

　　　　- 创建三个页面

　　　　　　1、创建第一个页面 a.html 写一个超链接 到 b.html

　　　　　　2、创建b.html 超链接 到 c.html

　　　　　　3、创建c.html

 　　　　- 到访问的上一个页面

　　　　　　history.back();

　　　　　　history.go(-1);

　　　　- 到访问的下一个页面

　　　　　　history.forward();

　　　　　　history.go(1);

a.html

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <h1>AAAAAAAAAAAAAAAAAAAAAAA</h1>
 9     <a href="b.html">AAAAAAAAA</a>
10     <script type="text/javascript">
11     </script>
12 </body>
13 </html>
b.html

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <input type="button" value="back" onclick="back1();"/>
 9     <br/>
10     <input type="button" value="next" onclick="next1();"/>
11     <h1>BBBBBBBBBBBBBBBBBBBBBBB</h1>
12 
13     <a href="c.html">BBBBBBBB</a>
14     <script type="text/javascript">
15         //到上一个页面
16         function back1() {
17             //history.back();
18             history.go(-1);
19         }
20         //到下一个页面
21         function next1() {
22             //history.forward();
23             history.go(1);
24         }
25     </script>
26 </body>
27 </html>
c.html

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <h1>CCCCCCCCCCCCCCCCCCCCCC</h1>
 9     <script type="text/javascript">    
10     </script>
11 </body>
12 </html>
```
```html
　　window（）
　　　　窗口对象

　　　　顶层对象（所用的bom对象都是在window里面操作的）

　　　　方法

　　　　　　- window.alert() ：页面弹出一个框，显示内容

　　　　　　　　简写alert()

　　　　　　- confirm()：确认框

　　　　　　　　- var flag = window.confirm("是否删除");

　　If(flag == true) {

　　Alert(“删除成功”);

　　}else {

　　Alert(“删除失败”)

　　}

　　　　　　- prompt()：输入的对话框

　　　　　　　　- window.prompt("please input : ","0");

　　　　　　　　- window.prompt("在显示的内容","输入框里面的默认值");

 

　　　　　　- open()：打开一个新的窗口

　　　　　　　　open("打开的新窗口的地址url","","窗口特征，比如窗口宽度和高度")

　　　　　　　　- 创建一个按钮，点击这个按钮，打开一个新的窗口

  -<input type="button" value="open" οnclick="open1()"/>

　　　　　　　　- function open1() {

　　　　　　　　　　window.open("hello.html","","width=200,height=100");

　　　　　　　　　　}

　　　　　　- close()：关闭窗口(浏览器兼容性比较差)

　　　　　　　　- window.close();

 

　　　　　　- 做定时器

　　　　　　setInterval("js代码",毫秒数)  1秒=1000毫秒

　　　　　　　　- 表示每三秒，执行一次alert方法

　　　　　　　　window.setInterval("alert('123');",3000);

　　　　　　setTimeout("js代码",毫秒数)

　　　　　　　　- 表示在毫秒数之后执行，但是只会执行一次

 

　　　　　　　　- 表示四秒之后执行js代码，只会执行一次

　　　　　　　　window.setTimeout("alert('abc');",4000);

 

　　　　　　clearInterval(): 清除setInterval设置的定时器

　　　　　　　　var id1 = setInterval("alert('123');",3000);//通过setInterval会有一个返回值

　　　　　　　　clearInterval(id1);

 

　　　　　　clearTimeout() : 清除setTimeout设置的定时器

　　　　　　　　var id2 = setTimeout("alert('abc');",4000);

　　　　　　　　clearTimeout(id2);

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <input type="button" value="interval" onclick="clear1();"/>
 9     <br/>
10     <input type="button" value="timeout" onclick="clear2();"/>
11     <script type="text/javascript">
12         //演示setInterval方法
13         //var id1 = setInterval("alert('123');",3000);
14 
15         //演示setTimeout方法
16         var id2 = setTimeout("alert('abc');",4000);
17 
18         //清除setInterval
19         function clear1() {
20             clearInterval(id1);
21         }
22         //清除setTimeout
23         function clear2() {
24             clearTimeout(id2);
25         }
26     </script>
27 </body>
28 </html>
```
## 8、js的dom对象（****）
```html
　　dom：document object model: 文档对象模型

　　文档：

　　　　超文本文档（超文本标记文档） html 、xml

　　对象：

　　　　提供了属性和方法

　　模型：使用属性和方法操作超文本标记型文档

 

　　可以使用js里面的dom里面提供的对象，使用这些对象的属性和方法，对标记型文档进行操作

 

　　想要对标记型文档进行操作，首先需要 对标记型文档里面的所有内容封装成对象

　　　　-- 需要把html里面的标签、属性、文本内容都封装成对象

 

　　要想对标记型文档进行操作，解析标记型文档

　　　　- 画图分析，如何使用dom解析html

 
解析过程

　　根据html的层级结构，在内存中分配一个树形结构，需要把html中的每部分封装成对象，

　　- document对象：整个文档

　　- element对象：标签对象

　　- 属性对象

　　- 文本对象

 

　　-- Node节点对象：这个对象是这些对象的父对象

　　　　如果在对象里面找不到想要的方法，这个时候到Node对象里面去找

 

　　DOM模型有三种：

　　　　DOM level 1：将html文档封装成对象。

　　　　DOM level 2：在level 1的基础上添加新的功能，例如：对于事件和css样式的支持。

　　　　DOM level 3：支持xml1.0的一些新特性。

 

　　DHTML：是很多技术的简称

　　　　html: 封装数据

　　　　css：使用属性和属性值设置样式

　　　　dom：操作html文档（标记型文档）

　　　　javascript：专门指的是js的语法语句（ECMAScript）
```
## 9、document对象
```html
　　表示整个的文档

　　常用方法

　　　　write()方法：

　　　　　　（1）向页面输出变量（值）

　　　　　　（2）向页面输出html代码

　　　　　　- var str = "abc";

　　　　　　document.write(str);

　　　　　　document.write("<hr/>");

　　　　getElementById();

　　　　　　- 通过id得到元素（标签）

　　　　　　- //使用getElementById得到input标签

　　　　　　var input1 = document.getElementById("nameid");  //传递的参数是标签里面的id的值

　　　　　　//得到input里面的value值

　　　　　　alert(input1.name);   //标签对象.属性名称

　　　　　　//向input里面设置一个值value

　　　　　　input1.value = "bbbbb";

 　　　　getElementsByName();

　　　　　　- 通过标签的name的属性值得到标签

　　　　　　- 返回的是一个集合（数组）

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <input type="text" name="name1" value="aaaa"/><br/>
 9     <input type="text" name="name1" value="bbbbb"/><br/>
10     <input type="text" name="name1" value="cccc"/><br/>
11     <input type="text" name="name1" value="dddd"/><br/>
12     <script type="text/javascript">
13 
14         //使用getElementsByName得到input标签
15         var inputs = document.getElementsByName("name1");
16         //alert(inputs.length);
17         //遍历数组
18         for(var i=0;i<inputs.length;i++) {
19             var input1 = inputs[i];  //每次循环得到input对象，赋值到input1里面
20             alert(input1.value);    //得到每个input标签里面的value值
21         }
22     </script>
23 </body>
24 </html>
　　　　getElementsByTagName("标签名称");

　　　　　　- 通过标签名称得到元素

　　　　　　- //演示getElementsByTagName

　　　　　　var inputs1 = document.getElementsByTagName("input");  //传递的参数，是标签名称

　　　　　　//alert(inputs1.length);

　　　　　　//遍历数组，得到每个input标签

　　　　　　for(var m=0;m<inputs1.length;m++) {

　　　　　　　　//得到每个input标签

　　　　　　　　var input1 = inputs1[m];

　　　　　　　　//得到value值

　　　　　　　　alert(input1.value);

　　　　　　}

　　　　注意地方

　　　　　　只有一个标签，这个标签只能使用name获取到，这个使用，使用getElementsByName返回的是一个数组，但是现在只有一个元素，这个时候不需要遍历，而是可以直接通过数组的下标获取到值

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <input type="text" name="name11" value="WWWWWW"/>
 9     <script type="text/javascript">
10         //通过name得到input标签
11         /var inputs2 = document.getElementsByName("name11")[0];
12         alert(inputs2.value);/
13 
14         //通过input名称获取
15         var inputss = document.getElementsByTagName("input")[0];
16         alert(inputss.value);
17     </script>
18 </body>
19 </html>
```
![QQ截图20200603205107.png](http://ww1.sinaimg.cn/large/007eYKdZly1gffe876mzqj30jm094wec.jpg)

## 10、案例：window弹窗案例
```html
　　- 实现过程

　　　　1、创建一个页面

　　　　　　有两个输入项和一个按钮

　　　　　　按钮上面有一个事件：弹出一个新窗口 open

 

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     编号：<input type="text" id="numid"/><br/>
 9     姓名：<input type="text" id="nameid"/><br/>
10     <input type="button" value="选择" onclick="open1()"/>
11     <script type="text/javascript">
12         //实现弹出窗口的方法
13         function open1() {
14             //open方法
15             window.open("user.html","","width=250,height=150");
16         }
17     </script>
18 </body>
19 </html>

　　2、创建弹出页面

　　　　表格

　　　　每一行有一个按钮和编号和姓名

　　　　按钮上有一个事件：把当前的编号和姓名，赋值到第一个页面相应的位置

 1 <html>
 2 <head>
 3     <title>HTML示例</title>
 4     <style type="text/css">
 5     </style>
 6 </head>
 7 <body>
 8     <table border="1" bordercolor="blue">
 9         <tr>
10             <td>操作</td>
11             <td>编号</td>
12             <td>姓名</td>
13         </tr>
14         <tr>
15             <td><input type="button" value="选择" onclick="s1('100','东方不败');"/></td>
16             <td>100</td>
17             <td>东方不败</td>
18         </tr>
19         <tr>
20             <td><input type="button" value="选择" onclick="s1('101','岳不群');"/></td>
21             <td>101</td>
22             <td>岳不群</td>
23         </tr>
24         <tr>
25             <td><input type="button" value="选择" onclick="s1('102','林平之');"/></td>
26             <td>102</td>
27             <td>林平之</td>
28         </tr>
29     </table>
30     <script type="text/javascript">
31         //实现s1方法
32         function s1(num1,name1) {
33             //需要把num1和name1赋值到window页面
34             //跨页面的操作  opener：得到创建这个窗口的窗口 得到window页面
35             var pwin = window.opener; //得到window页面
36             pwin.document.getElementById("numid").value = num1;
37             pwin.document.getElementById("nameid").value = name1;
38             //关闭窗口
39             window.close();
40         }
41     </script>
42 </body>
43 </html>
　　　　－opener:属性，获取创建当前窗口的窗口

　　　　- 做这个案例时候会有一个问题

　　　　由于我们现在访问的是本地文件，js安全性，谷歌浏览器安全级别很高，不允许访问本地文件

　　　　在实际开发中，没有这样的问题，实际中不可能访问本地的文件。
```

## js事件

![20200608105053](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200608105053.png)
