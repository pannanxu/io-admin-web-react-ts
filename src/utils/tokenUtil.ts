const TOKEN_KEY = 'token'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, 'Bearer ' + token)

export const removeToken = () => localStorage.removeItem(TOKEN_KEY)

export const hasToken = (): boolean => {
  let token = getToken()
  return undefined !== token && null !== token && '' !== token
}
