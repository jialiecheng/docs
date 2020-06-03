路径搜索问题：

-- 路径搜索问题，就类似于下图中，机器人要从绿色起点走到黄色终点，沿什么样路线过去？

这是我们从视觉上来理解这个问题，可以沿着红线走过去。先不说怎么让机器人自己能能找到这条线，先来说怎么把诸如“地图”、"线路"、"位置"、“障碍物”等等概念表示成代码呢？

 

## 地图

    说算法之前，看看这个地图怎么表示。

    首先，把地图划分为网格，这样就可以跟矩阵对应起来了。矩阵的行、列就直观的表示地图上的每一个位置坐标。

    下面的 ones 命令就生成了一个 10*10 的全 1 阵 map，表示一张 10*10 的地图。那数字 1 表示什么呢？目前为止，什么也不表示，没有任何意义。

rows = 10;
ncols = 10;
map = ones(rows, ncols);
     地图的其它信息，比如起点，终点，障碍物等等，怎么在这个地图上表示出来呢？那就给 map 矩阵赋不同的值呗，比如我们约定好：空地用 1 表示，墙用 2 表示。

     我们约定好以后，矩阵的值就变得有意义了。将来判断 map(2,2)~=2，我们就知道 （2,2）这个位置是不是有墙。( 考虑到浮点数判断的精度问题，将来地图的数据类型可以设置为整型，之类。)

map (1:5, 7) = 2; % 设置一堵墙 
map(6, 2) = 5; % 设置起点 
map(4, 8) = 6; % 设置终点
    但 map 其实还只是一堆数字，不直观。所以我们希望能把这个 map 给“画”出来。比如，我希望空地的1对应画白色；而墙的2对应画黑色：

复制代码
%       R G B
cmap = [1 1 1; ...% 1 - white - clear cell 
        0 0 0; ...% 2 - black - obstacle 
        1 0 0; ...% 3 - red = visited 
        0 0 1; ...% 4 - blue - on list 
        0 1 0; ...% 5 - green - start 
        1 1 0];% 6 - yellow – destination 
colormap(cmap);
复制代码
    这样设置之后，map 矩阵由于是 double 类型的，所以它的值为1-6时，画什么颜色就按照这里配置的颜色映射来定。画地图：

image(1.5,1.5,map);   % image 命令画图时，对于超出上下限的值，依旧按照上下限对应的颜色来画。
grid on; 
axis image;
这样，这张地图就画出来了：

image

    最后我们的目的是，要找到这么条黄色的路线：

image

    可以看到图中还有其他颜色，这是为了表示算法的搜索过程，特意修改了地图的值来做显示用。

比如红色，就是我搜索过的区域，蓝色，就是下一步的搜索候选区。

 

算法的简单版本

这个算法的大概意思就是(发现好难说清楚，对照上图)，

1. 从第一个搜索中心：绿点开始，找到上下左右邻居，其实就是起点行列坐标i-1,j之类

2. 把找到的邻居变成蓝色(加入下次的搜索备选中心)，计算它们到起点的路程(其实就是+1)，保存到路程矩阵里；

1’选新的搜索中心(从蓝色邻居里挑 “距离起点路程最近的那个”)，找到上下左右邻居

2’把它的新邻居也变成蓝色，计算新邻居到起点的路程(在当前搜索中心路程1的基础上，再+1)，保存到路程矩阵里；

1”再从所有蓝色邻居里挑选搜索中心，找到新邻居

2”把新邻居变成蓝色，计算邻居到起点的路程，保存到路程矩阵

一直这么循环，总有一天，会一直搜索到终点。

 

PS：用不同的方法从蓝色邻居里来挑选搜索中心，就构成了 Dijkstra 算法和 A* 算法的主要区别。
Dijkstra 里只有一个原则，就是挑选离起点路程最近的，其实就是无方向向外扩散的。而 A*算法还会加上一个跟终点的距离考量，所以就是带有方向性的扩散。一般情况下，A* 会搜索的快一点。

 

可以看到，这个算法要保存一些信息，所以先定义一些变量。

start_node = sub2ind(size(map), 6, 2);
% 为了方便，把起点和终点的行列下标换成索引，所以 map(6,2)和 map(start_node)就是同一个意思。 
dest_node = sub2ind(size(map), 4, 8);
a. 定义一个变量来保存蓝色邻居以及它们到起始格的路程

所以这里定义了 distanceFromStart  来保存这些信息，初始化为 Inf，表示从没有访问过。一旦有值，就说明是蓝色邻居，赋值的大小就表示改点跟起始点的路程。一旦变成红色，就把它的值再改回 Inf。
至于具体要显示动态图，要修改的是 map 的值。

distanceFromStart = Inf(nrows,ncols); 
distanceFromStart(start_node) = 0;
最后，这个矩阵会更新成这个样子。路程更新到了第4行第8列的终点位置，而且它距离起点有8步。那么这八步是怎么走的呢，就需要有矩阵来保存路线信息。

image

 

b. 定义一个变量来保存路径。

parent = zeros(nrows,ncols);
 
这个矩阵最后会更新成什么样，它怎么表示路线呢？
比如下图，第4行第8列的值是75，就表示它的上家的格子编号是75，其实也就是矩阵的索引位置，按列数过来就是第8列第5行。这里的值是76，就表示它的上家的格子第8列第6行。一次类推，这样就可以反推出一条线路来了。
image
====================================================
变量定义完了，那么开始循环搜索路径
while true
先画一下当前的地图
map(start_node) = 5; 
map(dest_node) = 6; 
image(1.5, 1.5, map); 
 grid on; axis image; drawnow;
这时就出来了这张图

image

那么，就开始搜索了，可是以哪个点为搜索中心呢。

当然是从蓝色邻居列表选离初始点最近的那一个点。

因为 distanceFromStart 的初始值是 Inf，已知的只有起始点的路程，为0。所以如果是第一次循环，那min函数得到的current自然就是16了，这也是初始点的索引坐标；这时得到的 min_dist =0。
复制代码
[min_dist, current] = min(distanceFromStart(:));
%搜索中心的索引坐标：current,
%搜索中心与起始点的路程：min_dist
% 这两个值后面会用。
 
%这里做一些简单判断，如果已经扩张到终点了，或者没有路径，则退出循环。
if ((current == dest_node) || isinf(min_dist)) 
    break;
end;
复制代码
为了画图效果，把 map 的前点坐标赋值为 3 ，表示本次循环已经以此为中心搜索一次了。

map(current) = 3;
可以看到这是现在 map 的值，如果画出来就是这样：
image

同时把distanceFromStart的这个位置赋值为 Inf，表示它已经当过搜索中心了。
上面的 min 函数将来就不可能再找到这个坐标。
distanceFromStart(current) = Inf;
把搜索中心的邻居的坐标点找出来，这里只找上下左右的邻居没有计算斜角：

% 把索引坐标变成行列坐标，方便计算邻居的坐标。
[i, j] = ind2sub(size(distanceFromStart), current);
neighbor = [i-1, j ;... 
                      i+1, j ;... 
                      i, j+1 ;... 
                       i, j-1]
所以(6,2)的四个邻居的坐标计算出来，得到一个四行两列的结果：

neighbor =

5  2
7  2
6  3
6  1

为了方便，现在把这种行列形式变为索引形式：

neighborIndex = sub2ind(size(map),neighbor(:,1),neighbor(:,2))
neighborIndex =

15
17
26
6

下面就要计算每个邻居的路程，保存每个邻居的路线。

复制代码
for i=1:length(neighborIndex) 
   if (map(neighborIndex(i))~=2) && (map(neighborIndex(i))~=3 && map(neighborIndex(i))~= 5)
          map(neighborIndex(i)) = 4; %  在地图上把邻居变成蓝色。这里纯为了显示用。

% distanceFromStart这个矩阵初始值是 Inf ，所以第一次找到它的时候肯定会更新路径的，
% 循环多次以后，可能会有多次机会走到这个邻居，所以要看哪条路近。
% 只有邻居已有的路线比“从当前搜索中心走过去”要长的话，才会更新这个邻居的信息。
           if distanceFromStart(neighborIndex(i))> min_dist + 1
                  distanceFromStart(neighborIndex(i)) = min_dist+1; %更新邻居的路程信息 
                  parent(neighborIndex(i)) = current; % 更新邻居的路径信息
          end 
     end 
end
复制代码
第一次搜索后，可以看到这四个邻居的距离值 distanceFromStart，更新为 1 了：

image

然后，这四个邻居的线路，16 就是表示是从起始点(坐标索引是16)走过来的。

image

map 就变成这样：
image
end   %这是 while true 对应的end
 

这是第一轮循环，然后再把上面的 while 循环再走一遍。

从之前的代码可以看到，会先把起始点的颜色重置一下。然后上一轮找到的四个邻居已经标记为蓝色了。

image

同样，第二次也会先定搜索中心，根据上一次循环得到的 distanceFromStart 矩阵的结果，其实最小值有四个，都是1，Dijkstra算法没有别的考量权重，所以这里只是按顺序，取了第一个 1 作为搜索中心：

复制代码
[min_dist, current] = min(distanceFromStart(:));
if ((current == dest_node) || isinf(min_dist)) 
   break; 
end; 
map(current) = 3; %把新的搜索中心标记为红色
distanceFromStart(current) = Inf; %把搜索中心从邻居去除。
[i, j] = ind2sub(size(distanceFromStart), current);
复制代码
得到的current就是左边这个红点，min_dist就是刚才计算出来的1。

image

所以，你看这时候，搜索中心在边界，左边那个(6,0)超出了边界，就是假邻居了：

neighbor = [i-1,j;... 
                      i+1,j;... 
                    i,j+1;... 
                   i,j-1]
neighbor =

5  1
7  1
6  2
6  0

需要把它给去掉：

outRangetest = (neighbor(:,1)<1) + (neighbor(:,1)>nrows) +...
                   (neighbor(:,2)<1) + (neighbor(:,2)>ncols ) 
locate = find(outRangetest>0); 
neighbor(locate,:)=[]    % =[]就是删除的意思。
 
neighbor =

5  1
7  1
6  2

同样，开始更新每一个邻居的信息：

复制代码
neighborIndex = sub2ind(size(map),neighbor(:,1),neighbor(:,2)) 
for i=1:length(neighborIndex) 
  if (map(neighborIndex(i))~=2) && (map(neighborIndex(i))~=3 && map(neighborIndex(i))~= 5)      map(neighborIndex(i)) = 4;
       if distanceFromStart(neighborIndex(i))> min_dist + 1                                    distanceFromStart(neighborIndex(i)) = min_dist+1; 
         parent(neighborIndex(i)) = current; 
    end 
 end 
end
复制代码
最后，map 更新，红点就是已经当过搜索中心了，蓝点就是全部的待搜索邻居。

image

下面的 distanceFromStart 就是所有蓝点的位置(有数值的地方)，以及这些蓝点到起始点的路程（数值）。

下一个循环，便接着再找 distanceFromStart 的最小值所在的位置，作为搜索中心。

image

 

可以看到，有1，1就是从起始点1步就走到了这里；2表示从起始点两步就走到了这里。

那，是沿着哪条线路走过来的呢？

就得对照着看 parent 矩阵的数据了，上面那张图里的 2 步，就是下图的箭头这么走出来的：

6,16表示的是矩阵的索引编号。

image

那么，一直这么循环下去，最后会得到什么呢，也就是这样图：

image

最后得到的这个 distancdFromStart 矩阵，可以看出，从起始点到目标点[4,8]，需要走8步。

image

那怎么走呢？parent里表示出了路线，按照格子里所显示的索引坐标，倒回来追溯：

image

image

 

脚本主框架是从课程里拿出来的，算法实现部分我没考虑代码效率，只是为了大概理解算法：
```java
复制代码
%% % set up color map for display 
cmap = [1 1 1; ...% 1 - white - clear cell 
        0 0 0; ...% 2 - black - obstacle 
               1 0 0; ...% 3 - red = visited 
               0 0 1; ...% 4 - blue - on list 
               0 1 0; ...% 5 - green - start 
               1 1 0];% 6 - yellow - destination 
colormap(cmap); 
map = zeros(10); 
% Add an obstacle 
map (1:5, 7) = 2; 
map(6, 2) = 5; % start_coords 
map(4, 8) = 6; % dest_coords 
image(1.5,1.5,map); 
grid on; 
axis image; 
%% 
nrows = 10; 
ncols = 10; 
start_node = sub2ind(size(map), 6, 2); 
dest_node = sub2ind(size(map), 4, 8); 
% Initialize distance array 
distanceFromStart = Inf(nrows,ncols); 
distanceFromStart(start_node) = 0; 
% For each grid cell this array holds the index of its parent 
parent = zeros(nrows,ncols); 
% Main Loop 
while true 
 % Draw current map 
 map(start_node) = 5; 
 map(dest_node) = 6; 
 image(1.5, 1.5, map); 
 grid on; 
 axis image; 
 drawnow; 
  % Find the node with the minimum distance 
 [min_dist, current] = min(distanceFromStart(:)); 
  if ((current == dest_node) || isinf(min_dist)) 
       break; 
  end; 

 map(current) = 3; 
 distanceFromStart(current) = Inf; 
 [i, j] = ind2sub(size(distanceFromStart), current); 
neighbor = [i-1,j;... 
            i+1,j;... 
            i,j+1;... 
            i,j-1] 
outRangetest = (neighbor(:,1)<1) + (neighbor(:,1)>nrows) +...
                   (neighbor(:,2)<1) + (neighbor(:,2)>ncols ) 
locate = find(outRangetest>0); 
neighbor(locate,:)=[] 
neighborIndex = sub2ind(size(map),neighbor(:,1),neighbor(:,2)) 
for i=1:length(neighborIndex) 
if (map(neighborIndex(i))~=2) && (map(neighborIndex(i))~=3 && map(neighborIndex(i))~= 5) 
    map(neighborIndex(i)) = 4; 
  if distanceFromStart(neighborIndex(i))> min_dist + 1      distanceFromStart(neighborIndex(i)) = min_dist+1; 
        parent(neighborIndex(i)) = current; 
  end 
 end 
end 
end
%%
if (isinf(distanceFromStart(dest_node))) 
    route = []; 
else 
    %提取路线坐标
   route = [dest_node]; 
      while (parent(route(1)) ~= 0) 
              route = [parent(route(1)), route]; 
       end 
  % 动态显示出路线     
        for k = 2:length(route) - 1 
          map(route(k)) = 7; 
                pause(0.1); 
                image(1.5, 1.5, map); 
              grid on; 
              axis image; 
              end 
end

```
真要用这些搜索算法的话，可直接调用命令：http://www.mathworks.com/help/releases/R2015b/matlab/graph-and-network-algorithms.html