/**
 * 通过按需导入的createRouter方法来构建router实例
 * 通过按需导入的createWebHashHistory方法来创建has模式对象进行路由模式指定
 * 无需通过Vue.use(VueRouter)的形式进行挂载
 * routes路由表无差别
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

/**
 * 公开路由表
 */
const publicRoutes = [{
  path: '/',
  component: () => import('@/layout/index')
}, {
  path: '/login',
  component: () => import('@/views/login/index')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router