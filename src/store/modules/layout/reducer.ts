import { Map } from 'immutable'

import { MENUS_CONSTANTS, ActionType } from './constants'
import { IMenus } from '@/models/ISidebar'

const defaultState = Map({
  menus: [] as IMenus[],
})

function reducer(state = defaultState, action: ActionType) {
  switch (action.type) {
    case MENUS_CONSTANTS:
      return state.set(MENUS_CONSTANTS, action.menus)
    default:
      return state
  }
}

export default reducer
