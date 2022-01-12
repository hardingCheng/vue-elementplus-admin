// 在 Vue3中取消了 过滤器的概念，其中：

// 局部过滤器被完全删除
// 全局过滤器虽然被移除，但是可以使用 全局属性 进行替代
// 那么在列表中的时间处理部分，在 vue2 时代通常我们都是通过 全局过滤器 来进行实现的，所以在 vue3 中我们就顺理成章的通过 全局属性 替代实现
import dayjs from 'dayjs'

const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
