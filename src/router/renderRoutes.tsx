import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { RouterType } from '@/router/router.type'
import { hasDefaultUri, hasPermission } from '@/utils/permission'
import { getPermissions, hasToken } from '@/utils/localStoreUtil'

const renderRoutes = (routes: RouterType[], extraProps = {}, switchProps = {}) => {

  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={
            props => {
              // 一些重定向操作
              if (route.redirect) {
                return <Redirect to={route.redirect}/>
              }

              let pathname = props.location.pathname
              let permissions = route.permissions || []

              // 如果是登陆状态访问登陆页面, 则跳转资源的第一个资源路径
              let permissionsStore = getPermissions()
              if (pathname === '/login' && hasToken() && permissionsStore.length > 0) {
                for (let per of permissionsStore) {
                  if (per.type === 1) return <Redirect to={per.uri}/>
                }
              }

              // 如果是免权限页面
              if (hasDefaultUri(pathname) || permissions.length === 0) {
                return returnRender(route, props, extraProps)
              }

              // 最终验证是否拥有数据库返回来的资源权限
              for (let per of permissionsStore) {
                if (per.uri === pathname && per.type === 1) {
                  return returnRender(route, props, extraProps)
                }
              }

              return <Redirect to='/404'/>
            }
          }
        />
      ))}
      <Redirect to='/404'/>
    </Switch>
  ) : null
}

const returnRender = (route: RouterType, props: any, extraProps = {}) => {
  return route.render ? (
    route.render({ ...props, ...extraProps, route: route })
  ) : (
    <route.component {...props} {...extraProps} route={route}/>
  )
}

export default renderRoutes
