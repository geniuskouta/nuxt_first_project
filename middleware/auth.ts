import { Context } from '@nuxt/types'
import { getSessionInfo } from '~/http/auth'

export default async ({ redirect }: Context) => {
  const { sessionId } = await getSessionInfo()
  if (sessionId === 'test') {
    console.log('allow login')
  } else {
    redirect('/login')
  }
}
