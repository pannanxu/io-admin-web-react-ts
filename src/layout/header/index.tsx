import React, { memo } from 'react'

import { Layout } from 'antd'
import { HeaderWrapper } from '@/layout/header/style'

interface IProperties {}

const Header: React.FC<IProperties> = (props): React.ReactElement => {
  return (
    <HeaderWrapper>
      <Layout.Header>hello</Layout.Header>
    </HeaderWrapper>
  )
}

export default memo(Header)
