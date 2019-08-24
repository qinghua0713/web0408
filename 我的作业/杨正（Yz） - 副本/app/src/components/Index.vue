<template>
  <div id="app">
    <div class="mian-banner">
      <div class="mian-banner-box">
        <ul>
          <li class="mian-banner-list">
            <img src="../assets/img/图层 2.jpg" alt />
          </li>
        </ul>
      </div>
    </div>
    <div class="mian-search">
      <form id="top-search-form" action="#">
        <input class="mian-search-inp" type="text" placeholder="Montagne jeunesse" />
        <span>
          <img src="../assets/img/search.png" alt />
        </span>
      </form>
    </div>

    <div class="mian-shopping">
  <div class="seckill commodity"  :key="index+'w'" v-for="(item,index) in arr">
      <div class="seckill-title-box Commodity-title"  >
        <img class="commodity-icon" :src="imgArr[index].path"  />
        <h2 class="seckill-h2">{{item.name}}</h2>
      </div>
      <div class="seckill-commodity merchandise">
        <ul >
          <li class="seckill-list commodity-li"  :key="indexs+'q'" v-for="(items,indexs) in item.list"  @click="toStore(items.id)" >
            <img :src="items.thumbnail"  />
            <div class="seckill-describe describe">
              <span class="price">&yen;{{items.reduct_price}}</span>
              <span class="or-price">
                <del>&yen;{{items.original_price}}</del>
              </span>
              <p>{{items.name}}</p>
            </div>
          </li>

        </ul>
      </div>
    </div>
    </div>
     	<Tab type="0"></Tab>
  </div>
  
</template>
<script>
import Tab from '../tab/tabPage';
import sUrl from '../urlConfig';
export default {
  name: "Index",
  data() {
    return {
      arr:[],
      imgArr:[
        {path:require('../assets/img/hot.png')},
        {path:require('../assets/img/baby.png')},
        {path:require('../assets/img/meizhuang.png')},
        {path:require('../assets/img/furniture.png')},
        {path:require('../assets/img/food.png')},
        {path:require('../assets/img/airplane.png')}
      ],


  }
},
methods: {
   toStore(id){
     this.$router.push({
       path:'/store',
          query:{
            id:id,
           
          }
      
     })
      console.log(id)
   }
},
 components:{
      Tab
  },
   mounted() {
      this.axios.get(sUrl.sUrl+'/getIndexData')
        
      .then(res=>{
        if(res.data.code == 200 && res.data.success){
          this.arr = res.data.data
        }
      console.log(res.data)
        this.arrMe()
      })
      .catch(err=>{

      })
   },
}
</script>
<style lang="">

</style>
