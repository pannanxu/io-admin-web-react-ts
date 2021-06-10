import React, { memo, Suspense } from 'react'

interface IProperties {
  children: any
}

const Main: React.FC<IProperties> = ({ children }): React.ReactElement => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  </div>
)

export default memo(Main)
