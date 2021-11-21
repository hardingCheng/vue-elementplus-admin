// 样式的改变总是由数据进行驱动
import {
  LANG
} from '@/constant'
import {
  getItem,
  setItem
} from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    /**
     * 设置国际化
     */
    setLanguage (state, lang) {
      setItem(LANG, lang)
      state.language = lang
    }
  },
  actions: {}
}