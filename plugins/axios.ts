import { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { getSessionInfo } from '~/http/auth'

export default function ({ $axios, redirect } : { $axios: AxiosInstance, redirect: any}) {
  $axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
    // Do something with the request config
    const { sessionId } = (await getSessionInfo()).body
    try {
      if (sessionId === 'test') {
        console.log('allow login')
      } else {
        config.url?.includes('/login') || redirect('/login')
        throw new Error('do not allow login')
      }
    } catch (err) {
      console.log(err)
    }
    return config
  })

  $axios.interceptors.response.use(
    (response: AxiosResponse) => {
      // Do something with the response data
      console.log('response, intercepted')
      return response
    },
    (error: AxiosError) => {
      // Do something with the response error
      console.log('error, intercepted')
      return Promise.reject(error)
    }
  )
}
