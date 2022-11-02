import router from './router'
import { useUserStore, usePremissionStore } from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (userStore.hasUserInfo) {
        next()
      } else {
        try {
          const { roles } = await userStore.getUserInfo()

          const premissionStore = usePremissionStore()
          const accessRoutes = premissionStore.generateRoutes(roles)
          accessRoutes.forEach(router.addRoute)

          next({ ...to, replace: true })
        } catch (error) {
          userStore.clearToken()
          next('/login')
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
