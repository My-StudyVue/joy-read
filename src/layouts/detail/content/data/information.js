export default {
  id: 'information',
  name: '数据管理',
  children: [
    {
      id: 'home',
      name: '首页',
      path: '/information/home',
    },
    {
      id: 'goods',
      name: '商品',
      children: [
        {
          id: 'goodsList',
          name: '商品列表',
          path: '/information/goods',
        },
        {
          id: 'goodsInfo',
          name: '商品详情',
          path: '/information/goods/goodsInfo',
        },
      ],
    },
  ],
}