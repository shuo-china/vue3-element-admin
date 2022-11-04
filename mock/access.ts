import type { MockMethod } from 'vite-plugin-mock'
import { response } from './utils'

const tokens = {
  admin: 'admin-token',
  editor: 'editor-token'
}

export default [
  {
    url: '/api/login',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqBody: any = ''
      await new Promise(resolve => {
        req.on('data', chunk => {
          reqBody += chunk
        })
        req.on('end', () => {
          reqBody = JSON.parse(reqBody)
          resolve(undefined)
        })
      })

      const token = tokens[reqBody.username]

      if (token) {
        response(res, 201, {
          access_token: token,
          token_type: 'Bearer',
          expires_in: 60 * 60 * 24
        })
      } else {
        response(res, 403, {
          code: 'LOGIN_FAIL',
          message: '用户名或密码不正确'
        })
      }
    }
  },
  {
    url: '/api/expired',
    method: 'get',
    statusCode: 401,
    response: {
      code: 'TOKEN_INVALID',
      message: 'Token已过期'
    }
  }
] as MockMethod[]
