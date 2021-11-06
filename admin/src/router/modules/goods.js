export default {
  path: 'goodsList',
  name: '商品列表',
  children: [
    {
      path: 'goodsInfo',
      name: '商品详情',
      component: () => import('@/pages/information/goods/goodsInfo/index.vue'),
    },
  ],
  component: () => import('@/pages/information/goods/index.vue'),
}