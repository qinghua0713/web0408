# day01

## 一：编辑器

**vscode**

````html
自己在D或者E 盘下新建一个文件夹  名字自己起 在vscode中FIle里 找open Folder 打开新建文件夹 

1:new Folder 新建一个文件夹 day01
2：右键 new File 新建一个文件  后缀.html 名字 自己起 
3：打开html文件  ! 回车  就会生成文档说明
````



## 二：浏览器

:smile: F12  开发者工具  调试代码  ---》界面

ctrl+shift +i    



**内核：解释运行html文档 js文档**    渲染引擎（HTML+CSS）+ js引擎(js)

**外壳**: 淘宝风  

### 5大常用浏览器

````html
IE     内核: Trident
Chrome 谷歌  内核:  webkit   Blink 
FirFox Mozila  内核:  Gecko 
Opera  挪威   欧朋  内核  Presto
Safari  内核  webkit 

````

## 三：web标准

**结构html+样式 css +行为 js**  相分离



## 四:HTML

**Hyper 超  Text 文本 Markup 标记 language 语言 **  ——————》超文本标记语言 (并不是编程语言 静态语言)

.txt  只能有字符     

超文本 : 不仅仅只有文字  视频 音频  图片 超链接 

后缀:  .代码l --->.html --->运行在浏览器 ---》网页 



````html
1:标记语言  
规范: 标签  一个标签实现一个特定功能
<关键字>内容</关键字>  封闭标签  双标签
<hr/>                 非闭合标签 单标签

# <!DOCTYPE html>  

#UTF-8 编码规则  万国码  全世界的所有字符   目的;无论哪种语言都能正常解释运行
GB2312  4000多个汉字  GB18030 台湾 繁体字   GBK 
Unicode 编码  26个英文字母+ 符号  128个字符
     
````

``ctrl+/``注释   注释不被运行的代码    只为了阅读

### 文字排版标签

````html
1: 标题标签
<h1>  一级标题  加粗加大
   标题内容 
</h1>
<hn></hn>  n 1---6  3以上建议不要用 没意义 
h1--h3 h1出现一次  一定要放一些触发的关键字 
 <title></title>  权重标签  

语义化标签 强调作用  权重  h1标签是一个语义化特别重的标签  一定能被搜索引擎抓取到 
<h1>我是清华毕业的</h1>
````

#### 语义化作用:

```html

```



### 标签属性（修饰标签的作用） 

小女孩    身高=170cm     眼睛=大大的   学校=  中山大学
标签html   宽= 300px  高  = 400px 边框 = 3px  颜色 = 'red'

```html
 <hr  color="red"  width="400px"  align="center"/>

hr结构  主题  三个属性  
（1）一个标签身上可以有多个属性
（2）属性以空格隔开  属性名="属性值"
align 调整元素的对齐方式  left 左对齐  center 居中对齐 right 右对齐 
width 宽度  每个元素都有宽高属性  没有设置的时候是默认宽高
color: 字体颜色   red ,yellow ，green ，blue ,brown ，grey ,skyblue,pink ,deeppink,purple

```

## 列表系列

### 无序列表

