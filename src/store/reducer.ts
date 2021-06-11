// @ts-ignore
import { combineReducers } from 'redux-immutable'

import { reducer as layoutReducer } from '@/store/modules/layout'

// 合并多个reducer到一个中
export default combineReducers({
  layoutReducer,
})
