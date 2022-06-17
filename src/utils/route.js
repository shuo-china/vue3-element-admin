import path from 'path'

// 获取所有子集路由
const getChildrenRoutes = (routes) => {
  const result = []
  // 哪怕是2级，3级，4级都会在这平铺开
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

// 处理脱离层级的路由
export const filterRoutes = (routes) => {
  const childrenRoutes = getChildrenRoutes(routes)
  return routes.filter((route) => {
    return !childrenRoutes.some((childrenRoute) => {
      return childrenRoute.path === route.path
    })
  })
}

const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}

// 根据routes数据，返回对应的menu规则数据
export const generateMenus = (routes, basePath = '') => {
  const result = []
  routes.forEach((item) => {
    if (isNull(item.children) && isNull(item.meta)) return
    // 存在children，不存在meta
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 不存在children，存在meta || 存在children，存在meta
    const routePath = path.resolve(basePath, item.path)
    // 路由分离后，可能存在同名父路由的情况
    let route = result.find((r) => r.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      if (route.meta.icon && route.meta.title) {
        result.push(route)
      }
    }

    if (!isNull(item.children)) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
