var UIw = 750;
var prev_fs = 100;
window.onload = function() {
	screenRest();
}
//检测用户屏幕视口宽度
window.onresize = function() {
	screenRest();
};
function screenRest(){
	var deviceWidth = document.documentElement.clientWidth;
	var htmfs = deviceWidth * prev_fs / UIw + 'px';
	document.documentElement.style.fontSize = htmfs;
}


　