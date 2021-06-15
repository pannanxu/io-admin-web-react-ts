import React, { memo } from 'react'

interface IProperties {}

const NoPage: React.FC<IProperties> = ({}): React.ReactElement => {

  return <div>404</div>
}

export default memo(NoPage)
