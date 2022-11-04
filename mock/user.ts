import { getToken, response } from './utils'
import type { MockMethod } from 'vite-plugin-mock'

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

export default [
  {
    url: '/api/user/info',
    method: 'get',
    rawResponse: (req, res) => {
      const token = getToken(req)

      if (token && users[token]) {
        response(res, 200, users[token])
        return
      }

      response(res, 401, {
        code: 'TOKEN_INVALID',
        message: '令牌无效'
      })
    }
  }
] as MockMethod[]
