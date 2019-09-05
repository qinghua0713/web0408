<template>
  <div id="app" class="shopping-page">
    <div class="shopping-top">
      <span class="return-icon" @click="goStore">&lt;</span>
      <span class="shopping-car">购物车</span>
    </div>
    <div class="selected-shopping">
      <ul class="selected-ul">
        <li :key="index+'u'" v-for="(item,index) in shopCart">
          <div class="shopping-warehouse">
            <img src="../assets/img/store.png" alt />
            <span>杭州保税区仓</span>
          </div>
          <div class="add-del">
            <div class="check" v-show="edit==false">
               <input type="checkbox" v-model="item.isFreeShip" :class="item.isFreeShip==true?'checkbtn isTrue':'checkbtn'" @change="sigChach">
            </div>
            <div class="com-detail">
              <div class="com-pic">
                <img :src="item.comImg" alt />
              </div>

              <div class="add-sub-box" >
                <span>{{item.name}}</span>
                <br /> 
                <span>{{item.buySelect}}</span>
                <br />
                <div class="add-sub-num">
                  <label class="sub-btn" @click="item.num >1?item.num--:1">-</label>
                  <input
                    class="num-inp" type="number" @change="item.num<1?1:item.num" v-model.lazy=" item.num "
                  />
                  <label class="add-btn" @click="item.num++">+</label>
                </div>
              </div>
              <div class="com-price">
                <span>
                  <i>&yen;</i>
                  {{parseFloat(item.price*item.num)}}
                </span>
              </div>
            </div>
            <div class="del-box" v-show="edit==true" @click='delshop(index)'>
              <p class="del-com" >删除</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mian-emptyCar" v-show="this.$store.state.shopCart<1">
      <img src="../assets/img/shopping_wu.png" alt />
      <p>购物车还是空的</p>
      <p>快去逛逛吧~</p>
    </div>
     
    <div class="settle-pri">
      <ul class="settle-ul">
        <li>
           <input type="checkbox" v-model="allCheck" :class="allCheck==true?' checkbtn isTrue':'checkbtn'"  @change="allchek">
          <br />
          <span>全选</span>
        </li>
        <li>
         <input   @change="editor"  v-model="edit" type="checkbox" :class="edit==true?'editor-item  editor':'editor-item'"><br>
          <span >编辑</span>
        </li>
        <li>
          <span >
            合计：
            <i >{{total || 0}}</i>
          </span>
          <br />
          <span>(不含运费)</span>
        </li>
        <li>
          <span>去结算</span>
        </li>
      </ul>
    </div>
    <Tab type="2"></Tab>
 
  </div>
</template>
<script>
import Tab from "../tab/tabPage";
import { Indicator } from 'mint-ui';


export default {
  name: "shopping",
  data() {
    return {
   allCheck:false,
    totalprice:0,
    edit:false,
    shopCart:[],
    shopCart2:[],

    };
  },
  computed: {
       total:function(){
         var num = 0
         for(var i = 0; i <this.shopCart.length;i++){
              if(this.shopCart[i].isFreeShip){
                num += this.shopCart[i].num* parseFloat(this.shopCart[i].price)
              }    
         }
        return num
       }
    },
  methods: {
    allchek(){
      for(var i = 0; i < this.shopCart.length;i++){     
        this.shopCart[i].isFreeShip   = this.allCheck     
      }
    },
    editor(){
 for(var i = 0; i < this.shopCart.length;i++){
        this.shopCart[i].isFreeShip   = this.edit 
      }
    },
     sigChach(){
       var isTrue = true
       for(var i = 0; i <  this.shopCart.length;i++){
   
       if(  this.shopCart[i].isFreeShip==false){
                  isTrue = this.shopCart[i].isFreeShip
                
       }
       }
          this.allCheck = isTrue
       },
       delshop(index){
         //删除购物车
        this.shopCart.splice(index,1) 
        //获取整体的缓存中的数据
        var shop = JSON.parse(sessionStorage.getItem('shopCartItems'))
        //shop数据 删掉对应的值
        shop.pop(index);
        //重新存入
        sessionStorage.setItem('shopCartItems',JSON.stringify(shop))
   
         
       },
      toDetails(id){
        this.$router.push({
          path:'/store',
          qurey:{
            id:id
          }
        })
        console.log(id)
      },
      goStore(id){
        this.$router.push({
          path:'/store'
        })
      },
        loading(){
          setTimeout(() => {
            Indicator.close();
          
          }, 500);
        },
        getdata(){
         
      var data= this.$store.state.shopCart=JSON.parse(sessionStorage.getItem('shopCartItems'))||[] 
     this.shopCart= data      
        }
  },
    
  components: {
    Tab
  },
  created() {
       Indicator.open({
  text: '加载中...',
  spinnerType: 'fading-circle',
});
  },
  mounted() {
 this.loading()
  this.getdata();
  },
};
</script>
<style lang="">
.mian-emptyCar{
    width: 200px;
    height: 200px;
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
}
</style>