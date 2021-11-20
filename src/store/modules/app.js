// 样式的改变总是由数据进行驱动
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true
  }),
  mutations: {
    triggerSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened
    }
  },
  actions: {}
}