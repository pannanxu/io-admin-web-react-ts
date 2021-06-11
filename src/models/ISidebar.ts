/**
 * 菜单
 */
export interface IMenus {
  /**
   * ID,KEY
   */
  id: number
  /**
   * 父ID
   */
  parentId: number
  /**
   * 标题
   */
  title: string
  /**
   * 描述
   */
  description: string
  /**
   * URI
   */
  uri: string
  /**
   * 标识
   */
  mark: string
  /**
   * 打开方式：_blank,_parent,_self,_top
   */
  target: string
  /**
   * ICON图标
   */
  icon: string
  /**
   * 扩展参数
   */
  params: object
  /**
   * 是否展示
   */
  isShow: boolean
  /**
   * 是否刷新
   */
  isRefresh: boolean
  /**
   * 排序
   */
  menuSort: number
}
