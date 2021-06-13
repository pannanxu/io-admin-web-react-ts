import { http, get, del, post, put } from '@/utils/request'

import { IMenus } from '@/models/ISidebar'
import { ICaptcha, ILoginSubmit } from '@/models/ILogin'

export const getMenusList = (): Promise<IMenus[]> => get('/resources/menus/list')

export const loginSubmit = (data: ILoginSubmit, params: object): Promise<string> =>
  post({ url: '/ajax/login', data, params })

export const getCaptcha = (key: string = ''): Promise<ICaptcha> => get('/common/captcha.jpg', { key })
