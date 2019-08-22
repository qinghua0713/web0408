

会计站项目

1：采用rem+媒体查询+less实现

less文件夹下的文件内容  【

adapter.less适配文件

index.less 首页对应less文件

mixin.less 混合文件

reset.less  重置样式文件

var.less 变量定义文件

】

rem适配方案不好维护  设备会更新 设计稿尺寸 预设基准值

咱们主要适配主流设备即可  十几种

**2:var.less 设置变量  设置适配主流设备的集合**

```css
@adapterDevideList: 750px ,720px,640px,540px,480px,424px,414px,400px,304px,375px,360px,320px;
```

```css
//设计稿尺寸
@psdWidth:750px
//预设基准值100px  
@baseFontSize:100px
    @len:length(@adapterDeviceList); length() 函数可以用来动态获取数组长度
```

**3:index.less文件中引入**adapter.less，mixin.less 混合文件，reset.less  重置样式文件，var.less 变量定义文件
**在index.html中引入index.less 不能直接用 必须引入less.min.js文件并且设置link  type='text/less'**

**4:在mixin.less文件中书写适配函数**

```css
.adapterMixin(@index)  when (@index > 0) {  //@index是序号 通过序号遍历
    //不用一个一个写  可以通过传参实现 less 没有循环语句 但是Sass有 
    //@media screen and (min-width:640px) {
       // font-size :100px/750px*640px;
   // }
   //  @media screen and (min-width:720px) {
     //   font-size :100px/750px*720px;
   // }
   
   // @media screen and (min-width:750px) {
    //    font-size :100px;
   // }
    @media (min-width:extract(@adapterDeviceList,@index)){
        html {
            font-size:@baseFontSize /@psdWidth*extract(@adapterDeviceList,@index);
        }
    }
   //我们可以利用迭代写法实现遍历设备宽度数组  死循环  根据数组长度停止循环
    //给函数执行附加条件
    .adapterMixin(@index-1)；
}
```

**4:在adapter.less文件中调用.adapterMixin()方法**



```
.adapterMixin(@len)  @index初始值12
```



### 1.1.1 **LESS 原理及使用方式**

本质上，LESS 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。LESS 并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。

 

### 1.1.2 **语法**模块

+ 变量  
+ Mixin混入
+ 嵌套
+ Import
+ 函数（内置函数 运算）

### 1.1.3 **变量**

LESS 允许开发者自定义变量，变量可以在全局样式中使用，变量使得样式修改起来更加简单。

```css
*/\*-----------------**变量**-----------------\*/

@mainColor:#E93223;
body{
  color: @mainColor;
}
```

 

### 1.1.4 **Mixin**混入

Mixin（混入）功能对用开发者来说并不陌生，很多动态语言都支持 Mixin（混入）特性，它是多重继承的一种实现，在 LESS 中，混入是指在一个 CLASS 中引入另外一个已经定义的 CLASS，就像在当前 CLASS 中增加一个属性一样。

```css
*/\*-----------------mixin* *混入**----------------\*/***

*/\***颜色***/*

.red{
  color: @mainColor;
}
.border{
  border: 1px solid #ccc;
}
.redBorder(){
  color: @mainColor;
  border: 1px solid #ccc;
}
.mixin-class{
  .red();
  .border();
}
.mixin-fuc{
  .redBorder();
}
```

 

### 1.1.5 **嵌套**

在我们书写标准 CSS 的时候，遇到多层的元素嵌套这种情况时，我们要么采用从外到内的选择器嵌套定义，要么采用给特定元素加 CLASS 或 ID 的方式

### &可以用于连接伪类选择器 :hover :first-child ::after之类的

*/\*------------------**嵌套**------------------\*/**/\***轮播图***/*****

**#wjs_banner**{
  .**carousel-inner**{
    > **div**.**item**{
      **a**.**img_box**{
        background: **url**(**"../images/slide_01_2000x410.jpg"**) **no-repeat center center**;
        height: 410**px**;
        */\***调用**redBorder mixin\*/*        display: **block**;
        .**redBorder**();
        */\***调用**@mainColor* *变量***/*        &:**hover**{
          color: @mainColor;
        }
      }
      **a**.**img_mobile**{
        width: 100%;
        display: **block**;
        **img**{
          width: 100%;
          display: **block**;
        }
      }
    }
  }
}

 

### 1.1.6 **Import 导入**

 

/*---------------------Import 引入------------------------*/
**@import** **"base"**;
.**f_left**{
  float: @right;
}

### 1.1.1 Less在浏览器上使用的方法**

```css
<link rel="stylesheet/less" type="text/css" href="styles.less" />

 <script src="less.js" type="text/javascript"></script>
```



### 1.1.1 **运算及函数**

在我们的 CSS 中充斥着大量的数值型的 value，比如 color、padding、margin 等，这些数值之间在某些情况下是有着一定关系的，那么我们怎样利用 LESS 来组织我们这些数值之间的关系呢？



```css




extract

    返回列表中指定位置的元素。

参数：

    list - 逗号或空格分隔的元素列表。
    index - 指定列表中元素位置的数字。

返回值：列表中指定位置的元素。

案例： extract(8px dotted red, 2);

输出： dotted

案例：

@list: apple, pear, coconut, orange;
value: extract(@list, 3);

输出：

value: coconut;




escape(@string); // 通过 URL-encoding 编码字符串

e(@string); // 对字符串转义

%(@string, values...); // 格式化字符串

unit(@dimension, [@unit: ""]); // 移除或替换属性值的单位

color(@string); // 将字符串解析为颜色值

data-uri([mimetype,] url); // * 将资源内嵌到css中，可能回退到url()

ceil(@number); // 向上取整

floor(@number); // 向下取整

percentage(@number); // 将数字转换为百分比，例如 0.5 -> 50%

round(number, [places: 0]); // 四舍五入取整

sqrt(number); // * 计算数字的平方根

abs(number); // * 数字的绝对值

sin(number); // * sin函数

asin(number); // * arcsin函数

cos(number); // * cos函数

acos(number); // * arccos函数

tan(number); // * tan函数

atan(number); // * arctan函数

pi(); // * 返回PI

pow(@base, @exponent); // * 返回@base的@exponent次方

mod(number, number); // * 第一个参数对第二个参数取余

convert(number, units); // * 在数字之间转换

unit(number, units); // * 不转换的情况下替换数字的单位

color(string); // 将字符串或者转义后的值转换成颜色

rgb(@r, @g, @b); // 转换为颜色值

rgba(@r, @g, @b, @a); // 转换为颜色值

argb(@color); // 创建 #AARRGGBB 格式的颜色值

hsl(@hue, @saturation, @lightness); // 创建颜色值

hsla(@hue, @saturation, @lightness, @alpha); // 创建颜色值

hsv(@hue, @saturation, @value); // 创建颜色值

hsva(@hue, @saturation, @value, @alpha); // 创建颜色值

hue(@color); // 从颜色值中提取 hue 值（色相）

saturation(@color); // 从颜色值中提取 saturation 值（饱和度）

lightness(@color); // 从颜色值中提取 'lightness' 值（亮度）

hsvhue(@color); // * 从颜色中提取 hue 值，以HSV色彩空间表示（色相）

hsvsaturation(@color); // * 从颜色中提取 saturation 值，以HSV色彩空间表示（饱和度）

hsvvalue(@color); // * 从颜色中提取 value 值，以HSV色彩空间表示（色调）

red(@color); // 从颜色值中提取 'red' 值（红色）

green(@color); // 从颜色值中提取 'green' 值（绿色）

blue(@color); // 从颜色值中提取 'blue' 值（蓝色）

alpha(@color); // 从颜色值中提取 'alpha' 值（透明度）

luma(@color); // 从颜色值中提取 'luma' 值（亮度的百分比表示法）

saturate(@color, 10%); // 饱和度增加 10%

desaturate(@color, 10%); // 饱和度降低 10%

lighten(@color, 10%); // 亮度增加 10%

darken(@color, 10%); // 亮度降低 10%

fadein(@color, 10%); // 透明度增加 10%

fadeout(@color, 10%); // 透明度降低 10%

fade(@color, 50%); // 设定透明度为 50%

spin(@color, 10); // 色相值增加 10

mix(@color1, @color2, [@weight: 50%]); // 混合两种颜色

greyscale(@color); // 完全移除饱和度，输出灰色

contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%]); // 如果 @color1 的 luma 值 > 43% 输出 @darkcolor，否则输出 @lightcolor

multiply(@color1, @color2);

screen(@color1, @color2);

overlay(@color1, @color2);

softlight(@color1, @color2);

hardlight(@color1, @color2);

difference(@color1, @color2);

exclusion(@color1, @color2);

average(@color1, @color2);

negation(@color1, @color2);

iscolor(@colorOrAnything); // 判断一个值是否是颜色

isnumber(@numberOrAnything); // 判断一个值是否是数字（可含单位）

isstring(@stringOrAnything); // 判断一个值是否是字符串

iskeyword(@keywordOrAnything); // 判断一个值是否是关键字

isurl(@urlOrAnything); // 判断一个值是否是url

ispixel(@pixelOrAnything); // 判断一个值是否是以px为单位的数值

ispercentage(@percentageOrAnything); // 判断一个值是否是百分数

isem(@emOrAnything); // 判断一个值是否是以em为单位的数值

isunit(@numberOrAnything, "rem"); // * 判断一个值是否是指定单位的数值
```

 

 

 

例子

*/\*-------------------**运算和函数**--------------------------\*/*@back:**#333**;
.**test**{
  border: 1**px solid** @back*2;
  background: **lighten**(**#000**, 10%);
  color:**darken**(**#000**, 10%);
}