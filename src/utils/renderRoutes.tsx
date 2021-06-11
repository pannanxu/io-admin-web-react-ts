import React, { FC, ReactElement } from 'react'
import * as routerDom from 'react-router-dom'
import { RouterType } from '@/router/router.type'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface IProperties {
  routers?: RouterType[]
  authed?: boolean
  authPath?: string
  extraProps?: any
  switchProps?: any
}

/**
 * 加强router-config的功能
 * @param routes        路由列表
 * @param authed        是否已授权
 * @param authPath      授权页面路径
 * @param extraProps    参数传递
 * @param switchProps   参数传递
 * @returns {*}
 */
const renderRoutes: FC<IProperties> = ({
  routers = [],
  switchProps: switchProperties = {},
  authPath = '/login',
  authed = false,
  extraProps: extraProperties = {},
}): ReactElement => (
  <routerDom.Switch {...switchProperties}>
    {routers.map((route, index: number) => (
      <routerDom.Route
        key={route.key || index}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(properties) => {
          // 如果需要重定向, 并且是免授权的
          if (route.redirect && !route.meta?.requiresAuth) {
            return <routerDom.Redirect to={{ pathname: route.redirect }} />
          }
          // 授权成功后进入组件
          if (!route.meta?.requiresAuth || authed || route.path === authPath) {
            return <route.component {...properties} {...extraProperties} route={route} />
          }
          return <routerDom.Redirect to={{ pathname: authPath, state: { from: properties.location } }} />
        }}
      />
    ))}
  </routerDom.Switch>
)

export const AnimationGo = (props: any) => {
  const { children } = props
  // 根据动作自行判断前进和后退
  // 使用React.cloneElement API对props中的classNames这一props进行修改
  return (
    <routerDom.Route
      render={({ location }) => (
        <TransitionGroup
          childFactory={(child) =>
            React.cloneElement(child, {
              classNames: 'fade',
            })
          }
        >
          <CSSTransition timeout={1000} key={location.pathname}>
            {children}
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}

export { renderRoutes }
