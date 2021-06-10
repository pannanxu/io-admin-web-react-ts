import { AxiosPromise } from 'axios'

/**
 * 响应实体
 */
export interface IResponse<T> {
  /**
   * 响应码
   */
  readonly code: number
  /**
   * 响应信息
   */
  readonly msg: string
  /**
   * 响应数据
   */
  data: AxiosPromise<T>
}

/**
 * 请求实体
 */
export interface IRequest<T> {
  /**
   * URL
   */
  url: string
  /**
   * GET Params
   */
  params?: any
  /**
   * POST | PUT Body
   */
  body?: T
  /**
   * headers
   */
  headers?: any
  /**
   * POST | GET | PUT | DELETE
   */
  method?: any
}
