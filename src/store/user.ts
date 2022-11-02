import { defineStore } from 'pinia'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login, getUserInfo } from '@/api/user'
import { isEmpty } from '@/utils/type'
import { resetRouter } from '@/router'
import type { LoginData } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    userInfo: {}
  }),
  getters: {
    hasUserInfo: state => !isEmpty(state.userInfo)
  },
  actions: {
    login(userInfo: LoginData) {
      return login(userInfo).then(res => {
        this.token = res.access_token
        setToken(res.access_token)
      })
    },
    getUserInfo() {
      return getUserInfo().then(res => {
        this.userInfo = res
        return res
      })
    },
    clearToken() {
      removeToken()
      this.$reset()
    },
    logout() {
      this.clearToken()
      resetRouter()
    }
  }
})
