import React from 'react'

import { HashRouter as Router } from 'react-router-dom'
import renderRoutes from '@/router/renderRoutes'
import { Provider } from 'react-redux'
import routers from './router'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      {/* 全局css样式 */}
      {/*<GlobalStyle/>*/}
      <Router>{renderRoutes(routers)}</Router>
    </Provider>
  )
}

export default App
