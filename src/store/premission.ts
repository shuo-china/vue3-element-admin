import { defineStore } from 'pinia'
import { asyncRoutes, constantRoutes } from '@/router'
import type { RouteRecordRaw } from 'vue-router'

function hasPermission(roles: string[], route: RouteRecordRaw) {
  const accessRoles = route.meta?.roles
  if (accessRoles) {
    return roles.some(role => (accessRoles as string[]).includes(role))
  } else {
    return true
  }
}

function filterAsyncRoutes(roles: string[], routes: RouteRecordRaw[]) {
  const res: RouteRecordRaw[] = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(roles, tmp.children)
      }
      res.push(tmp)
    }
  })

  return res
}

interface State {
  addRoutes: RouteRecordRaw[]
  routes: RouteRecordRaw[]
}

export const usePremissionStore = defineStore('premission', {
  state: () =>
    ({
      routes: [],
      addRoutes: []
    } as State),
  actions: {
    generateRoutes(roles: string[]) {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(roles, asyncRoutes)
      }

      this.addRoutes = accessedRoutes
      this.routes = constantRoutes.concat(accessedRoutes)

      return accessedRoutes
    }
  }
})
