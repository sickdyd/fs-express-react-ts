import express from 'express'
import cors from 'cors'
import logger from 'morgan'

import routes from '@src/startup/routes'

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

routes(app)

export default app
