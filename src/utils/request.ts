import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { IRequest, IResponse } from '@/utils/request.type'
import { message } from 'antd'
import { getToken, hasToken } from '@/utils/tokenUtil'

// https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
const isDevelopment = import.meta.env.DEV

const request = axios.create({
  // 若需要vite代理，这里就不要设置
  baseURL: 'http://127.0.0.1:8081',
  timeout: 10 * 1000,
})

// 添加一个请求的拦截
request.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.contentType = 'application/json;charset=UTF-8'

    // 配置代理后，在这里统一设置前缀，不必在api中每个都添加
    // config.url = '/api' + config.url

    config.headers['Authorization'] = getToken()
    return config
  },
  (error: AxiosError) => {
    message.error(error.message)
    return Promise.reject(error)
  },
)

// 响应拦截
request.interceptors.response.use(
  (resp: AxiosResponse<IResponse<any>>) => {
    const {
      data: { code, msg, data },
    } = resp

    if (code !== 200) {
      message.error(msg)
    }

    return data as any
  },
  (error: AxiosError) => {
    message.error(error.message)
    return Promise.reject(error)
  },
)

const get = (url: string, params?: object, headers?: object): Promise<any> => {
  return http({ url, params, headers, method: 'GET' })
}

const post = ({ url, data, params, headers }: IRequest<any>): Promise<any> => {
  return http({ url, data, params, headers, method: 'POST' })
}

const del = (url: string, params?: object, headers?: object): Promise<any> => {
  return http({ url, params, headers, method: 'DELETE' })
}

const put = ({ url, data, params, headers }: IRequest<any>): Promise<any> => {
  return http({ url, data, params, headers, method: 'PUT' })
}

const http = ({ url, data, params, method, headers }: IRequest<any>): Promise<any> => {
  return new Promise((resolve) => {
    request({ url, params, method, headers })
      .then((res) => resolve(res))
      .catch((e) => console.error(e))
  })
}

export { http, get, post, del, put }
