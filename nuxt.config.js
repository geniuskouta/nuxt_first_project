
import logger, { LOGGER_NAME } from './serverMiddleware/logger'
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  debug: true,
  env: {
    AWS_ROLE: process.env.AWS_ROLE,
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESSKEYID: process.env.AWS_ACCESSKEYID,
    AWS_SECRETACCESSKEY: process.env.AWS_SECRETACCESSKEY
  },
  head: {
    title: 'nuxt_first_project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    { path: '~/components/atoms/', extensions: ['vue'] },
    { path: '~/components/molecules/', extensions: ['vue'] },
    { path: '~/components/templates/', extensions: ['vue'] }
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/proxy'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    proxy: true, // Can be also an object with default options
    retry: false,
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  },

  proxy: {
    '/api/': {
      target: 'http://localhost:5000',
      pathRewrite: { '^/api/': '' }
    },
    'https://': 'https://'
  },

  serverMiddleware: [
    logger(LOGGER_NAME.PROXY),
    '~/serverMiddleware/bff'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/@aws-sdk/]
  }
}
