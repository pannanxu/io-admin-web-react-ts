import {
  http, get, del, post, put,
} from '@/utils/request'

const singlePoetryGet = () => get('/api/singlePoetry')

const singlePoetryPost = (body: any) => post({ url: '/api/singlePoetry', body })

const singlePoetryDelete = () => del('/api/singlePoetry')

const singlePoetryPut = (body: any) => put({ url: '/api/singlePoetry', body })

const singlePoetryRequest = (body: any) => http({ url: '/api/singlePoetry', body })
