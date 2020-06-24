import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: resolve => require(['@/components/public'], resolve),
      children: [{
          path: '',
          component: resolve => require(['@/components/home'], resolve)
        },
        {
          path: '/my',
          component: resolve => require(['@/components/my'], resolve)
        },
        {
          path: '/cart',
          component: resolve => require(['@/components/cart'], resolve)
        }
      ]
    },
    {
      path: '/addressAdd',
      component: resolve => require(['@/components/userInfo'], resolve)
    },
    {
      path: '/addressList',
      component: resolve => require(['@/components/AddressList'], resolve)
    },
    {
      path: '/product',
      component: resolve => require(['@/components/productInfo'], resolve)
    },
    {
      path: '/search',
      component: resolve => require(['@/components/search'], resolve)
    },
    {
      path: '/login',
      component: resolve => require(['@/components/Login'], resolve)
    },
    {
      path: '/allorder',
      component: resolve => require(['@/components/allOrder'], resolve)
    },
    {
      path: '/fullorder', 
      component: resolve => require(['@/components/fullorder'], resolve)
    },
    {
      path: '/hello',
      component: resolve => require(['@/components/HelloWorld'], resolve)
    }
  ]
})
