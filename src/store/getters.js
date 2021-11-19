// getters被当作快捷访问的形式进行访问

const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: state => {
    console.log(state.user)
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters