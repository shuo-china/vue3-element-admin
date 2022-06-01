import router from '@/router'
import store from '@/store'

const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 用户已登录，不允许进入login
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 用户未登录，只允许进入login
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
