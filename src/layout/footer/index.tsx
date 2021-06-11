import React, { memo } from 'react'
import { Layout } from 'antd'

interface IProperties {}

const Footer: React.FC<IProperties> = (properties: IProperties): React.ReactElement => (
  <Layout.Footer>footer</Layout.Footer>
)

export default memo(Footer)
