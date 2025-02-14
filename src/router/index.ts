import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialogs" */ '../views/comp2.vue'),

  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "logout" */ '../views/About.vue'),

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../public/views/Login.vue'),

  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import('../public/views/Signup.vue'),


  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
