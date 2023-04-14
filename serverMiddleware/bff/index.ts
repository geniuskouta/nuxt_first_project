import express from 'express'

import sessionRoutes from './routes/session'
import loginRoutes from './routes/login'
import { apiCommon } from './middleware/apiCommon'

const app = express()

app.use('/session', apiCommon({ routerPath: '/session' }), sessionRoutes)
app.use('/login', apiCommon({ routerPath: '/login' }), loginRoutes)

app.listen(5000, () => {
  console.log('BFF listening on port 5000!')
})

export default app
