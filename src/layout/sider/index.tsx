import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { getMenusAction } from '@/store/modules/layout/action'

import { MENUS_CONSTANTS } from '@/store/modules/layout/constants'
import { IMenus } from '@/models/ISidebar'

interface IProperties {
  collapsed: boolean
  toggle: any
}

const Side: React.FC<IProperties> = ({ toggle, collapsed }): React.ReactElement => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const { menus } = useSelector(
    (state: any) => ({
      menus: state.getIn(['layoutReducer', MENUS_CONSTANTS]),
    }),
    shallowEqual,
  )

  useEffect(() => {
    dispatch(getMenusAction())
  }, [])

  return (
    <Layout.Sider
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onCollapse={() => toggle(!collapsed)}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      onBreakpoint={(broken) => {
        toggle(broken)
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
        {menus?.toJS().map((menu: IMenus) => (
          <Menu.Item
            key={menu.uri}
            className={menu.icon}
            icon={<UserOutlined />}
            onClick={() => history.push(menu.uri)}
          >
            {menu.title}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Sider>
  )
}

export default memo(Side)
