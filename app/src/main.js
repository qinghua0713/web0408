// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import vueAxios from 'vue-axios'
import store from './store'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import MintUI from 'mint-ui'
import {Button} from 'mint-ui'


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueLazyload)
Vue.use(vueAxios,Axios)
Vue.use(MintUI)

Vue.component(Button.name,Button)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
