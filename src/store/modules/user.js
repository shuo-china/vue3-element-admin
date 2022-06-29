import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { getItem, setItem, removeAllitem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /* 登录 */
    login(context, userInfo) {
      const { username, password } = userInfo
      return login({
        username,
        password: md5(password)
      })
        .then((data) => {
          this.commit('user/setToken', data.token)
          setTimeStamp()
          router.push('/')
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    },
    /* 获取用户信息 */
    async getUserInfo() {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /* 退出登录 */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllitem()
      // TODO: 清理权限相关配置
      router.push('/login')
    }
  }
}
