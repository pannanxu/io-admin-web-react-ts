import { getPermissions } from '@/utils/localStoreUtil'
import { noPermission } from '@/router'

// 给一组资源权限和类型，验证是否有该资源权限
export const hasPermission = (permissions: string[], type?: number): boolean => {
  let permissionsStore = getPermissions()
  for (let i = 0; i < permissionsStore.length; i++) {
    for (let j = 0; j < permissions.length; j++) {
      let e = permissionsStore[i]
      if (e.permission === permissions[j] && e.type === type) {
        return true
      }
    }
  }
  return false
}
// 给一个uri验证是否是免权限页面
export const hasDefaultUri = (uri: string) => {
  for (let route of noPermission) {
    if (route.path === uri) {
      return true
    }
  }
  return false
}
