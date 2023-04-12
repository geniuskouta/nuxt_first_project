import { Context } from '@nuxt/types'
import { getSessionInfo } from '~/http/auth'

export default async ({ redirect }: Context) => {
  // const { sessionId } = (await getSessionInfo()).body
  console.log((await getSessionInfo()))
  const sessionId = 'test'
  if (sessionId === 'test') {
    console.log('allow login')
  } else {
    redirect('/login')
  }
}
