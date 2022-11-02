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
      res.setHeader('Content-Type', 'application/json')

      const { authorization } = req.headers

      if (authorization) {
        const token = authorization.match(/^Bearer\s(\S+)/)?.[1]
        if (token && users[token]) {
          res.statusCode = 200
          res.end(JSON.stringify(users[token]))
          return
        }
      }

      res.statusCode = 401
      res.end(
        JSON.stringify({
          code: 'TOKEN_INVALID',
          message: '令牌无效'
        })
      )
    }
  }
] as MockMethod[]
