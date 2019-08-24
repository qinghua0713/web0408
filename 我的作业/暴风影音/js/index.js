window.onload = function() {

	function ajax(method, url, data, acy, fn) {
		var _ajax = new XMLHttpRequest()
		if(method.toLowerCase() == 'get') {
			_ajax.open(method, url + '?' + data, acy)
			_ajax.send()
		} else if(method.toLowerCase() == 'post') {
			_ajax.open(method, url, acy)
			_ajax.setRequestHeader('Content-type', 'appliction/x-www-form-urllencoded')
			_ajax.send(data)

		}
		_ajax.onreadystatechange = function() {
			if(_ajax.readyState == 4 && _ajax.status == 200) {
				var res = _ajax.response
				fn && fn(res)

			}
		}
	}
	ajax('get', 'banner.json', 'user=1&sex=2', true, function(rest) {
		var banner = document.getElementsByClassName('banner-ulList')[0]
		var banner2 = document.getElementsByClassName('min-banner')[0]

		var pas = JSON.parse(rest)
		var str = ''
		var str1 = ''
		for(i = 0; i < pas.swiperImg.imgArr.length; i++) {
			str += '<li>	<a class="" href=""><img src="' + pas.swiperImg.imgArr[i] + '"/></a></li>'
			str1 += '<li><a class="" href=""><img  src="' + pas.swiperImg.imgSmallArr[i] + '"/></a></li>'
		}

		console.log()
		banner.innerHTML = str
		banner2.innerHTML = str1
		var banLi = banner.getElementsByTagName('li')
		var borderA = banner2.getElementsByTagName('a')
		var btn = document.getElementsByClassName('banner-btn-left')[0]
		var btn1 = document.getElementsByClassName('banner-btn-right')[0]
		var bannerBox = document.getElementsByClassName('banner-box')[0]
		var banner = document.getElementsByClassName('banner-ulList')[0]

		btn.onclick = function() {
			prev_pic()
			index--
			if(index < 0) {
				index = 8
			}
			show_dot()
		}
		btn1.onclick = function() {
			next_pic()
			index++
			if(index > 8) {
				index = 0
			}
			show_dot()
		}

		function prev_pic() {
			var newprev
			var oLeft = parseInt(getStyle(banner, 'left'))
			console.log(oLeft);
			if(oLeft >= 0) {
				newprev = -8800
			} else {
				newprev = parseInt(getStyle(banner, 'left')) + 1100
			}
			banner.style.left = newprev + 'px'

		}

		function next_pic() {
			var newnext
			var oRight = parseInt(getStyle(banner, 'left'))
			console.log(banner.style.left)
			if(oRight <= -8800) {
				newnext = 0
			} else {
				newnext = parseInt(getStyle(banner, 'left')) - 1100
			}
			banner.style.left = newnext + 'px'

		}
		var item = null

		function start() {
			item = setInterval(function() {
				next_pic()
				index++
				if(index > 8) {
					index = 0
				}
				show_dot()
			}, 6000)
		}
		start()

		bannerBox.onmouseenter = function() {
			clearInterval(item)

		}
		bannerBox.onmouseleave = function() {
			start()
		}
		var index = 0

		function show_dot() {
			for(i = 0; i < borderA.length; i++) {
				borderA[i].className = ''
			}
			borderA[index].className = 'border'
		}
		show_dot()
		for(var i = 0, len = borderA.length; i < len; i++) {

			(function(i) {
				var k = i;
				borderA[i].onclick = function(e) {
					var ev = window.event || e;
					ev.preventDefault();
					var dis = index - k;
					console.log(dis)
					console.log(parseInt(getStyle(banner, 'left')))
					banner.style.left = (parseInt(getStyle(banner, 'left')) + dis * 1100) + "px";
					index = k;
					show_dot()

				}

			})(i);
		}

	})
	var vip_ul = document.getElementsByClassName('vip_ulList')[0]
	var arrow_left = document.getElementsByClassName('arrow-left')[0]
	var arrow_right = document.getElementsByClassName('arrow-right')[0]
	  arrow_right.onclick = function(){
	  	move(vip_ul, 'left', 50, -1075)
	  }
		
 arrow_left.onclick = function(){
	  	move(vip_ul, 'left', 50,0)
	  }

ajax('get','indexFilms.json','',true,function(films){
	
	var hot_ul = document.getElementsByClassName('hot-ulList')[0]
	var highy_ul = document.getElementsByClassName('recom-ulList')[0]
	 var pas = JSON.parse(films)
	console.log(pas)
	  var str = ''
	  var str1 = ''
	  
	  for(i = 0; i < pas.data.strongFilms.length; i++){
	  	console.log(i)
	  	str+='<li class="hot-lis  icon-box " data-b="5元&nbsp;'+pas.data.strongFilms[i].tips.txt+'"><span class="high-def">'+pas.data.strongFilms[i].txt+'</span><a href="#"><img src="'+pas.data.strongFilms[i].url+'"/></a><div class="vip-films "><h3 class="vod-title">'+pas.data.strongFilms[i].title+'</h3><span class="describe">'+pas.data.strongFilms[i].message+'</span><div class="grade-box"><i class="grade ">'+pas.data.strongFilms[i].grade+'</i></div></div></li>'	
	  	str1+='<li class="recom-li icon-box " data-b="5元&nbsp;'+pas.data.hotFilms[i].tips.txt+'"><span class="high-def">'+pas.data.hotFilms[i].txt+'</span><a href="#"><img src="'+pas.data.hotFilms[i].url+'"/></a><div class="vip-films "><h3 class="vod-title">'+pas.data.hotFilms[i].title+'</h3><span class="describe ">'+pas.data.hotFilms[i].message+'</span><div class="grade-box"><i class="grade ">'+pas.data.hotFilms[i].grade+'</i></div></div></li>'
	
	  	
	  	console.log(str1)
	  }
	  hot_ul.innerHTML = str
	   highy_ul.innerHTML = str1
	  
})
		
		
		
		
}