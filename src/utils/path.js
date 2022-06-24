const whiteList = ['/login', '/import', '/404', '/401']

export const isTags = (path) => {
  return !whiteList.includes(path)
}
