import React, { FC, ReactElement } from 'react'
import * as routerDom from 'react-router-dom'
import { RouterType } from '@/router/router.type'
import { hasToken } from '@/utils/tokenUtil'

interface IProperties {
  routers?: RouterType[]
  authPath?: string
  extraProps?: any
  switchProps?: any
}

/**
 * 加强router-config的功能
 * @param routes        路由列表
 * @param authPath      授权页面路径
 * @param extraProps    参数传递
 * @param switchProps   参数传递
 * @returns {*}
 */
export const renderRoutes: FC<IProperties> = ({
  routers = [],
  switchProps: switchProperties = {},
  authPath = '/login',
  extraProps: extraProperties = {},
}): ReactElement => {
  return (
    <routerDom.Switch {...switchProperties}>
      {routers.map((route, index: number) => (
        <routerDom.Route
          key={route.key || index}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(properties) => {
            let isLogin = hasToken()
            // 如果是登陆状态进入的登陆页面, 则跳入首页
            if (route.path === authPath && isLogin) {
              return <routerDom.Redirect to={{ pathname: '/' }} />
            }
            // 如果当前 uri 是重定向, 并且不需要授权 或者 已经授权则重定向
            if (route.redirect && (!route.meta?.requiresAuth || isLogin)) {
              return <routerDom.Redirect to={{ pathname: route.redirect }} />
            }
            return <route.component {...properties} {...extraProperties} route={route} />
          }}
        />
      ))}
    </routerDom.Switch>
  )
}
