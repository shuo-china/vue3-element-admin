import path from 'path'
import i18n from '@/i18n'

export const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
  let result = []

  for (const route of routes) {
    // 创建包含path和title的item
    const data = {
      path: path.resolve(basePath, route.path),
      title: [...prefixTitle]
    }

    const re = /.*\/:.*/

    // 当前存在meta时,使用i18n进行国际化解析,组合成新的title
    if (route.meta && route.meta.title && !re.test(route.path)) {
      const i18nTitle = i18n.global.t(`msg.route.${route.meta.title}`)
      data.title = [...data.title, i18nTitle]
      result.push(data)
    }

    if (route.children) {
      const tempRoutes = generateRoutes(route.children, data.path, data.title)
      if (tempRoutes.length > 0) {
        result = [...result, ...tempRoutes]
      }
    }
  }

  return result
}
