import { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'

export default function ({ $axios } : { $axios: AxiosInstance}) {
  $axios.interceptors.request.use((config: AxiosRequestConfig) => {
    // Do something with the request config
    console.log('request, intercepted')

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
