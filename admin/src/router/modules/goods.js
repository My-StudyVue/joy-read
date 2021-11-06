export default {
  path: 'information/goods',
  name: '商品列表',
  children: [
    {
      path: 'goodsInfo',
      name: '商品详情',
      component: () => import('@/pages/information/goodsList/goodsInfo/index.vue'),
    },
  ],
  component: () => import('@/pages/information/goodsList/index.vue'),
}