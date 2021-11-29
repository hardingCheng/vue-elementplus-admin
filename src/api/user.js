import request from '@/utils/request'

/**
 * 个人项目
 */
export const feature = () => {
  return request({
    url: '/user/feature'
  })
}