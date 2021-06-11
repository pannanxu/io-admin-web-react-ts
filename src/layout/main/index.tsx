import React, { memo, Suspense } from 'react'
import { Layout } from 'antd'
import Header from '@/layout/header'
import { MainWrapper } from '@/layout/main/style'

interface IProperties {
  children: any
}

const Main: React.FC<IProperties> = (props): React.ReactElement => {
  const { children } = props

  return (
    <Layout>
      <Header />
      <Layout.Content>
        <MainWrapper>
          <Suspense fallback={<div />}>{children}</Suspense>
        </MainWrapper>
      </Layout.Content>
    </Layout>
  )
}

export default memo(Main)
