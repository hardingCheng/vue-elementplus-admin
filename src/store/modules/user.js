// user.js 模块，用于处理所有和 用户相关 的内容
//
import {
  login
} from '@/api/sys'
import md5 from 'md5'
import {
  setItem,
  getItem
} from '@/utils/storage'
import {
  TOKEN
} from '@/constant'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    state: () => ({
      token: getItem(TOKEN) || ''
    })
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * 登录请求动作
     * @param {*} context
     * @param {*} userInfo
     * @returns
     */
    login (context, userInfo) {
      const {
        username,
        password
      } = userInfo
      // 不管成功和失败都是可以处理的
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            this.commit('user/setToken', data.token)
            router.push('/')
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}