import { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { errorHandler } from '~/http/error'

export default function ({ $axios, redirect } : { $axios: AxiosInstance, redirect: any}) {
  $axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // Do something with the request config
    console.log('request intercepted')
    return config
  })

  $axios.interceptors.response.use(
    (response: AxiosResponse) => {
      // Do something with the response data
      if (response.config.url?.includes('/login')) {
        redirect('/')
      }
      console.log('response, intercepted')
      return response
    },
    (error: AxiosError) => {
      // Do something with the response error
      const isErrorHandled = errorHandler(error, redirect)
      if (isErrorHandled) {
        return Promise.resolve()
      }
      return Promise.reject(error)
    }
  )
}
