## 1、schema约束
```html
　　dtd语法： <!ELEMENT 元素名称 约束>

　　** schema符合xml的语法，xml语句

　　** 一个xml中可以有多个schema，多个schema使用名称空间区分（类似于java包名）

　　** dtd里面有PCDATA类型，但是在schema里面可以支持更多的数据类型

　　　　*** 比如 年龄 只能是整数，在schema可以直接定义一个整数类型

　　*** schema语法更加复杂，schema目前不能替代dtd
```
## 2、schema的快速入门
```html
　　* 创建一个schema文件 后缀名是 .xsd

　　　　** 根节点 <schema>

　　** 在schema文件里面

　　　　** 属性  xmlns="http://www.w3.org/2001/XMLSchema"

　　　　　　- 表示当前xml文件是一个约束文件

　　　　** targetNamespace="http://www.itcast.cn/20151111"

　　　　　　- 使用schema约束文件，直接通过这个地址引入约束文件

　　　　** elementFormDefault="qualified"

　　步骤

　　　　（1）看xml中有多少个元素

　　　　　　<element>

　　　　（2）看简单元素和复杂元素

　　　　　　* 如果复杂元素

　　　　　　<complexType>

　　　　　　　　<sequence>

　　　　　　　　　　子元素

　　　　　　　　</sequence>

　　　　　　</complexType>

　　　　（3）简单元素，写在复杂元素的

　　　　　　<element name="person">

　　　　　　<complexType>

　　　　　　<sequence>

　　　　　　　　<element name="name" type="string"></element>

　　　　　　　　<element name="age" type="int"></element>

　　　　　　</sequence>

　　　　　　</complexType>

　　　　　　</element>

1.xsd

 1 <?xml version="1.0" encoding="UTF-8"?>
 2 <schema xmlns="http://www.w3.org/2001/XMLSchema"
 3         targetNamespace="http://www.itcast.cn/20151111"
 4         elementFormDefault="qualified">
 5     <element name="person">
 6         <complexType>
 7             <sequence>
 8             <!-- <all> -->
 9             <!-- <choice> -->
10                     <element name="name" type="string" maxOccurs="unbounded"></element>
11                     <element name="age" type="int"></element>
12             <!-- </choice> -->
13             <!-- </all>     -->
14             </sequence>
15             <attribute name="id1" type="int" use="required"></attribute>
16         </complexType>
17     </element>
18 </schema>
　　　　（4）在被约束文件里面引入约束文件

person.xml

 1 <?xml version="1.0" encoding="UTF-8"?>
 2 <person xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 3         xmlns="http://www.itcast.cn/20151111"
 4         xsi:schemaLocation="http://www.itcast.cn/20151111 1.xsd" id1="123">
 5     
 6     <name>zhangsan</name>
 7     <name>zhangsan</name>
 8     <name>zhangsan</name>
 9     <age>20</age> 
10 </person>
　　　　<person xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

　　　　xmlns="http://www.itcast.cn/20151111"

　　　　xsi:schemaLocation="http://www.itcast.cn/20151111 1.xsd">

 

　　　　** xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

　　　　　　-- 表示xml是一个被约束文件

　　　　** xmlns="http://www.itcast.cn/20151111"

　　　　　　-- 是约束文档里面 targetNamespace

　　　　** xsi:schemaLocation="http://www.itcast.cn/20151111 1.xsd">

　　　　　　-- targetNamespace 空格  约束文档的地址路径

 

　　* <sequence>：表示元素的出现的顺序

 　　　　<all>: 元素只能出现一次

 　　　　<choice>：元素只能出现其中的一个

 　　　　maxOccurs="unbounded"： 表示元素的出现的次数

 　　　　<any></any>:表示任意元素

 

　　* 可以约束属性

　　　　* 写在复杂元素里面

　　　　***写在　</complexType>之前

　　　　－－

　　　　<attribute name="id1" type="int" use="required"></attribute>

　　　　- name: 属性名称

　　　　- type：属性类型 int stirng

　　　　- use：属性是否必须出现 required

 

　　* 复杂的schema约束

company.xsd

 1 <?xml version="1.0" encoding="UTF-8"?>
 2 <schema xmlns="http://www.w3.org/2001/XMLSchema" 
 3 targetNamespace="http://www.example.org/company" 
 4 elementFormDefault="qualified">
 5     <element name="company">
 6         <complexType>
 7             <sequence>
 8                 <element name="employee">
 9                     <complexType>
10                         <sequence>
11                             <!-- 引用任何一个元素 -->
12                             <any></any>
13                             <!-- 员工名称 -->
14                             <element name="name"></element>
15                         </sequence>
16                         <!-- 为employee元素添加属性 -->
17                         <attribute name="age" type="int"></attribute>
18                     </complexType>
19                 </element>
20             </sequence>
21         </complexType>
22     </element>
23 </schema>
　　* 引入多个schema文件，可以给每个起一个别名

company.xml

 1 <?xml version="1.0" encoding="UTF-8"?>
 2 <!-- 数据文件 引用多个Schema -->
 3 <company xmlns = "http://www.example.org/company"
 4     xmlns:dept="http://www.example.org/department"
 5     xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
 6     xsi:schemaLocation="http://www.example.org/company company.xsd     http://www.example.org/department department.xsd" >
 7     <employee age="30">
 8         <!-- 部门名称 --> 
 9    <!--想要引入部门的约束文件里面的name，使用部门的别名 detp:元素名称-->
10         <dept:name>100</dept:name>
11         <!-- 员工名称 -->
12         <name>王晓晓</name>
13     </employee>
14 </company>
department.xsd

1 <?xml version="1.0" encoding="UTF-8"?>
2 <schema xmlns="http://www.w3.org/2001/XMLSchema"
3      targetNamespace="http://www.example.org/department" 
4      elementFormDefault="qualified">
5  <!-- 部门名称 -->
6  <element name="name" type="int"></element>
7 </schema>
```

## 3、sax解析的原理（********）
```html
　　* 解析xml有两种技术 dom 和sax

 

　　* dom方式：根据xml的层级结构在内存中分配一个树形结构

　　** 把xml中标签，属性，文本封装成对象

 

　　* sax方式：事件驱动，边读边解析

　　* 在javax.xml.parsers包里面

　　　　** SAXParser

　　　　　　此类的实例可以从 SAXParserFactory.newSAXParser() 方法获得

　　　　　　- parse(File f, DefaultHandler dh)

　　　　　　　　* 两个参数

　　　　　　　　** 第一个参数：xml的路径

　　　　　　　　** 事件处理器

 

　　　　** SAXParserFactory

　　　　　　实例 newInstance() 方法得到

　　* 画图分析一下sax执行过程

 

 

　　　　* 当解析到开始标签时候，自动执行startElement方法

　　　　* 当解析到文本时候，自动执行characters方法

　　　　* 当解析到结束标签时候，自动执行endElement方法

## 4、使用jaxp的sax方式解析xml（**会写**）
　　* sax方式不能实现增删改操作，只能做查询操作

　　** 打印出整个文档




p1.xml

 1 <?xml version="1.0" encoding="UTF-8"?>
 2 <person> 
 3   <p1 id1="aaaa"> 
 4     <name>zhangsan</name>  
 5     <age>300</age>  
 6     <sex>nv</sex> 
 7   </p1>  
 8   <p1> 
 9     <name>lisi</name>  
10     <age>30</age> 
11   </p1> 
12 </person>





TestSax.java

 1 package com.li.jaxpsax;
 2 
 3 import javax.xml.parsers.ParserConfigurationException;
 4 import javax.xml.parsers.SAXParser;
 5 import javax.xml.parsers.SAXParserFactory;
 6 
 7 import org.xml.sax.Attributes;
 8 import org.xml.sax.SAXException;
 9 import org.xml.sax.helpers.DefaultHandler;
10 
11 public class TestSax {
12     public static void main(String[] args) throws Exception {
13         /*
14          * 1、创建解析器工厂
15          * 2、创建解析器
16          * 3、执行parse方法
17          * 
18          * 4、自己创建一个类，继承DefaultHandler
19          * 5、重写类里面的三个方法
20          * */
21         //创建解析器工厂
22         SAXParserFactory saxParserFactory = SAXParserFactory.newInstance();
23         //创建解析器
24         SAXParser saxParser = saxParserFactory.newSAXParser();
25         //执行parse方法
26         saxParser.parse("src/p1.xml", new MyDefault2());    
27     }    
28 }
29 class MyDefault1 extends DefaultHandler {
30 
31     @Override
32     public void startElement(String uri, String localName, String qName,
33             Attributes attributes) throws SAXException {
34         System.out.print("<"+qName+">");
35     }
36     
37     @Override
38     public void characters(char[] ch, int start, int length)
39             throws SAXException {
40         System.out.print(new String(ch,start,length));
41     }
42 
43     @Override
44     public void endElement(String uri, String localName, String qName)
45             throws SAXException {
46         System.out.print("</"+qName+">");
47     }
48 }




 *** 执行parse方法，第一个参数xml路径，第二个参数是 事件处理器

　　　　*** 创建一个类，继承事件处理器的类，

　　　　***重写里面的三个方法

　　** 获取到所有的name元素的值
　　　　** 定义一个成员变量 flag= false

　　　　** 判断开始方法是否是name元素，如果是name元素，把flag值设置成true

　　　　** 如果flag值是true，在characters方法里面打印内容

　　　　** 当执行到结束方法时候，把flag值设置成false

 　　* 获取第一个name元素的值

　　　　** 定义一个成员变量 idx=1

　　　　** 在结束方法时候，idx+1 idx++

　　　　** 想要打印出第一个name元素的值，

　　　　　　- 在characters方法里面判断，

　　　　　　-- 判断flag=true 并且 idx==1，在打印内容

 1 //实现获取所有(第一个)的name元素的值
 2 class MyDefault2 extends DefaultHandler {
 3     boolean flag = false;
 4     int idx = 1;
 5     @Override
 6     public void startElement(String uri, String localName, String qName,
 7             Attributes attributes) throws SAXException {
 8         //判断qName是否是name元素
 9         if("name".equals(qName)) {
10             flag = true;            
11         }
12     }
13     @Override
14     public void characters(char[] ch, int start, int length)
15             throws SAXException {
16         //当flag值是true时候，表示解析到name元素
17         //索引是1    实现获取第一个的name元素的值
18         if(flag == true && idx == 1) {
19             System.out.println(new String(ch,start,length));
20         }
21     }
22     
23     @Override
24     public void endElement(String uri, String localName, String qName)
25             throws SAXException {
26         //把flag设置成false，表示name元素结束
27         if("name".equals(qName)) {
28             flag = false;
29             idx++;
30         }
31     }
32 }
```
## 5、使用dom4j解析xml
　　* dom4j，是一个组织，针对xml解析，提供解析器 dom4j

 　　* dom4j不是javase的一部分，想要使用第一步需要怎么做？

　　　　*** 导入dom4j提供jar包

　　　　-- 创建一个文件夹 lib

　　　　-- 复制jar包到lib下面，

　　　　-- 右键点击jar包，build path -- add to build path

　　　　-- 看到jar包，变成奶瓶样子，表示导入成功

 　　* 得到document

　　　　SAXReader reader = new SAXReader();

　　　　Document document = reader.read(url);

　　* document的父接口是Node

　　　　* 如果在document里面找不到想要的方法，到Node里面去找

 　　* document里面的方法 getRootElement() ：获取根节点 返回的是Element

 　　* Element也是一个接口，父接口是Node

　　　　- Element和Node里面方法

　　　　** getParent()：获取父节点

　　　　** addElement：添加标签

 　　　　* element(qname)

　　　　　　** 表示获取标签下面的第一个子标签

　　　　　　** qname：标签的名称

　　　　* elements(qname)

　　　　　　** 获取标签下面是这个名称的所有子标签（一层）

　　　　　　** qname：标签名称

　　　　* elements()

　　　　　　** 获取标签下面的所有一层子标签

## 6、使用dom4j查询xml
　　* 解析是从上到下解析

　　* 查询所有name元素里面的值
　　/*

　　1、创建解析器

　　2、得到document

　　3、得到根节点  getRootElement() 返回Element

　　4、得到所有的p1标签

　　　　* elements("p1") 返回list集合

　　　　* 遍历list得到每一个p1

　　5、得到name

　　　　* 在p1下面执行 element("name")方法 返回Element

　　6、得到name里面的值

　　　　* getText方法得到值

　　*/

 1 　　//查询xml中所有name元素的值
 2     public static void selectName() throws Exception {
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 3、得到根节点
 7          * 
 8          * 4、得到p1
 9          * 5、得到p1下面的name
10          * 6、得到name里面的值
11          * */
12         //创建解析器
13         SAXReader saxReader = new SAXReader();
14         //得到document
15         Document document = saxReader.read("src/p1.xml");
16         //得到根节点
17         Element root = document.getRootElement();
18         
19         //得到p1
20         List<Element> list = root.elements("p1");
21         //遍历list
22         for (Element element : list) {
23             //element是每一个p1元素
24             //得到p1下面的name元素
25             Element name1 = element.element("name");
26             //得到name里面的值
27             String s = name1.getText();
28             System.out.println(s);
29         }
30     }
　　* 查询第一个name元素的值
　　/*

 　　* 1、创建解析器

 　　* 2、得到document

 　　* 3、得到根节点

 　　* 4、得到第一个p1元素  

　　　　** element("p1")方法 返回Element

 　　* 5、得到p1下面的name元素

　　　　** element("name")方法 返回Element

 　　* 6、得到name元素里面的值

　　　　** getText方法

 　　* */

 1 　　//获取到一个name元素里面的值
 2     public static void selectSin() throws Exception {        
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 3、得到根节点
 7          * 
 8          * 4、得到第一个p1元素
 9          * 5、得到p1下面的name元素
10          * 6、得到name元素里面的值
11          * */
12         //创建解析器
13         SAXReader saxReader = new SAXReader();
14         //得到document
15         Document document = saxReader.read("src/p1.xml");
16         //得到根节点
17         Element root = document.getRootElement();
18         //得到第一个p1
19         Element p1 = root.element("p1");
20         //得到p1下面的name元素
21         Element name1 = p1.element("name");
22         //得到name的值
23         String s1 = name1.getText();
24         System.out.println(s1);
25     }
　　* 获取第二个name元素的值
　　/*

　　 * 1、创建解析器

　　 * 2、得到document

 　　* 3、得到根节点

 　　*  4、得到所有的p1

　　　　** 返回 list集合

　　 *  5、遍历得到第二个p1

　　　　** 使用list下标得到 get方法，集合的下标从 0 开始，想要得到第二个值，下标写 1

 　　*  6、得到第二个p1下面的name

　　　　** element("name")方法 返回Element

　　 *  7、得到name的值

　　　　** getText方法

 　　* */

 1 　　//获取第二个name元素里面的值
 2     public static void selectSecond() throws Exception {    
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 3、得到根节点
 7          * 
 8          *  4、得到所有的p1
 9          *  5、遍历得到第二个p1
10          *  6、得到第二个p1下面的name
11          *  7、得到name的值
12          * */
13         //创建解析器
14         SAXReader saxReader = new SAXReader();
15         //得到document
16         Document document = saxReader.read("src/p1.xml");
17         //得到根节点
18         Element root = document.getRootElement();
19         //得到所有的p1
20         List<Element> list = root.elements("p1");
21         //得到第二个p1 list集合下标从0开始
22         Element p2 = list.get(1);
23         //得到p1下面的name
24         Element name2 = p2.element("name");
25         //得到name里面的值
26         String s2 = name2.getText();
27         System.out.println(s2);
28     }
## 7、使用dom4j实现添加操作
Dom4jUtils.java

 1 package com.li.utils;
 2 
 3 import java.io.FileOutputStream;
 4 
 5 import org.dom4j.Document;
 6 import org.dom4j.DocumentException;
 7 import org.dom4j.io.OutputFormat;
 8 import org.dom4j.io.SAXReader;
 9 import org.dom4j.io.XMLWriter;
10 
11 public class Dom4jUtils {
12     public static final String PATH = "src/p1.xml";
13     //返回document
14     public static Document getDocument(String path) {
15         try {
16             //创建解析器
17             SAXReader reader = new SAXReader();
18             //得到document
19             Document document = reader.read(path);
20             return document;
21         } catch (Exception e) {
22             e.printStackTrace();
23         }
24         return null;
25     }
26     
27     //回写xml的方法
28     public static void xmlWriters(String path,Document document) {
29         try {
30             OutputFormat format = OutputFormat.createPrettyPrint();
31             XMLWriter xmlWriter = new XMLWriter(new FileOutputStream(path), format);
32             xmlWriter.write(document);
33             xmlWriter.close();
34         }catch(Exception e) {
35             e.printStackTrace();
36         }
37     }
38 }
　　* 在第一个p1标签末尾添加一个元素 <sex>nv</sex>
　　* 步骤

　　/*

 　　* 1、创建解析器

 　　* 2、得到document

 　　* 3、得到根节点

 　　* 4、获取到第一个p1

　　　　* 使用element方法

 　　* 5、在p1下面添加元素

　　　　* 在p1上面直接使用 addElement("标签名称")方法 返回一个Element

 　　* 6、在添加完成之后的元素下面添加文本

　　　　*在sex上直接使用 setText("文本内容")方法

 　　* 7、回写xml

　　　　* 格式化 OutputFormat,使用 createPrettyPrint方法，表示一个漂亮的格式

　　　　* 使用类XMLWriter 直接new 这个类 ，传递两个参数

　　　　　　*** 第一个参数是xml文件路径 new FileOutputStream("路径")

　　　　　　*** 第二个参数是格式化类的值

　　 * */

 1 　　//在第一个p1标签末尾添加一个元素 <sex>nv</sex>
 2     public static void addSex() throws Exception {
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 3、得到根节点
 7          * 
 8          * 4、获取到第一个p1
 9          * 5、在p1下面添加元素
10          * 6、在添加完成之后的元素下面添加文本
11          * 
12          * 7、回写xml
13          * */
14         //创建解析器
15 //        SAXReader reader = new SAXReader();
16         //得到document
17 //        Document document = reader.read("src/p1.xml");
18         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
19         //得到根节点
20         Element root = document.getRootElement();
21         //得到第一个p1元素
22         Element p1 = root.element("p1");
23         //在p1下面直接添加元素
24         Element sex1 = p1.addElement("sex");
25         //在sex下面添加文本
26         sex1.setText("nv");
27         
28         //回写xml
29 //        OutputFormat format = OutputFormat.createPrettyPrint(); //可以有缩进的效果
30 ////        OutputFormat format = OutputFormat.createCompactFormat();    //压缩
31 //        XMLWriter  xmlWriter = new XMLWriter(new FileOutputStream("src/p1.xml"), format);
32 //        xmlWriter.write(document);
33 //        xmlWriter.close();
34         Dom4jUtils.xmlWriters(Dom4jUtils.PATH, document);
35     }
## 8、使用dom4j实现在特定位置添加元素
```html
　　* 在第一个p1下面的age标签之前添加 <school>ecit.edu.cn</schlool>
　　* 步骤

  　/*

 　　* 1、创建解析器

 　　* 2、得到document

 　　* 3、得到根节点

 　　* 4、获取到第一个p1

 　　* 5、获取p1下面的所有的元素

　　 　　　** elements()方法 返回 list集合

　　 　　　** 使用list里面的方法，在特定位置添加元素

　　 　　　** 首先创建元素 在元素下面创建文本

　　　　　　　　- 使用DocumentHelper类方法createElement创建标签

　　　　　　　　- 把文本添加到标签下面 使用 setText("文本内容")方法

 　　      *** list集合里面的 add(int index, E element)

 　　      - 第一个参数是 位置 下标，从0开始

 　　      - 第二个参数是 要添加的元素

 　　* 6、回写xml

 　　* */

 1     //在第一个p1下面的age标签之前添加 <school>ecit.edu.cn</schlool>
 2     public static void addAgeBefore() throws Exception {
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 3、得到根节点
 7          * 4、获取到第一个p1
 8          * 
 9          * 5、获取p1下面的所有的元素
10          *         ** elements()方法 返回 list集合
11          *      ** 使用list里面的方法，在特定位置添加元素
12          *      ** 创建元素 在元素下面创建文本
13          *          *** add(int index, E element)
14          *              - 第一个参数是 位置 下标，从0开始
15          *              - 第二个参数是 要添加的元素
16          * 6、回写xml
17          * */
18         //创建解析器
19 //        SAXReader saxReader = new SAXReader();
20         //得到document
21 //        Document document = saxReader.read("src/p1.xml");
22         
23         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
24         //得到根节点
25         Element root = document.getRootElement();
26         //获取到第一个p1
27         Element p1 = root.element("p1");
28         //获取p1下面的所有元素
29         List<Element> list = p1.elements();
30         //创建元素 使用
31         Element school = DocumentHelper.createElement("school");
32         //在school下面创建文本
33         school.setText("ecit");    
34         //在特定位置添加
35         list.add(1, school);
36         //回写xml
37         /*OutputFormat format = OutputFormat.createPrettyPrint();
38         XMLWriter xmlWriter = new XMLWriter(new FileOutputStream("src/p1.xml"), format);
39         xmlWriter.write(document);
40         xmlWriter.close();*/
41         Dom4jUtils.xmlWriters(Dom4jUtils.PATH, document);
42     }
　　** 可以对得到document的操作和 回写xml的操作，封装成方法

　　** 也可以把传递的文件路径，封装成一个常量

　　*** 好处：可以提高开发速度，可以提交代码可维护性

　　　　- 比如想要修改文件路径（名称），这个时候只需要修改常量的值就可以了，其他代码不需要做任何改变
```
## 9、使用dom4j实现修改节点的操作
```html
　　* 修改第一个p1下面的age元素的值 <age>30</age>
　　* 步骤

　　/*

 　　* 1、得到document

 　　* 2、得到根节点，然后再得到第一个p1元素

 　　* 3、得到第一个p1下面的age

　　　　element("")方法

 　　* 4、修改值是 30

 　　　　** 使用setText("文本内容")方法

 　　* 5、回写xml

　　 * */

 1     //修改第一个p1下面的age元素的值 <age>30</age>
 2     public static void modifyAge() throws Exception {
 3         /*
 4          * 1、得到document
 5          * 2、得到根节点，然后再得到第一个p1元素
 6          * 3、得到第一个p1下面的age
 7          * 4、修改值是 30
 8          * 
 9          * 5、回写xml
10          * 
11          * */
12         //得到document
13         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
14         //得到第一个根节点
15         Element root = document.getRootElement();
16         //得到第一个p1
17         Element p1 = root.element("p1");
18         //得到p1下面的age
19         Element age = p1.element("age");
20         //修改age的值
21         age.setText("30");
22         //回写xml
23         Dom4jUtils.xmlWriters(Dom4jUtils.PATH, document);
24     }    
```
## 10、使用dom4j实现删除节点的操作
```html
　　* 删除第一个p1下面的<school>ecit</school>元素
　　* 步骤

　　/*

　　 * 1、得到document

 　　* 2、得到根节点

 　　* 3、得到第一个p1标签

 　　* 4、得到第一个p1下面的school元素

 　　* 5、删除（使用p1删除school）

　　　　* 得到school的父节点

　　　　　　- 第一种直接得到p1

　　　　　　- 使用方法 getParent方法得到

　　　　* 删除操作

　　　　　　- 在p1上面执行remove方法删除节点

 　　* 6、回写xml

　　* */

 1     //删除第一个p1下面的<school>ecit</school>元素
 2     public static void delSch() throws Exception {
 3         /*
 4          * 1、得到document
 5          * 2、得到根节点
 6          * 3、得到第一个p1标签
 7          * 4、得到第一个p1下面的school元素
 8          * 5、删除（使用p1删除school）
 9          * 
10          * 6、回写xml
11          * */
12         //得到document    ctrl shift o 快速导包
13         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
14         //得到根节点
15         Element root = document.getRootElement();
16         //得到第一个p1元素
17         Element p1 = root.element("p1");
18         //得到p1下面的school标签
19         Element sch = p1.element("school");
20         //删除school元素
21         //通过父节点删除 
22         //获取父节点的方法
23         //sch.getParent(); //获取到school的父节点p1
24         p1.remove(sch);
25         //回写xml
26         Dom4jUtils.xmlWriters(Dom4jUtils.PATH, document);
27     }
```
## 11、使用dom4j获取属性的操作
```html
　　* 获取第一个p1里面的属性id1的值
　　* 步骤

　　/*

 　　* 1、得到document

 　　* 2、得到根节点

 　　* 3、得到第一个p1元素

　　 * 4、得到p1里面的属性值

　　　　- p1.attributeValue("id1");

　　　　- 在p1上面执行这个方法，里面的参数是属性名称

　　* */

 1     //获取第一个p1里面的属性id1的值
 2     public static void getValues() throws Exception {
 3         /*
 4          * 1、得到document
 5          * 2、得到根节点
 6          * 3、得到第一个p1元素
 7          * 4、得到p1里面的属性值
 8          * */
 9         //得到document
10         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
11         //得到根节点
12         Element root = document.getRootElement();
13         //得到第一个p1元素
14         Element p1 = root.element("p1");
15         //得到p1里面的属性值
16         String value = p1.attributeValue("id1");
17         System.out.println(value);
18     }
```
## 12、使用dom4j支持xpath的操作
```html
　　* 可以直接获取到某个元素

查看XPath.chm得知：

　　* 第一种形式

　　　　/AAA/DDD/BBB： 表示一层一层的，AAA下面 DDD下面的BBB

　　* 第二种形式

　　　　//BBB： 表示和这个名称相同，表示只要名称是BBB，都得到

　　* 第三种形式

　　　　/*: 所有元素

　　* 第四种形式

　　　　**　BBB[1]：　表示第一个BBB元素

　　　　××　BBB[last()]：表示最后一个BBB元素

　　* 第五种形式

　　　　** //BBB[@id]： 表示只要BBB元素上面有id属性，都得到

　　* 第六种形式

　　　　** //BBB[@id='b1'] 表示元素名称是BBB,在BBB上面有id属性，并且id的属性值是b1
```
## 13、使用dom4j支持xpath具体操作
```html
　　** 默认的情况下，dom4j不支持xpath

　　** 如果想要在dom4j里面是有xpath

　　　　* 第一步需要，引入支持xpath的jar包，使用 jaxen-1.1-beta-6.jar

　　　　** 需要把jar包导入到项目中

　　** 在dom4j里面提供了两个方法，用来支持xpath

　　　　*** selectNodes("xpath表达式")

　　　　　　- 获取多个节点

　　　　*** selectSingleNode("xpath表达式")

　　　　　　- 获取一个节点

　　** 使用xpath实现：查询xml中所有name元素的值
　　　　** 所有name元素的xpath表示： //name

　　　　** 使用selectNodes("//name");

　　　　** 代码和步骤

 1     //查询xml中所有name元素的值
 2     public static void test1() throws Exception {
 3         /*
 4          * 1、得到document
 5          * 2、直接使用selectNodes("//name")方法得到所有的name元素
 6          * */
 7         //得到document
 8         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
 9         //使用selectNodes("//name")方法得到所有的name元素
10         List<Node> list = document.selectNodes("//name");
11         //遍历list集合
12         for (Node node : list) {
13             //node是每一个name元素
14             //得到name元素里面的值
15             String s = node.getText();
16             System.out.println(s);
17         }
18     }
　　** 使用xpath实现：获取第一个p1下面的name的值
　　　　* //p1[@id1='aaaa']/name

　　　　* 使用到 selectSingleNode("//p1[@id1='aaaa']/name")

　　　　* 步骤和代码

 1     //使用xpath实现：获取第一个p1下面的name的值
 2     public static void test2() throws Exception {
 3         /*
 4          * 1、得到document
 5          * 2、直接使用selectSingleNode方法实现
 6          *     - xpath ： //p1[@id1='aaaa']/name
 7          * */
 8         //得到document
 9         Document document = Dom4jUtils.getDocument(Dom4jUtils.PATH);
10         //直接使用selectSingleNode方法实现
11         Node name1 = document.selectSingleNode("//p1[@id1='aaaa']/name"); //name的元素
12         //得到name里面的值
13         String s1 = name1.getText();
14         System.out.println(s1);
15     }
```
## 14、实现简单的学生管理系统
```html
　　** 使用xml当做数据，存储学生信息

　　** 创建一个xml文件，写一些学生信息

student.xml

 1 <?xml version="1.0" encoding="UTF-8"?>
 2 <sudent> 
 3     <stu> 
 4         <id>100</id>  
 5         <name>zhangsan</name>  
 6             <age>20</age> 
 7       </stu>  
 8       <stu> 
 9             <id>101</id>  
10             <name>lisi</name>  
11             <age>30</age> 
12       </stu> 
13 </sudent>
　　** 增加操作
　　　　/*

　　　　 * 1、创建解析器

 　　　　* 2、得到document

 　　　　* 3、获取到根节点

 　　　　* 4、在根节点上面创建stu标签

 　　　　* 5、在stu标签上面依次添加id name age

　　　　　　** addElement方法添加

 　　　　* 6、在id name age上面依次添加值

　　　　　　** setText方法

 　　　　* 7、回写xml

 　　　　* */

Student.java

 1 package com.li.vo;
 2 public class Student {
 3     private String id;
 4     private String name;
 5     private String age;
 6     
 7     public String getId() {
 8         return id;
 9     }
10     public void setId(String id) {
11         this.id = id;
12     }
13     public String getName() {
14         return name;
15     }
16     public void setName(String name) {
17         this.name = name;
18     }
19     public String getAge() {
20         return age;
21     }
22     public void setAge(String age) {
23         this.age = age;
24     }
25     @Override
26     public String toString() {
27         return "Student [id=" + id + ", name=" + name + ", age=" + age + "]";
28     }
29 }
StuService.java

 1 import java.util.List;
 2 
 3 import org.dom4j.Document;
 4 import org.dom4j.DocumentException;
 5 import org.dom4j.Element;
 6 import org.dom4j.Node;
 7 import org.dom4j.io.OutputFormat;
 8 import org.dom4j.io.SAXReader;
 9 import org.dom4j.io.XMLWriter;
10 
11 import cn.itcast.vo.Student;
12 
13 public class StuService {
14     //增加
15     public static void addStu(Student student) throws Exception {
16         /*
17          * 1、创建解析器
18          * 2、得到document
19          * 3、获取到根节点
20          * 4、在根节点上面创建stu标签
21          * 5、在stu标签上面依次添加id name age
22          * 6、在id name age上面依次添加值
23          * 
24          * 7、回写xml
25          * */
26         //创建解析器
27         SAXReader saxReader = new SAXReader();
28         //得到document
29         Document document = saxReader.read("src/student.xml");
30         //得到根节点
31         Element root = document.getRootElement();
32         //在根节点上面添加stu
33         Element stu = root.addElement("stu");
34         //在stu标签上面依次添加id name age标签
35         Element id1 = stu.addElement("id");
36         Element name1 = stu.addElement("name");
37         Element age1 = stu.addElement("age");
38         //在id name age上面依次添加值
39         id1.setText(student.getId());
40         name1.setText(student.getName());
41         age1.setText(student.getAge());
42         //回写xml
43         OutputFormat format = OutputFormat.createPrettyPrint();
44         XMLWriter xmlWriter = new XMLWriter(new FileOutputStream("src/student.xml"), format);
45         xmlWriter.write(document);
46         xmlWriter.close();
47     }
48 }
TestStu.java

1     //测试添加方法
2     public static void testAdd() throws Exception {
3         //设置值
4         Student stu = new Student();
5         stu.setId("103");
6         stu.setName("wangwu");
7         stu.setAge("40");
8         StuService.addStu(stu);
9     }
　　** 删除操作（根据id删除）
　　　　/*

 　　　　* 1、创建解析器

 　　　　* 2、得到document

 　　　　* 3、获取到所有的id

 　　　　　　* 使用xpath //id 返回 list集合

 　　　　* 4、遍历list集合

 　　　　* 5、判断集合里面的id和传递的id是否相同

 　　　　* 6、如果相同，把id所在的stu删除

 　　　　* */

StuService.java

 1     //删除 根据学生的id删除
 2     public static void delStu(String id) throws Exception {
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 
 7          * 3、获取到所有的id    
 8          *     使用xpath //id 返回 list集合
 9          * 4、遍历list集合
10          * 5、判断集合里面的id和传递的id是否相同
11          * 6、如果相同，把id所在的stu删除
12          * 
13          * */
14         //创建解析器
15         SAXReader saxReader = new SAXReader();
16         //得到document
17         Document document = saxReader.read("src/student.xml");
18         //获取所有的id  xpath: //id
19         List<Node> list = document.selectNodes("//id");
20         //遍历list集合
21         for (Node node : list) { //node是每一个id的元素
22             //得到id的值
23             String idv = node.getText();
24             //判断idv和传递的id是否相同
25             if(idv.equals(id)) { //id相同
26                 //得到stu节点
27                 Element stu = node.getParent();
28                 //获取stu的父节点
29                 Element student = stu.getParent();
30                 //删除stu
31                 student.remove(stu);
32             }        
33         }
34         //回写xml
35         OutputFormat format = OutputFormat.createPrettyPrint();
36         XMLWriter xmlWriter = new XMLWriter(new FileOutputStream("src/student.xml"), format);
37         xmlWriter.write(document);
38         xmlWriter.close();
39     }
TestStu.java

    //测试删除方法
    public static void testDel() throws Exception {
        StuService.delStu("103");        
    }
　　** 查询操作（根据id查询）
　　　　/*

 　　　　* 1、创建解析器

 　　　　* 2、得到document

 　　　　* 3、获取到所有的id

 　　　　* 4、返回的是list集合，遍历list集合

 　　　　* 5、得到每一个id的节点

 　　　　* 6、id节点的值

 　　　　* 7、判断id的值和传递的id值是否相同

 　　　　* 8、如果相同，先获取到id的父节点stu

 　　　　* 9、通过stu获取到name age值

 　　　　　　** 把这些值封装到一个对象里面 返回对象

 　　　　* */

StuService.java

 1     //查询 根据id查询学生信息
 2     public static Student getStu(String id) throws Exception {
 3         /*
 4          * 1、创建解析器
 5          * 2、得到document
 6          * 
 7          * 3、获取到所有的id
 8          * 4、返回的是list集合，遍历list集合
 9          * 5、得到每一个id的节点
10          * 6、id节点的值
11          * 7、判断id的值和传递的id值是否相同
12          * 8、如果相同，先获取到id的父节点stu
13          * 9、通过stu获取到name age值
14          * 
15          * */
16         //创建解析器
17         SAXReader saxReader = new SAXReader();
18         //得到document
19         Document document = saxReader.read("src/student.xml");
20         //获取所有的id
21         List<Node> list = document.selectNodes("//id");
22         //创建student对象
23         Student student = new Student();
24         //遍历list
25         for (Node node : list) { //node是每一个id节点
26             //得到id节点的值
27             String idv = node.getText();
28             //判断id是否相同
29             if(idv.equals(id)) { 
30                 //得到id的父节点 stu
31                 Element stu = node.getParent();
32                 //通过stu获取name和age
33                 String namev = stu.element("name").getText();
34                 String agev = stu.element("age").getText();
35                 student.setId(idv);
36                 student.setName(namev);
37                 student.setAge(agev);
38             }
39         }
40         return student;
41     }
TestStu.java

 

    //测试查询方法
    public static void testSelect() throws Exception {
        Student stu = StuService.getStu("100");
        System.out.println(stu.toString());
    }
```