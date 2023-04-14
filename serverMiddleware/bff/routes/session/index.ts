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

router.get('/', async (req: express.Request, res: express.Response): Promise<any> => {
  try {
    const params = {
      FunctionName: 'dev-get-usersession',
      Payload: Buffer.from(
        JSON.stringify({
          sessionId: req.cookies.sessionId ||
          ''
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

    for (const headerKey in response.headers) {
      res.setHeader(headerKey, response.headers[headerKey])
    }

    // session expired
    if (!response.body.isActive) {
      return res.status(401).send(response.body)
    }
    // session active
    return res.send(response.body)
  } catch (err) {
    return res.status(500).send(err)
  }
})

function decode (uint8arrData: Uint8Array) {
  return new TextDecoder('utf-8').decode(uint8arrData)
}

export default router
