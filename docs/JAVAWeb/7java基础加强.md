# 7java基础加强
```html
1、myeclipse安装和使用(**)
2、debug调试模式(**)

　　- F6: 单步执行

　　- F8：结束断点，后面有断点到下一个断点

3、myeclipse快捷键(**)

4、junit单元测试(**)

　　@Test

5、泛型在集合上的应用(********)

6、自定义泛型方法和泛型类(**)

　　重点掌握泛型方法（*******）

　　两个练习（********）

7、枚举的由来（了解）

8、特殊的枚举（了解）

=======================================================

9、枚举的api（了解）

10、静态导入（了解）

11、自动拆装箱（*******）

　　装箱和拆箱

　　在jdk1.4里面如何实现装箱和拆箱

　　jdk的向下兼容概念

12、增加for循环（*******）

　　语法格式

　　增强for应用场景

　　增强for出现的目的：替代迭代器

　　增强for循环底层的实现是迭代器

13、可变参数（*******）

　　写法 int...nums

　　可变参数应用场景

　　逻辑相同，传递参数不同

　　注意的几个地方

14、反射的原理（***理解****）

15、反射的使用（***会写****）

　　(1) 获取类中的构造方法(无参数)

　　(2) 获取类中的构造方法(参数)

　　(3) 获取类中的属性

　　(4) 获取普通方法
```

## 1、myeclipse的安装和使用
```html
　　eclipse：是一个免费的开发工具

　　myeclipse：是一个收费的插件，破解myeclipse，

　　　　安装目录的要求： 不能有中文和空格

　　　　安装完成之后，选择一个工作空间 ，这个工作空间不能有中文和空格

　　破解myeclipse

　　　　运行run.bat文件，但是运行之前，必须要安装jdk，通过配置环境变量

　　myeclipse的使用

　　创建一个工程

　　　　- 类型 java project  web project

　　　　- 选择依赖的jdk，可以使用myeclipse自带的jdk，或者可以使用安装的jdk

　　创建包 package

　　　　- cn.itcast.test  XX.XX.XX

　　在包里面创建一个类

　　　　- 类的命名规范：

　　　　　　首字母要大写

　　　　　　　　比如： TestDemo1  UserManager

　　在类里面创建方法

　　　　public void test1(参数列表) {

　　　　　　方法体或者返回值;

　　　　}

　　　　- 方法的命名规范

　　　　　　首字母小写  比如：addNum()

　　　　定义变量

　　　　　　- 变量的命名规范

　　　　　　首字母小写，第二个单词的首字母要大写 ，比如 userName

　　　　这些命名还有一种方式

　　　　　　使用汉语拼音命名 yonghuming mima

　　　　　　不能把汉语拼音和英文字母混合使用

　　　　　　　　userMing

　　　　命名的最基本的原则：看到名字知道是什么含义

　　　　代码需要有缩进

　　　　运行程序  Run As >> java application

　　　　　　　　  debug as  java application
```
## 2、debug的调试模式（断点调试模式）
```html
　　使用这种模式，调试程序（看到程序里面数据的变化）

　　使用debug第一步需要设置一个断点（让程序运行停止在这一行）

　　　　- 显示出来行号

　　　　- 双击左边，出现一个圆点，表示设置了一个断点

　　使用debug as方式，运行程序

　　　　- 提示是否进入到调试界面，yes

　　　　- 在断点那一个，有一个绿色条，表示程序停止在这一行，没有向下运行

　　可以让程序向下执行，

　　　　- 使用 step over 快捷键是 F6（单步执行）

　　　　- resume F8：表示调试结束，直接向下运行

　　　　　　比如当前的断点之后还有断点，跳到下一个断点，

　　　　　　如果当前断点后面没有断点，程序直接运行结束

　　debug另外一个用途

　　　　查看程序的源代码

　　　　F5 step into：进入到方法

　　　　F7 step return :返回
```
## 3、myeclipse的快捷键的使用
```html
　　代码提示 alt /

 代码修复 ctrl 1

　  快速导包 ctrl shift o

　　单行注释 ctrl /

　　去掉单行注释 ctrl /

　　多行注释 ctrl shift /

　　去掉多行注释 ctrl shift \

　　删除行 ctrl d

代码的格式化 ctrl shift f

查找 ctrl f

ctrl + o 显示当前类中所有方法的列表
```
## 4、junit的使用
```html
　　单元测试

　　测试对象是 是一个类中的方法

　　juint不是javase的一部分，想要使用导入jar包

　　　　但是，在myeclipse中自带了junit的jar包

　　首先junit版本 3.x 4.x

　　　　单元测试方法时候，方法命名规则 public void 方法名() {}

　　使用注解方式运行测试方法, 在方法的上面

　　　　@Test：表示方法进行单元测试

public class TestJunit {

　　　　public void testAdd(int a,int b) {

　　　　　　System.out.println(a+b);

　　　　}

}

　　　　---  @Test

　　　　public void testAdd1() {

　　　　　　TestJunit test01 = new TestJunit();

　　　　　　　　test01.testAdd(2, 3);

　　　　}

　　　　- 选中方法名称，右键运行 点击run as --- junit  test

　　　　- 当出现绿色条，表示方法测试通过

　　　　- 当出现了红棕色条，表示方法测试不通过

 　　　　--- 要运行类中的多个测试方法，点击类中的其他位置，run as --- junit  test

 　　　　@Ignore ：表示这个方法不进行单元测试

  　　　　@Before: 在每个方法执行运行

　　　　 @After：在每个方法之后运行

 

　　断言（了解）

　　- Assert.assertEquals("测试期望的值", "方法运行的实际的值")

    @Test
    public void test02() {
        int a = 3;
        int b = 5;
        int sum = a+b;
        //使用断言
        //Assert.assertEquals("测试期望的值", "方法运行的实际的值")
        Assert.assertEquals(80, sum);
    }
　　jdk5.0新特性

　　jdk 1.1  1.2   1.4   5.0

 　　泛型、枚举、静态导入、自动拆装箱、增强for、可变参数、反射
```
# 5、泛型的简介
```java
　　为什么要使用泛型？
　　- 一般使用在集合上

　　【比如现在把一个字符串类型的值放入到集合里面，这个时候，这个值放入到集合之后，失去本身的类型，只能是object类型，

　　这个时候，比如想要对这个值进行类型转换，很容易出现类型转换错误，怎么解决这个问题，可以使用泛型来解决】

 

　　在集合上如何使用泛型

　　　　- 常用集合 list  set  map

　　　　- 泛型语法 集合 <String>  比如 List<String>

　　在泛型里面写是一个对象，String ,不能写基本的数据类型 比如int ()

　　需要写基本的数据类型对应的包装类

　　　　byte -- Byte

　　　　short -- Short

　　　　int -- Integer

 　　　 long -- Long

　　　　float -- Float

　　　　double -- Double

　　　　char   -- Character

　　　　boolean -- Boolean

　　在list上使用泛型

　　list的三种实现 ArrayList  linkedList  Vector

　　代码：

    //泛型在list上的使用
    @Test
    public void testList() {
        List<String> list = new ArrayList<String>();
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        //遍历list集合 有几种方式  三种
        //普通for循环  迭代器  增强for

        //普通for循环
        for(int i=0; i<list.size(); i++) {
            String s = list.get(i);
            System.out.println(s);
        }
        System.out.println("=================");
        //使用增强for
        for (String s1 : list) {
            System.out.println(s1);
        }
        System.out.println("=================");
        //使用迭代器遍历
        Iterator<String> it = list.iterator();
        while(it.hasNext()) {
            System.out.println(it.next());
        }
    }
　　　　作业1： ArrayList  linkedList  Vector 这三个区别



　　在set上使用泛型
　　代码：

    //泛型使用set集合上
    @Test
    public void testSet() {
        Set<String> set = new HashSet<String>();
        set.add("www");
        set.add("qqq");
        set.add("zzz");
        //set.add("qqq");    //无序元素不重复
        //遍历set 有几种方式  两种
        //迭代器  增强for
        //使用增强for遍历
        for (String s2 : set) {
            System.out.println(s2);
        }
        System.out.println("=================");
        //使用迭代器遍历
        Iterator<String> it1 = set.iterator();
        while(it1.hasNext()) {
            System.out.println(it1.next());
        }
    }
　　在map上面使用泛型
　　- map结构：key-valu形式

　　代码：

    //在map上使用泛型
    @Test
    public void testMap() {
        Map<String,String> map = new HashMap<String,String>();
        map.put("aaa", "111");
        map.put("bbb", "222");
        map.put("ccc", "333");

        //遍历map 有几种遍历方式 两种
        // 1、获取所有的key，通过key得到value 使用get方法
        // 2、获取key和value的关系
        //使用第一种方式遍历
        //获取所有的key
        Set<String> sets = map.keySet();
        //遍历所有key返回的set
        for (String key : sets) {
            //通过key得到value
            String value = map.get(key);
            System.out.println(key+" : "+value);
        }
      
        System.out.println("==============");

        //得到key和value的关系
        Set<Entry<String, String>> sets1 = map.entrySet();
        //遍历sets1
        for (Entry<String, String> entry : sets1) {
            //entry是key和value关系
            String keyv = entry.getKey();
            String valuev = entry.getValue();
            System.out.println(keyv+" : "+valuev);
        }
    }
```
## 6、泛型使用在方法上
```java
　　定义一个数组，实现指定位置上数组元素的交换

 1 public class TestDemo03 {
 2     public static void main(String[] args) {
 3         //创建一个数组 实现11和13位置交换
 4     　　Integer[] arr1 = {10,11,12,13,14};
//这里为什么使用integer而不是int类型
 5     　　System.out.println(Arrays.toString(arr1));

 6     　　swap1(arr1,1,3);

 7     　　System.out.println(Arrays.toString(arr1));
 8         {10,13,12,11,14}

 9     　　System.out.println("=========================");


10     　　//创建一个string类型的数组 实现 bb和dd位置交换
11     　　String[] arr2 = {"aa","bb","cc","dd","ff"};
12    　　 System.out.println(Arrays.toString(arr2));
13    　　 swap1(arr2,1,3);
14     　　System.out.println(Arrays.toString(arr2));
15     }


16     private static void swap1(String[] arr2, int i, int j) {
17    　　 String temp1 = arr2[i];
18     　　arr2[i] = arr2[j];
19    　　 arr2[j] = temp1;
20     }
21     private static void swap1(int[] arr1, int i, int j) {
   // 为什么这里输入的是int类型的
22     　　//定义一个中间变量
23     　　int temp = arr1[i];
24     　　arr1[i] = arr1[j];
25     　　arr1[j] = temp;
26     }
27 }
　　方法逻辑相同，只是数据类型不同，这个时候使用泛型方法

    /*
      使用泛型方法 需要定义一个类型 使用大写字母表示 T :这个T表示任意的类型
      写在返回值之前 void之前 <T>
      =======表示定义了一个类型 这个类型是 T
      在下面就可以使用这个类型了  T
      */
    
    public static <T> void swap1(T[] arr ,int a,int b) {
        T temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }





 作业2： 实现一个泛型方法，接受任意一个数组，颠倒数组中所有元素
public <T> void reverse(T arr[]){
		
		int start = 0;
		int end = arr.length-1;
		
		while(true){
			
			if(start>=end){
				break;
			}
			
			T temp = arr[start];
			arr[start] = arr[end];
			arr[end] = temp;
			
			start++;
			end--;
		}
	}


```
## 7、泛型在类上的使用（了解）
```html
　　在一个类上定义一个类型，这个类型可以在类里面直接使用

 

public class TestDemo04<T> {
    //在类里面可以直接使用T的类型
    T aa;
    public void test11(T bb) {}
    //写一个静态方法 在类上面定义的泛型，不能再静态方法里面使用
    public static <A> void test12(A cc) {}
}
 ```

## 8、枚举的简介

- 什么是枚举？
```java
　　　　需要在一定的范围内取值，这个值只能是这个范围内中的任意一个。

　　　　现实场景：交通信号灯，有三种颜色，但是每次只能亮三种颜色里面的任意一个

 

public class TestEnum1 {
    //传统的方式
    private int color;
    
    public void test() {
        this.color = 1000;//Color1.RED;
    }
}
class Color1 {
    public static final int RED = 1;
    public static final int GREEN = 2;
    public static final int YELLOW = 3;
}
 

public class TestEnum1 {
    //第二种方式
    private Color2 color1;
    
    public void test() {
        this.color1 = Color2.RED;
    }
}

class Color2 {
    //构造方法私有化
    private Color2(String name){}
    public static final Color2 RED = new Color2("");
    public static final Color2 GREEN = new Color2("");
    public static final Color2 YELLOW = new Color2("");
}

public class TestEnum1 {    
    //第三种方式 jdk5.0新特性 使用枚举
    private Color3 color3;
    
    public void test() {
        this.color3 = Color3.GREEN;
    }
}
//使用枚举实现
enum Color3 {
    RED,GREEN,YELLOW;
}
 使用一个关键字 enum

　　enum Color3 {

　　　　RED,GREEN,YELLOW;

　　}

　　枚举的构造方法也是私有的

 

　　特殊枚举的操作（了解）

　　在枚举类里面有构造方法

　　　　构造方法里面有参数，需要在每个实例上面都写参数

public class TestEnum2 {
}
enum Color11 {
    RED("red"),GREEN("green"),YELLOW("yellow") ;
    private Color11(String name) {}
}
　　在枚举类里面有抽象方法

　　　　在枚举的每个实例里面都重写这个抽象方法

 

 1 public class TestEnum2 {
 2 }
 3 enum Color11 {
 4     RED("red"){
 5         @Override
 6         public void print1() {
 7             System.out.println("red");        
 8         }
 9     },GREEN("green"){
10         @Override
11         public void print1() {
12             System.out.println("green");    
13         }
14     },YELLOW("yellow") {
15         @Override
16         public void print1() {
17             System.out.println("yellow");    
18         }
19     };
20     private Color11(String name) {}
21     //抽象方法
22     //当在枚举里面写了抽象方法之后，需要在每个实例上面都实现抽象方法
23     public abstract void print1();
24 }
```
## 9、枚举的api的操作
```java
　　name() ：返回枚举的名称

　　ordinal() ：枚举的下标，下标从0开始

　　valueOf(Class<T> enumType, String name) ：得到枚举的对象

 

　　还有两个方法，但是这两个方法不在api里面，编译的时候生成两个方法

　　valueof(String name)  转换枚举对象

　　values()  获得所有枚举对象数组

 

　　练习：枚举对象、枚举对象下标、枚举对象名称表示之间的转换

　　- //知道枚举的对象，得到枚举名称和下标

创建枚举类：

enum Color100 {
    RED,GREEN,YELLOW;
}
    @Test
    public void test1() {
        //得到枚举对象
        Color100 c100 = Color100.RED;
        //枚举名称
        String name = c100.name();
        //枚举的下标
        int idx = c100.ordinal();
        System.out.println(name+" "+idx);
    }
结果：

RED 0

　　- //知道枚举的名称，得到枚举的对象和下标

    @Test
    public void test2() {
        String name1 = "GREEN";
        //得到对象
        Color100 c1 = Color100.valueOf(name1);
        //枚举下标
        int idx1 = c1.ordinal();
        System.out.println(idx1);
    }
结果：

1

　　- //知道枚举的下标，得到枚举的对象和名称

    @Test
    public void test3() {
        int idx2 = 2;
        //得到枚举的对象
        Color100[] cs = Color100.values();
        //根据下标得到对象
        Color100 c12 = cs[idx2];
        //得到枚举的名称
        String name = c12.name();
        System.out.println(name);
    }
结果：

YELLOW
```
## 10、静态导入(了解)
```java
　　可以在代码里面，直接使用静态导入方式，导入静态方法或者常量

　　  import static XX.XX.xxx

　　  import static java.lang.System.out;

import static java.util.Arrays.sort;

 1 package com.li.test05;
 2 /*
 3   演示静态导入
 4   @author yejing
 5 */
 6 import static java.lang.System.out;
 7 import static java.util.Arrays.sort;
 8 import static java.util.Arrays.toString;
 9 public class TestDemo1 {
10     public static void main(String[] args) {
11         out.println("hello");
12         
13         int[] arr1 = {10,1,3,20,15};
14         sort(arr1);
15         //= System.out.println(toString(arr1));
16     }
17 }
结果：

hello

[1,3,10,15,20]

 

　　比如现在实现一个计算器 ，方法都在Math类里面，不用写Math.
```
## 11、自动拆装箱
```java

　　装箱

　　　　把基本的数据类型转换成包装类

　　拆箱

　　　　把包装类转换成基本的数据类型

 

　　//自动装箱，i是包装类，10是基本数据类型

　　Integer i = 10;

 

　　//自动拆箱，m是基本数据类型，i是包装类型

　　int m = i;

 

　　在jdk1.4 里面如何实现装箱和拆箱

　　- //在jdk1.4里面实现拆装箱

　　public void test1() {

　　　　//装箱

　　　　Integer m = new Integer(10);

　　　　//拆箱

　　　　int a = m.intValue();//intvalue是将m这个integer类转换为int

　　}

　　jdk是会向下兼容

　　- 比如 jdk1.4 里面写的代码，这个时候到5.0  里面也可以运行

 

　　练习：向下兼容

　　== 执行的结果是会调用  doSomething(double m)

　　== 首先在jdk 1.4 里面肯定调用这个方法，如果调用下面的方法，需要类型转换，但是jdk 1.4 不能实现自动拆装箱

　　== 由于jdk是向下兼容，所以，在jdk 1.4 调用这个方法，在jdk 5.0 里面还是会调用这个方法

public class TestDemo2 {
    public static void main(String[] args) {
        doSomething(10);
    }
    public static void doSomething(double m) {
        System.out.println("double......");
    }
    public static void doSomething(Integer a){
        System.out.println("integer.....");
    }
}
　　记住：八种基本的数据类型对应的包装类

　　　　int --- Integer

　　　　char--- Character
```
## 12、增强for循环（*****）
```java
　　语法 for(遍历出来的值 : 要遍历的集合) {}

　　- for(String s : list) {

　　　　System.out.println(s);

　　}

　　使用场景： 数组；实现Iterable接口的集合 可以使用增强for循环

 

　　在集合上使用增强for循环遍历

　　　　list  set 实现了Iterator接口，所以可以使用增强for循环

　　　　map不能使用增强for循环，没有实现Iterator接口，所以不能使用增强for循环

 1 public class TestDemo1 {
 2     public static void main(String[] args) {
 3         //创建list
 4         List<String> list = new ArrayList<String>();
 5         list.add("aaa");
 6         list.add("bbb");
 7         //使用增强for循环
 8         for(String s : list) {
 9             System.out.println(s);
10         }
11         System.out.println("==============================");
12         //使用迭代器实现
13         Iterator<String> it = list.iterator();
14         while(it.hasNext()) {
15             System.out.println(it.next());
16         }
17     }
18 }




　　增强for循环出现目的：为了替代迭代器

 　　增强for底层就是迭代器实现的(通过查看.class字节码)

13、内容补充
　　（1）泛型擦除
　　　　首先泛型只是出现在源代码阶段，当编译之后泛型不存在了

 

　　（2）练习：实现一个泛型方法，接受任意类型的数组，颠倒数组中所有元素

　　代码

 1 //实现一个泛型方法，接受任意类型的数组，颠倒数组中所有元素
 2 public class TestDemo2 {
 3     public static void main(String[] args) {
 4         //int类型
 5         Integer[] arr1 = {10,12,13,14,20};
 6         System.out.println(Arrays.toString(arr1));    //打印原来的
 7 
 8         //写方法实现颠倒
 9         reverses(arr1);
10         System.out.println(Arrays.toString(arr1));    //颠倒后的
11         
12         System.out.println("====================");
13         
14         //其他类型
15         String[] arr2 = {"aa","bb","cc","dd","ff"};
16         System.out.println(Arrays.toString(arr2));
17         reverses(arr2);
18         System.out.println(Arrays.toString(arr2));
19     }
20     
21     public static <T> void reverses(T[] arr1) {
22         /*
23           基本思想：把第一个元素和最后一个元素交换位置，把第二个元素和倒数第二个元素交换位置。。。。
24           交换 长度/2
25           */
26         //遍历数组
27         for(int i=0;i<arr1.length/2;i++) {
28             /*int temp = arr1[0];
29             arr1[0] = arr1[arr1.length-1];*/
30             T temp = arr1[i];
31             arr1[i] = arr1[arr1.length-i-1];
32             arr1[arr1.length-i-1] = temp;
33         }
34     }
35     /*public static void reverses(Integer[] arr1) {
36           基本思想：把第一个元素和最后一个元素交换位置，把第二个元素和倒数第二个元素交换位置。。。。
37           交换 长度/2
38           
39         //遍历数组
40         for(int i=0;i<arr1.length/2;i++) {
41             int temp = arr1[0];
42             arr1[0] = arr1[arr1.length-1];
43             int temp = arr1[i];
44             arr1[i] = arr1[arr1.length-i-1];
45             arr1[arr1.length-i-1] = temp;
46         }
47     }*/
48 }

```
## 14、可变参数
```java
　　可变参数可以应用在什么场景：

　　实现两个数的相加，实现三个数的相加 四个数的相加

 1 public class TestDemo1 {
 2     public static void main(String[] args) {
 3         add1(10,20);
 4         add1(10,20,30);
 5         add1(10,20,30,40);
 6     }
 7     //实现两个数的相加
 8     public void add1(int a,int b) {
 9         int sum = a+b;
10         System.out.println(sum);
11     }
12     //实现三个数的相加
13     public void add1(int a,int b ,int c) {
14         int sum = a+b+c;
15         System.out.println(sum);
16     }
17     //实现四个数的相加
18     public void add1(int a,int b ,int c,int d) {
19         int sum = a+b+c+d;
20         System.out.println(sum);
21     }
22 }
　　-- 【如果实现的多个方法，这些方法里面逻辑基本相同，唯一不同的是传递的参数的个数，可以使用可变参数】

 

　　可变参数的定义方法 数据类型...数组的名称

　　理解为一个数组，这个数组存储传递过来的参数

　　- 代码

 1 //演示可变参数
 2 public class TestDemo1 {
 3     public static void main(String[] args) {
 4         //int..num;
 5         add1(10,20);
 6         add1(10,20,30);
 7         add1(10,20,30,40);
 8     }
 9     public static void add1(int a, int...nums) {
10         //nums理解为一个数组，这个数组存储传递过来的参数
11         //System.out.println(nums.length);
12         int sum = 0;
13         //遍历数组
14         for(int i=0;i<nums.length;i++) {
15             sum += nums[i];
16         }
17 　　}
18 }

 　　注意的地方

　　　　（1）可变参数需要写在方法的参数列表中，不能单独定义

　　　　（2）在方法的参数列表中只能有一个可变参数

　　　　（3）方法的参数列表中的可变参数，必须放在参数最后

　　　　　　- add1(int a,int...nums)
```
## 15、反射的原理（********理解********）
```java
　　应用在一些通用性比较高的代码中

　　后面学到的框架，大多数都是使用反射来实现的

 

　　在框架开发中，都是基于配置文件开发

　　【在配置文件中配置了类，可以通过反射得到类中的所有内容，可以让类中的某个方法来执行】

 

　　类中的所有内容：属性、没有参数的构造方法、有参数的构造方法、普通方法

 

 1 public class Person {
 2     //属性
 3     private String name;
 4     private String id;
 5     //没有参数的构造方法
 6     public Person() {}
 7     //有参数的构造
 8     public Person(String name, String id) {
 9         this.name = name;
10         this.id = id;
11     }  
12     //普通方法
13     public String getName() {
14         return name;
15     }
16     public void setName(String name) {
17         this.name = name;
18     }
19     public String getId() {
20         return id;
21     }
22     public void setId(String id) {
23         this.id = id;
24     }
25 }
```
　　画图分析反射的原理

![20200607202924](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200607202924.png)

```java

　　首先需要把java文件保存到本地硬盘 .java

　　编译java文件，成.class文件

　　使用jvm，把class文件通过类加载加载到内存中

　　万事万物都是对象，class文件在内存中使用Class类表示

 

　　当使用反射时候，首先需要获取到Class类，得到了这个类之后，就可以得到class文件里面的所有内容

　　- 包含属性  构造方法 普通方法

　　属性通过一个类 Filed 表示

　　构造方法通过一个类 Constructor

　　普通方法通过一个类 Method
```
## 16、使用反射操作类里面的无参数的构造方法（**会写**）
```java
Person.java

 1 public class Person {
 2     //属性
 3     private String name;
 4     private String id;
 5     //没有参数的构造方法
 6     public Person() {}
 7     //有参数的构造
 8     public Person(String name, String id) {
 9         this.name = name;
10         this.id = id;
11     }  
12     //普通方法
13     public String getName() {
14         return name;
15     }
16     public void setName(String name) {
17         this.name = name;
18     }
19     public String getId() {
20         return id;
21     }
22     public void setId(String id) {
23         this.id = id;
24     }
25 }
首先获取到Class类

　　// 获取Class类
   Class clazz1 = Person.class;
   Class clazz2 = new Person().getClass();
   Class clazz3 = Class.forName("cn.itcast.test09.Person");
　　比如： 要对一个类进行实例化，可以new，不使用new，怎么获取？

　　- //得到Class

　　Class c3 = Class.forName("cn.itcast.test09.Person");

　　//得到Person类的实例

　　Person p = (Person) c3.newInstance();

 代码

    //操作无参数的构造方法
    @Test
    public void test1() throws Exception {
        //得到Class
        Class c3 = Class.forName("cn.itcast.test09.Person");
        //得到Person类的实例
        Person p = (Person) c3.newInstance();
        //设置值
        p.setName("zhangsan");
        System.out.println(p.getName());
    }
```
## 17、使用反射操作有参数的构造方法（**会写**）
```java
    //操作有参数的构造方法
    @Test
    public void test2() throws Exception {
        //得到Class
        Class c1 = Class.forName("cn.itcast.test09.Person");
        //使用有参数的构造方法
        //c1.getConstructors();//获取所有的构造方法
        //传递是有参数的构造方法里面参数类型，类型使用class形式传递
        Constructor cs = c1.getConstructor(String.class,String.class);
        //通过有参数的构造方法设置值
        //通过有参数的构造方法创建Person实例
        Person p1 = (Person) cs.newInstance("lisi","100");
        System.out.println(p1.getId()+" "+p1.getName());
    }
```
## 18、使用反射操作属性（**会写**）
```java
    //操作name属性
    @Test
    public void test3() {
        try {
            //得到Class类
            Class c2 = Class.forName("cn.itcast.test09.Person");
            //得到name属性
            //c2.getDeclaredFields();//表示得到所有的属性
            //得到Person类的实例
            Person p11 = (Person) c2.newInstance();
            //通过这个方法得到属性，参数是属性的名称
            Field f1 = c2.getDeclaredField("name");
            //操作的是私有的属性，不让操作，需要设置可以操作私有属性setAccessible(true),可以操作私有属性
            f1.setAccessible(true);
            //设置name值 set方法，两个参数：第一个参数类的实例，第二个参数是设置的值
            f1.set(p11, "wangwu"); //相当于 在 p.name = "wangwu";
            System.out.println(f1.get(p11)); //相当于 p.name
        }catch(Exception e) {
            e.printStackTrace();
        }
    }
```
## 19、使用泛型操作普通方法（**会写**）
```java
　　使用Method类表示普通方法

　　代码

    //操作普通方法 ，比如操作 setName
    @Test
    public void test4() throws Exception {
        //得到Class类
        Class c4 = Class.forName("cn.itcast.test09.Person");
        //得到Person实例
        Person p4 = (Person) c4.newInstance();
        //得到普通方法
        //c4.getDeclaredMethods();//得到所有的普通方法
        //传递两个参数：第一个参数，方法名称；第二个参数，方法里面参数的类型
        Method m1 = c4.getDeclaredMethod("setName", String.class);
        //让setName方法执行 ，执行设置值
        //使用invoke(p4, "niuqi");传递两个参数：第一个参数，person实例；第二个参数，设置的值
        //执行了invoke方法之后，相当于，执行了setName方法，同时通过这个方法设置了一个值是niuqi
        m1.invoke(p4, "niuqi");
        System.out.println(p4.getName());
    }
　　//操作的私有的方法 ，需要设置值是true

　　//m1.setAccessible(true);

 

　　当操作的方法是静态的方法时候，因为静态方法调用方式是 类名.方法名，不需要类的实例

　　使用反射操作静态方式时候，也是不需要实例

　　在invokie方法的第一个参数里面，写一个 null

　　　　- m1.invoke(null, "niuqi");
```