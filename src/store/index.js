/**
 * 通过按需导入createStore方法来来构建stroe实例
 * 无需通过Vue.use(Vuex)的形式进行挂载了
 */
import {
  createStore
} from 'vuex'
import user from './modules/user.js'
export default createStore({
  modules: {
    user
  }
})