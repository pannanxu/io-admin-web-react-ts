import { IMenus } from '@/models/ISidebar'

export const MENUS_CONSTANTS = 'layout/side/menus'
export const IS_LOGIN_CONSTANTS = 'layout/isLogin'

export interface ActionType {
  type: string
  menus: IMenus[]
  isLogin: boolean
}
