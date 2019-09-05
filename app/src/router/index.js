import Vue from 'vue'
import Router from 'vue-router'

// import classify from '@/components/classify'
// import Index from '@/components/Index'
// import logon from '@/components/logon'
// import personalCenter from '@/components/personalCenter'

//路由懒加载
const classify = ()=> import('@/components/classify')
const Index = ()=> import('@/components/Index') 
const logon = ()=> import('@/components/logon')
const personalCenter = ()=>import('@/components/personalCenter') 

import pleaseLogin   from '@/components/pleaseLogin'
import publicPraise from '@/components/publicPraise'
import register from '@/components/register'
import shopping from '@/components/shopping'
import store from '@/components/store'
import notLogon from '@/components/notLogon'



Vue.use(Router)

const router =  new Router({
  mode:'history',// 路由使用history模式
  routes: [
    {
      path:'/',
     
      name:'Index',
      meta:{title:'首页'},
      component:Index
     },
    {
      path:'/pleaseLogin',
      name:'pleaseLogin',
      meta:{title:'请先登录'},
      component:pleaseLogin
    },{
      path:'/classify',
      name:'classify',
      meta:{title:'分类'},
      component:classify
    },
    
   
    {
      path:'/logon',
      name:'logon',
      meta:{title:'登录'},
      component:logon
    },
    {
      path:'/personalCenter',
      name:'personalCenter',
      meta:{title:'个人中心'},
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
      meta:{title:'购物车'},
      component:shopping
    },
    {
      path:'/store',
      name:'store',
      meta:{title:'商品详情'},
      component:store
    },
    {
      path:'/notLogon',
      name:'notLogon',
      meta:{title:'未登录'},
      component:notLogon
    },
   
  
  ]
})
export default router
router.beforeEach((to,from,next)=>{
  if(to.meta && to.meta.title)
    document.title = to.meta.title+' yang - 洋网店'
  if(to.fullPath == '/personalCenter'){
     if(!sessionStorage.getItem('phone')){
      next('/notLogon')
     }
  }
  if(to.fullPath == '/shopping'){
    if(!sessionStorage.getItem('phone')){
      next('/pleaseLogin')
     }
  }
  next()
})
