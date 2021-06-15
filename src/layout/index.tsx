import React, { memo, useEffect } from 'react'

import { Link, useHistory } from 'react-router-dom'

import type { MenuDataItem } from '@ant-design/pro-layout'
import ProLayout from '@ant-design/pro-layout'
import { SmileOutlined, HeartOutlined } from '@ant-design/icons'
import { renderRoutes, matchRoutes } from 'react-router-config'

import routers from '@/router'
import { hasPermission } from '@/utils/permission'

interface IProperties {
  route: any
}

const IconMap = {
  smile: <SmileOutlined/>,
  heart: <HeartOutlined/>,
}

/**
 * 将路由中需要展示,并且拥有该权限的菜单提取出来
 * @param menus
 */
const loopMenu = (menus: MenuDataItem[]): MenuDataItem[] => {
  let list = []
  if (menus) {
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].isShow && hasPermission(menus[i].permissions)) {
        menus[i].children = loopMenu(menus[i].children as MenuDataItem[])
        list.push(menus[i])
      } else {
        let menu = loopMenu(menus[i].children as MenuDataItem[])
        if (menu && menu.length != 0) {
          menu.map(e => {
            if (hasPermission(e.permissions)) {
              list.push(e)
            }
          })
        }
      }
    }
  }
  return list
}

const Layout: React.FC<IProperties> = (props): React.ReactElement => {
  const history = useHistory()

  useEffect(() => {
    // 一些重定向操作
    if (props.route.redirect) {
      history.replace(props.route.redirect)
    }

    let children = props.route?.children
    if (children) {
      let routes = matchRoutes(children, history.location.pathname)
      if (routes.length === 0) {
        history.push('/404')
      } else {
        let permissions = [] as string[]
        routes.map(e => {
          e.route.permissions.map((permission: string) => permissions.push(permission))
        })
        if (!hasPermission(permissions)) {
          history.replace('/login')
        }
      }
    }
  }, [history.location.pathname])

  return (
    <ProLayout
      style={{
        height: 500,
      }}
      fixSiderbar
      location={{
        pathname: history.location.pathname,
      }}
      menu={{ request: async () => loopMenu(routers) }}
      onMenuHeaderClick={(e) => history.push('/discover/discover')}
      menuItemRender={(item, dom) => {
        return item.itemPath === history.location.pathname ? (
          dom
        ) : (
          <Link to={item.itemPath !== history.location.pathname && item.itemPath}>{dom}</Link>
        )
      }}
    >
      <React.Suspense fallback={<i/>}>{renderRoutes(props.route.children)}</React.Suspense>
    </ProLayout>
  )
}

export default memo(Layout)
