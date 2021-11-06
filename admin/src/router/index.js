import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/index.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'documentation',
        name: '说明文档',
        component: () => import('../pages/documentation/index.vue'),
      },
      {
        path: 'statusCode',
        name: '状态码',
        component: () => import('../pages/statusCode/index.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



export default router
