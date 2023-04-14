import { urlencoded, json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger, { LOGGER_NAME } from '../../logger'

export const apiCommon = ({ routerPath } : { routerPath : string}) => [
  logger(LOGGER_NAME.BFF, routerPath),
  cors({ origin: '*', credentials: true }),
  json(),
  urlencoded({ extended: true }),
  cookieParser()
]
