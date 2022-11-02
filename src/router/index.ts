import Layout from '@/layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { usePremissionStore } from '@/store'
import { isEmpty } from '@/utils/type'
import type { RouteRecordRaw } from 'vue-router'

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
        component: () => import('@/views/dashboard/index.vue')
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue'),
    meta: {
      roles: ['editor']
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter() {
  const premissionStore = usePremissionStore()
  if (!isEmpty(premissionStore.addRoutes)) {
    premissionStore.addRoutes.forEach(route => {
      route.name && router.removeRoute(route.name)
    })
  }
}

export default router
