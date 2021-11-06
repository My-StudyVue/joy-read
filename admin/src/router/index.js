import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/pages/index.vue')
import modules from './modules/index'

const routes = [
  {
    path: '/',
    name: '说明文档',
    component: Home,
    children: modules
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
