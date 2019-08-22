# H5+CSS3部分

## H5新增标签以及属性

![](C:\Users\Administrator\Desktop\c3+H5笔记\media\语义标签01.png)



![](C:\Users\Administrator\Desktop\c3+H5笔记\media\语义标签02.gif)

**结构标签**

```html
（1）<section></section> 独立内容模块 ，可以h1-h6组成大纲 ，表示文档结构，有章节、页眉、页脚或其他部分。

（2）article  （文章） 文章核心部分
 （3）aside 标签内容之外相辅的信息  侧边栏
（4）header 头部/标题
(5)footer 底部
(6)nav 导航
（7）<figure>标签 代替原来的li>img+p就是有文字有图片的区域

    </figure>
   <li>
       img
       p
   </li>



```





### IE使用新标签的兼容性处理

```html
 <script>
        /*1：手动创建语义化标签*/
        /*创建标签的*/

        /*先创建在使用*/
        /*  document.createElement('header');
          document.createElement('nav');*/
       /*   document.createElement('main');*/
         /* document.createElement('footer');
          document.createElement('aside');
          document.createElement('article');
          document.createElement('section');*/
  </script>
    <!--生成语义化标签  必须放在头部使用-->
2:<script src="html5shiv.min.js/html5shiv.js"></script>

```



less than 小于  great than 大于 小于lt  大于gt

## 新增的input type属性值：

| **类型******     | **使用示例******        | **含义******         |
| ---------------- | ----------------------- | -------------------- |
| **email******    | <input type="email">    | 输入邮箱格式         |
| **tel******      | <input type="tel">      | 输入手机号码格式     |
| **url******      | <input type="url">      | 输入url格式          |
| **number******   | <input type="number">   | 输入数字格式         |
| **search******   | <input type="search">   | 搜索框（体现语义化） |
| **range******    | <input type="range">    | 自由拖动滑块         |
| **time******     | <input type="time">     | 小时分钟             |
| **date******     | <input type="date">     | 年月日               |
| **datetime****** | <input type="datetime"> | 时间                 |
| **month******    | <input type="month">    | 月年                 |
| **week******     | <input type="week">     | 星期 年              |

##  

## 常用新属性

| **属性******         | **用法******                                   | **含义******                                                 |
| -------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **placeholder******  | <input type="text" placeholder="请输入用户名"> | 占位符  当用户输入的时候 里面的文字消失  删除所有文字，自动返回 |
| **autofocus******    | <input type="text" autofocus>                  | 规定当页面加载时 input 元素应该自动获得焦点                  |
| **multiple******     | <input type="file" multiple>                   | 多文件上传                                                   |
| **autocomplete****** | <input type="text" autocomplete="off">         | 规定表单是否应该启用自动完成功能  有2个值，一个是on 一个是off      on 代表记录已经输入的值  1.autocomplete 首先需要提交按钮 <br/>2.这个表单您必须给他名字 |
| **required******     | <input type="text" required>                   | 必填项  内容不能为空                                         |
| **accesskey******    | <input type="text" accesskey="s">              | 规定激活（使元素获得焦点）元素的快捷键   采用 alt + s的形式  |

```html
<form action="">
  <fieldset>
    <legend>个人信息表</legend>
   <!--get 方式可以看到参数  地址栏-->
<form action=""  method="get">
    <!--邮箱的验证  完整 的邮箱验证-->
    <label for="email">邮箱:</label><input type="email" name="email" id="email"><br>
      <!--网络地址的判断  不完整-->
    地址:<input type="url" name="url"><br>
    <!--数字  只有数字 可以是小数  min最小值 max最大值  step 增量  步长-->
    数字:<input type="number" max="100" min="1" step="3"><br>


    <!--pc端看不到效果 专门给移动端准备的  打开数字键盘的 只能输入数字
    可以这样做 当前文档拿电脑qq发到手机qq 拿 手机浏览器打开此文档 点文本框

    -->
    电话号:<input type="tel" ><br>
    <!--文本框  提高了用户体验-->
    请输入书籍名字: <input type="search"><br>

    <!--下拉列表 datalist 配合一个文本框使用 写+选   文本输入框写list属性 list= 关联的下拉列表的id -->


    <input type="text" list="course" id="student" name="student" >
    <datalist id="course">
        <option value="0">数学</option>
        <option value="1">语文</option>
        <option value="2">体育</option>
        <option value="3">音乐</option>
        <option value="4">美术</option>
        <option value="5">计算机</option>

    </datalist><br>


    <!--范围  默认是最大范围和最小范围中间值-->
    体重:<input type="range" min="90" max="130" value="120"><br>
    颜色:<input type="color"><br>
     <!--时分  时刻-->
    时间:<input type="time"><br>
    <!--年月日-->
    日期: <input type="date"><br>

    <!--datetime safiri支持  其他浏览器不支持-->
    具体时间: <input type="datetime"><br>
    <!--其他浏览器支持  年月日 + 时刻-->
    具体时间: <input type="datetime-local"><br>

    月份:<input type="month">
    星期: <input type="week">


    <input type="submit" value="提交">


</form>
  </fieldset>
</form>
```

### 课堂练习

![](C:\Users\Administrator\Desktop\c3+H5笔记\media\ktlx.png)

### 多媒体标签



- **audio：播放音频**

- HTML5通过<audio>标签来解决音频播放的问题。 并且可以通过附加属性可以更友好控制音频的播放，

  autoplay 自动播放

  controls 是否显不默认播放控件

  loop 循环播放   loop = 2 就是循环2次   loop  或者  loop = "-1"   无限循环


  由于版权等原因，不同的浏览器可支持播放的格式是不一样的，如下图供参考

![]()

  ### 多媒体 video

  HTML5通过<audio>标签来解决音频播放的问题。

  autoplay 自动播放

  controls 是否显示默认播放控件

  loop 循环播放

  poster="images/1.gif" 视频播放器的初始图片

  width 设置播放窗口宽度

  height 设置播放窗口的高度

  由于版权等原因，不同的浏览器可支持播放的格式是不一样的，如下图供参考



## css3

### 1：c3属性前缀

chrome 、Safiri 浏览器   ：    -webkit-  

FirFox : -moz-

IE: -ms-

opera : -o-

### 2：c3选择器

(1)**毗邻选择 和相邻选择器**

```css
/* E1 +  E2   毗邻选择器   E 代表元素   fun: 选择所有符合条件的 ---》 和E1紧紧相邻的E2元素 (下一个兄弟)
    p1 p3
    */
    .box + p {
        font-size: 40px;

    }
    /* ~ 相邻    E1 ~ E2 选择所有符合条件的在E1后的所有相邻E2元素  */
    .box ~ p {
        color: red;
    }
    
    </style>
</head>
<body>
    <div class="box" id="box"></div>
    <p>我是p元素1</p>
    <p>我是p元素2</p>

    <div class="box"></div>
    <p>我是p元素3</p>
</body>
```

(2)**属性选择器**

+ [class] fun:选择拥有class属性的元素
+ [class="a"]   fun": 选择所有class属性值为a的元素
+ [ class^="a"] fun: 选择符合条件class以a字符作为开头属性值的元素
+ [class*="a"]  fun: 选择的是class属性值包含a字符的元素
+ [class$="a"] fun: 选择符合条件class以a字符作为结尾属性值的元素

**适用:**

(3)结构伪类选择器

+ E:first-child  选择的是E的父元素中的第一个孩子并且要求这个孩子是E类型的 如果不是查找失败  如果是成功
+ E:nth-child(n) n是从0开始的正整数  n>=0 
+ E:last-child  选择的是E的父元素中的最后一个孩子并且要求这个孩子是E类型的 如果不是查找失败  如果是成功

### 3：c3常用属性

#### 背景属性

```css
      /* 背景属性 background:颜色 路径 平铺  位置  是否滚动 scroll(默认)/fixed 不滚动
        (1)background-color:# red rgba()
        (2)background-image:url()
        (3)background-repeat: repeat / no-repeat 
        (4)background-position: left  right top bottom left top / px px / % % 
        (5)background-attachment: scroll/fixed
         */

         /* 
         css3 
         1：多背景属性  功能：插入多张背景  background-image:url(),url(),url();
         2：背景图片放置位置 (内边框 边框 内容)
         background-origin:padding-box content-box border-box;   [ˈɔːrɪdʒɪn]
         3:背景尺寸
         background-size: wpx hpx/ % % 以背景盒子作为参考  / cover /contain ;
         cover:铺满 但是会显示不完整
         contain:完整显示 但是会留白 



         4:背景裁剪区域 background-clip:padding-box content-box border-box;


         5:背景渐变

         
          */
          /* background-image: url("../images/01.gif"),url("../images/02.gif"),url("../images/03.gif");
          background-repeat: no-repeat;
          background-position: left top, right bottom , center center ; */
      

          background-image: url('../images/01.gif');
          background-repeat: no-repeat;
          /* 背景图片的尺寸---》适应 背景盒子大小 */
          background-size:cover;
          background-origin:content-box;
          /* 溢出边框的背景裁减掉 */
          background-clip:content-box;



    }
    
```

#### 背景渐变属性 background-image

![](C:\Users\Administrator\Desktop\c3+H5笔记\media\线性渐变方向值.jpg)

 (1)线性渐变

```css
   线性渐变属性 banckground: linear-gradient(方向，颜色1 停止位置1 ,颜色2 停止位置2....)
          方向：  to left -90deg
                 to right +90deg
                 to bottom +180deg
                 to top 0deg
                135deg 左上角到右下角
                45deg 从左下角到右上角
```



​    重复线性渐变

  background: repeating-linear-gradient(-45deg, red 10%,yellow 20%); 

（2）径向渐变

​    重复径向渐变 

```css
 <style>
    .box {
        width: 300px;
        height: 200px;
        border: 1px solid #000;
        margin: 0 auto;
        /* background: radial-gradient(circle farthest-corner at 100px 50px  , blue ,red) */
        /* background: radial-gradient(ellipse closest-corner at center center , yellow 20% ,red 50%); */
   
        background: repeating-radial-gradient(farthest-side at 40px 50px ,#fff 10% ,#000 20%)
    }
    /* (形状 大小 坐标,颜色)  */
    </style>
</head>
<body>
    <!-- 径向渐变  background:radial-gradient() 
    (1)形状  圆形 circle （默认） 椭圆  ellipse 
    当盒子是正方形时候circle 和ellipse是一样的形状 都是圆形
    在长方形的时候 circle圆形渐变 ellipse 椭圆形的渐变
    (2) 大小 size    closest-corner 最近的角
                     closest-side 最近的边
                     farthest-corner 最远的角(默认值)
                     farthest-side 最远的边
    (3)径向的中心位置 at position  30px 40px   默认在中心点
    
    (4)颜色 位置
    -->


    <div class="box"></div>
```



### 新盒模型

**盒模型宽度 = width 不用内减   width包含padding和border**



 

```csss
box-sizing:border-box;//声明新盒模型
box-sizing: content-box //声明旧盒模型

```





## 移动端布局之弹性盒（flex Box）



Web 应用的样式设计中，布局是非常重要的一部分。布局用来确定页面上不同组件和元素的尺寸和位置。随着响应式用户界面的流行，Web 应用一般都要求适配不同的设备尺寸和浏览器分辨率。响应式用户界面设计中最重要的一环就是布局。需要根据窗口尺寸来调整布局，从而改变组件的尺寸和位置， 以达到最佳的显示效果。这也使得布局的逻辑变得更加复杂。弹性盒模型可以用简单的方式满足很多常见的复杂的布局需求。该布局模型在主流浏览器中都得到了支持。

### 传统布局的局限性:



## 简介

引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的条目进行排列、 对齐和分配空白空间。

##### 图 1. 弹性盒布局模型相关的概念

![弹性盒布局模型相关的概念](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/image002.jpg)

弹性盒布局的容器（flex container）指的是采用了弹性盒布局的 DOM 元素，而弹性盒布局的条目（flex item）指的是容器中包含的子 DOM 元素。图中的最外围的边框表示的是容器，而编号 1 和 2 的边框表示的是容器中的条目。

所有代码示例中，容器的 CSS 类名统一为 flex-container，而条目的 CSS 类名则为 flex-item。

## 基本布局

首先从最基本的布局开始介绍弹性盒布局模型。要实现的布局效果是一个简单的图片缩略图预览页面。

##### 简单的图片缩略图预览页面的 HTML 代码

```html
<ul class="flex-container">
   <li class="flex-item"><img src="http://placehold.it/300&text=1"></li>
   <li class="flex-item"><img src="http://placehold.it/300&text=2"></li>
   <li class="flex-item"><img src="http://placehold.it/300&text=3"></li>
   <li class="flex-item"><img src="http://placehold.it/300&text=4"></li>
   <li class="flex-item"><img src="http://placehold.it/300&text=5"></li>
   <li class="flex-item"><img src="http://placehold.it/300&text=6"></li>
</ul>
```

该页面的基本 HTML 是很简单的。在一个<ul>元素下面有 6 个<li>元素。每个<li>元素中包含一个大小为 300x300 的缩略图图片。<ul>元素作为弹性盒布局的容器，而<li>元素则是容器中的条目。

##### 简单的图片缩略图预览页面的 CSS 代码

```css
.flex-container {
   list-style: none;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}

.flex-item {
   padding: 5px;
}
```


在代码2 中，对于弹性盒布局的容器，使用"display: flex"声明使用弹性盒布局。CSS 属性声明"flex-direction"用来确定主轴的方向，从而确定基本的条目排列方式。"flex-direction"属性的可选值及其含义如[表](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%201.%E2%80%9Cflex-direction%E2%80%9D%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E9%80%89%E5%80%BC%E5%8F%8A%E5%85%B6%E5%90%AB%E4%B9%89)[1](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%201.%5C%E2%80%9Cflex-direction%5C)所示。

##### 表 1. “flex-direction”属性的可选值及其含义

| 属性值         | 含义                                                         |
| -------------- | ------------------------------------------------------------ |
| row（默认值）  | 主轴为水平方向。排列顺序与页面的文档顺序相同。如果文档顺序是 ltr，则排列顺序是从左到右；如果文档顺序是 rtl，则排列顺序是从右到左。 |
| row-reverse    | 主轴为水平方向。排列顺序与页面的文档顺序相反。               |
| column         | 主轴为垂直方向。排列顺序为从上到下。                         |
| column-reverse | 主轴为垂直方向。排列顺序为从下到上。                         |

默认情况下，弹性盒容器中的条目会尽量占满容器在主轴方向上的一行。当容器的主轴尺寸小于其 所有条目总的主轴尺寸时，会出现条目之间互相重叠或超出容器范围的现象。CSS 属性"flex-wrap"用来声明当容器中条目的尺寸超过主轴尺寸时应采取的行为。"flex-wrap"属性的可选值及其含义如[表](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%201.%E2%80%9Cflex-direction%E2%80%9D%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E9%80%89%E5%80%BC%E5%8F%8A%E5%85%B6%E5%90%AB%E4%B9%89)[2](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%202.%5C%E2%80%9Cflex-wrap%5C)所示。

##### 表 2. “flex-wrap”属性的可选值及其含义

| 属性值           | 含义                                                         |
| ---------------- | ------------------------------------------------------------ |
| nowrap（默认值） | 容器中的条目只占满容器在主轴方向上的一行，可能出现条目互相重叠或超出容器范围的现象。 |
| wrap             | 当容器中的条目超出容器在主轴方向上的一行时，会把条目排列到下一行。下一行的位置与交叉轴的方向一致。 |
| wrap-reverse     | 与 wrap 的含义类似，不同的是下一行的位置与交叉轴的方向相反。 |

可以使用"flex-flow"属性把"flex-direction"和"flex-wrap"结合起来，如下代码所示。

#####  3. “flex-flow”属性的使用示例

```css
flex-flow: row wrap;
```

## 容器中的条目

除了弹性盒布局模型中的容器之外，容器中的条目也可以通过 CSS 属性来改变其布局行为。下面介绍容器中的条目可以使用的 CSS 属性声明。

### 条目的顺序

默认情况下，容器中条目的顺序取决于它们在 HTML 标记代码中的出现顺序。可以通过"order"属性来改变条目在容器中的出现顺序。对于代码中的 HTML 标记添加4中的 CSS 声明，运行之后的效果是最后一个<li>元素出现在了其他<li>元素的最前面。

##### 4 “order”属性的使用示例

```
.flex-item:last-child {
   order: -1;
}
```

"order"属性的主要作用是**兼顾**页面的样式和可访问性。支持可访问性的设备，如屏幕阅读器，都是按照 HTML 中代码的顺序来读取元素的。这就要求一些相对重要的文本出现在 HTML 标记的前面。而对于使用浏览器的一般用户来说，在某些情况下把一些相对不重要的图片显示在前面是更好的选择。比如在一个商品的展示页面中，在源代码中把商 品描述的文本放在商品图片之前。这样可以方便屏幕阅读器的读取；而在 CSS 中使用"order"属性把图片放在文本的前面。这样可以让用户首先看到图片。

### 条目尺寸的弹性

弹 性盒布局模型的核心在于容器中条目的尺寸是弹性的。容器可以根据本身尺寸的大小来动态地调整条目的尺寸。当容器中有空白空间时，条目可以扩展尺寸以占据额 外的空白空间；当容器中的空间不足时，条目可以缩小尺寸以防止超出容器范围。条目尺寸的弹性由 3 个 CSS 属性来确定，分别是"flex-basis"、"flex-grow"和"flex-shrink"。

"flex-basis"属性声明接 受的值与"width"属性是一样的，用来确定弹性条目的初始主轴尺寸。这是条目的尺寸被容器调整之前的初始值。如果"flex-basis"的值为 auto，则实际使用的值是主轴尺寸属性的值，即 width 或 height 属性的值。如果主轴尺寸属性的值也是 auto，则使用的值由条目内容的尺寸来确定。

"flex-grow"属性的值是一个没有单位的非负数，默认值是 1。"flex-grow"属性的值表示的是当容器有多余的空间时，这些空间在不同条目之间的分配比例。比如，一个容器中有 3 个条目，其"flex-grow"属性的值分别为 1，2 和 3，那么当容器中有空白空间时，这 3 个条目所获得的额外空白空间分别占全部空间的 1/6、1/3 和 1/2，如[代码](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E6%B8%85%E5%8D%95%205.%5C%E2%80%9Cflex-grow%5C)[清单 5](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E6%B8%85%E5%8D%95%205.%E2%80%9Cflex-grow%E2%80%9D%E5%B1%9E%E6%80%A7%E7%9A%84%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)所示。预览的页面见[这里](http://codepen.io/alexcheng/full/fpyHC)。

##### 清单 5. “flex-grow”属性的使用示例

```
.flex-item:nth-child(1) {
   flex-grow: 1;
}

.flex-item:nth-child(2) {
   flex-grow: 2;
}

.flex-item:nth-child(3) {
   flex-grow: 3;
}
```

"flex-shrink"属性在使用上类似于"flex-grow"。该属性的值也是无单位的，表示的是当容器的空间 不足时，各个条目的尺寸缩小的比例。在进行尺寸缩小时，条目的缩小比例与"flex-basis"的值相乘之后，就得到了应该缩小的尺寸的实际值。例如， 在容器中有 3 个条目，其"flex-shrink"属性的值分别为 1，2 和 3。每个条目的主轴尺寸均为 200px。当容器的主轴尺寸不足 600px 时，比如变成了 540px 之后， 则需要缩小的尺寸 60px 由 3 个条目按照比例来分配。3 个条目分别要缩小 10px、20px 和 30px，主轴尺寸分别变为 190px、180px 和 170px。预览的页面见[这里](http://codepen.io/alexcheng/full/izbxc)。

**使 用属性"flex"可以同时声明"flex-basis"、"flex-grow"和"flex-shrink"的值**，格式是"none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]"。该属性的值的 3 个组成部分的初始值分别是"0 1 auto"。当属性"flex"的值为 none 时，相当于"0 0 auto"。当组成部分"flex-basis"被省略时，其值为 0%。[代码](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E6%B8%85%E5%8D%95%206.%E5%B1%9E%E6%80%A7%5C%E2%80%9Cflex%5C)[清单 6](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E6%B8%85%E5%8D%95%206.%E5%B1%9E%E6%80%A7%E2%80%9Cflex%E2%80%9D%E7%9A%84%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)给出了属性"flex"的使用示例。

##### 清单 6. 属性“flex”的使用示例

```css
.flex-item:nth-child(1) {
   flex: 1 1 auto;
}

flex: 1;  // flex-grow 的值为 1，flex-shrink 的值为 1，flex-basis 的值为 0%。
```

需要注意的是，在容器分配额外空间时是以"行"为单位的。容器先根据"flex-wrap"的属性值来确定是单行布局或多行布局，然后把条目分配到对应的行中，最后在每一行内进行空白空间的分配。如[代码清单 7](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E6%B8%85%E5%8D%95%207.%E5%A4%9A%E8%A1%8C%E5%B8%83%E5%B1%80%E7%9A%84%20CSS%20%E5%A3%B0%E6%98%8E)中的 CSS 声明示例，在容器中有 4 个条目。

##### 清单 7. 多行布局的 CSS 声明

```css
.flex-container {
 width: 990px;
}

.flex-item {
 width: 300px;
 flex: auto;
}
```

由于容器的宽度只有 990px，所以在一行中只能排列 3 个条目，而剩下的 1 个条目则会被排列到单独的一行中。在 3 个条目的行中，多余的空间 90px 被平均分配给 3 个条目；而在一个条目单独的行中，多余的 690px 被该条目完全占据。

### 条目对齐

当容器中的条目的尺寸确定之后，可以设置这些条目在容器中的对齐方式。对齐条目的方式有 3 种。

第一种方式是使用自动空白边，即"margin: auto"。在使用自动空白边时，容器中额外的空白空间会被声明为 auto 的空白边占据，如[代码清单 8](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E6%B8%85%E5%8D%95%208.%E4%BD%BF%E7%94%A8%E8%87%AA%E5%8A%A8%E7%A9%BA%E7%99%BD%E8%BE%B9%E8%BF%9B%E8%A1%8C%E6%9D%A1%E7%9B%AE%E5%AF%B9%E9%BD%90)所示。CSS 声明 profile 中通过"margin-left: auto"使得该条目左边的空白边会占据额外的空间，从而"Profile"文本会靠右显示。预览的页面见[这里](http://codepen.io/alexcheng/full/xtDJu)。

##### 清单 8. 使用自动空白边进行条目对齐

```
<div class="flex-container">
  <div class="logo">Logo</div>
  <div class="profile">Profile</div>
</div>
.flex-container {
  display: flex;
}
.profile {
  margin-left: auto;
}
```

第二种方式是在主轴方向上的对齐。这是通过容器上的"justify-content"属性来进行设置，可以调整条目在 主轴方向上的对齐方式。这种条目对齐方式的调整发生在修改条目的弹性尺寸和处理自动空白边之后。当容器中的一行中的条目没有弹性尺寸，或是已经达到了它们 的最大尺寸时，在这一行上可能还有额外的空白空间。使用"justify-content"属性可以分配这些空间。该属性还可以控制当条目超出行的范围时 的对齐方式。"justify-content"属性的可选值和含义如[表](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%201.%E2%80%9Cflex-direction%E2%80%9D%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E9%80%89%E5%80%BC%E5%8F%8A%E5%85%B6%E5%90%AB%E4%B9%89)[3](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%203.%5C%E2%80%9Cjustify-content%5C)所示，实际的布局效果见[图 2](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E5%9B%BE%202.%E2%80%9Cjustify-content%E2%80%9D%E5%B1%9E%E6%80%A7%E4%B8%8D%E5%90%8C%E5%80%BC%E7%9A%84%E5%B8%83%E5%B1%80%E6%95%88%E6%9E%9C)。

##### 表 3. “justify-content”属性的可选值和含义

| 属性值        | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| flex-start    | 条目集中于该行的起始位置。第一个条目与其所在行在主轴起始方向上的边界保持对齐，其余的条目按照顺序依次排列。 |
| flex-end      | 条目集中于该行的结束方向。最后一个条目与其所在行在主轴结束方向上的边界保持对齐，其余的条目按照顺序依次排列。 |
| center        | 条目集中于该行的中央。条目都往该行的中央排列，在主轴起始方向和结束方向上留有同样大小的空白空间。如果空白空间不足，则条目会在两个方向上超出同样的空间。 |
| space-between | 第一个条目与其所在行在主轴起始方向上的边界保持对齐，最后一个条目与其所在行在主轴结束方向上的边界保持对齐。空白空间在条目之间平均分配，使得相邻条目之间的空白尺寸相同。 |
| space-around  | 类似于 space-between，不同的是第一个条目和最后一个条目与该行的边界之间同样存在空白空间，该空白空间的尺寸是条目之间的空白空间的尺寸的一半。 |

##### 



第 三种方式是交叉轴方向上的对齐。除了在主轴方向上对齐之外，条目也可以在交叉轴方向上对齐。容器上的属性"align-items"用来设置容器中所有条 目在交叉轴上的默认对齐方向，而条目上的属性"align-self"用来覆写容器指定的对齐方式。属性"align-items"的可选值和含义如[表](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%201.%E2%80%9Cflex-direction%E2%80%9D%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E9%80%89%E5%80%BC%E5%8F%8A%E5%85%B6%E5%90%AB%E4%B9%89)[4](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%204.%E5%B1%9E%E6%80%A7%5C%E2%80%9Calign-items%5C)所示，实际的布局效果见[图 3](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E5%9B%BE%203.%E5%B1%9E%E6%80%A7%E2%80%9Calign-items%E2%80%9D%E4%B8%8D%E5%90%8C%E5%80%BC%E7%9A%84%E5%B8%83%E5%B1%80%E6%95%88%E6%9E%9C)。

##### 表 4. 属性“align-items”的可选值和含义

| 属性值     | 含义                                                         |
| ---------- | ------------------------------------------------------------ |
| flex-start | 条目与其所在行在交叉轴起始方向上的边界保持对齐。             |
| flex-end   | 条目与其所在行在交叉轴结束方向上的边界保持对齐。             |
| center     | 条目的空白边盒子（margin box）在交叉轴上居中。如果交叉轴尺寸小于条目的尺寸，则条目会在两个方向上超出相同大小的空间。 |
| baseline   | 条目在基准线上保持对齐。在所有条目中，基准线与交叉轴起始方向上的边界距离最大的条目，它与所在行在交叉轴方向上的边界保持对齐。 |
| stretch    | 如果条目的交叉轴尺寸的计算值是"auto"，则其实际使用的值会使得条目在交叉轴方向上尽可能地占满。 |

属性"align-self"的可选值除了表中列出的之外，还可以设置为"auto"。当"align-self"的值为 auto 时，其计算值是父节点的属性"align-items"的值。如果该节点没有父节点，则计算值为"stretch"。

##### 图 3. 属性“align-items”不同值的布局效果



### 交叉轴空白处理

当 容器在交叉轴方向上有空白空间时，属性"align-content"用来对齐容器中的行。该属性的作用类似于"justify-content"，只不 过"justify-content"是在主轴方向上对齐行中的条目。当容器中只有单行时，该属性不起作用。属性"align-content"的可选值 和含义如[表](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%201.%E2%80%9Cflex-direction%E2%80%9D%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E9%80%89%E5%80%BC%E5%8F%8A%E5%85%B6%E5%90%AB%E4%B9%89)[5](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E8%A1%A8%205.%E5%B1%9E%E6%80%A7%5C%E2%80%9Calign-content%5C)所示，实际的布局效果见[图 4](http://www.ibm.com/developerworks/cn/web/1409_chengfu_css3flexbox/#_%E5%9B%BE%204.%E5%B1%9E%E6%80%A7%E2%80%9Calign-content%E2%80%9D%E7%9A%84%E4%B8%8D%E5%90%8C%E5%80%BC%E7%9A%84%E5%B8%83%E5%B1%80%E6%95%88%E6%9E%9C)。

##### 表 5. 属性“align-content”的可选值和含义

| 属性值        | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| flex-start    | 行集中于容器的交叉轴起始位置。第一行与容器在交叉轴起始方向上的边界保持对齐，其余行按照顺序依次排列。 |
| flex-end      | 行集中于容器的交叉轴结束位置。第一行与容器在交叉轴结束方向上的边界保持对齐，其余行按照顺序依次排列。 |
| center        | 行集中于容器的中央。行都往容器的中央排列，在交叉轴起始方向和结束方向上留有同样大小的空白空间。如果空白空间不足，则行会在两个方向上超出同样的空间。 |
| space-between | 行在容器中均匀分布。第一行与容器在交叉轴起始方向上的边界保持对齐，最后一行与容器在交叉轴结束方向上的边界保持对齐。空白空间在行之间平均分配，使得相邻行之间的空白尺寸相同。 |
| space-around  | 类似于 space-between，不同的是第一行条目和最后一个行目与容器行的边界之间同样存在空白空间，而该空白空间的尺寸是行目之间的空白空间的尺寸的一半。 |
| stretch       | 伸展行来占满剩余的空间。多余的空间在行之间平均分配，使得每一行的交叉轴尺寸变大。 |



## 应用示例

下面通过一个示例来具体说明弹性盒布局在实际开发中的应用。该示例是一个博客帖子的典型页面布局。在展示一个博客帖子时，页面上通常包括标题、发表者、日期和时间、评论数量、正文、插图、评论列表等元素。这些元素基本上按照从上到下的顺序依次排列。

```html
<div class="post">
  <h1>This is my first blog post</h1>
  <div class="post-meta">
    <div class="author">Alex Cheng</div>
    <div class="datetime">2014-07-02 10:10 am</div>
    <div class="comments-count">2 comments</div>
  </div>
  <div class="post-body">
My first blog post.

  </div>
  <div class="post-image">
    <img src="http://placehold.it/500x200&text=1">
  </div>
  <div class="post-comments">
    <h3>Comments</h3>
    <ul>

<li><div class="author">Bob</div><div>This is a good post.</div></li>
 <li><div class="autho">David</div><div>Good post.</div></li>

    </ul>  
  </div>
</div>
```

##### 清单 10. 博客页面的 CSS 代码

```css
.post {
  display: flex;
  flex-flow: column wrap;
}
.post-meta {
  display: flex;
  flex-flow: row wrap;
  order: 1;
}
.post-body {
  order: 3;
}
.post-comments {
  order: 4;
}
.comments-count {
  margin-left: auto;
}
.post-image {
  order: 2;
  align-self: center;
}
```

该示例中主要使用了"order"属性来改变条目的显示位置，以及使用"align-self"来使得图片居中显示。

### 移动端布局

#### 像素单位（相对单位）以下是1英寸下 像素分布为10的分布图

#### PPI（Pixels Per Inch）每一英寸的像素数量称为 像素密度。

![](C:\Users\Administrator\Desktop\c3+H5笔记\media\像素单位.png)

**Retina即视网膜屏幕，苹果注册的命名方式，意思是具有高PPI的屏幕 一般大于320px**

## CSS3动画

### 一：过渡

过渡（transition)是CSS3中具有颠覆性的特征之一，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

帧动画：通过一帧一帧的画面按照固定顺序和速度播放。

![](C:\Users\ibm\Desktop\c3+H5笔记\media\zdh.gif)

 补间动画是各个状态的连接（关键帧）

![](C:\Users\ibm\Desktop\c3+H5笔记\media\bjdh.gif)

语法格式:

```
transition: 要过渡的属性  花费时间  运动曲线  何时开始;
```

| 属性                       | 描述                                         | CSS  |
| -------------------------- | -------------------------------------------- | ---- |
| transition                 | 简写属性，用于在一个属性中设置四个过渡属性。 | 3    |
| transition-property        | 规定应用过渡的 CSS 属性的名称。              | 3    |
| transition-duration        | 定义过渡效果花费的时间。默认是 0。           | 3    |
| transition-timing-function | 规定过渡效果的时间曲线。默认是 "ease"。      | 3    |
| transition-delay           | 规定过渡效果何时开始。默认是 0。             | 3    |

![](C:\Users\ibm\Desktop\c3+H5笔记\media\ydqx.png)

![](C:\Users\ibm\Desktop\c3+H5笔记\media\运动曲线参数.png)

### 二：变形

## 2D 转换

![](C:\Users\ibm\Desktop\c3+H5笔记\media\bxjr.png)

 2D 转换方法：

- translate()

  ![](C:\Users\ibm\Desktop\c3+H5笔记\media\py.png)

  使用translate方法来将文字或图像在水平方向和垂直方向上分别垂直移动50像素。

  可以改变元素的位置，x、y可为负值；

  ```css
   translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）
   translateX(x)仅水平方向移动（X轴移动）
   translateY(Y)仅垂直方向移动（Y轴移动）
  ```

  :smiling_imp:案例： 盒子居中

- rotate()

- ![](C:\Users\ibm\Desktop\c3+H5笔记\media\xz.png)

  可以对元素进行旋转，正值为顺时针，负值为逆时针；

  1. 当元素旋转以后，坐标轴也跟着发生的转变

  2. 调整顺序可以解决，把旋转放到最后

  3. 注意单位是 deg 度数

     **:smiling_imp:案例：旋转美女**

- scale()

- ![](C:\Users\ibm\Desktop\c3+H5笔记\media\sf.png)


  ```css
  transform:scale(0.8,1);
  ```

  可以对元素进行水平和垂直方向的缩放。该语句使用scale方法使该元素在水平方向上缩小了20%，垂直方向上不缩放。

  ```
  scale(X,Y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）
  scaleX(x)元素仅水平方向缩放（X轴缩放）
  scaleY(y)元素仅垂直方向缩放（Y轴缩放）
  ```

   scale()的取值默认的值为1，当值设置为0.01到0.99之间的任何值，作用使一个元素缩小；而任何大于或等于1.01的值，作用是让元素放大

- skew()

- ![](C:\Users\ibm\Desktop\c3+H5笔记\media\qx.png)



```css
transform:skew(30deg,0deg);
```

该实例通过skew方法把元素水平方向上倾斜30度，处置方向保持不变。

可以使元素按一定的角度进行倾斜，可为负值，第二个参数不写默认为0。

5.transform-origin可以调整元素转换的原点

```css
div{transform-origin: left top;transform: rotate(45deg); }  /* 改变元素原点到左上角，然后进行顺时旋转45度 */    
```

transform-origin 属性允许您改变被转换元素的位置。

2D 转换元素能够改变元素 x 和 y 轴。3D 转换元素还能改变其 Z 轴。



## 三：3D变形

![](C:\Users\ibm\Desktop\c3+H5笔记\media\zbx.jpg)

左手坐标系

伸出左手，让拇指和食指成“L”形，大拇指向右，食指向上，中指指向前方。这样我们就建立了一个左手坐标系，拇指、食指和中指分别代表X、Y、Z轴的正方向。

### rotateX() 

 就是沿着 x 立体旋转.

![](C:\Users\ibm\Desktop\c3+H5笔记\media\xxz.jpg)

```css
img {
  transition:all 0.5s ease 0s;
}
img:hove {

  transform:rotateX(180deg);
}
```

### rotateY()

沿着y轴进行旋转

![](C:\Users\ibm\Desktop\c3+H5笔记\media\yxz.jpg)

```css
img {
  transition:all 0.5s ease 0s;
}
img:hove {

  transform:rotateX(180deg);
}
```

### rotateZ()

沿着z轴进行旋转

![](C:\Users\ibm\Desktop\c3+H5笔记\media\zxz.gif)

```css
img {
  transition:all .25s ease-in 0s;
}
img:hover {
  /* transform:rotateX(180deg); */
  /* transform:rotateY(180deg); */
  /* transform:rotateZ(180deg); */
  /* transform:rotateX(45deg) rotateY(180deg) rotateZ(90deg) skew(0,10deg); */
}
```

### 透视(perspective)

电脑显示屏是一个2D平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现，通过透视可以实现此目的。

透视可以将一个2D平面，在转换的过程当中，呈现3D效果。

注：并非任何情况下需要透视效果，根据开发需要进行设置。

perspective有两种写法

1. 作为一个属性，设置给父元素，作用于所有3D转换的子元素
2. 作为transform属性的一个值，做用于元素自身

理解透视距离原理：

![](C:\Users\ibm\Desktop\c3+H5笔记\media\ts.png)

### 3D呈现（transform-style）

设置内嵌的元素在 3D 空间如何呈现，这些子元素必须为转换元素。

flat：所有子元素在 2D 平面呈现

preserve-3d：保留3D空间

3D元素构建是指某个图形是由多个元素构成的，可以给这些元素的父元素设置transform-style: preserve-3d来使其变成一个真正的3D图形。

一般而言，该声明应用在3D变换的兄弟元素们的父元素上。

:smile:旋转立方体盒子

![](C:\Users\ibm\Desktop\c3+H5笔记\media\lft.gif)

## 动画(CSS3)

动画是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

![](C:\Users\ibm\Desktop\c3+H5笔记\media\dh.png)

语法格式：

```css
animation:动画名称 动画时间 运动曲线  何时开始  播放次数  是否反方向;
```

:smile:小球运动

