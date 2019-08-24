import Vue from 'vue'
import Router from 'vue-router'
import buyOptions from '@/components/buyOptions'
import classify from '@/components/classify'
import emptyCar from '@/components/emptyCar'
import Index from '@/components/Index'
import logon from '@/components/logon'
import personalCenter from '@/components/personalCenter'
import publicPraise from '@/components/publicPraise'
import register from '@/components/register'
import shopping from '@/components/shopping'
import store from '@/components/store'
import notLogon from '@/components/notLogon'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
     
      name:'Index',
      component:Index
     },
    {
      path:'/buyOptions',
      name:'buyOptions',
      component:buyOptions
    },{
      path:'/classify',
      name:'classify',
      component:classify
    },
    {
      path:'/emptyCar',
      name:'emptyCar',
      component:emptyCar
    },
   
    {
      path:'/logon',
      name:'logon',
      component:logon
    },
    {
      path:'/personalCenter',
      name:'personalCenter',
      component:personalCenter
    },
   {
    path:'/publicPraise',
    name:'publicPraise',
    component:publicPraise

    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/shopping',
      name:'shopping',
      component:shopping
    },
    {
      path:'/store',
      name:'store',
      component:store
    },
    {
      path:'/notLogon',
      name:'notLogon',
      component:notLogon
    }
  ]
})
