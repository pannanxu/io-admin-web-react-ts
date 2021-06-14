import { IMenus } from '@/models/ISidebar'

const TOKEN_KEY = 'token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, 'Bearer ' + token)

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
  removeMenus()
}

export const hasToken = (): boolean => {
  let token = getToken()
  return undefined !== token && null !== token && '' !== token
}

export const getMenus = (): IMenus[] => {
  let menus = localStorage.getItem('menus') || '[]'
  return JSON.parse(menus)
}
export const setMenus = (menus: string) => localStorage.setItem('menus', menus)
export const removeMenus = () => localStorage.removeItem('menus')
