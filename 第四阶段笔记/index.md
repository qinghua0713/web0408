
```html
	<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
	</head>
	<body>
	vue的基础指令：
		v-html v-text  {{}}
		v-bind v-on v-if v-show v-for 
		v-model  v-once

	v-for  对象或者数组值的设置  不能够实时渲染
	this.$set()强制渲染  
	this.$set(obj,key,value)
	this.$set(arr,index,value)
	
	msg的vue的特殊性 只会生效一次  
	首次绑定的值才会有效
	再次修改  msg的值的时候  绑定了v-once的值 不会发生变化
	<div v-once="msg"></div>
	
	el
	data
	methods
	computed
	watch
	components
	directives
	
	钩子函数  created  beforeMount  mounted
		  vue实例化     渲染之前               渲染之后	
		  一般情况下  转圈圈的操作  会在  数据初始化完之后  关闭
		  mounted(){
		  	转圈圈的操作
		  	http=>  this.axios.get/post
		  	.then(res=>{
		  		this.data = res.data.data
		  		关闭转圈圈的操作
		  	})
		  }
	组件的父子传值  子父传值
	1、利用父组件  自定义属性 传递 参数
	2、利用自定义事件 传递  参数
	
	vue-resoucre  vue-axios axios
	开发当中  跨域问题 
	1、利用谷歌中允许设置不安全模式 来去解决开发当中  跨域问题
	2、vue-cli提供的跨域代理的设置
	
	路由  vue-router
	路由的选择
	router-link  to="/index"
	代码的方式来去跳转    用 path或者name的方式  做编程式跳转
	this.$router.push({
		path:'/index'
	})
	路由传参 
	1、动态路由的传参  
	#/index/id
	路由配置里配合设置
	path:'/index/:id'
	跳转的时候
	this.$router.push({
		path:'/index/'+ id
	})
	子组件中拿参数
	this.$route.params.id
	2、使用name做跳转  使用 params参数的传递
	#/index
	跳转的时候
	this.$router.push({
		name:'index',
		params:{
			id:id
		}
	})
	子组件中拿参数
	this.$route.params.id
	3、path做跳转 query参数传递
	#/index?id=id
	this.$router.push({
		path:'/index',
		query:{
			id:id
		}
	})
	子组件中拿参数
	this.$route.query.id
	
	vuex
	state  mutations  getters    actions
	data   methods    computed   异步的方法
	this.$store.state.num
	this.$store.commit('add')
	getters  需要在子组件中  映射过后才能够使用 这个getters的计算的结果
	this.$store.dispacth('add')
	
	在vue-cli中  预处理器的使用
	
</body>
<script type="text/javascript">
	new Vue({
		data:{
			msg:'123'
		}
	})
</script>
```

