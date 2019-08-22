# day02笔记

## 一：超链接

![](E:\0408课堂代码\day02\笔记\media\超链接.png)

定义:用户点击跳转另外一个界面的方式(字符串，图片)

HTML标签:  <a></a>

````html
 <!-- 超链接  href：跳转的地址
    target ： 控制跳转方式  本页下打开（默认） _self  新页打开  _blank
    -->
 字符串跳转:   <a href="http://baidu.com"  target="_blank">百度</a>
 图片跳转:<a href="https://hellojoy.jd.com/?babelChannel=1518455&activityId=9688&source=01"           target="_blank">
    
        <img src="./images/logo.gif" alt="">
    </a>


````

   <!-- 必须写在head  功能：一次性设置所有a链接的打开方式-->

```html
<base  target="_blank">
</base>

```

## 二：表格

```html
1:表格  大盒子  <table></table>
2:标题 : <caption>表格标题</caption> 
3：头部:   <thead>字段
           <tr>  一行  table row行
               <th>月</th>
               <th>日</th>
               <th>支出</th>
           </tr>
      </thead>  table head :
4：身体 :  <tbody>放每条数据
    
            <tr>
                <td>12</td>
                <td>23</td>
                <td>2300.00元</td>
            </tr>
            <tr>
                <td>12</td>
                <td>23</td>
                <td>2300.00元</td>
            </tr>
             <tr>
                <td>12</td>
                <td>23</td>
                <td>2300.00元</td>
            </tr>


      </tbody> table body

```

### **默认的属性:**

  border: 边框  1,2 ,3....  

  cellpadding 内容与边框的距离

  cellspacing  单元格与单元格之间的距离

 会设置为0 目的：边框合并（粗边框）  ？ 细线边框 collapse 折叠 style="border-collapse: collapse"

 align: center  让我们的表格居中

:smile: 1:当前列宽取决于单元格内容的宽度

​    2:字段文字加粗并且居中  ，而单元格的文字默认是居左





**跨行，跨列属性**

跨行:  rowspan="4"

（1）从上到下  写rowspan="合并的行数"

（2）删除合并后的行  删除行的个数 = 合并个数-1

跨列: colspan=“4” (column列)







### 自定义属性 （样式）

````html
<div  style="width:200px;height:200px;background-color:red;color:blue;"></div>
(1)style  = "属性名1:属性值;属性名字2：属性值;"
<周杰伦 style="name:Jay;sex:'男';year:'40';child:'2'"></周杰伦>


````





