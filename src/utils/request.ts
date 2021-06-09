import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios'
import { IRequest, IResponse } from '@/models/IAxios'

// https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
const isDevelopment = import.meta.env.DEV

const request = axios.create({
  // 若需要vite代理，这里就不要设置
  // baseURL: ''
})

// 添加一个请求的拦截
request.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  // 设置统一header头
  config.headers.token = 'token'
  return config
}, (error) => Promise.reject(error))

// 响应拦截
request.interceptors.response.use(<T>(resp: AxiosResponse<IResponse<T>>): AxiosPromise<T> => {
  const { data } = resp

  if (data.code !== 0) {
    console.log(data.msg)
  }

  return data.data
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})

const get = <T>(url: string, parameters?: any, headers?: any)
  : AxiosPromise<T> => request({
  url, params: parameters, method: 'GET', headers,
})

const post = <T>(request_: IRequest<T>): AxiosPromise<T> => {
  request_.method = 'POST'
  return request(request_)
}

const del = <T>(url: string, parameters?: any, headers?: any)
  : AxiosPromise<T> => request({
  url, params: parameters, method: 'DELETE', headers,
})

const put = <T>(request_: IRequest<T>): AxiosPromise<T> => {
  request_.method = 'PUT'
  return request(request_)
}

const http = <T>(request_: IRequest<T>): AxiosPromise<T> => request(request_)

export {
  http,
  get, post, del, put,
}
