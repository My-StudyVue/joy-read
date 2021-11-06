import { h, resolveComponent } from 'vue'
import { NIcon, } from 'naive-ui'
import { DocumentTextOutline as Document, FolderOpenOutline as Folder } from '@vicons/ionicons5'
import menuList from '../data/menu'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = menuList.map(menu => {
  return {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: {
            path: menu.path
          }
        },
        { default: () => menu.name }
      ),
    key: menu.id,
    icon: renderIcon(Document)
  }
})

export default menuOptions;
