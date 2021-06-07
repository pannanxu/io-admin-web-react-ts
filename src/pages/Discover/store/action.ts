import {Dispatch} from 'redux'
import * as actionTypes from './constants'

import {IMenu} from "@/models/IDiscover";

const changeMenusAction = (menus: IMenu[]) => ({
    type: actionTypes.MENUS_CONSTANTS,
    menus
})

export const getMenusAction = (): any => {
    return (dispatch: Dispatch) => {
        dispatch(changeMenusAction([
            {name: '仪表盘', path: '/discover'},
            {name: '仪表盘1', path: '/discover1'},
        ]))
    };
}
