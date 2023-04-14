import { TextDecoder } from 'text-encoding'
import express, { Router } from 'express'
import { getLambdaClient, createLambdaCommand } from '../../cloud/lambda'

const router = Router()

type SessionInfo = { sessionId: string; isActive: boolean }

type SessionResponse = {
  status: number
  headers: any
  body: SessionInfo
}

router.post('/', async (req: express.Request, res: express.Response): Promise<any> => {
  const userInfo = {
    email: 'abc@example.com',
    password: 'moon',
    id: '2',
    name: 'kochan'
  }

  const valid = req.body.email === userInfo.email && req.body.password === userInfo.password

  // login logic
  if (!valid) {
    return res.status(401).send()
  }

  try {
    const params = {
      FunctionName: 'dev-create-usersession',
      Payload: Buffer.from(
        JSON.stringify({
          id: userInfo.id ||
          '',
          name: userInfo.name || ''
        })
      ),
      withCredentials: true
    }

    const lambda = await getLambdaClient()
    const invokeCommand = createLambdaCommand(params)
    // Invoke the Lambda function
    const response = await lambda.send(invokeCommand).then((data) => {
      return JSON.parse(decode(data.Payload || new Uint8Array(1)))
    }) as SessionResponse

    // seession active
    for (const headerKey in response.headers) {
      res.setHeader(headerKey, response.headers[headerKey])
    }
    return res.send(response.body)
  } catch (err) {
    return res.status(500).send(err)
  }
})

function decode (uint8arrData: Uint8Array) {
  return new TextDecoder('utf-8').decode(uint8arrData)
}

export default router
