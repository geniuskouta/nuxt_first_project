// Load the AWS SDK
import { AssumeRoleCommand, AssumeRoleCommandInput, STSClient } from '@aws-sdk/client-sts'

const config = {
  region: process.env.AWS_REGION || '',
  credentials: {
    accessKeyId: process.env.AWS_ACCESSKEYID || '',
    secretAccessKey: process.env.AWS_SECRETACCESSKEY || ''
  }
}

// Create a singleton instance of the STS client
let stsClient: STSClient
export const getSTSClient = () => {
  if (!stsClient) {
    stsClient = new STSClient(config)
  }
  return stsClient
}

export const createAssumeRoleCommand = (params: AssumeRoleCommandInput) => {
  return new AssumeRoleCommand(params)
}
