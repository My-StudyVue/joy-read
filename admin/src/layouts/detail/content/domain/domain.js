import { h, resolveComponent } from 'vue'
import { NIcon, } from 'naive-ui'
import menuList from '../data/menu'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = menuList.map(menu => {
  let menuChildrenSon = []
  let menuChildren = []
  if (menu.children && menu.children > 0) {
    if (menu.children.children && menu.children.children > 0) {
      menuChildrenSon = menu.childrens.map(son => {
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
          key: menu.id,
        }
      })
    }
    menuChildren = menu.childrens.map(children => {
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
        key: menu.id,
        children: menuChildrenSon,
      }
    })
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
    icon: renderIcon(menu.icon),
    children: menuChildren
  }
})

export default menuOptions;
