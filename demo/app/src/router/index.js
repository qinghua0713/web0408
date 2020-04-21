import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import two from '@/components/two'
import child from '@/components/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'',
          name:'child',
          component:child
        },
        {
          path:'two',
          name:'two',
          component:two
        },
     
      ]
    }
  ]
})
