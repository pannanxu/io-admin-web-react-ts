import React from 'react'
import Layout from '@/layout'
import Login from '@/pages/Login'

import { RouterType } from '@/router/router.type'
import NoPage from '@/pages/NoPage'

export const noPermissionRouters: RouterType[] = [
  {
    path: '/login',
    component: Login,
    exact: true,
    key: '/login',
  },
  {
    path: '',
    component: NoPage,
  },
]

const routers: RouterType[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/discover/discover',
    exact: true,
    key: '/',
  },
  {
    path: '/discover',
    component: Layout,
    redirect: '/discover/discover',
    key: '/discover/discover',
    exact: true,
  },
  {
    path: '/discover',
    key: '/discover',
    component: Layout,
    routers: [
      {
        path: '/discover/discover',
        key: '/discover/discover',
        component: React.lazy(() => import('@/pages/Discover')),
        exact: true,
      },
      {
        path: '/discover/test',
        key: '/discover/test',
        component: React.lazy(() => import('@/pages/Test')),
        exact: true,
      },
      {
        path: '/discover/home',
        key: '/discover/home',
        component: React.lazy(() => import('@/pages/Home')),
        exact: true,
      },
    ],
  },
  ...noPermissionRouters,
]

export default routers
