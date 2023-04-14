import express from 'express'

export enum LOGGER_NAME {
  PROXY = 'PROXY_SERVER',
  BFF = 'BFF_SERVER'
}

type LogMessage = {
  name: LOGGER_NAME,
  method: string,
  url: string,
  status?: number
}

const createLogMessage = ({ name, method, url, status } : LogMessage) => {
  if (status) {
    return name + `: ${method} ${url} - ${status}`
  }

  return name + `: ${method} ${url}`
}

const logger = (name: LOGGER_NAME, routerPath?: string) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const url = routerPath ? routerPath + req.url : req.url
    console.log('[START] ', createLogMessage({ name, method: req.method, url }))
    res.on('finish', () => {
      console.log('[ END ] ', createLogMessage({ name, method: req.method, url, status: res.statusCode }))
    })
    next()
  }
}

export default logger
