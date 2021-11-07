import { h, resolveComponent } from 'vue'
import { NIcon, } from 'naive-ui'
import menuList from '../data/menu'
import { DocumentTextOutline as Document, FolderOpenOutline as Folder } from '@vicons/ionicons5'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = menuList.map(menu => {
  let menuChildrenSon = []
  let menuChildren = []
  if (menu.children && menu.children.length > 0) {
    menuChildren = menu.children.map(children => {
      if (children.children && children.children.length > 0) {
        menuChildrenSon = children.children.map(son => {
          return {
            label: () =>
              h(
                resolveComponent('router-link'),
                {
                  to: {
                    path: son.path
                  }
                },
                { default: () => son.name }
              ),
            key: son.id,
            icon: renderIcon(Document),
          }
        })
        return {
          label: children.name,
          key: children.id,
          children: menuChildrenSon,
          icon: renderIcon(Folder),
        }
      }
      return {
        label: () =>
          h(
            resolveComponent('router-link'),
            {
              to: {
                path: children.path
              }
            },
            { default: () => children.name }
          ),
        key: children.id,
        icon: renderIcon(Document),
      }
    })
    return {
      label: menu.name,
      key: menu.id,
      icon: renderIcon(menu.icon),
      children: menuChildren,
      icon: renderIcon(Folder),
    }
  }
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
    icon: renderIcon(Document),
  }
})

export default menuOptions;
