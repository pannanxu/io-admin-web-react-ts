import React, { memo } from 'react'

import { Link, useHistory } from 'react-router-dom'

import type { MenuDataItem } from '@ant-design/pro-layout'
import ProLayout from '@ant-design/pro-layout'
import { SmileOutlined, HeartOutlined } from '@ant-design/icons'
import { renderRoutes } from 'react-router-config'

interface IProperties {
  route: any
}

const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
}

const defaultMenus = [
  {
    path: '/discover',
    name: '仪表盘',
    icon: '',
    isShow: true,
    children: [
      {
        path: '/discover/discover',
        name: '仪表盘',
        icon: '',
        isShow: true,
      },
      {
        path: '/discover/test',
        name: '测试',
        icon: '',
        isShow: true,
      },
      {
        path: '/discover/home',
        name: '首页',
        icon: '',
        isShow: false,
      },
    ],
  },
]

const loopMenu = (menus: MenuDataItem[]): MenuDataItem[] => {
  let list = []
  if (menus) {
    for (let i = 0; i < menus.length; i++) {
      if (!menus[i].isShow) {
        continue
      }
      menus[i].children = loopMenu(menus[i].children as MenuDataItem[])
      list.push(menus[i])
    }
  }
  return list
}

const Layout: React.FC<IProperties> = (props): React.ReactElement => {
  const history = useHistory()

  return (
    <ProLayout
      style={{
        height: 500,
      }}
      fixSiderbar
      location={{
        pathname: history.location.pathname,
      }}
      menu={{ request: async () => loopMenu(defaultMenus) }}
      onMenuHeaderClick={(e) => history.push('/discover/discover')}
      menuItemRender={(item, dom) => {
        return item.itemPath === history.location.pathname ? (
          dom
        ) : (
          <Link to={item.itemPath !== history.location.pathname && item.itemPath}>{dom}</Link>
        )
      }}
    >
      <React.Suspense fallback={<i />}>{renderRoutes(props.route.routers)}</React.Suspense>
    </ProLayout>
  )
}

export default memo(Layout)
