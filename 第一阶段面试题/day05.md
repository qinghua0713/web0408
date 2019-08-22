## day05

 一：元素转换模式

```css
1:块转行内块 display:bolck----> display:inline-block
2;行内转行内块 display:line display:inline-block
```



二：文本和图片的垂直对齐方式

![](E:\0408课堂代码\day05\笔记\文字四条线.jpg)

```
vertical-align:垂直对齐方式 （图片和文字）
文字四条线： 顶线top  中线 middle  基线baseline 底线bottom
默认是文字和图片是以基线对齐  baseline--->图片在上文字要在下一点
vertical-align:top 顶对齐

```



### 三：浮动

前提： 块级 一行一行   行内块 并排进行展示

块级---》行内块   display:inline-block 

**问题:**

### 浮动：盒子并排（块级元素）

**float: left/right/none**

left:左浮动

right:右浮动

none:默认值 所有元素没有浮动的情况下都是float:none



```css
1:浮动可以使盒子并排（一行一行----》并排  标准流---》浮动流）
2：float:none 相当于没有浮动 还是标准流
3：浮动元素不占据位置 （脱离了标准流）
4：所有盒子实现并排，所有盒子均添加浮动属性
5：左浮动是找父元素的左边界，右浮动找父元素的右边界
```

#### 影响:

##### 父元素高度塌陷

```css
1:给父盒子定高  height --->不实际 不灵活
2:父盒子加overflow：hidden  -----》BFC（私人领域，互不干扰，浮动流不会溢出盒子，底下p元素不受影响正常摆放）
弊端: 溢出的隐藏  实际情况  如果有意让元素溢出的话，此法不可行---》为什么呢？ 有用的也会一起隐藏
3：清除浮动影响的属性 :  clear:left/right/both  clear:both
<div style="clear:both"></div> 
弊端：结构变得冗杂  后期代码难维护 (不是用户看的)

4：css方法 创造出一个盒子 这个盒子正好可以清除浮动影响 （css创造出一个div 身上加个clear:both）

```



#### 怎样用css创造一个div盒子（容器 行内 行内块 块级）？

##### 伪元素法： 我可以！！！！

```css
伪元素的功能: 用css创造结构 创造盒子 -->
    <!--
     父元素::after {
         content:'';  你创建的元素的文本内容  (必须写 ！！！！！！！！！！！！！！！)


    } 
    after是将你创建的盒子插入到父元素所有内容之后(最后一个孩子)
    父元素::before {
         content:'';

    }
    before是将你创建的盒子插入到父元素所有内容之前(第一个孩子) 

    伪元素其实质是行内元素  ---》盒子 ---》转换为块

```

#### 清除浮动的最终方案：

```css
  /* 最后一个方法  无害的 通过伪元素创造一件衣服（类）  清除浮动影响 */

      .clearFix::after,.clearFix::before{
            content: '  ';
            /* 清除浮动影响的属性 */
            clear: both;
            /* ie浏览器下  对文字是有默认行高的（白块）  line-height: 0; 白块清除   */
            line-height: 0; 
            display: block;


        }
```

### 盒子阴影

![](E:\0408课堂代码\day05\笔记\盒子阴影.png)

```css
  /* 阴影属性 box-shadow:
        （1）水平阴影尺寸 + 右侧 -左侧
         （2）垂直阴影尺寸 - 上侧  +下侧 
         (3)阴影的模糊距离  光晕
         (4)阴影的尺寸 （实线）
         (5)颜色 
         (6)内外 外 outside(默认) 内inside
        
        
         */
.box:hover {
        box-shadow: 0px 0px 30px 0px  gold inset;
    }
    
         
```

