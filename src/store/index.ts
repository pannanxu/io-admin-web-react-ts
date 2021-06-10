import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

// composeEnhancers 函数,让chrome的redux-devtools插件获取到数据
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// 应用redux-thunk中间件
const storeEnhancer = applyMiddleware(thunkMiddleware)

export default createStore(reducer, composeEnhancers(storeEnhancer))
