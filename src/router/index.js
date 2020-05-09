import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/components/Home'],resolve)
    },
    {
      path: '/product',
      component: resolve => require(['@/components/productInfo'], resolve)
    }
  ]
})
