import { Context } from '@nuxt/types'

export default async ({ $axios }: Context) => {
  await $axios.get('/api/session')
}
