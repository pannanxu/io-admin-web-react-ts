import React, { memo, useState, useCallback } from 'react'

import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { Layout as LayoutAnt } from 'antd'

import { renderRoutes } from '@/utils/renderRoutes'
import { RouterType } from '@/router/router.type'
import Side from '@/layout/sider'
import Main from './main'
import Footer from './footer'

import { Wrapper } from '@/layout/style'

interface IRoute {
  routers: RouterType[]
}

interface IProperties {
  route: IRoute
}

const Layout: React.FC<IProperties> = ({ route }): React.ReactElement => {
  const [collapsed, setCollapsed] = useState(false)
  const [marginLeft, setMarginLeft] = useState(220)

  const dispatch: Dispatch = useDispatch()

  const toggleFromMain = useCallback(() => {
    updateCollapsed(collapsed)
  }, [collapsed])

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
      <LayoutAnt>
        <Side toggle={toggleFromSide} collapsed={collapsed} />
        <Main toggle={toggleFromMain} collapsed={collapsed}>
          {renderRoutes({
            routers: route.routers,
            extraProps: { dispatch },
          })}
        </Main>
        <Footer />
      </LayoutAnt>
    </Wrapper>
  )
}

export default memo(Layout)
