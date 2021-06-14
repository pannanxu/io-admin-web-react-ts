import { noPermissionRouters } from '@/router'
import { getMenus, hasToken, removeToken } from '@/utils/localStoreUtil'

export const hasPermission = (uri: string): boolean => {
  let res = false
  // 公共页面
  for (let route of noPermissionRouters) {
    if (route.path === uri) {
      res = true
      break
    }
  }
  // 非公共页面
  if (!res) {
    // 已登录
    if (hasToken()) {
      let menus = getMenus()
      // 如果没有菜单, 就直接视为未登录
      if (menus.length === 0) {
        removeToken()
      } else {
        for (let menu of menus) {
          // 并且拥有此资源权限
          if (menu.uri === uri) {
            res = true
            break
          }
        }
      }
    }
  }
  return res
}
