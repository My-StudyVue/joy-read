import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/pages/index.vue')
import modules from './modules/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: modules
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
