// Map 浅层比较
import {Map} from 'immutable'

import {IMenu} from "@/models/IDiscover";
import {
    MENUS_CONSTANTS, MenusAction
} from './constants'

const defaultState = Map({
    menus: [
        {
            name: '首页',
            path: '/hs'
        }
    ] as IMenu[]
})

function reducer(state = defaultState, action: MenusAction) {
    switch (action.type) {
        case MENUS_CONSTANTS:
            return state.set(MENUS_CONSTANTS, action.menus);
        default:
            return state;
    }
}


export default reducer
