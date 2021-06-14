import React, { FC, ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RouterType } from '@/router/router.type'
import { hasToken } from '@/utils/localStoreUtil'
import { hasPermission } from '@/utils/permission'

interface IProperties {
  routers?: RouterType[]
  authPath?: string
  extraProps?: any
  switchProps?: any
}

const authPath = '/login'

/**
 * 加强router-config的功能
 * @param routes        路由列表
 * @param switchProperties    参数传递
 * @param extraProperties   参数传递
 * @returns {*}
 */
export const renderRoutes: FC<IProperties> = ({
  routers = [],
  switchProps: switchProperties = {},
  extraProps: extraProperties = {},
}): ReactElement => {
  return (
    <Switch {...switchProperties}>
      {routers.map((route, index: number) => (
        <Route
          key={route.key || index}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(properties) => {
            let permission = hasPermission(route.path)

            // 登陆状态进入登陆页面时跳转首页
            if (route.path === authPath && hasToken()) {
              return <Redirect to={{ pathname: '/' }} />
            }

            // 重定向页面
            if (route.redirect && permission) {
              return <Redirect to={{ pathname: route.redirect }} />
            }

            // 渲染组件
            if (permission) {
              return <route.component {...properties} {...extraProperties} route={route} />
            }

            // 跳转登陆页面
            return <Redirect to={{ pathname: authPath }} />
          }}
        />
      ))}
    </Switch>
  )
}
