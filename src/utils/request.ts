import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'
import type { AxiosInstance } from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  const userStore = useUserStore()
  if (userStore.token) {
    config.headers = {
      Authorization: `Bearer ${userStore.token}`,
      ...config.headers
    }
  }
  return config
})

service.interceptors.response.use(
  response => response.data,
  error => {
    const { response, message } = error

    if (response && response.data) {
      // token expired
      if (response.status === 401 && response.data.code === 'TOKEN_INVALID') {
        useUserStore().clearToken()
        location.reload()
      }

      const errorMsg = response.data.message || 'Error'
      ElMessage.error(errorMsg)

      return Promise.reject(new Error(errorMsg))
    }

    ElMessage.error(message)
    return Promise.reject(error)
  }
)

export default service
