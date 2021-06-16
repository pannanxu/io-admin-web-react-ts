export interface RouterType {
  key?: string
  path?: string
  component?: any
  exact?: true
  strict?: false
  redirect?: string
  children?: RouterType[]
  isShow?: boolean
  name?: string
  readonly permissions?: string[]
  onEnter?: any
  render?: any
}
