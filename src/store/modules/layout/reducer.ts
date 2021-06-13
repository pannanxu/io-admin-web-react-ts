import { Map, fromJS } from 'immutable'

import { MENUS_CONSTANTS, IS_LOGIN_CONSTANTS, ActionType } from './constants'

const defaultState = Map({
  menus: fromJS([]),
  isLogin: false,
})

function reducer(state = defaultState, action: ActionType) {
  switch (action.type) {
    case MENUS_CONSTANTS:
      return state.set(MENUS_CONSTANTS, action.menus)
    case IS_LOGIN_CONSTANTS:
      return state.set(IS_LOGIN_CONSTANTS, action.isLogin)
    default:
      return state
  }
}

export default reducer
