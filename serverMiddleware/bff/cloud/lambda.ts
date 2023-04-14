// Load the AWS SDK
import { InvokeCommand, InvokeCommandInput, LambdaClient } from '@aws-sdk/client-lambda'
import { createAssumeRoleCommand, getSTSClient } from './sts'

const config = {
  region: process.env.AWS_REGION || '',
  httpOptions: {
    withCredentials: true
  }
}

const assumeRoleParams = {
  RoleArn: process.env.AWS_ROLE || '',
  RoleSessionName: `session-${Date.now()}`, // should be a unique session name
  DurationSeconds: 900
}

// Create a singleton instance of the Lambda client
let lambdaClient: LambdaClient

export const getLambdaClient = async () => {
  if (!lambdaClient) {
    const stsClient = getSTSClient()
    const command = createAssumeRoleCommand(assumeRoleParams)
    let credentials
    try {
      await stsClient.send(command).then((data) => {
        credentials = {
          accessKeyId: data.Credentials?.AccessKeyId || '',
          secretAccessKey: data.Credentials?.SecretAccessKey || '',
          sessionToken: data.Credentials?.SessionToken || ''
        }
      })
    } catch (err) {
      console.log(err)
    }

    lambdaClient = new LambdaClient({ ...config, credentials })
  }
  return lambdaClient
}

export const createLambdaCommand = (params: InvokeCommandInput) => {
  return new InvokeCommand(params)
}
