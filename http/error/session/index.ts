import { AxiosError } from 'axios'

const handleError = (statusCode: number, redirect: any): boolean => {
  switch (statusCode) {
    case 401:
      // do something
      redirect('/login')
      console.log('session expired')
      break
    case 500:
      redirect('/login')
      console.log('no session')
      break
    default:
  }
  return false
}

export const errorHandler = (axiosError: AxiosError, redirect: any): boolean => {
  const url = axiosError?.response?.config.url || ''
  const needToRun = url.includes('/session')
  if (needToRun) {
    const statusCode = axiosError.response?.status
    return handleError(statusCode ?? 0, redirect)
  }
  return true
}
