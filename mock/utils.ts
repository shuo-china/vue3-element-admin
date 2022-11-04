export function response(res, statusCode: number, data: Record<string, any>) {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = statusCode
  res.end(JSON.stringify(data))
}

export function getToken(req) {
  const { authorization } = req.headers

  if (authorization) {
    const token = authorization.match(/^Bearer\s(\S+)/)?.[1]
    if (token) {
      return token
    }
  }

  return ''
}
