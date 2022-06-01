import { login } from '@/api/sys'
import md5 from 'md5'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return login({
        username,
        password: md5(password)
      })
        .then((data) => {
          this.commit('user/setToken', data.token)
          router.push('/')
        })
        .catch((err) => {
          return Promise.reject(err)
        })
    }
  }
}
