import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
const routerPush=VueRouter.prototype.push
VueRouter.prototype.push=function push(location){
  return routerPush.call(this,location).catch(error=>error)
}
Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE__URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component:  resolve=>require(['@/components/login/login'],resolve),
    },
    {
      path: '/sort',
      name:'商品管理',
      component: resolve=>require(['@/components/public/home'],resolve),
      children:[
        {
          path:'/',
          name:'商品分类',
          component: resolve=>require(['@/components/sort/sort'],resolve),
        }
      ]
    },
    {
      path: '/operation',
      name:'系统设置',
      component: resolve=>require(['@/components/public/home'],resolve),
      children:[
        {
          path:'/',
          name:'操作说明',
          component: resolve=>require(['@/components/system/operation'],resolve),
        },
      ]
    },
    {
      path: '/userslist',
      name:'会员管理',
      component: resolve=>require(['@/components/public/home'],resolve),
      children:[
        {
          path:'/',
          name:'会员列表',
          component: resolve=>require(['@/components/users/usersList'],resolve),
        },
        {
          path:'/registerUsers',
          name:'会员注册',
          component: resolve=>require(['@/components/users/registerUsers'],resolve),
        }
      ]
    },
  ]
})
