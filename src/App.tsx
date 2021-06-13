import React, { useState, useEffect } from 'react'

import { useLocation, Redirect } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from '@/utils/renderRoutes'
import { Provider } from 'react-redux'
import routers from './router'

import store from './store'

import { GlobalStyle } from '@/style'
import 'antd/dist/antd.css'
import { hasToken } from '@/utils/tokenUtil'

const HasRouter: React.FC<any> = (props): React.ReactElement => {
  const location = useLocation()
  const [isLogin, setLoginState] = useState(false)

  console.log(props.$hello)

  // 监听路由改变时修改修改登陆状态
  useEffect(() => {
    setLoginState(hasToken())
  }, [location.pathname])

  return <>{!isLogin && <Redirect to={{ pathname: '/login' }} />}</>
}

function App() {
  return (
    <Provider store={store}>
      {/* 全局css样式 */}
      <GlobalStyle />
      <Router>
        <HasRouter />
        {renderRoutes({ routers })}
      </Router>
    </Provider>
  )
}

export default App
