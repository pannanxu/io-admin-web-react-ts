import React from 'react'

import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from '@/utils/renderRoutes'
import { Provider } from 'react-redux'
import { GlobalStyle } from '@/style'
import routers from './router'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      {/* 全局css样式 */}
      <GlobalStyle/>
      <Router>
        {renderRoutes({ routers })}
      </Router>
    </Provider>
  )
}

export default App
