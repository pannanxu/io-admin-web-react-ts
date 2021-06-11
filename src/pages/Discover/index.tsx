import React, { memo } from 'react'

interface IProperties {
  dispatch: any
}

const Discover: React.FC<IProperties> = ({}): React.ReactElement => {
  return <div>Discover</div>
}

export default memo(Discover)
