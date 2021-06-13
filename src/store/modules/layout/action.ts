import { Dispatch } from 'redux'
import { fromJS } from 'immutable'
import { IMenus } from '@/models/ISidebar'

import { MENUS_CONSTANTS, IS_LOGIN_CONSTANTS } from './constants'

import { getMenusList } from '@/api/system'
import { hasToken } from '@/utils/tokenUtil'

const changeMenusAction = (menus: IMenus[]) => ({
  type: MENUS_CONSTANTS,
  menus: fromJS(menus),
})

export const getMenusAction = () => (dispatch: Dispatch) => {
  getMenusList().then((menus) => {
    dispatch(changeMenusAction(menus))
  })
}

const changeIsLogin = (isLogin: boolean) => ({
  type: IS_LOGIN_CONSTANTS,
  isLogin: isLogin,
})

export const setLoginState = () => (dispatch: Dispatch) => {
  dispatch(changeIsLogin(hasToken()))
}
