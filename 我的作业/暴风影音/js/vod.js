window.onload = function() {

	ajax('get', 'vod.json', '', true, function(vod) {
		var hotList = document.getElementsByClassName('hot-ulList')

		var pas = JSON.parse(vod)
		var str = ''
		var str1 = ''
		var str2 = ''
		var str3 = ''
		for(i = 0; i < pas.data.all.hotFilms.length; i++) {
			str += '<li class="hot-li1  icon-box m-r-13-b-20 " data-b="5元&nbsp;' + pas.data.all.hotFilms[i].tips.txt + '"><span class="high-def">' + pas.data.all.hotFilms[i].txt + '</span><a href="#"><img _src="' + pas.data.all.hotFilms[i].url + '"/></a><div class="vip-films "><h3 class="vod-title">' + pas.data.all.hotFilms[i].title + '</h3><span>' + pas.data.all.hotFilms[i].message + '</span><div class="grade-box"><i class="grade ">' + pas.data.all.hotFilms[i].grade + '</i></div></div></li>'
			str1 += '<li class="hot-li1  icon-box m-r-13-b-20 " data-b="5元&nbsp;' + pas.data.all.newFilms[i].tips.txt + '"><span class="high-def">' + pas.data.all.newFilms[i].txt + '</span><a href="#"><img _src="' + pas.data.all.newFilms[i].url + '"/></a><div class="vip-films "><h3 class="vod-title">' + pas.data.all.newFilms[i].title + '</h3><span>' + pas.data.all.newFilms[i].message + '</span><div class="grade-box"><i class="grade ">' + pas.data.all.newFilms[i].grade + '</i></div></div></li>'
			str2 += '<li class="hot-li1  icon-box m-r-13-b-20 " data-b="5元&nbsp;' + pas.data.vipFree.newFilms[i].tips.txt + '"><span class="high-def">' + pas.data.vipFree.newFilms[i].txt + '</span><a href="#"><img _src="' + pas.data.vipFree.newFilms[i].url + '"/></a><div class="vip-films "><h3 class="vod-title">' + pas.data.vipFree.newFilms[i].title + '</h3><span>' + pas.data.vipFree.newFilms[i].message + '</span><div class="grade-box"><i class="grade ">' + pas.data.vipFree.newFilms[i].grade + '</i></div></div></li>'
			str3 += '<li class="hot-li1  icon-box m-r-13-b-20 " data-b="5元&nbsp;' + pas.data.vipFree.hotFilms[i].tips.txt + '"><span class="high-def">' + pas.data.vipFree.hotFilms[i].txt + '</span><a href="#"><img _src="' + pas.data.vipFree.hotFilms[i].url + '"/></a><div class="vip-films "><h3 class="vod-title">' + pas.data.vipFree.hotFilms[i].title + '</h3><span>' + pas.data.vipFree.hotFilms[i].message + '</span><div class="grade-box"><i class="grade ">' + pas.data.vipFree.hotFilms[i].grade + '</i></div></div></li>'

		}
		hotList[0].innerHTML = str
		hotList[1].innerHTML = str1
		hotList[2].innerHTML = str2
		hotList[3].innerHTML = str3
		//console.log(str3)
		var vip = document.getElementsByClassName('vip')

		var hot = document.getElementsByClassName('hot-bro-container')
		var vipA = document.getElementsByClassName('a-color')
		for(var i = 0; i < vip.length; i++) {

			vip[i].index = i
			vip[i].onclick = function() {

				for(j = 0; j < hot.length; j++) {

					//var hot_ul = hot[i].getElementsByClassName('hot-ulList')
					hot[j].className = 'hot-bro-container type-area1 m-b-36 p-t-26'
					vip[j].className = 'vip  '
					vipA[j].className = 'a-color '
					//		hot_ul[b].className = 'hot-ulList  '
				}
				hot[this.index].className = ' hot-bro-container type-area1 m-b-36 p-t-26 d-block'
				vip[this.index].className = 'vip bac-coclor '
				vipA[this.index].className = 'a-color font-color1'
				// hot_ul[this.index].className = 'hot-ulList  d-block'
			}

		}
		tabChild(0)
		tabChild(1)
		tabChild(2)

		function tabChild(num) {

			var vod_li = hot[num].getElementsByClassName('padd-0')
			var hot_ul = hot[num].getElementsByClassName('hot-ulList')
			for(var z = 0; z < vod_li.length; z++) {
				vod_li[z].index = z
				vod_li[z].onclick = function() {

					for(var b = 0; b < hot_ul.length; b++) {
						hot_ul[b].className = 'hot-ulList  '
						vod_li[b].className = 'padd-0'
					}
					hot_ul[this.index].className = 'hot-ulList  d-block'
					vod_li[this.index].className = 'vod-tab-li  padd-0'
				}

			}
		}

		var hot_ul = document.getElementsByClassName('hot-ulList')
	         for(var i = 0; i < hot_ul.length; i++){
	         	console.log(hot_ul)
	         }
		onsr(0)
		

		function onsr(num) {
			var oimg = hot_ul[num].getElementsByTagName('img')
			for(var i = 0; i < oimg.length; i++) {

				var offsetT = oimg[i].offsetParent.offsetTop
				var clientH = document.documentElement.clientHeight
				var scrolT = document.documentElement.scrollTop || document.body.scrollTop
				if(offsetT <= clientH + scrolT) {
					oimg[i].src = oimg[i].getAttribute('_src');
				}

			}

		}

		window.onscroll = function(ev) {
			var ev = window.event || ev
	
			onsr(0)
		

		}

	})

}