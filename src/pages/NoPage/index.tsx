import React, { memo } from 'react'
import { hasToken } from '@/utils/localStoreUtil'
import Layout from '@/layout'

interface IProperties {}

const NoPage: React.FC<IProperties> = ({}): React.ReactElement => {
  const hasLogin = hasToken()

  return <div>{hasLogin ? <Layout children={<div>404</div>} /> : <div>404</div>}</div>
}

export default memo(NoPage)
