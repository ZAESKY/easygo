import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'home', // 如果有默认子路由，父路由的命名无意义
    component: HomeView,
    children: [
      {
        // 默认子路由，在父路由默认加载此路由
        path: '/',
        name: 'home',
        component: () => import('@/views/indexComponents/IndexView')
      },
      {
        // 用户页面路由
        path: '/users',
        name: 'users',
        component: () => import('@/views/indexComponents/UsersView')
      },
      {
        // 我的页面路由
        path: '/my',
        name: 'my',
        component: () => import('@/views/indexComponents/MyView')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/loginPage/LoginView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/registerPage/RegisterView')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
