## day04

### 布局第一大核心:盒模型（框模型）

![](E:\0408课堂代码\day04\笔记\media\盒模型示意.jpg)



盒模型宽度 = 左外边距宽度+右外边距宽度+有效内容宽度(width)+左边框宽度+右边框宽度+左内边距宽度+右内边距宽度

盒模型高度 = 上外边距高度+下外边距高度+有效内容高度(width)+左边框宽度+右边框宽度+左内边距宽度+右内边距宽度

![](E:\0408课堂代码\day04\笔记\media\盒模型案例.jpg)

### 1：边框（border）

```css
(1) border:边宽  形式(实线，虚线,小圆点，双实线)  颜色;
border-width : npx
border-style:边型  实线 solid  双实线  double 小圆点dotted 虚线dashed
border-color:颜色  red rgb()  #123456

border:1px solid red ;// 四条边框均一样  都是1px红色的实线边框
（2）boreder-top:1px solid yellow;
    border-bottom:2px solid blue;
    border-left:4px double brown;
    border-right:5px dashed pink;
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 引入样式表  挑选元素设置样式 -->
    <style>
        .box {
            width: 0px;
            height: 0px;
            
            /* 全部边框构成 边框盒子*/
            border-top: 5px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid deeppink;

        }
    </style>
</head>

<body>
    <div class="box"></div>
    <!-- src 链接一个地址  服务器   花费时间  网页加载变慢  用户体验不好  减少请求   css小三角技术（边框盒子） -->
    <img src="" alt=""> //不采用这个
</body>

</html>


```

## 2:内边距 (padding)

:smile_cat:指的是内容与边框的距离 (内减)

```css
.box {
    width:260px; // 300-20*2=260px
    height:260px; //300-20*2=260px
    padding:20px; //上下左右内边距均是20px   
    padding:10px 20px;
    padding:10px 20px 30px;
    padding；10px 20px 30px 40px;//顺时针
    padding-left:30px;
    padding-right:50px;
        
}
```

### 3：外边距(margin)

:smile_cat:调整盒子和盒子的距离 （移动盒子）

```css
margin:10px;
margin:20px 30px;
margin:20px 30px 40px;
margin:10px 20px 30px 40px;
marign-top:50px;
```

#### 外边距塌陷现象（合并）

![](E:\0408课堂代码\day04\笔记\media\外边距塌陷问题01.png)

**塌陷：盒子1和盒子2在垂直方向上进行外边距设置时 会取最大的外边距值作为最终的外边距值**

![](E:\0408课堂代码\day04\笔记\media\外边距塌陷02.png)

**现象：**当子元素设置上外边距时 父元素如果没有内边距和边框时 ，父元素会随着子元素一起下移，拥有子元素的外边距。

### 塌陷原因:BFC (Block  Format  Context  块级格式化上下文 （私有领域）)

三大类：块级元素  行内  行内块

块级元素： 独成一行  



BFC规则 ： 块级元素都拥有自己独立的领域 

**解决办法**：触发BFC规则 ，（创造私人领域）

1:父元素设置上内边距或者上边框

2：overflow:hidden      overflow:auto 溢出隐藏 （触发BFC规则）

3：float:left

4:position:absolute 



**当内边距和外边距同时可以解决问题时，优先使用内边距padding**

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

        .father {
            width: 300px;
            height: 400px;
            background-color:deeppink;
            /* padding-top:1px; */
            /* border-top:1px solid transparent; */
            overflow: hidden;
            /* 根据情况用  */
           
        }
        .father .child {
            width: 200px;
            height: 200px;
            background-color: green;
            margin-top:30px;
            /* 外边距塌陷现象  BFC  */
        }
    
    </style>
</head>
<body>
    <div class="father">
       <div class="child">

       </div>
    </div>
</body>
</html>
```

### 溢出隐藏（触发BFC）

​           overflow: hidden;

​           溢出：overflow

​          *有效 内容  滚动展示 ---》滚动条 scroll*

​          *没有用 就是故意不让用户看到  隐藏 hidden*

​          *auto 自动的  就是如果溢出这出现滚动条 如果没溢出这不出现滚动条* 

##  盒子水平居中（margin:0 auto）

文本水平和垂直居中:

text-align:center;

line-height：盒子高度;   

## 背景属性

```css
属性名:  background: 颜色  地址  是否平铺  位置(% px ) x ,y  背景是否卷曲
颜色: background-color:
地址  :background-image: url('地址')
是否平铺 : background-repeat: repeat （默认）/ no-repeat /repeat-x /repeat-y
位置:background-position: x y ;
 background-position: 30% 60%;  30% 60%是以图片自身的宽度做参考 不是大盒子的宽高
卷曲与否 :background-attachment: scroll（随着滚动条滚动）/fixed（固定不动） 
```





​          

​          