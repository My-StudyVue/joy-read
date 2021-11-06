import { createRouter, createWebHistory } from 'vue-router'
const Main = () => import(/* webpackChunkName: "about" */ '../pages/index.vue')

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [

    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
