import { Dispatch } from 'redux'
import { IMenus } from '@/models/ISidebar'

import { MENUS_CONSTANTS } from './constants'

import { getMenusList } from '@/api/system'

const changeMenusAction = (menus: IMenus[]) => ({
  type: MENUS_CONSTANTS,
  menus,
})

export const getMenusAction = () => (dispatch: Dispatch) => {
  getMenusList().then((menus) => {
    dispatch(changeMenusAction(menus))
  })
}
