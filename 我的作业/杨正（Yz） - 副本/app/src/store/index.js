import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
export default new Vuex.Store({
    state:{
     
        shopCart:[
     
              
          ]
    },
    mutations:{
          setShopCar(state,obj){
            console.log(obj)
           
            for(var i = 0; i < state.shopCart.length;i++){
              if(obj.id==state.shopCart[i].id&&
                obj.buySelect ==state.shopCart[i].buySelect ){
                  state.shopCart[i].num= obj.num +  state.shopCart[i].num
          
                 return false
              }
               console.log(state.shopCart[i].id)
            
            
            }
           
            state.shopCart.push(obj)
          
          }
    },
    getters:{

    },
    actions:{

    }
})