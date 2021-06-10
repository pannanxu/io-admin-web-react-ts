import React, { memo, useEffect } from 'react'

import { getMenusAction } from '@/pages/Discover/store/action'

import { useSelector, shallowEqual } from 'react-redux'
import { IMenu } from '@/models/IDiscover'
import * as actionTypes from './store/constants'

interface IProperties {
  dispatch: any
}

const Discover: React.FC<IProperties> = ({ dispatch }): React.ReactElement => {
  const { menus = [] } = useSelector(
    (state: any) => ({
      menus: state.getIn(['discoverReducer', actionTypes.MENUS_CONSTANTS]) as IMenu[],
    }),
    shallowEqual,
  )

  useEffect(() => {
    getMenus()
  }, [])

  const getMenus = () => {
    dispatch(getMenusAction())
  }
  return (
    <div>
      {menus[1]?.name}
      Discover
    </div>
  )
}

export default memo(Discover)
