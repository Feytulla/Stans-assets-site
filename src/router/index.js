import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: () => import( '../views/Mobile.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
