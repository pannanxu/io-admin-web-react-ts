import React, { memo } from 'react'

import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { getMenusList } from '@/api/system'

interface IProperties {
  toggle: any
  collapsed: boolean
}

const Header: React.FC<IProperties> = ({ toggle, collapsed }): React.ReactElement => {
  getMenusList().then((res) => {
    console.log(res)
  })

  return (
    <Layout.Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
    </Layout.Header>
  )
}

export default memo(Header)
