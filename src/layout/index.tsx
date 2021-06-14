import React, { memo, useState, useCallback } from 'react'

import { Layout as LayoutAnt } from 'antd'

import { renderRoutes } from '@/utils/renderRoutes'
import { RouterType } from '@/router/router.type'
import Side from '@/layout/sider'
import Main from './main'
import Footer from './footer'

import { LayoutGlobalStyle, RightWrapper, Wrapper } from '@/layout/style'

interface IRoute {
  routers: RouterType[]
}

interface IProperties {
  route?: IRoute
  children?: any
}

const Layout: React.FC<IProperties> = ({ route, children }): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)
  const [marginLeft, setMarginLeft] = useState(220)

  const toggleFromSide = useCallback(
    (prop) => {
      updateCollapsed(!prop)
    },
    [collapsed],
  )

  const updateCollapsed = (prop: boolean) => {
    setCollapsed(!prop)
    setMarginLeft(prop ? 220 : 100)
  }
  return (
    <Wrapper marginLeft={marginLeft}>
      <LayoutGlobalStyle />
      <Side toggle={toggleFromSide} collapsed={collapsed} />
      <RightWrapper calcWidth={!collapsed ? 200 : 80}>
        <LayoutAnt>
          <Main>{route ? renderRoutes({ routers: route.routers }) : children}</Main>
          <Footer />
        </LayoutAnt>
      </RightWrapper>
    </Wrapper>
  )
}

export default memo(Layout)
