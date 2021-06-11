import { IMenus } from '@/models/ISidebar'

export const MENUS_CONSTANTS = 'layout/side/menus'

export interface ActionType {
  type: string
  menus: IMenus[]
}
