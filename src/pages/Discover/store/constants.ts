import {IMenu} from "@/models/IDiscover";

export const MENUS_CONSTANTS = 'discover/menus'

export interface MenusAction {
    type: typeof MENUS_CONSTANTS;
    menus: IMenu[];
}
