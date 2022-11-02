import request from '@/utils/request'

export interface LoginData {
  username: string
  password: string
}

interface LoginResult {
  access_token: string
}

export function login(data: LoginData) {
  return request<LoginResult>({
    url: '/login',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function expired() {
  return request({
    url: '/expired',
    method: 'get'
  })
}
