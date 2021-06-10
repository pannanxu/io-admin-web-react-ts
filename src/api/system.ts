import { http, get, del, post, put } from '@/utils/request'

import { IMenus } from '@/models/ISidebar'

export const getMenusList = (): Promise<IMenus[]> => get('/system/resources/get/list')
