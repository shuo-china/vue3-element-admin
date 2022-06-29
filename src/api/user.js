import request from '@/utils/request'

/* 获取项目功能 */
export const getFeature = () => {
  return request({
    url: '/user/feature'
  })
}

/* 获取章节 */
export const getChapter = () => {
  return request({
    url: '/user/chapter'
  })
}
