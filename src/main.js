// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Search, Swipe, SwipeItem, Lazyload, Grid, GridItem, Image as VanImage} from 'vant';
import Vant from 'vant'
import { Lazyload } from 'vant'
import 'vant/lib/index.css'

import store from './store.js'

Vue.config.productionTip = false
import $ from 'jquery'
// 导入api接口
import api from "@/api"
Vue.prototype.$api = api; //将api挂载到vue的原型上

import Fun from "../static/js/public";
Vue.prototype.Fun = Fun;

// Vue.use(Search).use(Swipe).use(SwipeItem).user(VanImage).use(Lazyload).use(Grid).use(GridItem);
Vue.use(Vant).use(Lazyload);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
