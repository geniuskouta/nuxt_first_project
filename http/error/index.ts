import { AxiosError } from 'axios'
import { errorHandler as sessionErrorHandler } from './session'

export const errorHandler = (axiosError: AxiosError, redirect: any) => {
  return !sessionErrorHandler(axiosError, redirect)
}
