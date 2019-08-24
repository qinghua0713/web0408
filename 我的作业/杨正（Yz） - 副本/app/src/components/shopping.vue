<template>
  <div id="app" class="shopping-page">
    <div class="shopping-top">
      <span class="return-icon" @click="goStore">&lt;</span>
      <span class="shopping-car">购物车</span>
    </div>
    <div class="selected-shopping">
      <ul class="selected-ul">
        <li :key="index+'u'" v-for="(item,index) in this.$store.state.shopCart">
          <div class="shopping-warehouse">
            <img src="../assets/img/store.png" alt />
            <span>杭州保税区仓</span>
          </div>
          <div class="add-del">
            <div class="check">
               <input type="checkbox" v-model="item.isFreeShip" :class="allCheck==true?'checkbtn isTrue':'checkbtn'" @change="sigChach">
            </div>
            <div class="com-detail">
              <div class="com-pic">
                <img :src="item.comImg" alt />
              </div>

              <div class="add-sub-box">
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
                  {{item.price}}
                </span>
              </div>
            </div>
            <div class="del-box">
              <p class="del-com">删除</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="mian-emptyCar" v-show="isShow<1">
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
         <input type="checkbox" class="checkbtn isTrue"><br>
          <span>编辑</span>
        </li>
        <li>
          <span>
            合计：
            <i>118:00</i>
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
export default {
  name: "shopping",
  data() {
    return {
     isShow:0,
   allCheck:false
    };
  },
  methods: {
    allchek(){
      for(var i = 0; i < this.$store.state.shopCart.length;i++){
     
        this.$store.state.shopCart[i].isFreeShip   = this.allCheck
        this.allCheck = true
      }
      
    },
     sigChach(){
       var isTrue = true
       for(var i = 0; i <  this.$store.state.shopCart.length;i++){
  if( this.$store.state.shopCart[i].isFreeShip == false){
                  isTrue = this.$store.state.shopCart[i].isFreeShip
       }
       }
     
          this.allCheck = isTrue
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
      
        ind(){
            for(var i=0;i<this.$store.state.shopCart.length;i++){
                 if( i ==0 ){
                       this.isShow = 1              
                 }
                  console.log(this.$store.state.shopCart[i].num)
            }
        }
  },

  components: {
    Tab
  },
  mounted() {

     this.ind()
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