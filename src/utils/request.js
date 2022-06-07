import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { isCheckTimeout } from './auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 添加 icode
    config.headers.icode = '5E8D9FB0A135F7B6'
    // 添加token
    if (store.getters.token) {
      if (isCheckTimeout()) {
        store.dispatch('user/logout')
        return Promise.reject(new Error('token失效'))
      }
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    // 必须返回 config
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    if (err.response && err.response.data && err.response.data.code === 401) {
      store.dispatch('user/logout')
    }
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

export default service
