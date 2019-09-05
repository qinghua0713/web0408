<template>
     <div id="app" class="classify-page">

        <div class="classify-search">
            <div class="mian-search">
                <form id="top-search-form" action="#">
                    <input class="mian-search-inp" type="text" placeholder="Montagne jeunesse">
                    <span>
                        <img src="../assets/img/search.png" alt="">
                    </span>
                </form>
            </div>
        </div>

  
        <div class="crumbs-nav">
            <ul> 
                
                <li :class=" num==index? 'items-crumbs active':'items-crumbs' "  :key="index+'e'" v-for="(item,index) in arr" @click="num=index">
                    <span >{{item.name}}</span>
                </li>
                
            </ul>
        </div>
        <div class="classify-commodity">
              <ul class="classify-commodity-ul"  :key="index1+'w'" v-for="(item1,index1) in arr" v-show="num==index1">
                <li  :key="index2+'q'" v-for="(item2,index2) in item1.list">
                    <img :src="item2.thumbnail" alt="">
                    <p>{{item2.name}}</p>
                </li>
              
            </ul>
        </div>
    
      <Tab type="1"></Tab>


    </div>
</template>
<script>
import Tab from  '../tab/tabPage';
import sUrl from  '../urlConfig';
import { Toast, Indicator } from "mint-ui";
export default {
    name:'classify',
    data() {
        return {
            num:0,
              arr:[]
        }
    },
   
    components:{
        Tab
    },
    mounted() {
         Indicator.open({
  text: '加载中...',
  spinnerType: 'fading-circle',
  
});
        this.axios.get(sUrl.sUrl+'/getClassify')
        .then(res=>{
            if(res.data.code == 200 && res.data.success){
                this.arr = res.data.data
                console.log(this.arr)
                 Indicator.close();
            }
        })
        .catch(err=>{
             Indicator.close();
        })
    },
}
</script>
<style lang="">
 
</style>

