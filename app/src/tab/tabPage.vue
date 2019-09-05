<template>
    <div class="tabMuent">
			<router-link :key="item.txt" v-for="(item,index) in arr" :to="item.path" :class="type==index?'a_on':''">
				<div :class="type==index?'icon_default '+item.bcImg:'icon_default'"></div>
				<span>{{item.txt}}</span>
			</router-link>
		</div>
</template>
<script>
export default {
    name:'Tab',
    data(){
        return{
			arr:[
				{path:'/',txt:'首页',bcImg:'index_icon'},
				{path:'/classify',txt:'分类',bcImg:'class_icon'},
				{path:'/shopping',txt:'购物车',bcImg:'shop_icon'},
				{path:'/personalCenter',txt:'我',bcImg:'my_icon'}
			]
		}
	},
	props:['type']
}
</script>
<style scoped>
.tabMuent{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 76px;
	width: 100%;
	text-align: center;

	padding-top: 5px;

	background-color: white;
}
.tabMuent a{
	display: inline-block;
	width: 23%;
	text-decoration: none;
	color: #383838;

}
.a_on{
	color: #fcb54c !important;
}
.icon_default{
	width: 30px;
	height:30px;
	display: inline-block;
	background-size: 100% 100%;
}
.tabMuent span{
	display: block;
}
.tabMuent a:nth-child(1) .icon_default{
	background-image: url(../assets/img/tab_home_nor.png);
}
.tabMuent a:nth-child(2) .icon_default{
	background-image: url(../assets/img/tab_menu_nor.png);
}
.tabMuent a:nth-child(3) .icon_default{
	background-image: url(../assets/img/tab_shopping_nor.png);
}
.tabMuent a:nth-child(4) .icon_default{
	background-image: url(../assets/img/tab_me_nor.png);
}
.index_icon{
	background-image: url(../assets/img/tab_home_hig.png) !important;
}
.class_icon{
	background-image: url(../assets/img/tab_menu_hig.png) !important;
}
.shop_icon{
	background-image: url(../assets/img/tab_shopping_hig.png) !important;
}
.my_icon{
	background-image: url(../assets/img/tab_me_hig.png) !important;
}
</style>