import axios, {AxiosRequestConfig, AxiosResponse, AxiosPromise} from 'axios'
import {IRequest, IResponse} from "@/models/IAxios";

// https://cn.vitejs.dev/guide/env-and-mode.html#env-variables
const isDev = import.meta.env.DEV;

const request = axios.create({
    // 若需要vite代理，这里就不要设置
    // baseURL: ''
})

// 添加一个请求的拦截
request.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    // 设置统一header头
    config.headers['token'] = 'token'
    return config
}, (error) => {
    return Promise.reject(error)
});

//响应拦截
request.interceptors.response.use(<T>(resp: AxiosResponse<IResponse<T>>): AxiosPromise<T> => {
    const {data} = resp

    if (data.code !== 0) {
        console.log(data.msg)
    }

    return data.data
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

const get = <T>(url: string, params?: any, headers?: any)
    : AxiosPromise<T> => request({url, params, method: 'GET', headers})

const post = <T>(req: IRequest<T>): AxiosPromise<T> => {
    req.method = 'POST'
    return request(req)
}

const del = <T>(url: string, params?: any, headers?: any)
    : AxiosPromise<T> => request({url, params, method: 'DELETE', headers})

const put = <T>(req: IRequest<T>): AxiosPromise<T> => {
    req.method = 'PUT'
    return request(req)
}

const http = <T>(req: IRequest<T>): AxiosPromise<T> => request(req)

export {
    http,
    get, post, del, put
}
