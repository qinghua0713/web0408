/*
 * 原生ajax封装  
 * method ：请求方式
 * url请求地址
 * data：请求参数
 * acy：是否异步  布尔值
 * fn  请求成功的回调函数
 */

//window.onload = function(){

function ajax(method, url, data, acy, fn) {
	var _ajax = new XMLHttpRequest();
	if(method.toLowerCase() == 'get') {
		_ajax.open(method, url + '?' + data, acy)
		_ajax.send();
	} else if(method.toLowerCase() == 'post') {
		_ajax.open(method, url, acy);
		_ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		_ajax.send(data);
	}
	_ajax.onreadystatechange = function() {
		if(_ajax.readyState == 4 && _ajax.status == 200) {
			var res = _ajax.response;
			fn && fn(res);
		}
	}
}
/*
 Cookie的封装
key：用户名
val: 比如：老王
oDate:设置过期时间
*/
function setCookie(key, val, oDate) {
	var nowDate = new Date();
	if(oDate == 0) {
		nowDate = 0;
	} else {
		nowDate.setSeconds(nowDate.getSeconds() + oDate);
	}
	document.cookie = key + '=' + val + ';expires=' + nowDate;
}
/*
是用key来去查找相应的 val值
应该有一个返回值
key=psd
user
*/
function getCookie(key) {
	var oCookie = document.cookie;
	var cookieArr = oCookie.split(';');
	for(var i = 0; i < cookieArr.length; i++) {
		var arr = cookieArr[i].split('=');
		if(arr[0].trim() == key) {
			return arr[1];
		}
	}
	return false;
}
/* 
移除Cookie
如果是想要删除cookie
不管你设置的是什么值  最后都要让它过期  val值设置任何值都没有关系
把这个过期时间设置为当前时间的往前的时间段即可
*/

	

function removeCookie(key) {
	setCookie(key, 1, -1);
}



/* 获取样式*/
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj)[attr]
	}
}
/*
运动函数和淡入淡出的封装
 obj:dom节点对象
 attr:属性的名称
 target:目标值
 num:缓冲的缩放比例

*/
function bufferMove (obj,attr,target,num) {
	var timer = setInterval(function () {
		if(attr == 'opacity'){
			var cur = parseFloat(getStyle(obj,attr))*100;
		}else{
			var cur = parseInt(getStyle(obj,attr));
		}
		var step = (target - cur)/num;
		var speed = step>0? Math.ceil(cur + step) : Math.floor(cur + step);
		if((speed <= target && step<0) || (speed>=target && step>0)){
			speed = target;
			clearInterval(timer);
		}
		if(attr == 'opacity'){
			obj.style[attr] = speed/100;
		}else{
			obj.style[attr] = speed + 'px';
		}
	},50)
}
/*
事件绑定的兼容
  obj:当前需要触发的dom节点
  type:触发事件的类型
  fn:具体绑定的函数

*/
function onBind (obj,type,fn) {
	if(obj.addEventListener){//标准浏览器
		obj.addEventListener(type,fn);
	}else{//ie兼容
		obj.attachEvent('on'+type,fn);
	}
}
/*
匀速运动函数的封装
obj：当前需要出发的dom节点
attr:属性的名称
step:每一秒走的像素  步长
target:到达的目标值
*/
function move(obj, attr, step, target) {
	var left = parseInt(getStyle(obj, attr));
	step = left >= target ? -step : step;
	var timer3 = setInterval(function() {
		left = left + step;
		if((left >= target && step > 0) || (left <= target && step < 0)) {
			left = target;
			clearInterval(timer3);
		}
		obj.style[attr] = left + 'px';
	}, 50)
}

//}