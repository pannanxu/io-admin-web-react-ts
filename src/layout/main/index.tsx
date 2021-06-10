import React, { memo, Suspense } from 'react'
import { Layout } from 'antd'
import Header from '@/layout/header'

interface IProperties {
  children: any,
  toggle: any,
  collapsed: boolean;
}

const Main: React.FC<IProperties> = ({ children, toggle, collapsed }): React.ReactElement => {
  return (
    <Layout className="site-layout">
      <Header toggle={toggle} collapsed={collapsed}/>
      <Layout.Content className="site-layout-background">
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </Layout.Content>
    </Layout>
  )
}

export default memo(Main)
