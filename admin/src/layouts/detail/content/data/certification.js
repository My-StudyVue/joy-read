import { FolderOpenOutline as Folder } from '@vicons/ionicons5'

export default {
  id: 'certification',
  name: '认证管理',
  icon: Folder,
  children: [
    {
      id: 'register',
      name: '注册',
      path: '/documentation/register',
    },
    {
      id: 'login',
      name: '登陆',
      path: '/documentation/login',
    },
  ],
  path: '',
}