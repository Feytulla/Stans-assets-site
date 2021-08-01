import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ServicesMobil',
    name: 'ServicesMobil',
    component: () => import( '../views/ServicesMobil.vue')
  },
  {
    path: '/ServicesGame',
    name: 'ServicesGame',
    component: () => import( '../views/ServicesGame.vue')
  },
  {
    path: '/ServicesVr',
    name: 'ServicesVr',
    component: () => import( '../views/ServicesVr.vue')
  },
  {
    path: '/ServicesDedi',
    name: 'ServicesDedi',
    component: () => import( '../views/ServicesDedi.vue')
  },
  {
    path: '/ServicesSdk',
    name: 'ServicesSdk',
    component: () => import( '../views/ServicesSdk.vue')
  },
  {
    path: '/ServicesMode',
    name: 'ServicesMode',
    component: () => import( '../views/ServicesMode.vue')
  },
  {
    path: '/ErrorPage',
    name: 'ErrorPage',
    component: () => import( '../views/ErrorPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {top:0}
  }
})

export default router
