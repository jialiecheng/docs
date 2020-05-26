---
title: 劝学
---
Day1
#### 题1
public class Test{
    public static void main(String [] args){
        List list=new ArrayList();
        list.add("a");
        list.add("b");
        list.add("a");
        Set set=new HashSet();
        set.add("a");
        set.add("b");
        set.add("a");
        System.out.println(list.size()+","+set.size());
    }
}
请问运行主要的程序会打印出的是什么（）
答案
     3,2
解析
1
        List不去重，Set去重。
        以HashSet为例，底层是用HashMap实现的。所有Entry<K,V>的V都是同一个对象 public static final PRESENT = new Object()，所以Set的add方法其实就是给Map的K赋值。
        同时Set中的add方法存在返回值，一旦返回false，说明Set集合中已经存在了要添加的对象。
        但是要注意，在HashMap中判定是否是一个对象的时候，先用了hashCode方法，再用了equals方法，一旦add的是我们自己的对象，注意重写这两个方法。
        HashMap的定位方法，底层是数据+链表+红黑树（6，8）。
            1. 对象的hashCode得到hash值后，hash值高低16位进行&运算，重新得到对象的hash值。（hash(Object o)）
            2. hash值与tab.length-1进行&运算，确定插入对象在桶（数组）中的角标。
            3. 再利用比较形成链表或红黑树（具体不说了）。
2


        HashSet不能添加重复的元素，当调用add（Object）方法时候，
        首先会调用Object的hashCode方法判hashCode是否已经存在，如不存在则直接插入元素；
        如果已存在则调用Object对象的equals方法判断是否返回true， 如果为true则说明元素已经存在，如为false则插入元素


#### 题2

以下java程序代码，执行后的结果是（）
java.util.HashMap map=new java.util.HashMap(); 
map.put("name",null);      
map.put("name","Jack");
System.out.println(map.size());

答案：2
解析：
        HashMap可以插入null的key或value，插入的时候，检查是否已经存在相同的key，如果不存在，则直接插入，如果存在，则用新的value替换旧的value，
        第一条put语句，会将key/value对插入HashMap，
        第二条put语句，要替换为（name，jack）。所以，size为1.

#### 题3
抽象类方法的访问权限默认都是public。（  ）

答案：错误
解析：
        关于抽象类
        JDK 1.8以前，抽象类的方法默认访问权限为protected
        JDK 1.8时，抽象类的方法默认访问权限变为default

        关于接口
        JDK 1.8以前，接口中的方法必须是public的
        JDK 1.8时，接口中的方法可以是public的，也可以是default的
        JDK 1.9时，接口中的方法可以是private的

#### 题4
以下 b 的值是： byte b = (byte)129;

答案：-217

解析：
        这题考察的就两个知识点：一、强制转换（主要涉及各个类型占几个字节，这里我只简单说一下byte型占一个字节，也就是8位，int型4个字节，32位）；二、在计算机系统中，数值一律用补码来表示（存储）
        正数：补码=反码=原码（当然以二进制形式表达）
        129 int类型（4个字节）二进制： 00000000 00000000 00000000 10000001
        强制转换byte型后，只有一个字节即 10000001（注意这里从二进制角度看，第一位是符号位，即求负数的补码接下来）
        只要求出上面原码对应的补码就行了，然后再转换对应的int型数值（因为题干所给的答案都是比较int型）
        10000001（原码） 对应的反码为1111 1110 
        又补码等于反码+1
        即1111 1111  该二进制转换int型刚好是-127（1+2+4+8+16+32+64）

        普及一下：正数原码，反码，补码相同
        负数反码除了符号位不变，其他位取反，补码=反码+1；


#### 题5
单例模式中，两个基本要点是

答案：构造函数私有、唯一实例

解析：
        通常单例模式在Java语言中，有两种构造方式：
        1.懒汉方式。指全局的单例实例在第一次被使用时构建。

        //懒汉式
        public class Singleton2 {
        private static Singleton2 INSTANCE=null;

        private Singleton2(){}

        public static Singleton2 getInstance(){
        if(INSTANCE == null){
        INSTANCE = new Singleton2();
        }
        return INSTANCE;
        }
        }
        2.饿汉方式。指全局的单例实例在类装载时构建。

        //饿汉式
        public class Singleton {
        private final static Singleton INSTANCE = new Singleton();

        private Singleton(){}

        public static Singleton getInstance(){
        return INSTANCE;
        }
        }





