// getters被当作快捷访问的形式进行访问
import variables from '@/styles/variables.scss'
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    console.log(state.user)
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language
}
export default getters