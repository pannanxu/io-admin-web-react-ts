// @ts-ignore
import { combineReducers } from 'redux-immutable'

import { reducer as discoverReducer } from '@/pages/Discover/store/index'

// 合并多个reducer到一个中
export default combineReducers({
  discoverReducer,
})
