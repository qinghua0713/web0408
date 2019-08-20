import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    shopCart: [],
    collect: 0,
    userPhone: ''
  },
  mutations: {
    setShopCar(state, obj) {
      for (var i = 0; i < state.shopCart.length; i++) {
        if (obj.id == state.shopCart[i].id &&
          obj.buySelect == state.shopCart[i].buySelect) {
          state.shopCart[i].num = obj.num + state.shopCart[i].num  
          sessionStorage.setItem('shopCartItems', JSON.stringify(state.shopCart))
          return false
        }
      }
         state.shopCart=JSON.parse(sessionStorage.getItem('shopCartItems'))||[] 
         state.shopCart.push(obj);
         
         sessionStorage.setItem('shopCartItems', JSON.stringify(state.shopCart))
       
    },
 
 
    addCollect(state, num) {
      state.collect = state.collect + num
    },
    setNickname(state, val) {
      state.userPhone = val
    },
  },
  getters: {
    userPhone(state) {
      return state.userPhone || sessionStorage.getItem("phone")
    },
    shopCart(state){
      for(var i =0;i<state.shopCart.length;i++){
        state.shopCart = JSON.parse(sessionStorage.getItem())
      }
      console.log(state.shopCart)
      return state.shopCart
     
    }
  },
  actions: {
        
  }
})