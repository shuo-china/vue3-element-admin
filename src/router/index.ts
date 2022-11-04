import Layout from '@/layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { usePremissionStore } from '@/store'
import { isEmpty } from '@/utils/type'
import type { RouteRecordRaw } from 'vue-router'

// 菜单必须设置meta对象中的title字段
// 异步路由的name必须设置，用于退出登录时removeRoute
// 异步路由设置权限时,在meta中添加roles,如['editor']

// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '控制台', icon: 'PieChart' }
      }
    ]
  }
]

// 异步路由
export const asyncRoutes = [
  {
    path: '/user',
    component: Layout,
    name: 'User',
    redirect: '/user/list',
    meta: {
      title: '用户管理',
      icon: 'User'
    },
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: () => import('@/views/user/user-list/index.vue'),
        meta: {
          title: '用户列表'
        }
      },
      {
        path: 'premission',
        name: 'Premission',
        component: () => import('@/views/user/premission/index.vue'),
        meta: {
          title: '权限页面',
          roles: ['admin']
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const premissionStore = usePremissionStore()
  const addRoutes = premissionStore.addRoutes

  if (!isEmpty(addRoutes)) {
    const addRoutesNames = new Set()

    const routes = [...addRoutes]
    for (const route of routes) {
      addRoutesNames.add(route.name)
      if (route.children && route.children.length) {
        routes.push(...route.children)
      }
    }

    addRoutesNames.forEach(name => {
      name && router.removeRoute(name as string)
    })
  }

  premissionStore.$reset()
}

export default router
