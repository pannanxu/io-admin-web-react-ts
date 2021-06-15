import { getPermissions, hasToken } from '@/utils/localStoreUtil'

export const hasPermission = (permissions: string[], method?: string, type?: number): boolean => {
  if (!permissions || permissions.length === 0 || !hasToken()) {
    return false
  }
  let permissionsStore = getPermissions()
  for (let i = 0; i < permissionsStore.length; i++) {
    for (let j = 0; j < permissions.length; j++) {
      let e = permissionsStore[i]
      if (e.permission === permissions[j]) {
        if ((method && e.method === method) && (type && e.type === type)) {
          return true
        }
      }
    }
  }
  return false
}
