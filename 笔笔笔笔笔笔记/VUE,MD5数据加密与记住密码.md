```js
<script>
	import { apis } from '../uitl/config'
	import CryptoJS from 'crypto-js' //加密js
	export default {
		data() {
			return {
				ruleForm: {
					mobile: '', //账号
					password: '' //密码
				},
				checked: true //是否选中记住密码 true为选中
			};
		},
		methods:{
			//登录方法
			handleSubmit() {
				var that = this;
				let loginParams = { 
		       	mobile: this.ruleForm.mobile, //获取账号
		       	password: this.ruleForm.password //获取密码
				};
				//登录请求
				that.$axios.post(`${api}/auth/login`,loginParams).then((res)=>{
					if(res.data.errCode == 0){
						console.log('登录成功')
						if (that.checked == true) {
							//传入账号，密码，保存天数
							that.setCookie(that.ruleForm.mobile, that.ruleForm.password, 7);
						} else {
							//清空Cookie
							that.clearCookie();
						}
						//跳转路由
						that.$router.push({ path: '/index' });
					}else{
						console.log('登录失败')
					}
				})
			}，
			//设置cookie方法
			setCookie(mobile, password, days) {
				var text = CryptoJS.AES.encrypt(password, 'secret key 123');//使用CryptoJS方法加密
				var saveDays = new Date(); //获取时间
				saveDays.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * days); //保存的天数
				//字符串拼接存入cookie
				window.document.cookie = "mobile" + "=" + mobile + ";path=/;saveDays=" + saveDays.toGMTString();
				window.document.cookie = "password" + "=" + text + ";path=/;saveDays=" + saveDays.toGMTString();
			},
			//读取cookie
			getCookie() {
				if (document.cookie.length > 0) {
					var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
					for (var i = 0; i < arr.length; i++) { 
						var arr2 = arr[i].split('='); //再次切割
						//这里会切割出以mobile为第0项的数组、以password为第0项的数组，判断查找相对应的值
						if (arr2[0] == 'mobile') {
							this.ruleForm.mobile = arr2[1]; //拿到账号
						} else if (arr2[0] == 'password') {
							//拿到拿到加密后的密码arr2[1]并解密
							var bytes = CryptoJS.AES.decrypt(arr2[1].toString(), 'secret key 123');
							var plaintext = bytes.toString(CryptoJS.enc.Utf8); //拿到解密后的密码（登录时输入的密码）
							this.ruleForm.password = plaintext;
						}
					}
				}
			},
			//清除cookie
			clearCookie() {
				this.setCookie("", "", 0); //账号密码置空，天数置0
			}
		}
	}
</script>
--------------------- 
作者：Hy 
来源：CSDN 
原文：https://blog.csdn.net/weixin_43631810/article/details/84945640 
版权声明：本文为博主原创文章，转载请附上博文链接！
```

