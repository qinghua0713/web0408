# day12面试题

### h5新增了哪些标签？删除了哪些标签？如何处理h5标签的兼容性？

内容元素，article、footer、header、nav、section。
表单控件，calendar、date、time、email、url、search。
移出的元素有下列这些：
显现层元素：basefont，big，center，font, s，strike，tt，u。
性能较差元素：frame，frameset，noframes。

如何处理HTML5新标签的[浏览器](https://www.baidu.com/s?wd=%E6%B5%8F%E8%A7%88%E5%99%A8&tn=SE_PcZhidaonwhc_ngpagmjz&rsv_dl=gh_pc_zhidao)兼容问题？
处理兼容问题有两种方式：
1.IE8/IE7/IE6支持通过document.方法产生的标签，利用这一特性让这些浏览器支持HTML5新标签。
2.使用html5shiv.js库