/**
 * 通过按需导入的createApp方法来构建vue实例
 * 通过vue实例.use方法来挂载插件（router,vuex）
 * 没有了Vue构造方法，无法再挂载原型
 */
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
