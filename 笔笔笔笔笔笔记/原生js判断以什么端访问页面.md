### 第一种方式

```js
<script type=”text/javascript”>
//平台、设备和操作系统
	var system ={
		win : false,
		mac : false,
		xll : false,
		ipad: false
	};
	//检测平台
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
	//跳转语句，如果是手机访问就自动跳转到手机端wap页面
	if(system.win || system.mac || system.xll || system.ipad){
		window.location.href="http://www.hiretianxia.cn";
	}else{
		window.location.href="http://m.hiretianxia.cn";//手机端网址
	}
</script>
```

### 第二种方式

```js
function is_mobile() {
	var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
	var u = navigator.userAgent;
	if (null == u) {
		return true;
	}
	var result = regex_match.exec(u);
	if (null == result) {
		return false
	}else {
		return true
	}
}
if (is_mobile()) {
	document.location.href= "http://m.hiretianxia.cn";
}
```

### 第三种方式

```js
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
	document.location.href= "http://m.hiretianxia.cn";
}
```

