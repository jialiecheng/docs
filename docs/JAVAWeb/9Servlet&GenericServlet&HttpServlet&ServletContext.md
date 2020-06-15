1、Servlet概述

2、Servlet接口

3、GenericServlet

4、HttpServlet

5、Servlet细节

6、ServletContext（重要）

Servlet概述
生命周期方法：

l void init(ServletConfig)：出生之后（1次）；

l void service(ServletRequest request, ServletResponse response)：每次处理请求时都会被调用；

l void destroy()：临死之前（1次）；

 

特性：

l 单例，一个类只有一个对象；当然可能存在多个Servlet类！

l 线程不安全的，所以它的效率是高的！

 

Servlet类由我们来写，但对象由服务器来创建，并且由服务器来调用相应的方法。

 

1　什么是Servlet
Servlet是JavaWeb的三大组件之一，它属于动态资源。Servlet的作用是处理请求，服务器会把接收到的请求交给Servlet来处理，在Servlet中通常需要：

l 接收请求数据；

l 处理请求；

l 完成响应。

　　例如客户端发出登录请求，或者输出注册请求，这些请求都应该由Servlet来完成处理！Servlet需要我们自己来编写，每个Servlet必须实现javax.servlet.Servlet接口。

 

## 2　实现Servlet的方式（由我们自己来写！）
实现Servlet有三种方式：

l 实现javax.servlet.Servlet接口；

l 继承javax.servlet.GenericServlet类；

l 继承javax.servlet.http.HttpServlet类；

　　通常我们会去继承HttpServlet类来完成我们的Servlet，但学习Servlet还要从javax.servlet.Servlet接口开始学习。

Servlet.java
```java

public interface Servlet {

    public void init(ServletConfig config)throws ServletException;

    public ServletConfig getServletConfig();

    public void service(ServletRequest req, ServletResponse res)
throws ServletException, IOException;

    public String getServletInfo();

    public void destroy();

}
```
　Servlet中的方法大多数不由我们来调用，而是由Tomcat来调用。并且Servlet的对象也不由我们来创建，由Tomcat来创建！

## 3　创建helloServlet应用
我们开始第一个Servlet应用吧！首先在webapps目录下创建helloservlet目录，它就是我们的应用目录了，然后在helloservlet目录中创建准备JavaWeb应用所需内容：

l 创建/helloservlet/WEB-INF目录；

l 创建/helloservlet/WEB-INF/classes目录；

l 创建/helloservlet/WEB-INF/lib目录；

l 创建/helloservlet/WEB-INF/web.xml文件；

接下来我们开始准备完成Servlet，完成Servlet需要分为两步：

l 编写Servlet类；

l 在web.xml文件中配置Servlet；

HelloServlet.java

```java
public class HelloServlet implements Servlet {

　　public void init(ServletConfig config) throws ServletException {}

　　public ServletConfig getServletConfig() {return null;}

　　public void destroy() {}

　　public String getServletInfo() {return null;}

 
　　public void service(ServletRequest req, ServletResponse res)throws ServletException, IOException {

　　　　System.out.println("hello servlet!");

　　}

}
```
 

　　我们暂时忽略Servlet中其他四个方法，只关心service()方法，因为它是用来处理请求的方法。我们在该方法内给出一条输出语句！

 

web.xml（下面内容需要背下来）
```html
<servlet>

　　<servlet-name>hello</servlet-name>

　　<servlet-class>cn.itcast.servlet.HelloServlet</servlet-class>

</servlet>

<servlet-mapping>

　　<servlet-name>hello</servlet-name>

　　<url-pattern>/helloworld</url-pattern>

</servlet-mapping>  
```
在web.xml中配置Servlet的目的其实只有一个，就是把访问路径与一个Servlet绑定到一起，上面配置是把访问路径：“/helloworld”与“cn.itcast.servlet.HelloServlet”绑定到一起。

l <servlet>：指定HelloServlet这个Servlet的名称为hello；

l <servlet-mapping>：指定/helloworld访问路径所以访问的Servlet名为hello。

<servlet>和<servlet-mapping>通过<servlet-name>这个元素关联在一起了！

接下来，我们编译HelloServlet，注意，编译HelloServlet时需要导入servlet-api.jar，因为Servlet.class等类都在servlet-api.jar中。

javac -classpath F:/tomcat6/lib/servlet-api.jar -d . HelloServlet.java

然后把HelloServlet.class放到/helloworld/WEB-INF/classes/目录下，然后启动Tomcat，在浏览器中访问：http://localhost:8080/helloservlet/helloworld即可在控制台上看到输出！

l /helloservlet/WEB-INF/classes/cn/itcast/servlet/HelloServlet.class；

# Servlet接口
# 1 Servlet的生命周期
所谓xxx的生命周期，就是说xxx的出生、服务，以及死亡。Servlet生命周期也是如此！与Servlet的生命周期相关的方法有：

l void init(ServletConfig)；

l void service(ServletRequest,ServletResponse)；

l void destroy()；

## 1.1　Servlet的出生
服务器会在Servlet第一次被访问时创建Servlet，或者是在服务器启动时创建Servlet。如果服务器启动时就创建Servlet，那么还需要在web.xml文件中配置。也就是说默认情况下，Servlet是在第一次被访问时由服务器创建的。

而且一个Servlet类型，服务器只创建一个实例对象，例如在我们首次访问http://localhost:8080/helloservlet/helloworld时，服务器通过“/helloworld”找到了绑定的Servlet名称为cn.itcast.servlet.HelloServlet，然后服务器查看这个类型的Servlet是否已经创建过，如果没有创建过，那么服务器才会通过反射来创建HelloServlet的实例。当我们再次访问http://localhost:8080/helloservlet/helloworld时，服务器就不会再次创建HelloServlet实例了，而是直接使用上次创建的实例。

在Servlet被创建后，服务器会马上调用Servlet的void init(ServletConfig)方法。请记住， Servlet出生后马上就会调用init()方法，而且一个Servlet的一生。这个方法只会被调用一次。这好比小孩子出生后马上就要去剪脐带一样，而且剪脐带一生只有一次。

我们可以把一些对Servlet的初始化工作放到init方法中！

 

## 1.2　Servlet服务
　　当服务器每次接收到请求时，都会去调用Servlet的service()方法来处理请求。服务器接收到一次请求，就会调用service() 方法一次，所以service()方法是会被调用多次的。正因为如此，所以我们才需要把处理请求的代码写到service()方法中！

 

## 1.3　Servlet的离去
　　Servlet是不会轻易离去的，通常都是在服务器关闭时Servlet才会离去！在服务器被关闭时，服务器会去销毁Servlet，在销毁Servlet之前服务器会先去调用Servlet的destroy()方法，我们可以把Servlet的临终遗言放到destroy()方法中，例如对某些资源的释放等代码放到destroy()方法中。

 

## 1.4　测试生命周期方法
修改HelloServlet如下，然后再去访问http://localhost:8080/helloservlet/helloworld

```java
public class HelloServlet implements Servlet {

　　public void init(ServletConfig config) throws ServletException {

　　　　System.out.println("Servlet被创建了！");

}

public ServletConfig getServletConfig() {return null;}

　　public void destroy() {

　　　　System.out.println("Servlet要离去了！");

}

public String getServletInfo() {return null;}

 

public void service(ServletRequest req, ServletResponse res)throws ServletException, IOException {

　　System.out.println("hello servlet!");

　　}

}
```
 

在首次访问HelloServlet时，init方法会被执行，而且也会执行service方法。再次访问时，只会执行service方法，不再执行init方法。在关闭Tomcat时会调用destroy方法。

# 2　Servlet接口相关类型
在Servlet接口中还存在三个我们不熟悉的类型：

l ServletRequest：service() 方法的参数，它**表示请求对象，它封装了所有与请求相关的数据，它是由服务器创建的；**

l ServletResponse：service()方法的参数，它**表示响应对象，在service()方法中完成对客户端的响应需要使用这个对象；**

l ServletConfig：init()方法的参数，它表示Servlet配置对象，它对应Servlet的配置信息，那对应web.xml文件中的<servlet>元素。

## 2.1　ServletRequest和ServletResponse

ServletRequest和ServletResponse是Servlet#service() 方法的两个参数，一个是请求对象，一个是响应对象，可以从ServletRequest对象中获取请求数据，可以使用ServletResponse对象完成响应。你以后会发现，这两个对象就像是一对恩爱的夫妻，永远不分离，总是成对出现。

 

ServletRequest和ServletResponse的实例由服务器创建，然后传递给service()方法。如果在service() 方法中希望使用HTTP相关的功能，那么可以把ServletRequest和ServletResponse强转成HttpServletRequest和HttpServletResponse。这也说明我们经常需要在service()方法中对ServletRequest和ServletResponse进行强转，这是很心烦的事情。不过后面会有一个类来帮我们解决这一问题的。

 

HttpServletRequest方法：

l String getParameter(String paramName)：获取指定请求参数的值；

l String getMethod()：获取请求方法，例如GET或POST；

l String getHeader(String name)：获取指定请求头的值；

l void setCharacterEncoding(String encoding)：设置请求体的编码！因为GET请求没有请求体，所以这个方法只只对POST请求有效。当调用request.setCharacterEncoding(“utf-8”)之后，再通过getParameter()方法获取参数值时，那么参数值都已经通过了转码，即转换成了UTF-8编码。所以，这个方法必须在调用getParameter()方法之前调用！

 

HttpServletResponse方法：

l PrintWriter getWriter()：获取字符响应流，使用该流可以向客户端输出响应信息。例如response.getWriter().print(“<h1>Hello JavaWeb!</h1>”)；

l ServletOutputStream getOutputStream()：获取字节响应流，当需要向客户端响应字节数据时，需要使用这个流，例如要向客户端响应图片；

l void setCharacterEncoding(String encoding)：用来设置字符响应流的编码，例如在调用setCharacterEncoding(“utf-8”);之后，再response.getWriter()获取字符响应流对象，这时的响应流的编码为utf-8，使用response.getWriter()输出的中文都会转换成utf-8编码后发送给客户端；

l void setHeader(String name, String value)：向客户端添加响应头信息，例如setHeader(“Refresh”, “3;url=http://www.itcast.cn”)，表示3秒后自动刷新到http://www.itcast.cn；

l void setContentType(String contentType)：该方法是setHeader(“content-type”, “xxx”)的简便方法，即用来添加名为content-type响应头的方法。content-type响应头用来设置响应数据的MIME类型，例如要向客户端响应jpg的图片，那么可以setContentType(“image/jepg”)，如果响应数据为文本类型，那么还要同时设置编码，例如setContentType(“text/html;chartset=utf-8”)表示响应数据类型为文本类型中的html类型，并且该方法会调用setCharacterEncoding(“utf-8”)方法；

l void sendError(int code, String errorMsg)：向客户端发送状态码，以及错误消息。例如给客户端发送404：response(404, “您要查找的资源不存在！”)。
