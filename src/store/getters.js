// getters被当作快捷访问的形式进行访问

const getters = {
  token: state => state.user.token
}
export default getters