import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { getMenusAction } from '@/store/modules/layout/action'

import { MENUS_CONSTANTS } from '@/store/modules/layout/constants'
import { IMenus } from '@/models/ISidebar'

interface IProperties extends RouteComponentProps {
  collapsed: boolean
  toggle: any
  dispatch: any
}

const Side: React.FC<IProperties> = ({ toggle, collapsed, dispatch, location, history }): React.ReactElement => {
  useEffect(() => {
    dispatch(getMenusAction())
  }, [])

  const { menus = [] } = useSelector(
    (state: any) => ({
      menus: state.getIn(['layoutReducer', MENUS_CONSTANTS]) as IMenus[],
    }),
    shallowEqual,
  )

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
        {menus.map((menu) => (
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

export default withRouter(memo(Side))
