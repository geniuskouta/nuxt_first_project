import { getLambdaClient, createLambdaCommand } from '~/cloud/lambda'

type SessionInfo = { sessionId: string }

type SessionResponse = {
  status: number
  headers: any
  body: SessionInfo
}

export const getSessionInfo = async (): Promise<SessionResponse> => {
  const params = {
    FunctionName: 'dev-get-usersession'
  }

  const lambda = await getLambdaClient()
  const invokeCommand = createLambdaCommand(params)
  // Invoke the Lambda function
  const response = await lambda.send(invokeCommand)
  return JSON.parse(decode(response.Payload as unknown as string || '')) as SessionResponse
}

function decode (uint8arrData: string) {
  return btoa(uint8arrData)
}
