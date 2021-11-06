import { FolderOpenOutline as Folder } from '@vicons/ionicons5'

export default {
  id: 'information',
  name: '数据管理',
  icon: Folder,
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
          id: 'home',
          name: '商品列表',
          path: '/information/goods/goodsList',
        },
        {
          id: 'goods',
          name: '商品详情',
          path: '/information/goods/goodsInfo',
        },
      ],
      path: '/information/goods',
    },
  ],
  path: '',
}