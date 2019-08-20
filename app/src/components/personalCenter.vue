<template>
     <div dir="app" class="personal-center">

        <div class="personal-top">
            <div class="set-btn">
                <img class="set-icon" src="../assets/img/set.png" alt="">
            </div>
            <span class="personal-title">个人中心</span>
            <div class="msg-btn">
                <img class="msg-icon" src="../assets/img/news.png" alt="">

            </div>
            <i class="msg-bubble">9+</i>
            <div class="head-portrait-box">
                <img class="head-portrait-img" src="../assets/img/图层 3.jpg" alt="">
            </div>
        </div>
        <div class="userinfo">
            <span class="userNmae">{{userPhone}}</span>
            <div class="collect">
                <img src="../assets/img/keep.png" alt="">
                <span>我的收藏&nbsp;<i>(0)</i></span>
            </div>
        </div>
        <div class="order-form">
            <span class="my-order">我的订单</span>
            <span class="all-order">查看全部订单</span> 
        </div>
       <div class="logistics">
           <ul class="logistics-ul">
               <li>
                   <a href="">
                       <img src="../assets/img/icon_boligation.png" alt=""><br>
                       <span>待付款</span>
                       <i ></i>
                   </a>
               </li>
               <li>
                   <a href="">
                       <img src="../assets/img/prepare.png" alt=""><br>
                       <span>待发货</span>
                       <i class="msg-icons ">1</i>
                   </a>
               </li>
               <li>
                   <a href="">
                       <img src="../assets/img/icon_consignee.png" alt=""><br>
                       <span>待收货</span>
                       <i class="msg-icons">2</i>
                   </a>
               </li>
               <li>
                   <a href="">
                       <img src="../assets/img/icon_evaluate.png" alt=""><br>
                       <span>待评价</span>
                       <i></i>
                   </a>
               </li>
               <li>
                   <a href="">
                       <img src="../assets/img/icon_refund.png" alt=""><br>
                       <span>退款/售后</span>
                       <i></i>
                   </a>
               </li>
           </ul>

       </div>
        <div class="take-site">
            <a href="#"><span>收货地址管理</span></a>  
        </div>
      <mt-button type="danger" @click="logout" style="width:100%;margin-bottom:140px;">退出登录</mt-button>
	 <Tab type='3' />

    </div>
</template>
<script>
import Tab from  '../tab/tabPage'
import {mapGetters} from 'vuex'
import {MessageBox} from 'mint-ui'
export default {
    name:'classify',
    data() {
        return {
            
        }
    },
     methods: {
         logout(){
             MessageBox.confirm('确定要退出吗？')
             .then(
                 action => {
                     sessionStorage.removeItem('phone')
                     sessionStorage.removeItem('password')
                  this.$router.push({
                      path:'/notLogon',
                  })

                },
                action => {
             console.log(2)
                }
                 );

         }
     },
   components:{
       Tab
   },
    computed: {
        ...mapGetters(['userPhone'])
    },
    mounted() {
        
    },
}
</script>
<style lang="">


</style>