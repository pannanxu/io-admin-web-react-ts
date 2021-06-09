import React, { memo } from 'react'

import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

import { renderRoutes } from '@/utils/renderRoutes'
import { IResorce } from '@/models/IResorce'
import Header from './header'
import Main from './main'
import Footer from './footer'

interface IRoute {
  routers: IResorce[]
}

interface IProperties {
  route: IRoute
}

const Layout: React.FC<IProperties> = ({ route }): React.ReactElement => {
  const dispatch: Dispatch = useDispatch()

  return (
    <div>
      <Header/>
      <Main>
        {renderRoutes({ routers: route.routers, extraProps: { dispatch } })}
      </Main>
      <Footer/>
    </div>
  )
}

export default memo(Layout)
