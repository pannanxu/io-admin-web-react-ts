import { Dispatch } from 'redux'
import { IMenu } from '@/models/IDiscover'
import * as actionTypes from './constants'

const changeMenusAction = (menus: IMenu[]) => ({
  type: actionTypes.MENUS_CONSTANTS,
  menus,
})

export const getMenusAction = () => (dispatch: Dispatch) => {
  dispatch(
    changeMenusAction([
      { name: '仪表盘', path: '/discover' },
      { name: '仪表盘1', path: '/discover1' },
    ]),
  )
}
