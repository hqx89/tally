import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Data from '../views/Data.vue'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Detail from '../views/Detail.vue'
import About from '../views/About.vue'
import Account from '../views/Account.vue'

// createRouter 创建路由实例
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/data',
      component: Data
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/account',
      component: Account
    }
  ]
})

export default router