# day07

## 一：图片下间隙问题

**现象：图片和包裹它的盒子会有下间隙**

**原因：** 图片是文字  ---》以基线对齐---》间隙 ？ 就是文字基线和底线的一个距离

**间隙默认3px    是否可变？ **

**一定是可变的  文字越大间隙越大  ---》 文字越大，基线和底线的距离也就越大**



## 解决方法：

1:display:block;

2:不让它以基线对齐  ----》底线  顶线  中线  随意一个就可以解决 vertical-align:top/middle/bottom

3:文字行高为0  文字大小也为0  ---》装图片的盒子设置   font-size:0  line-height:0 

## 二：透明度

1：背景透明 内容不透明  background:rgba()

2:背景透明 内容透明  background:#000;opacity:0-1 **[[əʊˈpæsəti]]**



## 三：多列布局

### 1：圣杯（中间容器自适应，左右两侧容器固定宽度）

注意点：

1：集中中心区域 考虑中心区域如何自适应？ （设置%宽度）

2：中心区域100%合适  左右两侧盒子想办法放上去 

3：中间区域的盒子写到html最前面 其余 就该左和右

4:让三个区域同时浮动，左右盒子被折行到中间盒子底下 并排 

5：利用外间距将左侧盒子向左移动-100%宽度  右侧盒子向左侧移动-自身的宽度 -----》？中间盒子内容被左侧盒子盖住了 ---》 给最大的盒子设置左右两侧内间距padding 目的就是把中间盒子内容挤到中间盒子来----》 整个大盒子变小 ---》 把左侧盒子利用相对定位left=-自身的宽度移到左侧 ，右侧盒子同理 



```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        body {
            /* 最小宽度是700px pc端  */
            min-width: 700px;
        }
        .center,.left,.right {
            /* 最小高度300px */
            min-height: 300px;
            float: left;


        }

        .center {
            width: 100%;
            height: 400px;
            background-color: red;

           
        }
        .left {
            width: 200px;
            height: 400px;
            background-color: yellow;
            /* 向左走100% 左外间距-100% */
            margin-left: -100%;
            position: relative;
            left: -200px;

        }
        .right {
            position: relative;
            width: 220px;
            height: 400px;
            background-color: green;
            margin-left: -220px;
            right: -220px;
        }
        .container {
            padding: 0 220px 0 200px;
        }
    </style>
</head>

<body>
    <!-- container 盒子 内容 容器 -->
    <div class="container">
        <!-- 中间盒子 自适应 必须写在结构最前面 -->
        <div class="center">圣杯（San-greal）是在公元33年，犹太历尼散月十四日，也就是耶稣受难前的逾越节晚餐上，耶稣遣走加略人犹大后和11个门徒所使用的一个葡萄酒杯子。耶稣曾经拿起这个杯子吩咐门徒喝下里面象征他的血的红葡萄酒，借此创立了受难纪念仪式。后来有些人认为这个杯子因为这个特殊的场合而具有某种神奇的能力。相传彼世安温的魔法炉则是圣杯的前身。
                很多传说相信，如果能找到这个圣杯而喝下其盛过的水就将返老还童、死而复生并且获得永生，这个传说广泛延续到很多文学、影视、游戏等作品中。</div>
        <!-- 固定宽度 -->
        <div class="left">圣杯（San-greal）是在公元33年，犹太历尼散月十四日，也就是耶稣受难前的逾越节晚餐上，耶稣遣走加略人犹大后和11个门徒所使用的一个葡萄酒杯子。耶稣曾经拿起这个杯子吩咐门徒喝下里面象征他的血的红葡萄酒，借此创立了受难纪念仪式。后来有些人认为这个杯子因为这个特殊的场合而具有某种神奇的能力。相传彼世安温的魔法炉则是圣杯的前身。
                很多传说相信，如果能找到这个圣杯而喝下其盛过的水就将返老还童、死而复生并且获得永生，这个传说广泛延续到很多文学、影视、游戏等作品中。</div>
        <!-- 固定宽度 -->
        <div class="right">圣杯（San-greal）是在公元33年，犹太历尼散月十四日，也就是耶稣受难前的逾越节晚餐上，耶稣遣走加略人犹大后和11个门徒所使用的一个葡萄酒杯子。耶稣曾经拿起这个杯子吩咐门徒喝下里面象征他的血的红葡萄酒，借此创立了受难纪念仪式。后来有些人认为这个杯子因为这个特殊的场合而具有某种神奇的能力。相传彼世安温的魔法炉则是圣杯的前身。
                很多传说相信，如果能找到这个圣杯而喝下其盛过的水就将返老还童、死而复生并且获得永生，这个传说广泛延续到很多文学、影视、游戏等作品中。</div>



    </div>
</body>

</html>
```



### 2：双飞翼布局（左右固定宽 ，中间自适应）

```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    
    * {
        padding: 0;
        margin: 0;
    }
    .center {
        width: 100%;
        height: 500px;
        background-color: aqua;
        float: left;
    }
    .left {
        width: 200px;
        height: 500px;
        background-color: green;
        float: left;
        margin-left: -100%;
    }
    .right {
        width: 230px;
        height: 500px;
        background-color: yellow;
        float: left;
        margin-left: -230px;
    }
    /* 和圣杯布局的不同点:双飞翼要额外增加标签  
    
    
    
     */
    .centerInner {
        margin: 0 230px 0 200px;
    }
    
    </style>
</head>
<body>
    <div class="bigBox">
         <div class="center">

            <div class="centerInner">
             中间盒子
            </div>
            
            </div>
         <div class="left">左测盒子</div>
         <div class="right">右侧盒子</div>


    </div>
</body>
</html>
```



##  不同点：

双飞翼需要多增一个HTML标签 ，利用中间区域的外边距去摆放左右两侧的盒子

而圣杯是利用大盒子的内间距去摆放左右两侧盒子。

:smile:双飞翼要比圣杯使用率要高  **原因**： 双飞翼布局在屏幕小到一定程度时不会发生布局混乱，（挤下来 ），而圣杯会

### 等高布局（多列盒子高度相等 ）

#### 1：内边距和外边距相消法(内边距：9999px 外边距：-9999px)

注意： 父盒子添加属性overflow:hidden

:smile_cat:盒模型原理 



```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    * {
        padding: 0;
        margin: 0;
    }
    .clearfix::after,.clearfix::before {
         content: '.';
         display: block;
         clear: both;
         line-height: 0;

    }
    .box {
        overflow: hidden;

    }
    .col1 {
        width: 30%;
        float: left;
        background-color: blueviolet;
        padding-bottom: 9999px;
        margin-bottom: -9999px;


    }
    .col2 {
        width: 40%;
        float: left;
        background-color: red;
        padding-bottom: 9999px;
        margin-bottom: -9999px;
 
    }
    .col3 {
        width: 30%;
        float: left;
        background-color: yellow;
        padding-bottom: 9999px;
        margin-bottom: -9999px;
        height: 500px;
    }
    </style>
</head>
<body>
    <div class="box clearfix">
        <!-- col column 列 -->
         <div class="col1">等高布局第一列</div>
         <div class="col2">等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列等高布局第二列</div>
         <div class="col3">等高布局第三列</div>


    </div>
    
</body>
</html>
```

### 2:增加额外嵌套的容器

```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        body {
            min-height: 400px;
        }
    .container1 {
        width: 100%;
        background-color: red;
        float: left;
        position: relative;
        right: 40%;

    }
    .container2 {
        width: 100%;
        background-color: yellow;
        float: left;
        position: relative;
        right:30%;
    }
    .container3 {
        width: 100%;
        background-color: blue;
        float: left;
        overflow: hidden;
    }
    .col1 {
        width: 30%;
        float: left;
        /* background-color: aqua; */
        height: 400px;
        position: relative;
        left: 70%;
        
    }
    .col2 {
        width: 40%;
        float: left;
        /* background-color: orangered; */
        position: relative;
        left: 70%;
        height: 800px;
    }
    .col3 {
        width: 30%;
        float: left;
        /* background-color: deeppink; */
        position: relative;
        left: 70%;
    }
    
    
    </style>
</head>

<body>
    <div class="container3">
        <div class="container2">
            <div class="container1">

                <div class="col1">第一列</div>
                <div class="col2">第二列</div>
                <div class="col3">第三列</div>
            </div>
        </div>
    </div>


</body>

</html>
```

:smile:有几列就应该嵌套几个盒子

