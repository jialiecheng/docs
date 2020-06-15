1. 如何获取帮助 
Mathematica 在安装时就自带了详细的帮助文档，其中包含函数的使用说明和大量的例子，按 F1
键即可调出。如果你想了解某个函数的用法，只需要选中该函数（光标移动到函数名上任意位置即可），
再按 F1 键就能进入该函数的帮助页面。


![20200612155907](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200612155907.png)


如果不知道该用哪个函数，你可以根据需求搜索。例如你想解一个方程，可以在帮助文档中搜索
“solve equations”（解方程）。在搜索结果中你可以找到应该使用哪个函数，如下图左所示。根据你方
程的类型应该选择相应的函数（是代数方程还是微分方程？如果是代数方程，是线性方程还是非线性
方程？想要近似的数值解还是精确的符号解？）。你还能了解更多基础知识，例如在 Mathematica 中怎
样定义一个方程，如下图右。


![20200612163649](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200612163649.png)

如果在自带的帮助文档中找不到想要的，你可以在网站 mathematica.stackexchange.com 上搜索。如
果仍然没有，你还可以在该网站上提问（类似于百度知道）。对你的问题感兴趣的网友会给出解决方法。
解答人多是 Mathematica 的爱好者，身份以教师和研究生为主，他们免费提供帮助，并从别人的回答中
交流经验并相互学习。你的问题描述越具体，得到的解答会越贴切。但由于是义务解答，所以请给出
你尝试过的解决方法。尽量避免只描述你的问题，把“解题过程”抛给别人。网站
http://demonstrations.wolfram.com/上有很多志愿者提供的交互式小程序，其代码可以免费下载（点击右
侧的 Download Author Code），通过分析别人的代码能够快速提高。你也可以进入聊天室和别人讨论你
遇到的问题 http://chat.stackexchange.com/rooms/2234/wolfram-mathematica


2. 函数名自动补齐 
Mathematica 以函数名过长而臭名昭著（比如这个函数：
BetaNegativeBinomialDistribution）。但幸运的是你不需要将函数名完整地打出
来，只需要打出几个首字母，软件会给出智能提示，选择即可。

![20200612164631](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200612164631.png)

3. 停止当前计算 
如果你想中止正在运行的程序（例如程序可能陷入死循环），有两种方法：
① 按快捷键 Alt + . 中止程序。这样停止后变量的值依然存在。
② 退出内核。要小心，因为这样做所有的变量定义和计算结果都会被清空。


4. 常用快捷键 
 退出内核 
退出内核的操作方法是在“计算”菜单中选择“退出内核—local”后确认即可。也可以执行 Quit[]
函数。但这样都太麻烦，我们可以给它设置一个快捷键，过程如下：
找到 Mathematica 安装目录下的 KeyEventTranslations.tr 文件，比如我的在这里：
C:\Program Files\Wolfram Research\Mathematica\10.3\SystemFiles\FrontEnd\TextResources\Windows 
用记事本打开它，找到 EventTranslations[{ 语句，在它后面插入以下内容并保存：


![20200612164941](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200612164941.png)



以后我们只需按下 Ctrl + q 就能退出内核了。（重启软件或退出内核后生效）
注意 2 点：1. 结尾的逗号不要丢；2. 语句必须要放在 EventTranslations[{ 后面，如下图


![20200612165115](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200612165115.png)

说明：Quit[]和 Clear["Global`*"]命令都可以清空符号变量。如果我们想在程序开始时预先清空所有
变量再初始化，应该用 Clear["Global`*"]，而不能用 Quit[]，否则后面的程序根本不会运行。


- 双层方括号 
双层的方括号表示按索引位置从列表中取出元素，右图所示的是一
个简单的例子，从列表 a 中取出第二个元素。
取元素是常用的操作，但它的输入有些繁琐，需要按 4 次键盘。其实，
双方括号[[ ]]有一种更简洁的写法，就是〚 〛。我们可以为其设置快捷键，
设置过程与“退出内核”相同，在 KeyEventTranslations.tr 文件的
EventTranslations[{后加入以下语句即可：

![20200612205442](https://raw.githubusercontent.com/jialiecheng/ImageBed/master/20200612205442.png)